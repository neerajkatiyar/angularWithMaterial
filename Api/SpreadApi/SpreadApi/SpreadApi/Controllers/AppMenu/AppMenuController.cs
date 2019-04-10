using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using SpreadCommon.Filter;
using SpreadService.CommonDataService;

namespace SpreadApi.Controllers.AppMenu
{
    [Route("api/vx/appMenu")]
    [ApiController]
    public class AppMenuController : SpreadBaseController
    {
        private readonly ICommonDataService _commonDataService;
        public AppMenuController(ICommonDataService commonDataService)
        {
            _commonDataService = commonDataService;
        }

        [HttpGet("{type}")]
        public async Task<ActionResult<dynamic>> Get(string type)
        {
            CommonDataFilter cfilter = new CommonDataFilter()
            {
                DatabaseName = "SpreadViewDb",
                CollectionName = "Menu",
                LoadAllDocumnets = true
            };
            return await _commonDataService.FindByIdAsync(cfilter);
        }

    }
}