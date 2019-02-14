using SpreadRepository.CommonDataRepo;
using System;
using System.Collections.Generic;
using System.Text;

namespace SpreadService.CommonDataService
{
    public class CommonDataService: ICommonDataService
    {
        private ICommonDataRepo _commonDataRepo;
        public CommonDataService(ICommonDataRepo commonDataRepo)
        {
            this._commonDataRepo = commonDataRepo;
        }

        public IEnumerable<dynamic> List => throw new NotImplementedException();

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
            return _commonDataRepo.FindById(Id);
        }

        public void Update(dynamic entity)
        {
            throw new NotImplementedException();
        }
    }
}
