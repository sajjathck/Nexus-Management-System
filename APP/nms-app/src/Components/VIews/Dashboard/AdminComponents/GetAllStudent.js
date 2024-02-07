import {React,useState,useEffect} from "react";
import axios from "axios";

const GetAllStudent=()=>{
    const[students,getStudents]= useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:5225/api/Student/GetAllStudents")
        .then((response)=>{
            console.log(response.data);//response.data return json data send by API
            getStudents(response.data);//add response data to students state.
        })
        .catch((error)=>{
            console.log(error);
        });
    },[]);
    return(
        <div className="container">
              <h1>Admin Page</h1>
              <br></br>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>StudentId</th>
                        <th>ClassId</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Rollno</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Contact No:</th>
                        <th>Gender</th>
                        <th>Reg.Date</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((students)=>{
                        return(
                            <tr key={students.studentId}>
                                <td>{students.studentId}</td>
                                <td>{students.classId}</td>
                                <td>{students.firstName}</td>
                                <td>{students.lastName}</td>
                                <td>{students.rollno}</td>
                                <td>{students.address}</td>
                                <td>{students.email}</td>
                                <td>{students.dob}</td>
                                <td>{students.contactno}</td>
                                <td>{students.gender}</td>
                                <td>{students.regDate}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default GetAllStudent;