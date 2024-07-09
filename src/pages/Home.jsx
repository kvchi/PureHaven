import React from "react";


import { hands } from "../assets/images";
import { FaChevronDown } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdCleanHands } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";

export default function Home() {
  return (
    <main className="pt-10 md:pt-0">
      <section className="relative flex items-center justify-center py-10">
        <div>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter  opacity-50 animate-blob blur-xl"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter  opacity-50 animate-blob blur-xl animation-delay-6000"></div>
          <div className="absolute -bottom-8 right-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter  opacity-50 animate-blob blur-xl animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter  opacity-50 animate-blob blur-xl animation-delay-4000"></div>
        </div>
        <div className="relative text-center text-primary">
          <h1 className="text-4xl md:text-6xl mb-2">Guaranteed House</h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            Cleaning Service
          </h1>
          <div className="leading-normal pt-8">
            <p className="text-slate-500">
              More than five years of providing home cleaning services, <br />
              98% of our customers are satisfied with our services
            </p>
          </div>
          
          <div className="pt-8 ">
            <button className="bg-primary text-white p-4 rounded-full font-semibold hover:translate-x-2 hover:bg-primary/80">
              See Details
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-center">
            <img src={hands} alt="hands" />
          </div>
          <aside className="flex flex-col md:flex-row items-center mx-4 md:mx-72 max-w-full bg-secondary p-6 rounded-lg shadow-lg">
            <div className="text-primary font-semibold text-2xl flex items-center underline underline-offset-2 md:no-underline">
             Get Our Service
            </div>
          <div className="flex flex-col md:flex-row items-center justify-center ml-0 md:ml-8 mt-4 md:mt-0">
    <div className="rounded-full border-primary border-[2px] p-2 text-primary flex items-center gap-4 mb-4 md:mb-0">
      Service Type <FaChevronDown />
    </div>
    <div className="rounded-full border-primary border-[2px] p-2 text-primary flex items-center gap-10 md:ml-4">
      Select Date <SlCalender />
    </div>
  </div>
  <button className="text-primary font-semibold text-2xl flex items-center mt-4 md:mt-0 md:ml-8 rounded-full border-primary border-[2px] p-2 hover:scale-105 duration-300">
    See Details
  </button>
</aside>

          <section className=" py-10 px-2 md:px-4">
            <div className="container relative flex flex-col justify-center items-center md:flex-row gap-6  rounded-md shadow-lg px-6 py-8 ">
            
                <div className=" flex flex-col items-center md:items-start gap-6">
                  <h3 className="text-2xl md:text-xl font-bold text-primary underline underline-offset-2">
                    What We Do?
                  </h3>
                  <p className="text-slate-500">
                    More than five years of providing service for house
                    cleaning.
                    <br />
                    We have several options that you can choose from.
                  </p>
                  <div>
                    <button className="text-white font-semibold text-2xl mt-4 md:mt-0  rounded-full  p-2 px-4 bg-primary hover:scale-105 duration-300 hover:bg-primary/80">
                      See Details
                    </button>
                  </div>
                  </div>
                  <div >
                  <aside className="mt-4 md:mt-0 flex flex-col justify-center items-center md:flex-row gap-4 rounded-md p-4 md:justify-start">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border-primary border-[2px]">
                      <MdCleanHands className="text-primary text-5xl" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-semibold text-primary underline underline-offset-8">
                        Home Cleaning & Sanitizing
                      </h3>
                      <p className="mt-4 text-slate-500">
                        We provide fully trained, insured and highly experienced
                        commercial cleaners.
                      </p>
                    </div>
                  </aside>
                  <aside className="mt-4 flex flex-col justify-center items-center md:flex-row gap-4 rounded-md p-4 md:justify-start">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border-primary border-[2px]">
                      <GiVacuumCleaner className="text-primary text-5xl" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-semibold text-primary underline underline-offset-8">
                        Carpet Cleaning & Sanitizing
                      </h3>
                      <p className="mt-4 mb-4 text-slate-500">
                        Using specialized cleaning solutions,restore the
                        appearance of carpets, making them look and feel like
                        new.
                      </p>
                    </div>
                  </aside>
                  </div>
                
                 
              </div>
            
          </section>
        </div>
      </section>
    </main>
  );
}
