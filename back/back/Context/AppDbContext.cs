using back.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace back.Context
{
    public class AppDbContext : IdentityDbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public AppDbContext()
        {

        }

        public DbSet<Categoria> Categorias {get; set;}
        public DbSet<Produto> Produtos {get; set;}


    }
}
