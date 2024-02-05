using nms_backend_api.Entity;

namespace nms_backend_api.Logics.Contract
{
    public interface IClassRepository
    {
        void Create(Class clas );
        void Update(Class clas);
        void Delete(int id);
        Class GetClass(int id);
        List<Class> GetAll();
       
    }
}
