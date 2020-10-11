using backend.Models.VehiclesEntities;
using backend.Services.Vehicles;
using System;

namespace backend.Controllers
{
    public class VehicleController : BaseCRUDController<Vehicle, Guid>
    {
        public VehicleController(IVehicleService vehicleService) : base(vehicleService)
        { }
    }
}
