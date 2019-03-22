using SpreadCommon.Filter;
using System;
using System.Collections.Generic;
using System.Text;

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
        IEnumerable<dynamic> List { get; }
        void Add(dynamic entity);
        void Delete(dynamic entity);
        void Update(dynamic entity);
        dynamic FindById(CommonDataFilter cFiler);
    }
}
