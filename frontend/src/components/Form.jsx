import { useState } from "react";
import { emailValidation, nameValidation, mobileValidation, addressValidation, dateValidation , currentDateString } from "../util/Validation";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

let details;

const Form = (props) => {


    const currentDate=currentDateString();


    const errorStatement = [
        'Enter Valid Email(Eg:XXXX@yourdomain.yourregion)',
        'Enter Valid Name(Alphabets Only Accepted)',
        'Enter Valid Mobile Number(Mobile Number Should be Length Of 10)',
        'Enter Valid Date(Date Should Be Today Or Before Today)',
        'Enter Valid Address(Maximum Of 50 Characters)'
    ];



    const [email, changeEmail] = useState(props.email || '');
    const [fname, changefname] = useState(props.fname || '');
    const [lname, changelname] = useState(props.lname || '');
    const [mno, changeMno] = useState(props.mno || '');
    const [dob, changeDate] = useState(props.dob || '');
    const [addr, changeAddress] = useState(props.address || '');


    const [emailError, setemailError] = useState('');
    const [fnameError, setfnameError] = useState('');
    const [lnameError, setlnameError] = useState('');
    const [mobileError, setmobileError] = useState('');
    const [dobError, setdobError] = useState('');
    const [addressError, setaddressError] = useState('');
    details = [email, fname, lname, mno, dob, addr];


    const changeValues = (e) => {


        switch (e.target.name) {
            
            case 'email':
                changeEmail(e.target.value);
                if (!emailValidation(e.target.value)) {
                    e.target.className = 'input error';
                    setemailError(errorStatement[0]);
                }
                else {
                    e.target.className = 'input ';
                    setemailError('');
                }
                details[0] = e.target.value;
                break;

            case 'fname':
                changefname(e.target.value);
                if (!nameValidation(e.target.value)) {
                    e.target.className = 'input error';
                    setfnameError(errorStatement[1]);
                }
                else {
                    e.target.className = 'input ';
                    setfnameError('');
                }
                details[1] = e.target.value;
                break;

            case 'lname':
                changelname(e.target.value);
                if (!nameValidation(e.target.value)) {
                    e.target.className = 'input error';
                    setlnameError(errorStatement[1]);
                }
                else {
                    e.target.className = 'input ';
                    setfnameError('');
                }
                details[2] = e.target.value;
                break;

            case 'mno':
                changeMno(e.target.value);
                if (!mobileValidation(e.target.value)) {
                    e.target.className = 'input error';
                    setmobileError(errorStatement[2]);
                }
                else {
                    e.target.className = 'input ';
                    setmobileError('');
                }
                details[3] = e.target.value;
                break;

            case 'dob':
                changeDate(e.target.value);
                if (!dateValidation(e.target.value)) {
                    e.target.className = 'input error';
                    setdobError(errorStatement[3]);
                }
                else {
                    e.target.className = 'input ';
                    setdobError("");
                }
                details[4] = e.target.value;
                break;

            case 'address':
                changeAddress(e.target.value);
                if (!addressValidation(e.target.value)) {
                    e.target.className = 'input error';
                    setaddressError(errorStatement[4]);
                }
                else {
                    e.target.className = 'input ';
                    setaddressError("");
                }
                details[5] = e.target.value;
                break;
        }




    }

    return (
        <div className="main-form">
            <div className='main-form-div'>
                <div><label htmlFor="email">Email</label></div>
                <div><input type="email" className="input" name="email" id="email" required={true} disabled={props.disabled} value={props.email || email} placeholder="Enter Email Id" onChange={changeValues} onFocus={changeValues} autoComplete="off" autoCorrect="off" /></div>
                <div className="error-content">{emailError}</div>
            </div>
            
            <div className='main-form-div'>
                <div><label htmlFor="fname">First Name</label></div>
                <div><input type="text" className="input" name="fname" id="fname" required={true} value={fname} placeholder="Enter Your First Name" onChange={changeValues} onFocus={changeValues} autoComplete="off" autoCorrect="off" /></div>
                <div className="error-content">{fnameError}</div>
            </div>
            <div className='main-form-div'>
                <div><label htmlFor="lname">Last Name</label></div>
                <div><input type="text" className="input" name="lname" id="lname" required={true} value={lname} placeholder="Enter Your Last Name" onChange={changeValues} onFocus={changeValues} autoComplete="off" autoCorrect="off" /></div>
                <div className="error-content">{lnameError}</div>
            </div>
            <div className='main-form-div'>
                <div><label htmlFor="mno">Mobile Number</label></div>
                <div><input type="number" className="input" name="mno" id="mno" required={true} value={mno} placeholder="Enter Your Mobile Number" onChange={changeValues} onFocus={changeValues} autoComplete="off" autoCorrect="off" /></div>
                <div className="error-content">{mobileError}</div>
            </div>
            <div className='main-form-div'>
                <div><label htmlFor="dob">Date Of Birth</label></div>
                <div><input type="date" name="dob" id="dob" className="input" value={dob} onChange={changeValues} onFocus={changeValues} max={currentDate}/></div>
                <div className="error-content">{dobError}</div>
            </div>
            <div className='main-form-div'>
                <div><label htmlFor="address">Address</label></div>
                <div><textarea name="address" className="input" id="addresss" required={true} value={addr} placeholder="Enter Your Address" onChange={changeValues} onFocus={changeValues} autoComplete="off" autoCorrect="off" /></div>
                <div className="error-content">{addressError}</div>
            </div>
        </div>
    );
}

export const constructDetails = () => {

    const result = {
        "email": details[0],
        "fname": details[1],
        "lname": details[2],
        "mobile": details[3],
        "dob": details[4],
        "address": details[5]
    }
    return result;
}


export default Form;