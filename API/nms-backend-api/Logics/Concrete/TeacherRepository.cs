﻿using Microsoft.EntityFrameworkCore;
using nms_backend_api.Entity;
using nms_backend_api.Logics.Contract;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

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
            try
            {
                _context.teachers.Add(teacher);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Delete(int id)
        {
            try
            {
                Teacher teacher = _context.teachers.Find(id);
                _context.teachers.Remove(teacher);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Teacher> GetAll()
        {
            try
            {
                return _context.teachers.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Teacher GetTeacher(int id)
        {
            try
            {
                return _context.teachers.Find(id);
            }
            catch (Exception)
            {

                throw;
            }
        }

        //public List<Teacher> GetTeachersByClass(string class1)
        //{
        //    List<Teacher> teachersByclass = _context.teachers.Where((e) => e.Equals(class1)).ToList();
        //    return teachersByclass;
        //}
        public List<Teacher> GetTeachersByClass(string class1)
        {
            try
            {

                return _context.teachers.Where(z => z.Class == class1).ToList();

            }
            catch (Exception)
            {

                throw;
            }
        }

        //public List<Teacher> GetTeachersBySubject(string subject)
        //{
        //    List<Teacher> teachersbysub=_context.teachers.Where((e)=>e.Equals(subject)).ToList();
        //    return teachersbysub;
        //}

        public List<Teacher> GetTeachersBySubject(string subject)
        {
            try
            {

                return _context.teachers.Where(z => z.Subject == subject).ToList();

            }
            catch (Exception)
            {

                throw;
            }
        }
        public void Update(Teacher teacher)
        {
            try
            {
                _context.Update(teacher);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
