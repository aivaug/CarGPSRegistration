using System;
using System.ComponentModel.DataAnnotations;
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
        public string VerificationCode { get; set; } = new Guid().ToString();
        public bool IsActive { get; set; } = true;
        public bool IsVerificationSent { get; set; }
    }
}
