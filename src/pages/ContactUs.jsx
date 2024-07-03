import React, {useRef,} from 'react';
import axios from 'axios';
import { BsChatRightTextFill } from 'react-icons/bs'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { MdOutlinePhonelinkRing } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    try {
      const response = await axios.post('http://localhost:5000/api/form', data);
      if (response.status === 201) {
        toast.success('Thank you for reaching out! Your message has been sent successfully.');
      }
    } catch (error) {
      toast.error('There was an error sending your message. Please try again later.');
    }
    };

  return (
    <main className=''>
      <ToastContainer />
      <section className='flex flex-col md:flex-row gap-8'>
        <aside className='bg-white py-20 px-4 relative ml-4 md:ml-20'>
              <div className='flex justify-center md:justify-start'>
                <h3 className='bg-primary p-4 rounded-full text-2xl text-white font-semibold shadow-md'>Contact Us</h3>
              </div>
              <div className='mt-4 flex justify-center md:justify-start'>
                <h4 className='md:text-3xl text-2xl font-bold text-primary'>Get in touch with Our Team</h4>
              </div>
              <div className='max-w-md mt-2 flex flex-col justify-center items-center md:justify-start'>
                <p className='text-lg text-slate-500 font-medium  md:ml-0 text-center md:text-start'>Email, call or complete the form to learn how PureHaven can solve your Home Cleaning problem.</p>
                <p className='mt-8 ml-4 text-slate-500 font-medium text-xl'>
                  PureHaven@gmail.com
                </p>
                <p className='mt-8 ml-4 text-slate-500 font-medium text-xl'>
                  +234-8123-3434
                </p>
                <p className='mt-8 ml-4 text-slate-500 font-bold text-xl underline underline-offset-4'>
                  Customer Support
                </p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 max-w-4xl mt-16 gap-2'>
                {
                   [
                    {id: "1234", heading: "Customer Support", text: "Our support team is available around the clock to address any concerns or queries you may have."},
                    {id: "1235", heading: "Feedback and Suggestions", text: "We value your feedback and are continuously working to improve PureHaven. Your input is crucial in shaping the future of PureHaven."},
                    {id: "1236", heading: "Media Inqueries", text: "For media related questions, please contact us at purhavenmedia@gmail.com."},
                 
                  ].map(el =>
                    <div key={el.id}>

                      <h5 className="text-lg md:text-xl text-primary font-bold mt-4">{el.heading}</h5>
                        <p className="text-sm md:text-base text-slate-500 mt-2">{el.text}</p>
                        </div>
                  )
                }
              </div>
        </aside>
        <aside className='mb-8 md:py-20 px-4'>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4 bg-secondary rounded-md shadow-lg p-8 w-full'>
              <div className=''>
                <h3 className='text-2xl font-bold text-primary'>Get in Touch </h3>
                <p className='text-xl text-slate-500 font-semibold mt-2'>You can reach us anytime</p>
              </div>
              <div className="flex items-center justify-center gap-2 border-b border-dark/50 hover:border-primary p-3">
                <input type="text" name='firstname' required placeholder='Enter Firstname' className="flex-1 text-sm outline-none rounded-full p-2" />
                <input type="text" name='lastname' required placeholder='Enter Lastname' className="flex-1 text-sm outline-none rounded-full p-2" />
              </div>
              <div className="flex items-center gap-2 border-b border-dark/50 hover:border-primary p-3">
              <HiOutlineMailOpen className='text-primary text-xl' />
                <input  type="email" name='email' required placeholder='Enter Email' className="text-sm outline-none rounded-full p-2 w-full "/>                
              </div>
              <div className="flex items-center gap-2 border-b border-dark/50 hover:border-primary p-3">
                <MdOutlinePhonelinkRing className='text-primary text-xl' />
                <input type="tel" name='phone' required placeholder='Phone Number' className="flex-1 text-sm outline-none rounded-full p-2" />
              </div>
              <div className="flex gap-2 border-b border-dark/50 hover:border-primary p-3">
              <BsChatRightTextFill className='text-primary' />
                <textarea name='message' required rows={5} placeholder='Enter Your Message' className="flex-1 text-sm outline-none rounded-md p-2"></textarea>
              </div>
              <button type="submit" className="bg-primary hover:bg-primary/80 text-white rounded-full w-max px-6 py-1.5 shadow-lg">Send </button>
            </div>
          </form>
        </aside>
      </section>
    </main>
  )
}
