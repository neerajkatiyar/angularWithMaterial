using MongoDB.Bson;
using SpreadCommon.Filter;
using SpreadRepository.CommonDataRepo;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SpreadService.CommonDataService
{
    public class CommonDataService : ICommonDataService
    {
        private readonly ICommonDataRepo _commonDataRepo;
        public CommonDataService(ICommonDataRepo commonDataRepo)
        {
            this._commonDataRepo = commonDataRepo;
        }

        public void Add(dynamic entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(dynamic entity)
        {
            throw new NotImplementedException();
        }

        public Task<BsonDocument> FindByIdAsync(CommonDataFilter filter)
        {
            return _commonDataRepo.FindByIdAsync(filter);
        }

        public async Task<SpreadCommon.Models.BsonDocumentList> GetListAsync(CommonDataFilter filter)
        {
            return await _commonDataRepo.GetListAsync(filter);
        }

        public void Update(dynamic entity)
        {
            throw new NotImplementedException();
        }
    }
}
