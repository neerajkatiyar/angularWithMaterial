using MongoDB.Bson;
using System.Collections.Generic;
using System.Linq;

namespace SpreadCommon.Helper
{
    public class BsonMapper
    {

        public static BsonDocument Map(BsonDocument source, BsonDocument destination)
        {
            string dest_obj_key;
            if (source != null && destination != null)
            {
                foreach (var item in source)
                {
                    dest_obj_key = destination.Where(x => x.Name.ToLower() == item.Name.ToLower()).Select(x => x.Name).FirstOrDefault();
                    if ((item != null) && dest_obj_key != null && item.Value.GetType() == destination[dest_obj_key].GetType())
                    {
                        if (item.Value.GetType().Equals(typeof(BsonArray)))
                        {
                            MapBsonArray(item.Value as BsonArray, destination[dest_obj_key] as BsonArray);
                        }
                        else if (item.Value.GetType() == typeof(BsonDocument))
                        {
                            Map(item.Value as BsonDocument, destination[dest_obj_key] as BsonDocument);
                        }
                        else
                        {
                            destination[dest_obj_key] = item.Value;
                        }
                    }
                }
            }
            return destination;
        }

        private static void MapBsonArray(BsonArray source, BsonValue destination)
        {
            var iSA = true;
            BsonDocument _bsonDoc = null;
            BsonArray _bsonArr = null;
            foreach (var item in source)
            {
                if (item.GetType() == typeof(BsonArray) && destination.GetType() == typeof(BsonArray) && item.GetType() == destination[0].GetType())
                {
                    _bsonArr = (BsonArray)destination[0].DeepClone();
                    MapBsonArray(item as BsonArray, _bsonArr);
                    iSA = false;
                }
                else if (item.GetType() == typeof(BsonDocument) && destination[0].GetType() == typeof(BsonDocument))
                {
                    _bsonDoc = (BsonDocument)destination[0].DeepClone();
                    Map(item as BsonDocument, _bsonDoc);
                    iSA = false;
                }
                else if (item.GetType() == destination.GetType())
                {
                    destination = source;
                }
                if (item != null)
                {
                    if (_bsonDoc != null)
                    {
                        (destination as BsonArray).Add(_bsonDoc);
                    }
                    else if (_bsonArr != null)
                    {
                        (destination as BsonArray).Add(_bsonArr);
                    }
                    else
                    {
                        (destination as BsonArray).Add(item);
                    }
                }
            }
            if (!iSA)
            {
                (destination as BsonArray).RemoveAt(0);
            }
        }
}

    internal class BsonKeyComparer : IEqualityComparer<BsonElement>
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
