using backend.Models.UsersEntities;

namespace backend.Helpers.UserSettingsChange
{
    public interface IUserSettingsChange
    {
        void RunUserSettingsChnage(User userToChange);
    }
}
