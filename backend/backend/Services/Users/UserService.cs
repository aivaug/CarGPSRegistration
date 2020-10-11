using backend.Helpers;
using backend.Models;
using backend.Models.UsersEntities;
using Hangfire;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services.Users
{
    public class UserService : IUserService
    {
        private DatabaseContext _context;

        public UserService(DatabaseContext dbContext)
        {
            _context = dbContext;
        }

        public async Task<User> Create(User obj, int UserId)
        {
            User user = new User()
            {
                Email = obj.Email
            };
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            BackgroundJob.Enqueue(() => EmailSending.SendVerificationEmails(user));
            return user;
        }

        public async Task<User> Delete(int id)
        {
            User user = _context.Users.FirstOrDefault(x => x.Id == id);
            if (user != null)
            {
                user.IsDeleted = true;
                await _context.SaveChangesAsync();
                return user;
            }
            return null;
        }

        public async Task<bool> EmailAlreadyExists(string email)
        {
            return await _context.Users.AnyAsync(x => x.Email != email);
        }

        public async Task<List<User>> GetAll()
        {
            return await _context.Users.Where(x => !x.IsDeleted).ToListAsync();
        }

        public async Task<User> GetById(int id)
        {
            return await _context.Users.FirstOrDefaultAsync(x => !x.IsDeleted && x.Id == id);
        }

        public async Task<User> SetActiveStatus(int UserId, bool IsActive)
        {
            User user = _context.Users.FirstOrDefault(x => x.Id == UserId);
            if (user != null)
            {
                user.IsActive = IsActive;
                await _context.SaveChangesAsync();
                return user;
            }
            return null;
        }

        public async Task<User> Update(User obj, int id)
        {
            User user = _context.Users.FirstOrDefault(x => x.Id == id);
            if (user != null)
            {
                user.FirstName = obj.FirstName;
                user.LastName = obj.LastName;
                if(!string.IsNullOrEmpty(obj.Password))
                {
                    user.Password = PasswordHelper.HashPassword(obj.Password + "99f6c330-c7c5-410f-b257-54c85745191c");
                }
                await _context.SaveChangesAsync();
                return user;
            }
            return null;
        }
    }
}
