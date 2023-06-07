using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TechTest.Core.Interfaces;
using TechTest.Infrastructure.Persistence;
using TechTest.Infrastructure.Repository.Base;
using TTechTest.Core.Entities;

namespace TechTest.Infrastructure.Repository
{
    //public class ClientRepository
    //{
    //}

    public class ClientRepository : Repository<Client>, IClientRepository
    {
        public ClientRepository(TechTestContext context) : base(context)
        {

        }
    }
}
