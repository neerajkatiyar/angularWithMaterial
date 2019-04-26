using System;
using System.Collections.Generic;
using System.Text;

namespace SpreadService.DbLocatorService
{
    public interface IDbLocatorService
    {
        string DbServer { get; set; }
        string DbName { get; set; }
        string CollectionName { get; set; }
        string RequestIP {  get; set; }
        void LocateDbInfo(SpreadCommon.Models.URIInfo uri);
    }
}
