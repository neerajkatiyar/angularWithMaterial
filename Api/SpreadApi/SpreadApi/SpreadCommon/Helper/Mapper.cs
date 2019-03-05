using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SpreadCommon.Helper
{
    public class BsonMapper
    {
        public static BsonDocument Map(BsonDocument source, BsonDocument destination)
        {
            if (source != null && destination != null)
            {
                foreach (var item in source)
                {
                    var dest_obj = destination.Where(x => x.Name.ToLower() == item.Name.ToLower()).Select(x => x.Name).FirstOrDefault();
                    if ((item != null) && dest_obj != null && item.Value.GetType() == destination[dest_obj].GetType())
                    {
                        if (item.Value.GetType().Equals(typeof(BsonArray)))
                        {
                            MapBsonArray(item.Value as BsonArray, destination[dest_obj] as BsonArray);
                            (destination[dest_obj] as BsonArray).RemoveAt(0);
                        }
                        else if (item.Value.GetType() == typeof(BsonDocument))
                        {
                            Map(item.Value as BsonDocument, destination[dest_obj] as BsonDocument);
                        }
                        else
                        {
                            destination[dest_obj] = item.Value;
                        }
                    }
                }
            }
            return destination;
        }

        private static void MapBsonArray(BsonArray source, BsonValue destination)
        {
            foreach (var item in source)
            {
                if (item.GetType() == typeof(BsonArray) && destination.GetType() == typeof(BsonArray) && item.GetType() == destination[0].GetType())
                {
                    MapBsonArray(item as BsonArray, (destination as BsonArray)[0]);
                }
                else if (item.GetType() == typeof(BsonDocument) && destination[0].GetType() == typeof(BsonDocument))
                {
                    Map(item as BsonDocument, destination as BsonDocument);
                }
                else if (item.GetType() == destination.GetType())
                {
                    destination = source;
                }
                if (item != null)
                {
                    (destination as BsonArray).Add(item);
                }
            }
        }
    }

    public class BsonKeyComparer : IEqualityComparer<BsonElement>
    {
        public bool Equals(BsonElement x, BsonElement y)
        {
            return x.Name.ToLower() == y.Name.ToLower();
        }

        public int GetHashCode(BsonElement obj)
        {
            return obj.Name.GetHashCode();
        }
    }
}
