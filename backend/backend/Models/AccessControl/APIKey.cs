using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models.AccessControl
{
    public class APIKey : BaseEntity<int>
    {
        [Required]
        public string Key { get; set; }
        [Required]
        public DateTime ValidTo { get; set; }
        public bool IsActive { get; set; } = true;
    }
}
