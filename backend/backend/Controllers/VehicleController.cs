using backend.Models.VehiclesEntities;
using backend.Services.Vehicles;
using Microsoft.AspNetCore.Authorization;
using System;

namespace backend.Controllers
{
    [Authorize]
    public class VehicleController : BaseCRUDController<Vehicle, Guid>
    {
        public VehicleController(IVehicleService vehicleService) : base(vehicleService)
        { }
    }
}
