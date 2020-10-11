using backend.Models.VehiclesEntities;
using backend.Services.Interfaces;
using System;

namespace backend.Services.Vehicles
{
    public interface IVehicleService : IBaseService<Vehicle, Guid>
    {
    }
}
