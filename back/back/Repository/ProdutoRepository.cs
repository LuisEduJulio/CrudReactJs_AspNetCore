using back.Context;
using back.Model;
using System.Collections.Generic;
using System.Linq;

namespace back.Repository
{
    public class ProdutoRepository : Repository<Produto>, IProdutoRepository
    {
        public ProdutoRepository(AppDbContext context) : base(context)
        {

        }
        public IEnumerable<Produto> GetProdutosPorPreco()
        {
            return Get().OrderBy(c => c.Preco).ToList();
        }

    }
}
