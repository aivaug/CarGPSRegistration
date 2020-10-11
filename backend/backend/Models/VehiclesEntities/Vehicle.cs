using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models.VehiclesEntities
{
    public class Vehicle : BaseEntity<Guid>
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public override Guid Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string YearManufactured { get; set; }
        public virtual ICollection<Location> Locations { get; set; }
    }
}
