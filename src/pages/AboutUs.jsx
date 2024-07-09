import React from 'react'
import { cleaningLady, cleaningLady1, cleaningLady2 } from '../assets/images'
import { Link } from 'react-router-dom'


export default function AboutUs() {
  return (
    <main className='bg-white'>
      <section className='relative py-20 px-4'>
      <div className="container mx-auto flex md:items-center gap-6">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter  opacity-50 animate-blob blur-xl"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter  opacity-50 animate-blob blur-xl animation-delay-6000"></div>
          <div className="absolute -bottom-8 right-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter  opacity-50 animate-blob blur-xl animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter  opacity-50 animate-blob blur-xl animation-delay-4000"></div>
      </div>
          <div className=' rounded-full ml-16 flex items-center justify-center md:justify-start relative'>
           <h3 className='bg-primary p-3 rounded-full text-white font-bold'>
              About Us
            </h3>
          </div>
            <div className='relative ml-16 flex items-center justify-center md:justify-start'>
            <p className='text-3xl md:text-4xl font-bold text-primary mb-4'>
              Why will you choose Our Services?
            </p>
            </div>
          <aside className='flex-1 flex flex-col md:flex-row'>
      <div className='container mx-auto p-4 max-w-xl flex flex-col md:flex-row'>
        <div className='grid md:grid-cols-2 gap-4'>
        <img src={cleaningLady} alt="" className='rounded-tl-[50px] w-full h-auto md:h-64 object-cover'/>
        <img src={cleaningLady1} alt="" className='rounded-tr-[50px] w-full h-auto md:h-64 object-cover'/>
        <img src={cleaningLady2} alt="" className='col-span-2 rounded-bl-[100px] rounded-br-[100px] w-full h-auto md:h-64 object-cover'/>
        </div>
      </div>

      <div className='container mx-auto p-4 max-w-xl text-center'>
        <div className='text-slate-500'>
          <p className='leading-relaxed'>At PureHaven, we believe that a clean environment leads to a healthier and happier life. With over five years of experience in the cleaning industry, we specialize in providing top-notch cleaning and sanitizing services for both residential and commercial spaces. Our dedicated team of trained professionals uses eco-friendly products and state-of-the-art equipment to ensure every corner of your space is spotless and germ-free. Whether it&apos;s regular home cleaning, deep carpet cleaning, or specialized sanitizing services, we tailor our solutions to meet your unique needs. Trust PureHaven to deliver exceptional quality and a pristine environment, so you can focus on what truly matters.</p>
          <div className='grid grid-cols-2 gap-4 mt-8'>
            <div className='text-center'>
              <h3 className='text-2xl font-bold text-blue-600 font-sans'>345</h3>
            <h4 className='text-primary font-medium'>Project Done</h4>
            </div>
            <div className='text-center'>
              <h3 className='text-2xl font-bold text-orange-500 font-sans'>1450+</h3>
            <h4 className='text-primary font-medium'>Satisfied Clients</h4>
            </div>
            <div className='text-center'>
              <h3 className='text-2xl font-bold text-yellow-300 font-sans'>
                100+
              </h3>
            <h4 className='text-primary font-medium'>Awards Winner</h4>
            </div>
            <div className='text-center'>
              <h3 className='text-2xl font-bold text-green-400 font-sans'>
                40+
              </h3>
            <h4 className='text-primary font-medium'>Team Members</h4>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <button to={"/Services"} className='ml-16 mt-16 bg-primary p-4 rounded-full text-white font-bold z-10 hover:scale-x-2 hover:bg-primary/80'>Read More</button>
        </div>
      </div>
        
          </aside>
      </section>
    </main>
  )
}
