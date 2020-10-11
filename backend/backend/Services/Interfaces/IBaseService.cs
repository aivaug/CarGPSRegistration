using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Services.Interfaces
{
    public interface IBaseService<T, IDType>
    {
        Task<T> Delete(IDType id);
        Task<List<T>> GetAll();
        Task<T> GetById(IDType id);
        Task<T> Create(T obj, int UserId);
        Task<T> Update(T obj, IDType id);
    }
}
