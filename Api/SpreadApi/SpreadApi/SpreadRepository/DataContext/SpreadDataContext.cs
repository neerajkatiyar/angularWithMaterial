using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Options;
using SpreadCommon;
using MongoDB.Bson;

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
                var client = new MongoClient("mongodb+srv://" + this._appSettings.Value.DB_UserName + ":" + this._appSettings.Value.DB_Password + "@cluster0-l7t8v.gcp.mongodb.net");
                return client.GetDatabase("SpreadCommonDB");
            }

        }

    }
}
