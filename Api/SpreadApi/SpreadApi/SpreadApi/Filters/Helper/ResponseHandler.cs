using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Bson.IO;

namespace SpreadApi.Filters.Helper
{
    public class ResponseHandler : IResponseHandler
    {
        public void HandleActionResult(Microsoft.AspNetCore.Mvc.ObjectResult result)
        {
            JsonWriterSettings jsonFormatterSettings = new JsonWriterSettings() { OutputMode = JsonOutputMode.Strict };

            if (result!= null && result.Value != null && typeof(BsonDocument) == result.Value.GetType())
            {
                result.Value = (result.Value as BsonDocument).ToJson(jsonFormatterSettings);
            }
        }
    }
}
