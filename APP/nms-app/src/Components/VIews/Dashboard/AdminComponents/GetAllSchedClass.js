import {React,useState,useEffect} from "react";
import axios from "axios";

const GetAllSchedClass=()=>{
    const[Schedclass,getschedclass]= useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:5225/api/ScheduleClass/GetAll")
        .then((response)=>{
            console.log(response.data);//response.data return json data send by API
            getschedclass(response.data);//add response data to students state.
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
                        <th>ScheduleId</th>
                        <th>ClassId</th>
                        <th>TeacherId</th>
                        <th>Subject</th>
                        <th>Sessiontime</th>
                    </tr>
                </thead>
                <tbody>
                    {Schedclass.map((Schedclass)=>{
                        return(
                            <tr key={Schedclass.scheduleId}>
                                <td>{Schedclass.scheduleId}</td>
                                <td>{Schedclass.classId}</td>
                                <td>{Schedclass.teacherId}</td>
                                <td>{Schedclass.subject}</td>
                                <td>{Schedclass.sessiontime}</td>  
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default GetAllSchedClass;