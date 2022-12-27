import e from 'express';
import React from 'react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import {toast} from 'react-toastify';

const Register = () => {
    const [formData, formDataSet] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = formData;

    const onChange = (e) => {
        formDataSet((...prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit =  () => {
        
    }
  return (
    <>
        <section className='heading'>
            <h1>
                <FaUser /> Register
            </h1>
            <p>Please create an account</p>
        </section>

        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input type="text" className='form-control' name='name' id='name' value={name} onChange={onChange} placeholder='Enter your name' />
                </div>
                <div className='form-group'>
                    <input type="email" className='form-control' name='email' id='email' value={email} onChange={onChange} placeholder='Enter your email' />
                </div>
                <div className='form-group'>
                    <input type="password" className='form-control' name='password' id='password' value={password} onChange={onChange} placeholder='Enter your password' />
                </div>
                <div className='form-group'>
                    <input type="text" className='form-control' name='password2' id='password2' value={password2} onChange={onChange} placeholder='Confirm password' />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block'>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Register