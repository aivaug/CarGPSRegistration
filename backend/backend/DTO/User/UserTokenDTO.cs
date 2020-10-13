using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DTO.User
{
    public class UserTokenDTO
    {
        public string Token { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
    }
}
