using back.Model;
using System.Collections.Generic;

namespace back.Repository
{
    public interface ICategoriaRepository : IRepository<Categoria>
    {
        IEnumerable<Categoria> GetCategoriasProdutos();
    }
}
