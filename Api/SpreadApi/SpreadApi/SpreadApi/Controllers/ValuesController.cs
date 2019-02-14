using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SpreadService.CommonDataService;

namespace SpreadApi.Controllers
{
    public class ValuesController : SpreadBaseController
    {
        private ICommonDataService _commonDataService;
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
        public ActionResult<string> Get(int id)
        {
            _commonDataService.FindById(id.ToString());

            //var client = new MongoClient("mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/?ssl=true&authSource=admin");
            //var database = client.GetDatabase("test");
            return "value";
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
