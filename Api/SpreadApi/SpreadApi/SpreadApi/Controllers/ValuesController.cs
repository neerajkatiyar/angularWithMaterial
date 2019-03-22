using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SpreadCommon.Filter;
using SpreadService.CommonDataService;
using MongoDB.Bson;

namespace SpreadApi.Controllers
{
    public class ValuesController : SpreadBaseController
    {
        private readonly ICommonDataService _commonDataService;
        public ValuesController(ICommonDataService commonDataService)
        {
            _commonDataService = commonDataService;
        }
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<dynamic> Get(string id)
        {
            //var t =  Newtonsoft.Json.JsonConvert.DeserializeObject<dynamic>("{name:''}");
            CommonDataFilter filter = new CommonDataFilter()
            {
                DatabaseName = "SpreadCommonDb",
                CollectionName = "Users",
                Id = ObjectId.Parse(id)
            };
            return _commonDataService.FindById(filter);
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
