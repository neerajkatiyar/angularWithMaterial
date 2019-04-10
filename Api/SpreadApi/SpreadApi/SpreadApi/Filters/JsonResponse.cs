using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using SpreadApi.Filters.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpreadApi.Filters
{
    public class JsonResponseFilterWithDi : IResultFilter
    {
        private ILogger _logger;
        private IResponseHandler _responseHandler;
        public JsonResponseFilterWithDi(ILoggerFactory loggerFactory, IResponseHandler responseHandler)
        {
            _logger = loggerFactory.CreateLogger<JsonResponseFilterWithDi>();
            _responseHandler = responseHandler;
        }

        public void OnResultExecuting(ResultExecutingContext context)
        {
            _responseHandler.HandleActionResult(context.Result as Microsoft.AspNetCore.Mvc.ObjectResult);
        }

        public void OnResultExecuted(ResultExecutedContext context)
        {
            // Can't add to headers here because response has already begun.
        }
    }
}
