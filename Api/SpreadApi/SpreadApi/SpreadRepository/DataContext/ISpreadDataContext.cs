using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace SpreadRepository.DataContext
{
   public interface ISpreadDataContext
    {
        IMongoDatabase GetDatabase(string dbName);
    }
}
