using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpreadApi.Filters;

namespace SpreadApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ServiceFilter(typeof(JsonResponseFilterWithDi))]
    public class SpreadBaseController : ControllerBase
    {
    }
}