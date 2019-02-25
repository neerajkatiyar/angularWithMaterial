using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Driver;
using SpreadRepository.DataContext;
using System;
using System.Collections.Generic;
using System.Text;

namespace SpreadRepository.CommonDataRepo
{
    public class CommonDataRepo : ICommonDataRepo
    {
        public IEnumerable<dynamic> List => throw new NotImplementedException();
        private IMongoDatabase _userDataContext;
        public CommonDataRepo(ISpreadDataContext userDataContext)
        {
            this._userDataContext = userDataContext.MongoContext;
        }

        public void Add(dynamic entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(dynamic entity)
        {
            throw new NotImplementedException();
        }

        public dynamic FindById(string Id)
        {
            JsonWriterSettings jsonFormatterSettings = new JsonWriterSettings() { OutputMode = JsonOutputMode.Strict };

            var filter = Builders<BsonDocument>.Filter.Eq("_id", ObjectId.Parse(Id));
            return  _userDataContext.GetCollection<BsonDocument>("Users").Find(filter).FirstOrDefault().ToJson(jsonFormatterSettings);
        }

        public void Update(dynamic entity)
        {
            throw new NotImplementedException();
        }
    }
}
