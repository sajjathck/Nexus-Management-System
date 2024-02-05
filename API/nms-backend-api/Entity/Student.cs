using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nms_backend_api.Entity
{
    [Table("tbl_student")]
    public class Student
    {

        [Key]
        public int StudentId { get; set; }

        [Required] //set not null constraint
        [StringLength(50)]
        [Column("FirstName", TypeName = "varchar")]
        public string FirstName { get; set; }

        [Required] //set not null constraint
        [StringLength (50)]
        [Column("LastName", TypeName = "varchar")]
        public string LastName { get; set; }
        [Required]
        public DateTime DOB { get; set; }

        [Required]
        [Column("Gender",TypeName = "varchar")]
        [StringLength(10)]
        public string Gender { get; set; }//to be enum

        [ForeignKey("ClassId")]
        public Class1? Class { get; set; }   
       
    }
}
