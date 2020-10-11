using backend.Models.AccessControl;
using backend.Services.Interfaces;
using System.Threading.Tasks;

namespace backend.Services.APIKeys
{
    public interface IAPIKeyService : IBaseService<APIKey, int>
    {
        Task<APIKey> APIKeyActivation(int APIKeyId, bool APIKeyActive);
        bool APIKeyIsValid(string APIKey);
    }
}
