using backend.DTO.Location;
using System.Threading.Tasks;

namespace backend.Services.Locations
{
    public interface ILocationService
    {
        Task<LocationDTO> AddLoaction(LocationDTO Obj, string VehicleId, string APIKey);
    }
}
