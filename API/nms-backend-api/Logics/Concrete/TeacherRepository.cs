using Microsoft.EntityFrameworkCore;
using nms_backend_api.Entity;
using nms_backend_api.Logics.Contract;

namespace nms_backend_api.Logics.Concrete
{
    public class TeacherRepository : ITeacherRepository
    {
        private readonly MyContext _context;

        public TeacherRepository(MyContext context)
        {
            _context = context;
        }
        public void Add(Teacher teacher)
        {
            _context.teachers.Add(teacher);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            Teacher teacher = _context.teachers.Find(id);
            _context.teachers.Remove(teacher);
            _context.SaveChanges();
        }

        public List<Teacher> GetAll()
        {
           return _context.teachers.ToList();
        }

        public Teacher GetTeacher(int id)
        {
            return _context.teachers.Find(id);
        }

        public List<Teacher> GetTeachersByClass(string class1)
        {
            List<Teacher> teachersByclass = _context.teachers.Where((e) => e.Equals(class1)).ToList();
            return teachersByclass;
        }

        public List<Teacher> GetTeachersBySubject(string subject)
        {
            List<Teacher> teachersbysub=_context.teachers.Where((e)=>e.Equals(subject)).ToList();
            return teachersbysub;
        }

        public void Update(Teacher teacher)
        {
            _context.Update(teacher);
            _context.SaveChanges();
        }
    }
}
