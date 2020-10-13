using backend.Models.UsersEntities;

namespace backend.Helpers.UserSettingsChange.SettingChangeTypes
{
    public class ActivationChanges : IUserSettingsChange
    {
        public void RunUserSettingsChnage(User userToChange)
        {
            userToChange.IsActive = !userToChange.IsActive;
        }
    }
}
