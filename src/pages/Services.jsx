import React from 'react'
import { FaRegCalendarAlt, FaRegCalendarCheck } from 'react-icons/fa'
import { FaPersonWalkingLuggage, FaRegFaceGrinWide } from 'react-icons/fa6'
import { cleaningLady3, cleaningMan } from '../assets/images'


import Cards from '../components/Cards'

export default function Services() {
  return (
    <main className='bg-white py-16 px-4 '>
        <div className='mt-16 flex items-center justify-center md:justify-start md:ml-20 '>
          <h4 className='bg-primary text-white text-xl font-semibold rounded-full p-4'>How We work</h4>
        </div>
        <div className='mt-4 md:ml-20 flex flex-col md:flex-row'>
          <h3 className=' text-primary text-xl md:text-2xl font-bold md:max-w-lg mb-4 text-center'>Our Cleaning Company Work Process For You</h3>
          <p className='leading-loose text-slate-500 md:max-w-sm px-10 ml-4'>Our services goes beyond the basic service and provides you with the beauty of your home and enhance your life.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 ml-4 md:ml-20'>
            {
              [
                {id: "1234", heading: "Clean And Fresh", text: "A clean and fresh home not only enhances your living space but also promotes a healthier lifestyle, providing comfort and peace of mind for you and your family.",color: "text-red-500"},
                {id: "1235", heading: "Enjoy Cleaning", text: "Transform your cleaning routine into an enjoyable experience with our expert services. We provide efficient and thorough cleaning solutions, ensuring your home sparkles while you relax and enjoy a spotless environment.", color: "text-green-500"},
                {id: "1236", heading: "Professional Deep Cleaning", text: "Experience the ultimate deep clean with our professional services. Our skilled team uses advanced techniques and eco-friendly products to remove dirt, grime, and allergens from every corner of your home.", color: "text-yellow-500"},
                {id: "1237", heading: "Reliable Routine Maintenance", text: "Keep your home consistently clean and well-maintained with our reliable routine cleaning services. Our dedicated team follows a customized cleaning plan tailored to your needs, ensuring every area of your home stays spotless.", color: "text-blue-500"},
              ].map(services =>
                <div key={services.id}>
                  <span className={ ` mb-2 *:
                    ${services.color}`}>
                  <FaRegFaceGrinWide className='p-2 text-3xl md:text-4xl shadow-lg rounded-full'/>
                  </span>
                  <h5 className="text-lg md:text-xl text-primary font-bold mt-4">{services.heading}</h5>
                    <p className="text-sm md:text-base text-slate-500 mt-2">{services.text}</p>
                    </div>
              )
            }
        </div>
        <section className='bg-secondary w-screen p-10 md:p-20 px-4 md:px-0 mt-8'>
                <div className=' flex justify-center md:justify-start md:ml-8'>
                  <h3 className='bg-primary p-4 rounded-full text-xl font-semibold text-white text-center'>Why Choose Us</h3>
                </div>
                <aside className='flex-1 flex flex-col md:flex-row relative'>
                  <div className='md:ml-8 mt-4'>
                    <h3 className='text-primary text-2xl md:text-4xl font-semibold  md:max-w-lg text-center md:text-start'>
                      Your Happiness is Our Priority
                    </h3>
                      <p className='leading-loose text-slate-500 text-lg  md:max-w-sm lg:max-w-md mt-2 text-center md:text-start'>
                      At our core, we believe that a clean and tidy home brings happiness and peace of mind.
                      </p>
                     <div className=' max-h-screen flex md:flex-col'>
                     {
                        [
                          {id: "54321",icon:<FaPersonWalkingLuggage />, heading: "Move Out Cleaning", text: " With our meticulous move out cleaning services, we ensure your old space is left spotless and ready for the next chapter.",color: "text-orange-500"},
                          {id: "5432", icon:<FaRegCalendarAlt />, heading: "Regular & Monthly Cleaning", text: " Our Regular & Monthly Cleaning services are designed to keep your home consistently fresh and organized.",color: "text-green-500"},
                          {id: "543",icon:<FaRegCalendarCheck />, heading: "Customer Focused Reviews", text: "At PureHaven, we pride ourselves on being customer-focused, and our reviews reflect our commitment to excellence.",color: "text-yellow-500"}
                        ].map(services =>
                          <div key={services.id} className='flex relative items-center md:space-x-4' >
                            <div className={` mb-28 mr-4 md:mb-8`}>
                            <span className={ `text-2xl *:
                              ${services.color}`}>
                                {services.icon}
                            </span>
                            </div>
                            <div>

                            <h5 className="md:text-xl text-primary font-bold mt-4 ">{services.heading}</h5>
                              <p className="text-sm md:text-base text-slate-500 mt-2 max-w-lg">{services.text}</p>
                            </div>
                              </div>
                        )
                      }
                     </div>
                  </div>
                  <div className='mx-20'>
                    <div className='relative w-36 md:w-56 '>
                       <img src={cleaningMan} alt="" className='h-40 md:h-72 object-cover rounded-tr-[50px] ml-44 mt-4'/>
                       <img src={cleaningLady3} alt="" className='h-44 md:h-72  object-cover rounded-tr-[50px] absolute top-24 left-20 md:left-0 border-[8px] border-secondary '/>
                         </div>
                         <div className='relative -right-60 mt-4'>
                          <button className='bg-primary p-4 rounded-full text-white font-semibold hover:scale-105 duration-300 hover:bg-primary/80'>Book Now</button>
                           </div>
                    </div>
                </aside>
                
        </section>
        <section className='bg-white w-full  p-10 px-4 '>
                <div className='flex  items-center justify-center md:justify-start'>
                  <h3 className='bg-primary/90  p-2 text-xl md:text-2xl rounded-full text-white font-semibold'>
                    Pricing
                  </h3>
                </div>
                <aside className='flex-1 flex flex-col md:flex-row relative'>
                  <h4 className='text-primary font-bold text-3xl mt-2 text-center'>Simple Plan for Everyone</h4>
              <Cards/>
                </aside>
                
        </section>
    </main>
  )
}
