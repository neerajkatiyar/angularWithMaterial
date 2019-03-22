using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Text;

namespace SpreadCommon.Filter
{
    public class CommonDataFilter
    {
        public string DatabaseName { get; set; }
        public string CollectionName { get; set; }
        public ObjectId Id { get; set; }
        public ExpandoObject AdditionalInfo { get; set; }
    }
}
