using backend.DTO.Location;
using backend.Services.APIKeys;
using backend.Services.Locations;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ILocationService _service;
        private readonly IAPIKeyService _apiKeyService;

        public LocationController(ILocationService service, IAPIKeyService apikeyService)
        {
            _service = service;
            _apiKeyService = apikeyService;
        }

        [HttpPost("{VehicleId}/{APIKey}")]
        public async Task<IActionResult> Create([FromBody] LocationDTO obj, string VehicleId, string APIKey)
        {
            try
            {
                if(_apiKeyService.APIKeyIsValid(APIKey))
                {
                    var LocationObj = await _service.AddLoaction(obj, VehicleId, APIKey);

                    if (LocationObj == null)
                        return BadRequest(new { message = "Vehicle not found" });

                    return Ok(LocationObj);
                } 
                else
                {
                    return BadRequest("API key not valid");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
