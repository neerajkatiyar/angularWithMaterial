using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SpreadApi.Models;
using SpreadCommon.Helper;

namespace SpreadApi.Controllers.Authentication
{
   // [Route("api/auth")]
    public class LoginController : SpreadBaseController
    {
        private IConfiguration _config;
        public LoginController(IConfiguration configuration)
        {
            this._config = configuration;  
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody]UserModel login)
        {
            IActionResult response = Unauthorized();
            var user = AuthenticateUser(login);

            if (user != null)
            {
                var tokenString = GenerateJSONWebToken(user);
                response = Ok(new { token = tokenString });
            }

            return response;
        }

        private string GenerateJSONWebToken(UserModel userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config[ConfigurationSettings.AppSettings_Jwt_Key]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config[ConfigurationSettings.AppSettings_Jwt_Issuer],
              _config[ConfigurationSettings.AppSettings_Jwt_Issuer],
              null,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private UserModel AuthenticateUser(UserModel login)
        {
            UserModel user = null;

            //Validate the User Credentials  
            //Demo Purpose, I have Passed HardCoded User Information  
            if (login.UserName == "nkatiyar")
            {
                user = new UserModel { UserName = "Neeraj Katiyar", EmailAddress = "nkatiyar@dxc.com" };
            }
            return user;
        }



    }
}