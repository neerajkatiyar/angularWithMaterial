using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace SpreadApi.Controllers.Authentication
{
    [Route("api/auth")]
    [ApiController]
    public class LoginController : SpreadBaseController
    {
        private IConfiguration _config;
        public LoginController(IConfiguration configuration)
        {
            this._config = configuration;  
        }

       

    }
}