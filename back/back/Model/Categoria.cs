using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back.Model
{
    [Table("Categorias")]
    public class Categoria
    {
        public Categoria()
        {

        }
        [Key]
        public int CategoriaId { get; set; }
        [Required]
        [MaxLength(80)]
        public string Nome { get; set; }
        [Required]
        [MaxLength(500)]
        public string ImagemUrl { get; set; }
        public Produto Produtos { get; internal set; }
    }
}
