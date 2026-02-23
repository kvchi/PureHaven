
import { cleaningLady, cleaningLady1, cleaningLady2 } from '../assets/images'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 -left-4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter opacity-50 animate-blob blur-xl" />
          <div className="absolute top-0 -right-4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter opacity-50 animate-blob blur-xl animation-delay-6000" />
          <div className="absolute -bottom-8 right-4 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-green-300 rounded-full mix-blend-multiply filter opacity-50 animate-blob blur-xl animation-delay-2000" />
          <div className="absolute -bottom-8 left-4 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter opacity-50 animate-blob blur-xl animation-delay-4000" />
        </div>
        <div className="container mx-auto relative">
          <div className="flex justify-center md:justify-start">
            <h3 className="bg-primary px-4 py-2 sm:p-3 rounded-full text-white font-bold text-sm sm:text-base">
              About Us
            </h3>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 sm:mb-8 mt-4 text-center md:text-left">
            Why will you choose Our Services?
          </p>
          <aside className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
            <div className="w-full max-w-xl">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <img src={cleaningLady} alt="" className="rounded-tl-[30px] sm:rounded-tl-[50px] w-full h-40 sm:h-48 md:h-64 object-cover" />
                <img src={cleaningLady1} alt="" className="rounded-tr-[30px] sm:rounded-tr-[50px] w-full h-40 sm:h-48 md:h-64 object-cover" />
                <img src={cleaningLady2} alt="" className="col-span-2 rounded-bl-[50px] sm:rounded-bl-[100px] rounded-br-[50px] sm:rounded-br-[100px] w-full h-40 sm:h-48 md:h-64 object-cover" />
              </div>
            </div>
            <div className="w-full max-w-xl text-center lg:text-left">
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                At PureHaven, we believe that a clean environment leads to a healthier and happier life. With over five years of experience in the cleaning industry, we specialize in providing top-notch cleaning and sanitizing services for both residential and commercial spaces. Our dedicated team of trained professionals uses eco-friendly products and state-of-the-art equipment to ensure every corner of your space is spotless and germ-free. Whether it&apos;s regular home cleaning, deep carpet cleaning, or specialized sanitizing services, we tailor our solutions to meet your unique needs. Trust PureHaven to deliver exceptional quality and a pristine environment, so you can focus on what truly matters.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="text-center p-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-600 font-sans">345</h3>
                  <h4 className="text-primary font-medium text-sm sm:text-base">Project Done</h4>
                </div>
                <div className="text-center p-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-500 font-sans">1450+</h3>
                  <h4 className="text-primary font-medium text-sm sm:text-base">Satisfied Clients</h4>
                </div>
                <div className="text-center p-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 font-sans">100+</h3>
                  <h4 className="text-primary font-medium text-sm sm:text-base">Awards Winner</h4>
                </div>
                <div className="text-center p-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-green-400 font-sans">40+</h3>
                  <h4 className="text-primary font-medium text-sm sm:text-base">Team Members</h4>
                </div>
              </div>
              <div className="flex justify-center md:justify-start mt-8 sm:mt-10">
                <Link to="/services" className="inline-block bg-primary py-3 px-6 sm:p-4 rounded-full text-white font-bold hover:bg-primary/80 transition-colors">
                  Read More
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
