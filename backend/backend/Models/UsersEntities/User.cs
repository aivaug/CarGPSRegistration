using backend.Helpers.UserSettingsChange;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace backend.Models.UsersEntities
{
    public class User : BaseEntity<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Required, DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [JsonIgnore]
        public string Password { get; set; }
        public string Role { get; set; } = UsersEntities.Role.User;
        [JsonIgnore]
        public string VerificationCode { get; set; } = Guid.NewGuid().ToString();
        public bool IsActive { get; set; } = true;
        [JsonIgnore]
        public bool IsVerificationSent { get; set; }
        [JsonIgnore]
        public bool VerificationValid { get; set; } = true;

        [NotMapped]
        public IUserSettingsChange Changes { get; set; }
        public void RunChanges()
        {
            Changes.RunUserSettingsChnage(this);
        }
    }
}
