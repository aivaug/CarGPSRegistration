using backend.DTO.User;
using backend.Helpers;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace backend.Services.Authentication
{
    public class AuthService : IAuthService
    {
        private readonly AppSettings _appSettings;
        private DatabaseContext _context;

        public AuthService(IOptions<AppSettings> appSettings, DatabaseContext dbContext)
        {
            if (appSettings != null) _appSettings = appSettings.Value;
            _context = dbContext;
        }

        public async Task<UserTokenDTO> Authenticate(UserLoginDTO loginData)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == loginData.Email 
                                                                      && x.IsActive
                                                                      && !x.IsDeleted
                                                                      && x.Password == PasswordHelper.HashPassword(loginData.Password + _appSettings.Salt));

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString()),
                    new Claim(ClaimTypes.Role, user.Role)
                }),
                Expires = DateTime.UtcNow.AddDays(3),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return new UserTokenDTO
            {
                Token = tokenHandler.WriteToken(token),
                Role = user.Role
            };
        }
    }
}
