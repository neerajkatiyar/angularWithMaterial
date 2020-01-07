using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using SpreadApi.Filters;
using SpreadCommon.Filter;
using SpreadService.CommonDataService;

namespace SpreadApi.Controllers.View
{
    [Route("api/vx")]
    public class ViewDataController : SpreadBaseController
    {
        private readonly ICommonDataService _commonDataService;
        public ViewDataController(ICommonDataService commonDataService)
        {
            _commonDataService = commonDataService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<dynamic>> Get(string id)
        {
            //var t =  Newtonsoft.Json.JsonConvert.DeserializeObject<dynamic>("{name:''}");
            var AdditionalInfo = new System.Dynamic.ExpandoObject();
            AdditionalInfo.TryAdd("ViewId", 0);

            CommonDataFilter cfilter = new CommonDataFilter()
            {
                DatabaseName = "SpreadViewDb",
                CollectionName = "Pages",
                Id = ObjectId.Parse(id),
                AdditionalInfo = AdditionalInfo
            };
             return await _commonDataService.FindByIdAsync(cfilter);
        }

        [HttpGet("navigation/main-menu")]
        public async Task<ActionResult<dynamic>> Get()
        {
            var AdditionalInfo = new System.Dynamic.ExpandoObject();
            AdditionalInfo.TryAdd("ViewId", 0);
           
            CommonDataFilter cfilter = new CommonDataFilter()
            {
                DatabaseName = "SpreadViewDb",
                CollectionName = "Pages",
               // Id = ObjectId.Parse(id),
                AdditionalInfo = AdditionalInfo
            };
            return await _commonDataService.FindByIdAsync(cfilter);
        }

    }
}