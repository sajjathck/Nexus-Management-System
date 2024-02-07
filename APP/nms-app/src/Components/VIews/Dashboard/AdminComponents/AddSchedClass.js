//add,edit,delete

import { React, useState } from "react";
import axios from "axios";
const AddSchedClass = () => {
    const [scheduleId, setId] = useState(0);
    const [classId, setClassId] = useState("");
    const [teacherId, setTeacherId] = useState("");
    const [subject, setSubject] = useState("");
    const [sessiontime, setSessionTime] = useState("");
    


    const Save = () => {
        let Schedclass = {
            scheduleId: scheduleId, 
            classId:classId,  
            teacherId: teacherId,
            subject:subject,
            sessiontime:sessiontime 
        };
        axios
            .post("http://localhost:5225/api/ScheduleClass/AddClass", Schedclass)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => console.log(error));
    };
   
    const Edit = () => {
        let Schedclass = {
            scheduleId: scheduleId, 
            classId:classId,  
            teacherId: teacherId,
            subject:subject,
            sessiontime:sessiontime
        };
        axios
          .put("http://localhost:5225/api/ScheduleClass/UpdateClass", Schedclass)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error));
      };

      const Delete = () => {
        axios
          .delete("http://localhost:5225/api/ScheduleClass/deleteClassSchedule/" + scheduleId)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error));
      };
    
            

    return (
        <div className="container">
            <form onSubmit={Save}>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Schedule Id</td>
                            <td>
                                <input
                                    type="text"
                                    value={scheduleId}
                                    placeholder="autogenerated"
                                    onChange={(e) => setId(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Class Id</td>
                            <td>
                                <input
                                    type="text"
                                    value={classId}
                                    onChange={(e) => setClassId(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Teacher Id</td>
                            <td>
                                <input
                                    type="text"
                                    value={teacherId}
                                    onChange={(e) => setTeacherId(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Subject</td>
                            <td>
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Sessiontime</td>
                            <td>
                                <input
                                    type="text"
                                    value={sessiontime}
                                    onChange={(e) => setSessionTime(e.target.value)}
                                />
                            </td>
                        </tr>
                       
                        <tr>
                            <td colSpan={2}>
                                <button type="submit" >Add</button>
                                {/* <button type="submit" onClick={Search}>
                                    Search 
                                </button> */}
                                {/* <button type="button" onClick={Search}>
                                Search
                                </button> */}
                                <button type="button" onClick={Edit}>
                                Edit
                                </button>
                                <button type="button" onClick={Delete}>
                                Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};
export default AddSchedClass;