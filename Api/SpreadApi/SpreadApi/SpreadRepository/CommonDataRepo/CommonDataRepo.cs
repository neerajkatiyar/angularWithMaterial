using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Driver;
using SpreadCommon.Filter;
using SpreadRepository.DataContext;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using SpreadCommon.Models;

namespace SpreadRepository.CommonDataRepo
{
    public class CommonDataRepo : ICommonDataRepo
    {
        //public IEnumerable<dynamic> List => throw new NotImplementedException();
        private readonly ISpreadDataContext _spreadDataContext;
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

        public Task<BsonDocument> FindByIdAsync(CommonDataFilter filter)
        {
            return _spreadDataContext.GetDatabase(filter.DatabaseName)
                .GetCollection<BsonDocument>(filter.CollectionName)
                .Find(
                    Builders<BsonDocument>.Filter.Eq("_id", filter.Id) //filter ~we can change here as per need~
                )
                .FirstOrDefaultAsync();
        }

        public void Update(dynamic entity)
        {
            throw new NotImplementedException();
        }

        public async Task<BsonDocumentList> GetListAsync(CommonDataFilter filter)
        {
            BsonDocumentList bsonDocList = new BsonDocumentList()
            {
                Documents = new List<BsonDocument>()
            };
            var bFilter = Builders<BsonDocument>.Filter.Lt("", 3) & Builders<BsonDocument>.Filter.Lt("", 3) & Builders<BsonDocument>.Filter.Lt("", 3) | (Builders<BsonDocument>.Filter.Lt("", 3));
            if (true)
            {
                bFilter = bFilter & Builders<BsonDocument>.Filter.Lt("", 3);
            }

            bsonDocList.TotalRecords = await _spreadDataContext
                .GetDatabase(filter.DatabaseName)
                .GetCollection<BsonDocument>(filter.CollectionName)
                .Find(bFilter)
                .CountDocumentsAsync();

            var sortFilter = Builders<BsonDocument>.Sort.Descending("LastName").Ascending("FirstName");

            await _spreadDataContext.GetDatabase(filter.DatabaseName)
           .GetCollection<BsonDocument>(filter.CollectionName)
           .Find(bFilter)
           .Skip((filter.PageNo - 1) * filter.PageSize)
           .Limit(filter.PageSize)
           .Sort(sortFilter)
           .ForEachAsync(doc =>
           {
               ((List<BsonDocument>)bsonDocList.Documents).Add(doc);
           });


            return bsonDocList;
        }
    }
}

