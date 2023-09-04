import axios from "axios"


export const deleteUser=async (email)=>{

    
    try {
       await axios.delete(`http://localhost:5000/Users/delete/${email}`);
    } catch (error) {
        console.log(error);
    }

}

