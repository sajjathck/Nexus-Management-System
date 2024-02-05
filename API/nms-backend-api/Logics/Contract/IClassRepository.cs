using nms_backend_api.Entity;

namespace nms_backend_api.Logics.Contract
{
    public interface IClassRepository
    {
        void Create(Class1 clas );
        void Update(Class1 clas);
        void Delete(int id);
        Class1 GetClass(int id);
        List<Class1> GetAll();
       
    }
}
