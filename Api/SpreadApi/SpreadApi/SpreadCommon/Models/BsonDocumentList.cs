using System;
using System.Collections.Generic;
using System.Text;
using MongoDB.Bson;
namespace SpreadCommon.Models
{
    public class BsonDocumentList
    {
        public IEnumerable<BsonDocument> Documents { get; set; }
        public long TotalRecords { get; set; }
    }
}
