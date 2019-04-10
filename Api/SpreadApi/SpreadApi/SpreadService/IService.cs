using MongoDB.Bson;
using SpreadCommon.Filter;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
namespace SpreadService
{
    public interface IService
    {
        Task<SpreadCommon.Models.BsonDocumentList> GetListAsync(CommonDataFilter filter);
        void Add(dynamic entity);
        void Delete(dynamic entity);
        void Update(dynamic entity);
        Task<BsonDocument> FindByIdAsync(CommonDataFilter filter);
    }
}
