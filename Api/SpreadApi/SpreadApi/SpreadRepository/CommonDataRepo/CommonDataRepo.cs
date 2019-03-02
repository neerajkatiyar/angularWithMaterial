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
            this._userDataContext = userDataContext.GetDatabase("SpreadCommonDb");  //GetDatabase("SpreadDb");
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
            //var map = new BsonDocument() { }.

            BsonArray dataFields = new BsonArray { new BsonDocument {
                                     { "ID" , ObjectId.GenerateNewId()}, { "NAME", "ID"}, {"TYPE", "Text"} } };

            BsonDocument nested = new BsonDocument {
                                                    { "name", "John Doe" },
                                                    { "fields", dataFields },
                                                    { "address", new BsonDocument {
                                                            { "street", "123 Main St." },
                                                            { "city", "Madison" },
                                                            { "state", "WI" },
                                                            { "zip", 53711}
                                                        }
                                                    }
                                                };
            var bson = new BsonDocument();
            //nested.GetElement(0).get BsonType.Array
                BsonDocument.TryParse("{" +
                    "name:'neeraj'," +
                    "age:25," +
                    "city:'London',address:[{pin:454534,hm:'dfd d33'}]" +
                    "}", out bson);

            var bson2 = new BsonDocument() { };

            foreach (var item in nested.Elements)
            {
                Console.WriteLine(item.Value.GetType());
            }
            //bson1.m


            return  _userDataContext.GetCollection<BsonDocument>("Users").Find(filter).FirstOrDefault().ToJson(jsonFormatterSettings);
        }

        public void Update(dynamic entity)
        {
            throw new NotImplementedException();
        }
    }
}
