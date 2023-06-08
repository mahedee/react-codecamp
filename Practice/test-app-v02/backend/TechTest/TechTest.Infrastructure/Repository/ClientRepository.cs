using TechTest.Core.Entities;
using TechTest.Core.Interfaces;
using TechTest.Infrastructure.Persistence;
using TechTest.Infrastructure.Repository.Base;

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
