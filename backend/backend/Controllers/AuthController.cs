﻿using backend.DTO.User;
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
        private IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] UserLoginDTO userParam)
        {
            try
            {
                var user = await _authService.Authenticate(userParam);

                if (user == null)
                    return BadRequest(new Message { MessageSource = "login", MessageText = "User not found" });

                return Ok(user);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("verify/{verificationKey}")]
        public async Task<IActionResult> Verify([FromBody] UserVerificationDTO verificationModel, string verificationKey)
        {
            try
            {
                if (_authService.VerificationIsValid(verificationKey))
                {
                    var user = await _authService.SetPassword(verificationKey, verificationModel.Password);

                    if (user == null)
                        return BadRequest("User not found");

                    return Ok(user);
                }
                else
                {
                    return BadRequest("Verification key not valid");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
