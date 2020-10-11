using backend.DTO.User;
using backend.Helpers;
using backend.Services.Authentication;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthService _userService;

        public AuthController(IAuthService userService)
        {
            _userService = userService;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] UserLoginDTO userParam)
        {
            try
            {
                var user = await _userService.Authenticate(userParam);

                if (user == null)
                    return BadRequest(new Message { MessageSource = "login", MessageText = "User not found" });

                return Ok(user);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public IActionResult GetProfile()
        {
            try
            {
               return Ok("asdasdas");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
