using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using nms_backend_api.Entity;
using nms_backend_api.Logics.Concrete;
using nms_backend_api.Logics.Contract;

namespace nms_backend_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {

        private readonly ITeacherRepository teacherRepository;

        public TeacherController(ITeacherRepository teacherRepository)
        {
               this.teacherRepository = teacherRepository;
        }
        [HttpGet]
        public IActionResult GetAll() 
        {
            try
            {
                return Ok(teacherRepository.GetAll());
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost, Route("AddTeacher")]
        public IActionResult Teacher(Teacher teacher)
        {
            try
            {
                teacherRepository.Add(teacher);
                return Ok(teacher);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPut, Route("EditTeacher")]
        public IActionResult Edit(Teacher teacher)
        {
            try
            {
                teacherRepository.Update(teacher);
                return Ok(teacher);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpDelete, Route("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                teacherRepository.Delete(id);
                return Ok("Teacher Deleted");
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet, Route("GetTeachersById/{id}")]
        public IActionResult GetStaff(int id)
        {
            try
            {
                return Ok(teacherRepository.GetTeacher(id));
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet, Route("GetAllTeacherBySubject/{Subject}")]
        public IActionResult GetAllBySubject(string subject)
        {
            try
            {
                return Ok(teacherRepository.GetTeachersBySubject(subject));
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet, Route("GetAllTeacherByClass/{Class}")]
        public IActionResult GetAllTeacherByclass(string class1)
        {
            try
            {
                return Ok(teacherRepository.GetTeachersByClass(class1));
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
