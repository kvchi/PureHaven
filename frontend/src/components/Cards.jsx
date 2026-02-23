
import { GiCheckMark } from 'react-icons/gi'

export default function Cards() {
  return (
    <div className="px-0 sm:px-4 md:px-8 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="w-full shadow-xl flex flex-col p-6 sm:p-8 rounded-lg hover:scale-[1.02] duration-300">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-slate-500">Basic plan</h2>
                    <p className='text-xl font-normal text-center text-slate-500'>Standard Package</p>
                    <p className='text-3xl font-semibold underline underline-offset-4 text-center text-slate-500'>$30</p>
                    <div className=' flex gap-2 items-center md:justify-start justify-center mt-6'>
                        <GiCheckMark/>
                        <p className='py-2 border-b mx-4 text-slate-500 '>Surface Cleaning.</p>  
                    </div>
                    <div className=' flex gap-2 items-center md:justify-start justify-center'>
                        <GiCheckMark/>
                        <p className='py-2 border-b mx-4 text-slate-500'>Vacuuming.</p>
                         
                    </div>
                    <div className=' flex gap-2 items-center md:justify-start justify-center'>
                        <GiCheckMark/>
                        <p className='py-2 border-b mx-4 text-slate-500'>Trash Removal.</p>  
                    </div>
                    <div className='flex mt-4 items-center justify-center'>
                    <h4 className='bg-primary rounded-full p-2 text-white font-bold'> Save 25%</h4>
                    </div>
                    <div className='flex mt-4 justify-center'>
                    <button className='bg-primary rounded-full p-2 text-white font-bold'> Choose Plan</button>
                    </div>
                    
            </div>
        <div className="w-full shadow-xl flex flex-col p-6 sm:p-8 rounded-lg hover:scale-[1.02] duration-300">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-slate-500">Pro Plan</h2>
                    <p className='text-xl font-normal text-center text-slate-500'>Standard Package</p>
                    <p className='text-3xl font-semibold underline underline-offset-4 text-center text-slate-500'>$60</p>
                    <div className='mt-6 flex gap-2 items-center md:justify-start justify-center'>
                        <GiCheckMark/>
                        <p className='py-2 border-b mx-4 text-slate-500'>Deep Cleaning.</p>  
                    </div>
                    <div className=' flex gap-2 items-center md:justify-start justify-center'>
                        <GiCheckMark/>
                        <p className='py-2 border-b mx-4 text-slate-500'>Mopping.</p>
                         
                    </div>
                    <div className=' flex gap-2 items-center md:justify-start justify-center'>
                        <GiCheckMark/>
                        <p className='py-2 border-b mx-4 text-slate-500'>Window Cleaning.</p>  
                    </div>
                    <div className='flex mt-4 items-center justify-center'>
                    <h4 className='bg-primary rounded-full p-2 text-white font-bold'> Save 25%</h4>
                    </div>
                    <div className='flex mt-4 justify-center translate-x-2'>
                    <button className='bg-primary rounded-full p-2 text-white font-bold '> Choose Plan</button>
                    </div>
                    
            </div>
        <div className="w-full shadow-xl flex flex-col p-6 sm:p-8 rounded-lg hover:scale-[1.02] duration-300 sm:col-span-2 lg:col-span-1">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-slate-500">Premium Plan</h2>
                    <p className='text-xl font-normal text-center text-slate-500'>Standard Package</p>
                    <p className='text-3xl font-semibold underline underline-offset-4 text-center text-slate-500'>$90</p>
                    <div className='mt-6 flex gap-2 items-center md:justify-start justify-center'>
                        <GiCheckMark/>
                        <p className='py-2 border-b mx-4 text-slate-500'>Comprehensive Deep Cleaning.</p>  
                    </div>
                    <div className=' flex gap-2 items-center md:justify-start justify-center'>
                        <GiCheckMark/>
                        <p className='py-2 border-b mx-4 text-slate-500'>Carpet Shampooing.</p>
                         
                    </div>
                    <div className=' flex gap-2 items-center md:justify-start justify-center'>
                        <GiCheckMark/>
                        <p className='py-2 border-b mx-4 text-slate-500'>Appliance Cleaning.</p>  
                    </div>
                    <div className='flex mt-4 items-center justify-center'>
                    <h4 className='bg-primary rounded-full p-2 text-white font-bold'> Save 25%</h4>
                    </div>
                    <div className='flex mt-4 justify-center'>
                    <button className='bg-primary rounded-full p-2 text-white font-bold'> Choose Plan</button>
                    </div>
                    
            </div>

        </div>
    </div>
  )
}
