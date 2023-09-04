import Button from "./Button";
import { AiTwotoneEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import '../index.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteUser } from "../util/deleteUser";
import axios from "axios";

export var updateValue;

const Table = () => {
    const navigate = useNavigate();
    const [disabled, setDisable] = useState(false);
    const [users, setUsers] = useState([])
    const getUsers = async () => {
      const list = await axios
        .get("http://localhost:5000/users/getAll")
        .then((response) => {
          return response.data;
        });
      setUsers(list);
    }
  
  
    useEffect(() => getUsers, []);


    const removeUser = async (email) => {
        setDisable(true);
        if (confirm("Are You want to Delete ?")) {
            await deleteUser(email);
            getUsers();
            setDisable(false);
        }
        else {
            setDisable(false);
        }
    }


    return (
        <>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile No</th>
                        <th>Date Of Birth</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((e) => {
                        return (
                            <tr key={e.email}>
                                <td>{e.email}</td>
                                <td>{e.fname}</td>
                                <td>{e.lname}</td>
                                <td>{e.mobile}</td>
                                <td>{e.dob}</td>
                                <td>
                                    <div className="action-cls">
                                        <div><Button type='button' text='Edit' icon={AiTwotoneEdit} className='btn' onclick={() => {
                                            updateValue = e
                                            navigate('/edit')
                                        }}></Button></div>
                                        <div><Button type='button' text='Delete' icon={MdDelete} className='btn' onclick={() => {
                                            removeUser(e.email)
                                        }} isDisabled={disabled}></Button></div>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}



export default Table;