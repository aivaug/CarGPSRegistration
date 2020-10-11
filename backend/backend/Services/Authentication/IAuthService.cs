using backend.DTO.User;
using System.Threading.Tasks;

namespace backend.Services.Authentication
{
    public interface IAuthService
    {
        Task<UserTokenDTO> Authenticate(UserLoginDTO loginData);
        bool VerificationIsValid(string key);
    }
}
