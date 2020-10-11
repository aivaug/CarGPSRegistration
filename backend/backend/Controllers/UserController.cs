using backend.Models.UsersEntities;
using backend.Services.Users;

namespace backend.Controllers
{
    public class UserController : BaseCRUDController<User, int>
    {
        public UserController(IUserService userService) : base(userService)
        { }
    }
}
