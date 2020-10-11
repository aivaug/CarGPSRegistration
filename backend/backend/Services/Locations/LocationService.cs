using backend.DTO.Location;
using backend.Models;
using backend.Models.VehiclesEntities;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services.Locations
{
    public class LocationService : ILocationService
    {
        private DatabaseContext _context;

        public LocationService(DatabaseContext dbContext)
        {
            _context = dbContext;
        }
        public async Task<LocationDTO> AddLoaction(LocationDTO Obj, string VehicleId, string APIKey)
        {
            Location location = new Location()
            {
                Latitude = Obj.Latitude,
                Longitude = Obj.Longitude,
                Speed = Obj.Speed,
                CreatedBy = _context.APIKeys.FirstOrDefault(x => x.Key == APIKey),
                Vehicle = _context.Vehicles.FirstOrDefault(x => x.Id == new Guid(VehicleId))
            };
            _context.Locations.Add(location);
            await _context.SaveChangesAsync();
            return Obj;
        }
    }
}
