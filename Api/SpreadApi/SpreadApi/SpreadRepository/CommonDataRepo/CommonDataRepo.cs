using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Driver;
using SpreadCommon.Filter;
using SpreadRepository.DataContext;
using System;
using System.Collections.Generic;
using System.Text;

namespace SpreadRepository.CommonDataRepo
{
    public class CommonDataRepo : ICommonDataRepo
    {
        public IEnumerable<dynamic> List => throw new NotImplementedException();
        private ISpreadDataContext _spreadDataContext;
        public CommonDataRepo(ISpreadDataContext spreadDataContext)
        {
            this._spreadDataContext = spreadDataContext;
        }

        public void Add(dynamic entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(dynamic entity)
        {
            throw new NotImplementedException();
        }

        public dynamic FindById(CommonDataFilter cFilter)
        {
            JsonWriterSettings jsonFormatterSettings = new JsonWriterSettings() { OutputMode = JsonOutputMode.Strict };

            var filter = Builders<BsonDocument>.Filter.Eq("_id", cFilter.Id);
            var data = _spreadDataContext.GetDatabase(cFilter.DatabaseName).GetCollection<BsonDocument>(cFilter.CollectionName).Find(filter).FirstOrDefault();//.ToJson(jsonFormatterSettings);
            return data is null ? "" : data.ToJson(jsonFormatterSettings);
        }

        public void Update(dynamic entity)
        {
            throw new NotImplementedException();
        }
    }
}
