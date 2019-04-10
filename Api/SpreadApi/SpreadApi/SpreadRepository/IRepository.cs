using MongoDB.Bson;
using SpreadCommon.Filter;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SpreadRepository
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> List { get; }
        void Add(T entity);
        void Delete(T entity);
        void Update(T entity);
        T FindById(int Id);
    }

    public interface IRepository
    {
        Task<SpreadCommon.Models.BsonDocumentList> GetListAsync(CommonDataFilter filter);
        void Add(dynamic entity);
        void Delete(dynamic entity);
        void Update(dynamic entity);
        Task<BsonDocument> FindByIdAsync(CommonDataFilter filter);
    }
}
