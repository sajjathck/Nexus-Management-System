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
        [Column("FirstName", TypeName = "varchar")]
        [StringLength(30)]
        public string FirstName { get; set; }

        [Required] //set not null constraint
        [Column("LastName", TypeName = "varchar")]
        [StringLength(30)]
        public string LastName { get; set; }

        public DateTime DOB { get; set; }


        [Column(TypeName = "char")]

        public string Gender { get; set; }//to be enum

       // [Required]
       // public int ClassId { get; set; }//to be enum

       
    }
}
