using backend.DTO.User;
using backend.Models.UsersEntities;
using System.Threading.Tasks;

namespace backend.Services.Authentication
{
    public interface IAuthService
    {
        Task<UserTokenDTO> Authenticate(UserLoginDTO loginData);
        bool VerificationIsValid(string key);
        Task<User> SetPassword(string key, string password);
    }
}
