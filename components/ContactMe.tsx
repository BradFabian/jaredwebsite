import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };
type Props = {}

function ContactMe({}: Props) {
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href= `mailto:jleibowich@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. My email is ${formData.email} ${formData.message}`
    };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
         <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>I predict we will <span className="decoration-[#0a65f7]/50 underline"> Chat.</span></h4>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto '>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder="Name" className="contactInput" type="text" /><input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                </div>
                <input {...register('subject')} placeholder="Subject"className="contactInput" type="text" />
                <textarea  {...register('message')} placeholder="Message" className="contactInput"></textarea>
                <button type="submit" className='bg-[#0a65f7]  py-5 px-10 rounded-md text-white font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe