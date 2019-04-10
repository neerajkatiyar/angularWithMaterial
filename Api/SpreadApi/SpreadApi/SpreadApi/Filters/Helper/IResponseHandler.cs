using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpreadApi.Filters.Helper
{
    public interface IResponseHandler
    {
        void HandleActionResult(Microsoft.AspNetCore.Mvc.ObjectResult result);
        
    }
}
