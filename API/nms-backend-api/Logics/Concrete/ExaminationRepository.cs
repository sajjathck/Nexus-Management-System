using nms_backend_api.Entity;
using nms_backend_api.Logics.Contract;

namespace nms_backend_api.Logics.Concrete
{
    public class ExaminationRepository: IExaminationRepository
    {
        private readonly MyContext _context;

        public ExaminationRepository(MyContext context)
        {
            _context = context;

        }

        public void Add(Examination examination)
        {
            try
            {
                _context.exams.Add(examination);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void DeleteExam(int examId)
        {
            try
            {
                Examination examination = _context.exams.Find(examId);
                _context.exams.Remove(examination);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Examination> GetAll()
        {
            try
            {
                return _context.exams.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Examination> GetExamByClassId(int ClassId)
        {
            try
            {
                return _context.exams.Where(x=>x.Class.ClassId == ClassId).ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Examination GetExamByExamId(int examId)
        {
            try
            {
                return _context.exams.Find(examId);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void UpdateExam(Examination examination)
        {
            try
            {
                _context.exams.Update(examination);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
