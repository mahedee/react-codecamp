using Microsoft.EntityFrameworkCore;
using TechTest.Core.Entities;

namespace TechTest.Infrastructure.Persistence
{
    public class TechTestContext : DbContext
    {
        public TechTestContext(DbContextOptions<TechTestContext> options) : base(options)
        {

        }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Package> Packages { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Client>()
            //       .HasMany(e => e.Packages)
            //       .WithOne(e => e.Client)
            //       .HasForeignKey(e => e.ClientId)
            //       .HasPrincipalKey(e => e.Id);

            base.OnModelCreating(modelBuilder);
        }
    }
}
