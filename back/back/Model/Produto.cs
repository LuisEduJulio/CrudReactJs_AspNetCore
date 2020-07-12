using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back.Model
{
    [Table("Produtos")]
    public class Produto
    {
        public Produto()
        {

        }
        [Key]
        public int ProdutoId { get; set; }
        [MaxLength(80)]
        public string Nome { get; set; }
        [Required]
        [MaxLength(300)]
        public string Descricao { get; set; }
        [Required]
        public double Preco { get; set; }
        [Required]
        [StringLength(500, MinimumLength = 10)]
        public string ImagemUrl { get; set; }
        public int Estoque { get; set; }
        public DateTime DataCadastro { get; set; }
        public Categoria Categorias { get; set; }
        public int CategoriaId { get; set; }


    }
}
