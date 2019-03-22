using SpreadCommon.Filter;
using System;
using System.Collections.Generic;
using System.Text;

namespace SpreadService
{
    public interface IService
    {
        IEnumerable<dynamic> List { get; }
        void Add(dynamic entity);
        void Delete(dynamic entity);
        void Update(dynamic entity);
        dynamic FindById(CommonDataFilter Id);
    }
}
