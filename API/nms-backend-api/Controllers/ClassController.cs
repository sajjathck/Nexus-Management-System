using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using nms_backend_api.Entity;
using nms_backend_api.Logics.Concrete;
using nms_backend_api.Logics.Contract;

namespace nms_backend_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassController : ControllerBase
    {
        public ClassRepository classRepository;
        public ClassController(ClassRepository classRepository)
        {
            this.classRepository = classRepository;
        }
        [HttpGet, Route("GetAllClass")]
        public IActionResult getAll()
        {
            try
            {
                return Ok(classRepository.GetAll());
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet, Route("GetClassByClassName/{name}")]
        public IActionResult getClassByName(string name)
        {
            try
            {
                return Ok(classRepository.GetClassBySemName(name));
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost, Route("AddClass")]
        public IActionResult Add(Class1 classes)
        {
            try
            {
                classRepository.Create(classes);
                return Ok(classes);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPut, Route("UpdateClass")]
        public IActionResult Edit(Class1 class1)
        {
            try
            {
                classRepository.Update(class1);
                return Ok(class1);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpDelete, Route("deleteClass/{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                classRepository.Delete(id);
                return Ok("class deleted");
            }
            catch (Exception)
            {

                throw;
            }

        }
    }
}
