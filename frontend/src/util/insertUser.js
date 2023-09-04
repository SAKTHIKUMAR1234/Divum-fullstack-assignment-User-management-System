import axios from "axios"


export const insertUser=async (data)=>{
    try {
        const result=await axios.post("http://localhost:5000/Users/add",data);
        if (result instanceof Error){
            throw new Error(result.status);
        }
        return result;
    } catch (error) {
        return error;
    }
}