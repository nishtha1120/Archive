import React from 'react'
import assetsImages from '../constant/enum'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";



const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});
const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitHandler = (data) => {
        if (data) {
            localStorage.setItem('auth-token', data?.password)
            window.location = '/dashboard';
        }
        reset();
    };
    return (
        <div className='main-login-page'>
            <div className='inner-login-page'>
                <div className='white-box'>
                    <div className='left-side-main'>
                        <img src={assetsImages.Logo} alt="logo" />
                        <div className='img-vector'>
                            <img src={assetsImages.LoginVector} alt="Loginvector" />
                        </div>
                    </div>
                    <div className='right-side-main'>
                        <div className='text-heading-main'>
                            Login to Continue
                        </div>
                        <div className='small-text'>Welcome back, sign in with your Capitol Drugs account</div>
                        <div className='form-login-main'>
                            <form onSubmit={handleSubmit(onSubmitHandler)}>
                                <div className='classInput-email'>
                                    <input {...register("email")} placeholder='Email Address' type="email" />
                                    <p style={{ color: 'red', marginTop: '2px' }}>{errors.email?.message}</p>
                                </div>
                                <div className='classInput-email'>
                                    <input {...register("password")} placeholder="password" type="password" />
                                    {errors.password?.message ? <>
                                        <p style={{ color: 'red', marginTop: '2px' }}>{errors.password?.message}</p>
                                    </> : null}
                                </div>
                                <div className='classInput-email'>
                                    <button type='submit' className='login-btn'>Login to Dashboard</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login