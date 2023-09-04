import { useState } from "react";
import {emailValidation,nameValidation,mobileValidation,addressValidation,dateValidation} from "../util/Validation";


let details;

const Form = (props) => {



    const [email, changeEmail] = useState(props.email || '');
    const [fname, changefname] = useState(props.fname || '');
    const [lname, changelname] = useState(props.lname || '');
    const [mno, changeMno] = useState(props.mno || '');
    const [dob, changeDate] = useState(props.dob || '');
    const [addr, changeAddress] = useState(props.address || '');
    details=[email,fname,lname,mno,dob,addr];


    const changeValues = (e) => {
        if (e.target.name === 'email'){
            changeEmail(e.target.value);
            if(!emailValidation(e.target.value)){
                e.target.className='error';
            }
            else{
                e.target.className='';
            }
            details[0]=e.target.value;

        }
            
        if (e.target.name === 'fname'){
            changefname(e.target.value);
            if(!nameValidation(e.target.value)){
                e.target.className='error';
            }
            else{
                e.target.className='';
            }
            details[1]=e.target.value;

        }
            
        if (e.target.name === 'lname'){
            changelname(e.target.value);
            if(!nameValidation(e.target.value)){
                e.target.className='error';
            }
            else{
                e.target.className='';
            }
            details[2]=e.target.value;

        }
            
        if (e.target.name === 'mno'){
            changeMno(e.target.value);
            if(!mobileValidation(e.target.value)){
                e.target.className='error';
            }
            else{
                e.target.className='';
            }
            details[3]=e.target.value;

        }
           
        if (e.target.name === 'dob'){
            changeDate(e.target.value);
            if(!dateValidation(e.target.value)){
                e.target.className='error';
            }
            else{
                e.target.className='';
            }
            details[4]=e.target.value;

        }
           
        if (e.target.name === 'address'){
            changeAddress(e.target.value);
            if(!addressValidation(e.target.value)){
                e.target.className='error';
            }
            else{
                e.target.className='';
            }
            details[5]=e.target.value;

        }


            
    }

    return (
            <div className="main-form">
                <div className='main-form-div'>
                    <div><label htmlFor="email">Email</label></div>
                    <div><input type="email" name="email" id="email" required={true} disabled={props.disabled} value={props.email || email} placeholder="Enter Email Id" onChange={changeValues} autoComplete="off" autoCorrect="off"/></div>
                </div>
                <div className='main-form-div'>
                    <div><label htmlFor="fname">First Name</label></div>
                    <div><input type="text" name="fname" id="fname" required={true} value={fname} placeholder="Enter Your First Name" onChange={changeValues} autoComplete="off" autoCorrect="off"/></div>
                </div>
                <div className='main-form-div'>
                    <div><label htmlFor="lname">Last Name</label></div>
                    <div><input type="text" name="lname" id="lname" required={true} value={lname} placeholder="Enter Your Last Name" onChange={changeValues} autoComplete="off" autoCorrect="off"/></div>
                </div>
                <div className='main-form-div'>
                    <div><label htmlFor="mno">Mobile Number</label></div>
                    <div><input type="number" name="mno" id="mno" required={true} value={mno} placeholder="Enter Your Mobile Number" onChange={changeValues} autoComplete="off" autoCorrect="off"/></div>
                </div>
                <div className='main-form-div'>
                    <div><label htmlFor="dob">Date Of Birth</label></div>
                    <div><input type="date" name="dob" id="dob" required={true} value={dob} onChange={changeValues} /></div>
                </div>
                <div className='main-form-div'>
                    <div><label htmlFor="address">Address</label></div>
                    <div><textarea name="address" id="addresss" required={true} value={addr} placeholder="Enter Your Address" onChange={changeValues} autoComplete="off" autoCorrect="off"/></div>
                </div>
            </div>
    );
}

export const constructDetails=()=>{
   
    const result={
        "email":details[0],
        "fname":details[1],
        "lname":details[2],
        "mobile":details[3],
        "dob":details[4],
        "address":details[5]
    }
    return result;
}


export default Form;