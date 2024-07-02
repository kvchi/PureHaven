import React from 'react'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { cleaners,woman } from '../assets/images'
import { Navigation, Pagination,} from 'swiper/modules';
import { testimonialData } from '../data/testimonialData';
import { faqsData } from '../data/faqsData';
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp } from 'react-icons/fa';

export default function Testimonials() {


  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => {
    if (openFaq === i) {
      setOpenFaq(null); // Close the current FAQ if it's already open
    } else {
      setOpenFaq(i); // Open the clicked FAQ
    }
  };




  return (
    <main className='bg-secondary'>
      <section className='w-full py-20 md:ml-20'>
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-start px-4'>
        <h4 className='text-primary max-w-sm text-4xl font-semibold'>What our Customers say about us</h4>
        <div className=' mx-44 mt-8'>
        <p className='text-slate-500 max-w-md'>
        Our customers consistently praise us for our exceptional service, attention to detail, and friendly staff. They love how we transform their spaces into clean, inviting environments. Join our satisfied clients and experience the PureHaven difference!
        </p>
        </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-start mt-8'>
        <div className='w-72 rounded-md border-[10px] border-secondary shadow-xl'>
          <img src={woman} alt="" />
        </div>
        <div className='max-w-2xl mx-44'>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
     className=' max-w-sm'>
      {
        testimonialData.map(el => (

          <SwiperSlide key={el.id} className='text-slate-500 mt-12'>
              <p>{el.text}</p>
          </SwiperSlide>
        ))}
              
                    
                  
  
      
        
    </Swiper> 
        </div>
        </div>
      </section>
      <section className='bg-white'>
      <div className='container flex flex-col item-center px-4 p-12 ml-16 '>
       <div className='flex items-center justify-center md:justify-start'>
        <h3 className='text-2xl font-semibold text-white bg-primary p-2 mt-8 rounded-full'>FAQ</h3>
       </div>
        <h3 className='text-4xl text-center md:text-start font-bold text-primary mt-2'>Frquently Asked Questions</h3>
      </div>
    <aside className='flex flex-col md:flex-row'>
    <div className='faq ml-20 w-[500px] mb-12 bg-secondary shadow-xl rounded-md p-4'>
          {faqsData.map((el, i)=> (
                <div key={i} className='el'>
                  <div className='heading flex items-center justify-between'>
                    <h2 className='text-2xl font-semibold text-primary underline underline-offset-4 p-3 mb-2 mt-4'>{el.heading}</h2>
                    <span className='mr-8 text-2xl text-primary cursor-pointer hover:translate-y-2 duration-300' 
                onClick={() => toggleFaq(i)}>  
                    {openFaq === i ? <FaChevronUp /> : <FaChevronDown />}
                 </span>
                  </div>
                  {openFaq === i && (
                    <>
                    <div className='question w-[400px]'> 
                     <h4 className=' text-3xl font-bold text-slate-500 mb-2'>{el.question}</h4>
                    </div>
                      <div className='answer'>
                      <p className='text-slate-400 leading-smooth'>{el.answer}</p>
                      </div>
                   </>
                  )}
                </div>
          ))} 
      </div>
      <div className='ml-20 mb-4 md:ml-56 w-[500px] '>
        <img src={cleaners} alt="" className='rounded-tr-[100px] border-[10px] border-white shadow-xl'/>
      </div>
    </aside>
      
      </section>
    </main>
  )
}
