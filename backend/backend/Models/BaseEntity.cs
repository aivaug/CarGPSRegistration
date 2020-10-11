using backend.Models.UsersEntities;
using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace backend.Models
{
    public class BaseEntity<T>
    {
        [Key]
        public virtual T Id { get; set; }
        [JsonIgnore]
        public DateTime CreatedDate
        {
            get; set;
        } = DateTime.Now;

        [JsonIgnore]
        public bool IsDeleted { get; set; }

        [JsonIgnore]
        public virtual User CreatedBy { get; set; }
    }
}