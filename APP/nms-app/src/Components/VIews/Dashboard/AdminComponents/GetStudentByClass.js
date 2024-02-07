
import { React, useState } from "react";
import axios from "axios";
const GetStudentByClass = () => {
    const [studentId, setId] = useState(0);
    const [classId, setClassId] = useState("");
    const [firstName, setFName] = useState("");
    const [lastName, setLName] = useState("");
    const [rollno, setRollno] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [contactno, setContactno] = useState("");
    const [gender, setGender] = useState("");
    const [regDate, setReg] = useState("");

    const Search = () => {
        axios
          .get("http://localhost:5225/api/Student/GetAllStudentByClass/" + classId)
          .then((response) => {
            console.log(response.data);
            setClassId(response.data.classId);
            setFName(response.data.firstName);
            setLName(response.data.lastName);
            setRollno(response.data.rollno);
            setAddress(response.data.address);
            setEmail(response.data.email);
            setDob(response.data.dob);
            setContactno(response.data.contactno);
            setGender(response.data.gender);
            regDate(response.data.regDate);
          })
          .catch((error) => console.log(error));
      };

      return (
        <div className="container">
            <form>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Student Id</td>
                            <td>
                                <input
                                    type="text"
                                    value={studentId}
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
                            <td>First Name</td>
                            <td>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFName(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Last Name</td>
                            <td>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLName(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Roll No:</td>
                            <td>
                                <input
                                    type="text"
                                    value={rollno}
                                    onChange={(e) => setRollno(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Email</td>
                            <td>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Dob</td>
                            <td>
                                <input
                                    type="text"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Contact No:</td>
                            <td>
                                <input
                                    type="text"
                                    value={contactno}
                                    onChange={(e) => setContactno(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Gender</td>
                            <td>
                                <input
                                    type="text"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Register Date</td>
                            <td>
                                <input
                                    type="text"
                                    value={regDate}
                                    onChange={(e) => setReg(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button type="submit" onClick={Search}>
                                    Search 
                                </button> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default GetStudentByClass;