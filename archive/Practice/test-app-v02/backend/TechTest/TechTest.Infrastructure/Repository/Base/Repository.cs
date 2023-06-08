using Microsoft.EntityFrameworkCore;
using TechTest.Core.Interfaces.Base;
using TechTest.Infrastructure.Persistence;

namespace TechTest.Infrastructure.Repository.Base
{
    public class Repository<T> : IRepository<T> where T : class
    {
        protected readonly TechTestContext _context;

        public Repository(TechTestContext context)
        {
            _context = context;
        }

        public async Task<T> AddAsync(T entity)
        {
            await _context.Set<T>().AddAsync(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        // Update
        public async Task UpdateAsync(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        // Delete
        public async Task DeleteAsync(T entity)
        {
            _context.Set<T>().Remove(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            var entities = await _context.Set<T>().ToListAsync();
            return entities;
            //throw new NotImplementedException();
        }

        public async Task<T> GetAsync(int id)
        {
            var entity = await _context.Set<T>().FindAsync(id);
            return entity;
        }


    }
}
