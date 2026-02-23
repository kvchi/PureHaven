
import { FaRegCalendarAlt, FaRegCalendarCheck } from 'react-icons/fa'
import { FaPersonWalkingLuggage, FaRegFaceGrinWide } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { cleaningLady3, cleaningMan } from '../assets/images'
import Cards from '../components/Cards'

export default function Services() {
  return (
    <main className="bg-white min-h-screen py-10 sm:py-14 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex justify-center md:justify-start">
          <h4 className="bg-primary text-white text-base sm:text-lg md:text-xl font-semibold rounded-full px-4 py-2 sm:p-4">
            How We work
          </h4>
        </div>
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row md:gap-8">
          <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-bold md:max-w-lg mb-2 md:mb-0 text-center md:text-left">
            Our Cleaning Company Work Process For You
          </h3>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed md:max-w-sm text-center md:text-left px-2 sm:px-0">
            Our services go beyond the basic service and provide you with the beauty of your home and enhance your life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 mt-8">
          {[
            { id: "1234", heading: "Clean And Fresh", text: "A clean and fresh home not only enhances your living space but also promotes a healthier lifestyle, providing comfort and peace of mind for you and your family.", color: "text-red-500" },
            { id: "1235", heading: "Enjoy Cleaning", text: "Transform your cleaning routine into an enjoyable experience with our expert services. We provide efficient and thorough cleaning solutions, ensuring your home sparkles while you relax and enjoy a spotless environment.", color: "text-green-500" },
            { id: "1236", heading: "Professional Deep Cleaning", text: "Experience the ultimate deep clean with our professional services. Our skilled team uses advanced techniques and eco-friendly products to remove dirt, grime, and allergens from every corner of your home.", color: "text-yellow-500" },
            { id: "1237", heading: "Reliable Routine Maintenance", text: "Keep your home consistently clean and well-maintained with our reliable routine cleaning services. Our dedicated team follows a customized cleaning plan tailored to your needs, ensuring every area of your home stays spotless.", color: "text-blue-500" },
          ].map((services) => (
            <div key={services.id} className="text-center md:text-left">
              <span className={`inline-block mb-2 ${services.color}`}>
                <FaRegFaceGrinWide className="p-2 text-3xl md:text-4xl shadow-lg rounded-full" />
              </span>
              <h5 className="text-lg md:text-xl text-primary font-bold mt-4">{services.heading}</h5>
              <p className="text-sm md:text-base text-slate-500 mt-2">{services.text}</p>
            </div>
          ))}
        </div>

        <section className="bg-secondary p-6 sm:p-10 md:p-16 lg:p-20 mt-10 sm:mt-12 rounded-lg overflow-hidden">
          <div className="flex justify-center md:justify-start">
            <h3 className="bg-primary px-4 py-2 sm:p-4 rounded-full text-lg sm:text-xl font-semibold text-white">
              Why Choose Us
            </h3>
          </div>
          <aside className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-6 items-center lg:items-start">
            <div className="flex-1 w-full max-w-xl space-y-6">
              <h3 className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center lg:text-left">
                Your Happiness is Our Priority
              </h3>
              <p className="text-slate-500 text-sm sm:text-base lg:max-w-md leading-relaxed text-center lg:text-left">
                At our core, we believe that a clean and tidy home brings happiness and peace of mind.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { id: "54321", icon: <FaPersonWalkingLuggage className="text-2xl" />, heading: "Move Out Cleaning", text: "With our meticulous move out cleaning services, we ensure your old space is left spotless and ready for the next chapter.", color: "text-orange-500" },
                  { id: "5432", icon: <FaRegCalendarAlt className="text-2xl" />, heading: "Regular & Monthly Cleaning", text: "Our Regular & Monthly Cleaning services are designed to keep your home consistently fresh and organized.", color: "text-green-500" },
                  { id: "543", icon: <FaRegCalendarCheck className="text-2xl" />, heading: "Customer Focused Reviews", text: "At PureHaven, we pride ourselves on being customer-focused, and our reviews reflect our commitment to excellence.", color: "text-yellow-500" },
                ].map((services) => (
                  <div key={services.id} className="flex gap-4 items-start">
                    <span className={`shrink-0 ${services.color}`}>{services.icon}</span>
                    <div>
                      <h5 className="text-base md:text-xl text-primary font-bold">{services.heading}</h5>
                      <p className="text-sm md:text-base text-slate-500 mt-2">{services.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center lg:justify-start">
                <Link to="/book" className="inline-block bg-primary py-3 px-6 rounded-full text-white font-semibold hover:bg-primary/80 transition-colors">
                  Book Now
                </Link>
              </div>
            </div>
            <div className="relative flex flex-col items-center lg:items-end">
              <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm">
                <img src={cleaningMan} alt="" className="w-full h-48 sm:h-56 md:h-72 object-cover rounded-tr-[30px] md:rounded-tr-[50px] hidden sm:block" />
                <img src={cleaningLady3} alt="" className="w-full h-52 sm:h-60 md:h-72 object-cover rounded-tr-[30px] md:rounded-tr-[50px] border-4 sm:border-[8px] border-secondary shadow-lg" />
              </div>
            </div>
          </aside>
        </section>

        <section className="w-full py-10 sm:py-12 px-0">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <h3 className="bg-primary/90 px-4 py-2 text-lg sm:text-xl md:text-2xl rounded-full text-white font-semibold">
              Pricing
            </h3>
          </div>
          <h4 className="text-primary font-bold text-2xl sm:text-3xl mt-2 mb-6 text-center md:text-left">
            Simple Plan for Everyone
          </h4>
          <Cards />
        </section>
      </div>
    </main>
  )
}
