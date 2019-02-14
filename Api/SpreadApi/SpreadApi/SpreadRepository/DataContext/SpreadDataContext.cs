using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Options;
using SpreadCommon;

namespace SpreadRepository.DataContext
{
    public class SpreadDataContext: ISpreadDataContext
    {
        private readonly IOptions<AppSettings> _appSettings;

        public SpreadDataContext(IOptions<AppSettings> appSettings)
        {
            this._appSettings = appSettings;
        }
        public IMongoDatabase MongoContext
        {
            get
            {
                
                var client = new MongoClient("mongodb+srv://" + this._appSettings.Value.DB_UserName + ":"+ this._appSettings.Value.DB_Password  + "@cluster0.mongodb.net/?ssl=true&authSource=admin");
                return client.GetDatabase("test");
            }

        }

    }
}
