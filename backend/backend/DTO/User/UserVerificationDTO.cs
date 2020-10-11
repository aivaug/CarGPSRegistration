using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DTO.User
{
    public class UserVerificationDTO
    {
        [Required]
        public string Password { get; set; }
    }
}
