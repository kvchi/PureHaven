
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { cleaners,woman } from '../assets/images'
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonialData } from '../data/testimonialData';
import { faqsData } from '../data/faqsData';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
    <main className="bg-secondary min-h-screen">
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 lg:gap-12">
          <div className="w-full max-w-xl text-center lg:text-left">
            <h4 className="text-primary text-2xl sm:text-3xl md:text-4xl font-semibold">
              What our Customers say about us
            </h4>
            <p className="text-slate-500 mt-4 sm:mt-6 leading-relaxed text-sm sm:text-base">
              Our customers consistently praise us for our exceptional service, attention to detail, and friendly staff. They love how we transform their spaces into clean, inviting environments. Join our satisfied clients and experience the PureHaven difference!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full max-w-2xl">
            <div className="w-full max-w-[280px] sm:w-72 rounded-lg border-4 sm:border-[10px] border-secondary shadow-xl overflow-hidden shrink-0">
              <img src={woman} alt="" className="w-full h-64 sm:h-80 object-cover" />
            </div>
            <div className="w-full min-w-0 max-w-md overflow-hidden">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                speed={500}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                className="w-full"
              >
                {testimonialData.map((el) => (
                  <SwiperSlide key={el.id} className="text-slate-500 py-4 sm:py-8">
                    <p className="text-sm sm:text-base leading-relaxed">{el.text}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center md:items-start mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white bg-primary px-4 py-2 mt-4 rounded-full w-fit">
              FAQ
            </h3>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-2 text-center md:text-left">
              Frequently Asked Questions
            </h3>
          </div>
          <aside className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
            <div className="w-full max-w-xl lg:max-w-[500px] bg-secondary shadow-xl rounded-lg p-4 sm:p-6">
              {faqsData.map((el, i) => (
                <div key={i} className="border-b border-primary/20 last:border-0 pb-4 last:pb-0 mb-4 last:mb-0">
                  <div
                    className="flex items-center justify-between gap-2 cursor-pointer"
                    onClick={() => toggleFaq(i)}
                    onKeyDown={(e) => e.key === 'Enter' && toggleFaq(i)}
                    role="button"
                    tabIndex={0}
                  >
                    <h2 className="text-lg sm:text-xl font-semibold text-primary underline underline-offset-2 flex-1 min-w-0">
                      {el.heading}
                    </h2>
                    <span className="text-xl sm:text-2xl text-primary shrink-0">
                      {openFaq === i ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="mt-3">
                      <h4 className="text-base sm:text-lg font-bold text-slate-500 mb-2">{el.question}</h4>
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{el.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full max-w-[280px] sm:max-w-xs lg:max-w-[400px] shrink-0">
              <img src={cleaners} alt="" className="w-full h-56 sm:h-64 object-cover rounded-tr-[50px] sm:rounded-tr-[100px] border-4 sm:border-[10px] border-white shadow-xl" />
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
