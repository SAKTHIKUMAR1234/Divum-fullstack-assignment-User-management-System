import { TbBackspaceFilled } from 'react-icons/tb'
import '../App.css'
import logo from '../assets/vite.svg'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Form, { constructDetails } from '../components/Form'
import { useNavigate } from 'react-router-dom'
import { TiTick } from 'react-icons/ti'
import { updateValue } from '../components/Table'
import { editUser } from '../util/editUser'
import { useState } from 'react'
import {emailValidation,nameValidation,mobileValidation,addressValidation,dateValidation} from "../util/Validation"


const Edit = () => {
    const navigate = useNavigate();

    const [disabled, setDisabled] = useState(false);



    if (updateValue == undefined) {
        return (
            <>
                <div className="main-div">
                    <div className="header">
                        <div className="logo">
                            <Icon src={logo} alt='logo'></Icon>
                        </div>
                        <div className="btn-cls" style={{ float: 'right' }}>
                            <Button type='button' text='BACK' icon={TbBackspaceFilled} className='btn' onclick={() => {
                                navigate('/')
                            }
                            }></Button>
                        </div>
                    </div>
                </div>

            </>
        );
    }
    const data = (updateValue.dob).split('-');


    const email = updateValue.email;
    const fname = updateValue.fname;
    const lname = updateValue.lname;
    const mno = updateValue.mobile;
    const dob = data[2] + '-' + data[1] + '-' + data[0];
    const address = updateValue.address;


    const upDateData = async () => {

        setDisabled(true);

        const data = constructDetails();
        if (emailValidation(data.email) && nameValidation(data.fname) && nameValidation(data.lname) && mobileValidation(data.mobile) && addressValidation(data.address) && dateValidation(data.dob)) {

            try {
                await editUser(data);
                alert("Data Updated Successfully");
                setDisabled(false);
                navigate('/');
            } catch (error) {
                console.log(error);
                setDisabled(false);
            }
        }
        else {
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
                    <div className="btn-cls" style={{ float: 'right' }}>
                        <Button type='button' text='BACK' icon={TbBackspaceFilled} className='btn' onclick={() => {
                            navigate('/')
                        }
                        }></Button>
                    </div>
                </div>


                <div className="body">
                    <Form email={email} fname={fname} lname={lname} address={address} mno={mno} dob={dob} disabled={true}></Form>
                </div>
                <div className='main-form-div'>
                    <div></div>
                    <div style={{ alignItems: 'center' }}>
                        <Button type='button' text='SUBMIT' className='btn' icon={TiTick} isDisabled={disabled} onclick={
                            upDateData
                        }></Button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Edit;