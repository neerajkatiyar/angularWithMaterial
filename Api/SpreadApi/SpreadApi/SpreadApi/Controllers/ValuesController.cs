using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SpreadCommon.Filter;
using SpreadService.CommonDataService;
using MongoDB.Bson;
using Microsoft.AspNetCore.Authorization;

namespace SpreadApi.Controllers
{
    [Authorize]
    public class ValuesController : SpreadBaseController
    {
        private readonly ICommonDataService _commonDataService;
        public ValuesController(ICommonDataService commonDataService)
        {
            _commonDataService = commonDataService;
        }
        // GET api/values
        [HttpGet("rr")]
        [HttpGet("abc/abc")]
        [HttpPost("tt/tt")]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<dynamic>> Get(string id)
        {
            //var t =  Newtonsoft.Json.JsonConvert.DeserializeObject<dynamic>("{name:''}");
            //Example ID : 5ca8dff2dbd2cba7a7482dec
            CommonDataFilter filter = new CommonDataFilter()
            {
                DatabaseName = "SpreadCommonDb",
                CollectionName = "Users",
                Id = ObjectId.Parse(id)
            };
            return await _commonDataService.FindByIdAsync(filter);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
