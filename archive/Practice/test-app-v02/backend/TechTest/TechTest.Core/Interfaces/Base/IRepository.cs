using System.Threading.Tasks;

namespace TechTest.Core.Interfaces.Base
{
    // Generic interface for command repository
    public interface IRepository<T> where T : class
    {
        Task<T> AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(T entity);
        Task<T> GetAsync(int id);
        Task<IEnumerable<T>> GetAllAsync();

    }
}
