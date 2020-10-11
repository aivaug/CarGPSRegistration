using backend.Models;
using backend.Models.AccessControl;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services.APIKeys
{
    public class APIKeyService : IAPIKeyService
    {
        private DatabaseContext _context;

        public APIKeyService(DatabaseContext dbContext)
        {
            _context = dbContext;
        }

        public async Task<APIKey> APIKeyActivation(int APIKeyId, bool APIKeyActive)
        {
            APIKey key = _context.APIKeys.FirstOrDefault(x => x.Id == APIKeyId);
            if (key != null)
            {
                key.IsActive = APIKeyActive;
                await _context.SaveChangesAsync();
                return key;
            }
            return null;
        }

        public bool APIKeyIsValid(string APIKey)
        {
            return _context.APIKeys.Any(x => x.IsActive
                                            && !x.IsDeleted
                                            && x.ValidTo > DateTime.Now
                                       );
        }

        public async Task<APIKey> Create(APIKey obj, int UserId)
        {
            APIKey key = new APIKey()
            {
                Key = obj.Key,
                ValidTo = obj.ValidTo,
                CreatedBy = _context.Users.FirstOrDefault(x => x.Id == UserId)
            };
            _context.APIKeys.Add(key);
            await _context.SaveChangesAsync();
            return key;
        }

        public async Task<APIKey> Delete(int id)
        {
            APIKey key = _context.APIKeys.FirstOrDefault(x => x.Id == id);
            if (key != null)
            {
                key.IsDeleted = true;
                await _context.SaveChangesAsync();
                return key;
            }
            return null;
        }

        public async Task<List<APIKey>> GetAll()
        {
            return await _context.APIKeys.Where(x => !x.IsDeleted).ToListAsync();
        }

        public async Task<APIKey> GetById(int id)
        {
            return await _context.APIKeys.FirstOrDefaultAsync(x => !x.IsDeleted && x.Id == id);
        }

        public async Task<APIKey> Update(APIKey obj, int id)
        {
            APIKey key = _context.APIKeys.FirstOrDefault(x => x.Id == id);
            if (key != null)
            {
                key.Key = obj.Key;
                key.ValidTo = obj.ValidTo;
                await _context.SaveChangesAsync();
                return key;
            }
            return null;
        }
    }
}
