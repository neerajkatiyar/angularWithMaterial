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
            return null;
        }

        public void Update(dynamic entity)
        {
            throw new NotImplementedException();
        }
    }
}
