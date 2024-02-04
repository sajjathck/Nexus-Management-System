﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace nms_backend_api.Entity
{
    [Table("tbl_teacher")]
    public class Teacher
    {
        [Key]
        public int TeacherId { get; set; }

        [Required] //set not null constraint
        [Column("FirstName", TypeName = "varchar")]
        public string FName { get; set; }

        [Required] //set not null constraint
        [Column("LastName", TypeName = "varchar")]
        public string LName { get; set; }
        [Required] //set not null constraint
        [Column("Class", TypeName = "varchar")]
        [StringLength(30)]
        public string Class { get; set; }//to be enum

        public DateTime DOB { get; set; }

        [Column(TypeName = "char")]
        [StringLength(5)]
        public string Gender { get; set; }//to be enum


        [Column(TypeName = "varchar")]
        [StringLength(30)]
        public string Subject { get; set; }
    }
}
