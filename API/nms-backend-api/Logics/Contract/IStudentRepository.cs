using nms_backend_api.Entity;

namespace nms_backend_api.Logics.Contract
{
    public interface IStudentRepository
    {
        void Add(Student student);
        void Update(Student student);
        void Delete(int id);
        Student GetStudentById(int id);
        List<Student> GetAllStudent();
        List<Student> GetStudentByClassId(int classid);
    }
}
