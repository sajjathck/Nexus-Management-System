﻿using nms_backend_api.Entity;

namespace nms_backend_api.Logics.Contract
{
    public interface IStudentAttendenceRepository
    {

        void AddStudAttendence(StudentAttendence studattendance);
        List<StudentAttendence> GetAllStudAttendances();

        //StudentAttendence GetStudAttendenceByName(string name);
        StudentAttendence GetStudAttendenceById(int studid);

        void Update(StudentAttendence studattendance);
        void Delete(int id);

    }
}
