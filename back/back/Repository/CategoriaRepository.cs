using back.Context;
using back.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace back.Repository
{
    public class CategoriaRepository : Repository<Categoria>, ICategoriaRepository
    {
        public CategoriaRepository(AppDbContext context) : base(context)
        {

        }
        public IEnumerable<Categoria> GetCategoriasProdutos()
        {
            return Get().Include(x => x.Produtos);
        }
    }
}
