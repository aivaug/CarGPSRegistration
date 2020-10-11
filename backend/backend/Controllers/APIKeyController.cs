using backend.Models.AccessControl;
using backend.Services.APIKeys;
using Microsoft.AspNetCore.Authorization;

namespace backend.Controllers
{
    [Authorize]
    public class APIKeyController : BaseCRUDController<APIKey, int>
    {
        public APIKeyController(IAPIKeyService apiKeyService) : base(apiKeyService)
        { }
    }
}
