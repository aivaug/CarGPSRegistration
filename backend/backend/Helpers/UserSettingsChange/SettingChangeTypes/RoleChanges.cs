using backend.Models.UsersEntities;

namespace backend.Helpers.UserSettingsChange.SettingChangeTypes
{
    public class RoleChanges : IUserSettingsChange
    {
        public void RunUserSettingsChnage(User userToChange)
        {
            userToChange.Role = userToChange.Role == Role.Admin ? Role.User : Role.Admin;
        }
    }
}
