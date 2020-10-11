using backend.Models.AccessControl;
using backend.Services.APIKeys;

namespace backend.Controllers
{
    public class APIKeyController : BaseCRUDController<APIKey, int>
    {
        public APIKeyController(IAPIKeyService apiKeyService) : base(apiKeyService)
        { }
    }
}
