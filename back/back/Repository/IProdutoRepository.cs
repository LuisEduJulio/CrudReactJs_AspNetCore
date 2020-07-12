using back.Model;
using System.Collections.Generic;

namespace back.Repository
{
    public interface IProdutoRepository : IRepository<Produto>
    {
        IEnumerable<Produto> GetProdutosPorPreco();
    }
}
