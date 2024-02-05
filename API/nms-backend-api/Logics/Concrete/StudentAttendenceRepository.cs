﻿using nms_backend_api.Entity;
using nms_backend_api.Logics.Contract;

namespace nms_backend_api.Logics.Concrete
{
    public class StudentAttendenceRepository : IStudentAttendenceRepository
    {

        private readonly MyContext _context;

        public StudentAttendenceRepository(MyContext context)
        {
            _context = context;
        }

        //addattendence
        public void AddStudAttendence(StudentAttendence studattendance)
        {
            try
            {
                _context.StudAttendences.Add(studattendance);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        

        //get all attendences
        public List<StudentAttendence> GetAllStudAttendances()
        {
            try
            {
                return _context.StudAttendences.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        //get attendence by id
        public StudentAttendence GetStudAttendenceById(int studid)
        {
            try
            {
                return _context.StudAttendences.Find(studid);
            }
            catch (Exception)
            {

                throw;
            }

            //get attendence by name
        }

            //update 
            public void Update(StudentAttendence studattendance)
            {
            try
            {
                _context.Update(studattendance);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

            //delete
            public void Delete(int id)
            {
            try
            {
                StudentAttendence student = _context.StudAttendences.Find(id);
                _context.StudAttendences.Remove(student);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
           }

        }
       
    }
