using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace nms_backend_api.Entity
{
    [Table("tbl_class")]

    public class Class
    {
       
            [Key]
            public int ClassId { get; set; }

             [Required]
             [StringLength(50)]
             [Column("ClassName", TypeName = "varchar")]
            public string ClassName { get; set; }

            [ForeignKey("TeacherId")]
            public Teacher? Teacher { get; set; }



    }
}
