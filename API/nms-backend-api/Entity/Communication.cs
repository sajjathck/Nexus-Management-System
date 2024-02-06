using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nms_backend_api.Entity
{
    public class Communication
    {
        [Key]
        public int CommId { get; set; }

        [Required]
        [Column("msg", TypeName = "nvarchar")]
        [StringLength(100)]
        public string Message { get; set; }
        [Required]
        [Column("msgcriteria", TypeName = "varchar")]
        [StringLength(5)]
        public string Recievers { get; set; }

    }
}
