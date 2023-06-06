using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.EntityFrameworkCore;
using TechTest.API.Model;

namespace TechTest.API.Db
{
    public class TechTestContext : DbContext
    {
        public TechTestContext(DbContextOptions<TechTestContext> options) : base(options)
        {

        }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Package> Packages { get; set; }
    }
}
