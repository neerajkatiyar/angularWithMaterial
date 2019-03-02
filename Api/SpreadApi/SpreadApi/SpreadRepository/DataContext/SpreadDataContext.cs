using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Options;
using SpreadCommon;
using MongoDB.Bson;

namespace SpreadRepository.DataContext
{
    public class SpreadDataContext : ISpreadDataContext
    {
        private readonly IOptions<AppSettings> _appSettings;

        public SpreadDataContext(IOptions<AppSettings> appSettings)
        {
            this._appSettings = appSettings;
        }
        private IMongoClient MongoClient
        {
            get
            {
                MongoClient client;
                if (_appSettings.Value.EnableAtlasDb)
                {
                    client = new MongoClient("mongodb+srv://" + this._appSettings.Value.DB_UserName + ":" + this._appSettings.Value.DB_Password + "@cluster0-l7t8v.gcp.mongodb.net");
                }
                else
                {
                    client = new MongoClient(_appSettings.Value.MongoConnectionString);
                }
                return client;
            }

        }

        public IMongoDatabase GetDatabase(string dbName)
        {
            return MongoClient.GetDatabase(dbName);
        }
        
    }
}
