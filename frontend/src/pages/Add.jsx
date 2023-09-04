import { TbBackspaceFilled } from 'react-icons/tb'
import '../App.css'
import logo from '../assets/vite.svg'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'
import { TiTick } from 'react-icons/ti'
import { constructDetails } from '../components/Form'
import {emailValidation,nameValidation,mobileValidation,addressValidation,dateValidation} from "../util/Validation";
import { isNotExist } from '../util/emailExist'
import { insertUser } from '../util/insertUser'
import { useState } from 'react'



const Add = () => {
    const [disabled,setDisabled]=useState(false);
    const navigate = useNavigate();



    const insertData=async ()=>{

        setDisabled(true);

        const data=constructDetails();
        if(emailValidation(data.email) && nameValidation(data.fname) && nameValidation(data.lname) && mobileValidation(data.mobile) && addressValidation(data.address) && dateValidation(data.dob)){
            if(!await isNotExist(data.email)){
                alert("Email already Exist");
                setDisabled(false);
            }
            else{
                try {
                    await insertUser(data);
                    alert("Data Inserted Successfully");
                    setDisabled(false);
                    navigate('/');
                } catch (error) {
                    console.log(error);
                    setDisabled(false);
                }
            }
        }
        else{
            alert("Please Check All Values");
            setDisabled(false);
        }
       
    }






    return (
        <>
            <div className="main-div">
                <div className="header">
                    <div className="logo">
                        <Icon src={logo} alt='logo'></Icon>
                    </div>
                    <div className="btn-cls" style={{float:'right'}}>
                        <Button type='button' text='BACK' icon={TbBackspaceFilled} className='btn' onclick={() => {
                            navigate('/')
                        }
                        }></Button>
                    </div>
                </div>

                <div className="body">
                        <Form></Form>
                </div>
                <div className='main-form-div'>
                    <div></div>
                    <div style={{alignItems:'center'}}>
                        <Button type='button' text='SUBMIT' className='btn' icon={TiTick} onclick={insertData}  isDisabled={disabled}></Button>
                    </div>
                </div>
            </div>

        </>
    );
}




export default Add;