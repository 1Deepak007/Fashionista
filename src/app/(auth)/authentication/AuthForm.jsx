"use client"

import React, { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import "@/app/css/Auth.css";
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { login } from './loginActions';
import { signUp } from './signupActions';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, signupSchema } from '@/lib/validation';


const Auth = () => {
    const [active, setActive] = useState(false);
    const router = useRouter();
    const [pending, startTransition] = useTransition();
    const [error, setError] = useState(undefined)

    // Login Form
    const {
        register: loginRegister,
        handleSubmit: handleLoginSubmit,
        formState: { isSubmitting: isLoginSubmitting },
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleLogin = async (data) => {
        try {
            setError(undefined);
            startTransition(async () => {
                const { error } = await login(data);
                if (error) setError(error);
                else {
                    toast.success("Login Successful");
                    router.push("/dashboard");
                }
            });
        } catch (err) {
            setError(err.response?.data?.message || "Login Failed");
        }
    };

    // Signup Form
    const {
        register: signupRegister,
        handleSubmit: handleSignupSubmit,
        formState: { isSubmitting: isSignupSubmitting },
    } = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            username: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
    });

    const handleSignup = async (data) => {
        try {
            setError(undefined);
            startTransition(async () => {
                const { error } = await signUp(data);
                if (error) setError(error);
                else {
                    toast.success("Signup Successful");
                    setTimeout(() => {
                        toast.info("Please check your email for verification");
                    }, 5000);
                }
            });
        } catch (err) {
            setError(err.response?.data?.message || "Signup Failed");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[90vh] relative">
            {error && <p className="text-center text-red-500">{error}</p>}
            <div className={`auth-container relative z-10 h-[524px] w-[957px] border-primary border-2 flex bg-background shadow-lg rounded-2xl max-w-4xl ${active ? 'active' : ''}`}>
                <div className="curved-shape1"></div>
                <div className="curved-shape2"></div>

                {/* LOGIN FORM */}
                <div className="form-box Login">
                    <div className="relative">
                        <h2 className="animation text-center text-[2.5rem] font-[800] text-primary mb-8 uppercase" style={{ '--D': 0, '--S': 21 }}>Login</h2>
                        {/* Login heading underline */}
                        <div className="animation h-[0.4rem] w-[6rem] top-[3.7rem] md:top-[3.5rem] rounded-[10px] left-[6.15rem] md:left-[8.3rem] bg-primary absolute" style={{ '--D': 1, '--S': 22 }}></div>
                    </div>
                    <form onSubmit={handleLoginSubmit(handleLogin)}>
                        <div className="input-box animation" style={{ '--D': 2, '--S': 23 }}>
                            <input
                                type="email"
                                {...loginRegister("email")}
                                required
                            />
                            <label htmlFor="login_username">Email</label>
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box animation" style={{ '--D': 3, '--S': 24 }}>
                            <input
                                type="password"
                                {...loginRegister("password")}
                                required
                            />
                            <label htmlFor="login_password">Password</label>
                            <i className='bx bxs-lock-alt'></i>
                        </div>

                        {/* Links and buttons */}
                        <div className="animation flex justify-between text-sm mt-2 text-blue-500 uppercase" style={{ '--D': 4, '--S': 25 }}>
                            <Link href='/forgetpassword'>Forgot Password</Link>
                            <p className='SignUpLink cursor-pointer' onClick={() => setActive(true)}>Create Account</p>
                        </div>

                        <div className="input-box animation" style={{ '--D': 5, '--S': 26 }}>
                            <button
                                type="submit"
                                disabled={isLoginSubmitting}
                                className={`uppercase w-full ${pending ? 'bg-primarybtn hover:bg-primary cursor-not-allowed' : 'bg-primarybtn hover:bg-primary'} text-white py-3 px-4 rounded-full transition duration-300`}
                            >
                                {isLoginSubmitting ? "Logging in..." : "Login"}
                            </button>
                        </div>

                        {/* Registration link */}
                        <div className="regi-link animation mt-6 text-center text-sm text-gray-600 uppercase" style={{ '--D': 6, '--S': 27 }}>
                            <p>Don&apos;t have an account? <a href="#" className="SignUpLink text-primary font-bold" onClick={() => setActive(true)}>Sign Up</a></p>
                        </div>
                    </form>
                </div>

                {/* INFO CONTENT */}
                <div className="info-content Login text-white uppercase top-[5%]">
                    <h2 className="relative animation text-6xl font-bold mb-2 w-[115%] right-[15%]" style={{ '--D': 0, '--S': 20 }}>WELCOME BACK !</h2>
                    <p className="animation text-sm" style={{ '--D': 1, '--S': 21 }}>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
                        industry&apos;s standard dummy.</p>
                </div>

                {/* REGISTRATION FORM */}
                <div className="form-box Register">
                    <div className='relative'>
                        <h2 className="animation text-center text-[2.5rem] font-[800] text-primary uppercase" style={{ '--li': 17, '--S': 0 }}>Sign Up</h2>
                        {/* Signup heading underline */}
                        <div className="animation h-[0.4rem] w-[6rem] top-[3.5rem] rounded-[10px] left-[7.25rem] bg-primary absolute" style={{ '--li': 18, '--S': 1 }}></div>
                    </div>
                    <form onSubmit={handleSignupSubmit(handleSignup)}>
                        <div className="input-box animation" style={{ '--li': 19, '--S': 2 }}>
                            <input
                                type="text"
                                {...signupRegister("username")}
                                required
                            />
                            <label htmlFor="register_username">Username</label>
                            <i className='bx bxs-user-rectangle' ></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 20, '--S': 3 }}>
                            <input
                                type="email"
                                {...signupRegister("email")}
                                required
                            />
                            <label htmlFor="register_email">Email</label>
                            <i className='bx bxs-envelope'></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 21, '--S': 4 }}>
                            <input
                                type="text"
                                {...signupRegister("phone")}
                                required
                            />
                            <label htmlFor="register_phone">Phone</label>
                            <i className='bx bxs-phone' ></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 22, '--S': 5 }}>
                            <input
                                type="password"
                                {...signupRegister("password")}
                                required
                            />
                            <label htmlFor="register_password">Password</label>
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <div className="input-box animation" style={{ '--li': 23, '--S': 6 }}>
                            <input
                                type="password"
                                {...signupRegister("confirmPassword")}
                                required
                            />
                            <label htmlFor="register_confirm_password">Confirm Password</label>
                            <i className='bx bxs-lock'></i>
                        </div>

                        <div className="input-box animation" style={{ '--li': 24, '--S': 7 }}>
                            <button
                                type="submit"
                                disabled={isSignupSubmitting}
                                className={`uppercase w-full ${pending ? 'bg-primarybtn hover:bg-primary cursor-not-allowed' : 'bg-primarybtn hover:bg-primary'} text-white py-3 px-4 rounded-full transition duration-300`}
                            >
                                {isSignupSubmitting ? "Signing up..." : "Sign Up"}
                            </button>
                        </div>

                        {/* Registration link */}
                        <div className="regi-link animation mt-6 text-center text-sm text-gray-600 uppercase" style={{ '--li': 25, '--S': 8 }}>
                            <p>Already have an account? <a href="#" className="SignInLink text-primary font-bold hover:underline" onClick={() => setActive(false)}>Login</a></p>
                        </div>
                    </form>
                </div>
                <div className="info-content Register top-[10%] left-[-2%]">
                    <h2 className="animation text-white text-6xl font-bold mb-6" style={{ '--li': 17, '--S': 0 }}>WELCOME BACK</h2>
                    <p className="animation text-white text-sm mb-10 uppercase" style={{ '--li': 18, '--S': 1 }}>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
                        industry&apos;s standard dummy.</p>
                </div>
            </div>
        </div>
    );
};

export default Auth;
