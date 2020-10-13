using backend.DTO.User;
using backend.Models.UsersEntities;
using backend.Services.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Authorize(Roles = Role.Admin)]
    public class UserController : BaseCRUDController<User, int>
    {
        public UserController(IUserService userService) : base(userService)
        { }

        [HttpPost]
        public override async Task<IActionResult> Create([FromBody] User obj)
        {
            try
            {
                bool emailExists = await (_service as IUserService).EmailAlreadyExists(obj.Email);
                if (!emailExists)
                {
                    var returnObj = await _service.Create(obj, int.Parse(User.Identity.Name));

                    if (returnObj == null)
                        return BadRequest(new { message = "Object not valid" });

                    return Ok(returnObj);
                }
                else
                {
                    return BadRequest(new { message = "Email already exists" });
                }

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("settings/{id}")]
        public async Task<IActionResult> Update([FromBody] UserSettingsChangeDTO obj, int id)
        {
            try
            {
                if (id <= 0) return BadRequest(new { message = "ID must be positive" });
                var returnObj = await (_service as IUserService).UpdateSettings(obj, id);

                if (returnObj == null)
                    return BadRequest(new { message = "Object not valid" });

                return Ok(await _service.GetAll());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
