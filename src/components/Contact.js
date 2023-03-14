import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com'
import 'react-toastify/dist/ReactToastify.min.css';
import NavBar from './NavBar';
import Footer from './Footer';


export default function Contact() {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const options = {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
    };

    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm();

    const inputName = watch("name"); // watch for changes in the "name" input
    const inputEmail = watch("email"); // watch for changes in the "email" input
    const inputMessage = watch("message"); // watch for changes in the "message" input

    const toastifySuccess = () => {
        toast('message-sent', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            toastId: 'notifyToast',
            className: 'mb-4 mr-3 text-white bg-lines !important border-solid border border-lines rounded-md',
            bodyClassName: 'bg-lines'
        });
    };

    const onSubmit = async (data) => {
        const { name, email, message } = data;

        try {
            const templateParams = {
                name,
                email,
                message
            };
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
            reset();
            toastifySuccess();
        } catch (e) {
            console.log(e);
        }
    };




    return (
        <div className="w-full bg-primary-2 border-solid border border-lines rounded-md h-full">
            <div class="flex flex-col h-full justify-between">
                <header class="h-auto"><NavBar /></header>
                <main class="mb-auto h-full w-full">
                    <div className="flex flex-row h-full w-full">
                        <div className="h-full w-1/5 border-solid border-r border-lines">
                            <div className="border-solid border-b border-lines">
                                <p className="p-2 text-white">contact-info</p>
                            </div>
                            <div className="p-6 text-lg">
                                <span>
                                    <span class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" fill="white" /></svg>
                                    </span>
                                    <span class=" pl-2 text-white ">vygovskaia.e@gmail.com</span>
                                </span>
                                <br /><br />
                                <span class="mt-6">
                                    <span class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" fill="white" /></svg>
                                    </span>
                                    <span class="pl-2 text-white">+1 905 226-95-25</span>
                                </span>
                            </div>
                        </div>
                        <div className=" h-full w-47 border-solid border-r border-lines">
                            <div className="border-solid border-b border-lines">
                                <p className="p-2 text-white">contact-form</p>
                            </div>
                            <div className="text-secondary-1 p-14">
                                <form id="contact-form" method="POST" onSubmit={handleSubmit(onSubmit)} noValidate >
                                    <div className="form-group mb-8">
                                        <label htmlFor="name">_name</label>
                                        <br></br>
                                        <input  {...register('name', {
                                            required: { value: true, message: 'Please enter your name' },
                                            maxLength: {
                                                value: 30,
                                                message: 'Please use 30 characters or less'
                                            }
                                        })} type="text" id="name" className="form-control mt-4 p-2 w-full bg-primary-3 border-solid border border-lines rounded-md" />
                                        {errors.name && <span className='text-accent-1'>{errors.name.message}</span>}
                                    </div>
                                    <div className="form-group mb-8">
                                        <label htmlFor="email">_email</label>
                                        <br></br>
                                        <input {...register('email', {
                                            required: true,
                                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                        })} type="email" id="email" className="form-control mt-4 p-2 w-full bg-primary-3 border-solid border border-lines rounded-md" aria-describedby="emailHelp" />
                                        {errors.email && (
                                            <span className='text-accent-1'>Please enter a valid email address</span>
                                        )}
                                    </div>
                                    <div className="form-group  mb-8">
                                        <label htmlFor="message">_message</label>
                                        <br></br>
                                        <textarea {...register('message', {
                                            required: true
                                        })} id="message" className="form-control p-2 mt-4 w-full bg-primary-3 border-solid border border-lines rounded-md" rows="7"></textarea>
                                        {errors.message && <span className='text-accent-1'>Please enter a message</span>}
                                    </div>
                                    <button type="submit" className="btn btn-primary w-52 bg-lines text-white p-2 border-solid border border-lines rounded-md">send-message</button>
                                </form>
                            </div>
                        </div>
                        <div className="text-white mt-40 ml-20 text-lg h-auto ">
                            <p>1 <span className="text-accent-4">const</span><span className="text-secondary-3"> message</span> <span className="text-accent-4">=</span> {'{'}</p>
                            <p className="w-96" style={{ overflowWrap: 'break-word' }}>2<span className="text-secondary-3">&nbsp;&nbsp;name:</span><span className="text-accent-1">"{inputName}"</span></p>
                            <p className="w-96" style={{ overflowWrap: 'break-word' }}>3<span className="text-secondary-3">&nbsp;&nbsp;email:</span><span className="text-accent-1">"{inputEmail}"</span></p>
                            <p className="w-96" style={{ overflowWrap: 'break-word' }}>4<span className="text-secondary-3">&nbsp;&nbsp;message:</span><span className="text-accent-1">"{inputMessage}"</span></p>
                            <p>5 <span className="text-secondary-1">&nbsp;date:</span><span className="text-accent-1"> "{formattedDate}"</span></p>
                            <p>6 {'}'}</p>
                        </div>
                    </div>
                    <ToastContainer  />
                </main>
                <footer class="h-auto"><Footer /></footer>
            </div>
        </div>
    )
}