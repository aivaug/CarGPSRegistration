using backend.DTO.User;
using backend.Models.UsersEntities;
using backend.Services.Interfaces;
using System.Threading.Tasks;

namespace backend.Services.Users
{
    public interface IUserService : IBaseService<User, int>
    {
        Task<User> SetActiveStatus(int UserId, bool IsActive);
        Task<bool> EmailAlreadyExists(string email);
        Task<User> UpdateSettings(UserSettingsChangeDTO setting, int id);
    }
}
