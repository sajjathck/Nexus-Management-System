using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using nms_backend_api.Entity;
using nms_backend_api.Logics.Concrete;

namespace nms_backend_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExaminationController : ControllerBase
    {
        private readonly ExaminationRepository _examinationrepository;

        public ExaminationController(ExaminationRepository examinationrepository)
        {
            _examinationrepository = examinationrepository;
        }

        [HttpPost, Route("ScheduleExam")]
        public IActionResult Add([FromBody] Examination examination)
        {
            _examinationrepository.Add(examination);
            return Ok(examination);
        }
        [HttpGet, Route("GetAllExam")]
        public IActionResult GetAll()
        {
            return Ok(_examinationrepository.GetAll());
        }
        [HttpGet, Route("GetExamByExamId/{examId}")]
        public IActionResult GetExamByExamId(int examId)
        {
            return Ok(_examinationrepository.GetExamByExamId(examId));
        }
        [HttpGet, Route("GetExamByClassId/{ClassId}")]
        public IActionResult GetExamByClassId(int ClassId)
        {
            return Ok(_examinationrepository.GetExamByClassId(ClassId));
        }
        [HttpPut, Route("EditExamination")]
        public IActionResult Update([FromBody] Examination examination)
        {
            _examinationrepository.UpdateExam(examination);
            return Ok(examination);
        }
        [HttpDelete, Route("DeleteExam/{examId}")]
        public IActionResult Delete(int examId)
        {
            _examinationrepository.DeleteExam(examId);
            return Ok("Examination deleted");
        }
    }
}
