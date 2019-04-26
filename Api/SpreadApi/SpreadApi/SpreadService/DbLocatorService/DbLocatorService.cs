using System;
using System.Collections.Generic;
using System.Text;
using SpreadCommon.Models;

namespace SpreadService.DbLocatorService
{
    public class DbLocatorService : IDbLocatorService
    {
        public string DbServer { get; set; }
        public string DbName { get; set; }
        public string CollectionName { get; set; }
        public string RequestIP { get; set; }

        public void LocateDbInfo(URIInfo uri)
        {

        }
    }
}
