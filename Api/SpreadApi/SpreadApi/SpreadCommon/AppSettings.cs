using System;

namespace SpreadCommon
{
    public class AppSettings
    {
        public string DB_UserName { get; set; }
        public string DB_Password { get; set; }
        public string MongoConnectionString { get; set; }
        public bool EnableAtlasDb { get; set; }

    }
}
