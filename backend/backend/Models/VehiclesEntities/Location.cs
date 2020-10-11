using backend.Models.AccessControl;
using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models.VehiclesEntities
{
    public class Location
    {
        [Key]
        public virtual int Id { get; set; }
        public DateTime CreatedDate
        {
            get; set;
        } = DateTime.Now;
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public int Speed { get; set; }
        public Vehicle Vehicle { get; set; }
        public APIKey CreatedBy { get; set; }
    }
}
