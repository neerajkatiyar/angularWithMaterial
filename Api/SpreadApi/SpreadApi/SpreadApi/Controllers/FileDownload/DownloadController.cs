using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;

namespace SpreadApi.Controllers.FileDownload
{
   // [Route("download")]
    public class DownloadController : SpreadBaseController
    {
        private IHostingEnvironment _hostingEnvironment;
        public DownloadController( IHostingEnvironment hostingEnvironment)
        {
            this._hostingEnvironment = hostingEnvironment;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            //FileStream f = new FileStream(Path.Combine(_hostingEnvironment.WebRootPath, "/Assets/sample.pdf"),FileMode.Open);
            //StreamReader stream = new StreamReader(Path.Combine(_hostingEnvironment.WebRootPath, "/Assets/sample.pdf")); //await { { __get_stream_based_on_id_here__} }



            //if (stream == null)
            //    return NotFound(); // returns a NotFoundResult with Status404NotFound response.
            //f.Close();

            IFileProvider provider = new PhysicalFileProvider(@"D:\All\Angular6\angularWithMaterial\Api\SpreadApi\SpreadApi\SpreadApi\Assets");
            IFileInfo fileInfo = provider.GetFileInfo("sample.pdf");
            var readStream = fileInfo.CreateReadStream();
            HttpContext.Response.Headers.Add("file-name", "sample.pdf");
            HttpContext.Response.Headers.Add("Access-Control-Expose-Headers", "*");
            HttpContext.Response.OnStarting(state => {
                var httpContext = (HttpContext)state;
                httpContext.Response.Headers.Add("X-Response-Time-Milliseconds", "sample data");
                return Task.FromResult(0);
            }, HttpContext);


            return File(readStream, "application/octet-stream", "sample.pdf");

          //  return File(Path.Combine(_hostingEnvironment.ContentRootPath, "/Assets/sample.pdf"), "application/octet-stream"); // returns a FileStreamResult
        }
    }
}