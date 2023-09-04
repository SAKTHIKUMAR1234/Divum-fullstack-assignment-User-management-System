import axios from "axios"


export const editUser=async (data)=>{
    try {
        const result=await axios.post("http://localhost:5000/Users/update",data);
        if (result instanceof Error){
            throw new Error(result.status);
        }
        return result;
    } catch (error) {
        return error;
    }
}