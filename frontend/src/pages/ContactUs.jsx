import  {useRef,} from 'react';
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
    <main className="min-h-screen">
      <ToastContainer />
      <section className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-16 xl:gap-20 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <aside className="w-full lg:max-w-md lg:flex-1">
          <div className="flex justify-center lg:justify-start">
            <h3 className="bg-primary px-4 py-2 sm:p-4 rounded-full text-lg sm:text-xl md:text-2xl text-white font-semibold shadow-md w-fit">
              Contact Us
            </h3>
          </div>
          <h4 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center lg:text-left">
            Get in touch with Our Team
          </h4>
          <p className="mt-2 text-slate-500 font-medium text-sm sm:text-base text-center lg:text-left max-w-md">
            Email, call or complete the form to learn how PureHaven can solve your Home Cleaning problem.
          </p>
          <div className="mt-6 lg:mt-8 space-y-1 text-center lg:text-left">
            <p className="text-slate-500 font-medium text-base sm:text-lg">PureHaven@gmail.com</p>
            <p className="text-slate-500 font-medium text-base sm:text-lg">+234-8123-3434</p>
            <p className="text-slate-500 font-bold text-base sm:text-lg underline underline-offset-4">
              Customer Support
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-8 lg:mt-12">
            {[
              { id: "1234", heading: "Customer Support", text: "Our support team is available around the clock to address any concerns or queries you may have." },
              { id: "1235", heading: "Feedback and Suggestions", text: "We value your feedback and are continuously working to improve PureHaven. Your input is crucial in shaping the future of PureHaven." },
              { id: "1236", heading: "Media Inqueries", text: "For media related questions, please contact us at purhavenmedia@gmail.com." },
            ].map((el) => (
              <div key={el.id}>
                <h5 className="text-base sm:text-lg md:text-xl text-primary font-bold">{el.heading}</h5>
                <p className="text-sm md:text-base text-slate-500 mt-2">{el.text}</p>
              </div>
            ))}
          </div>
        </aside>
        <aside className="w-full lg:max-w-xl lg:flex-1 mb-8 lg:mb-0 flex lg:justify-end">
          <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-xl mx-auto lg:mx-0 lg:w-full">
            <div className="flex flex-col gap-4 bg-secondary rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-primary">Get in Touch</h3>
              <p className="text-slate-500 font-semibold text-base sm:text-lg">You can reach us anytime</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="border-b border-dark/50 hover:border-primary p-2 sm:p-3">
                  <input type="text" name="firstname" required placeholder="First name" className="w-full text-sm sm:text-base bg-transparent rounded p-2 min-w-0" />
                </div>
                <div className="border-b border-dark/50 hover:border-primary p-2 sm:p-3">
                  <input type="text" name="lastname" required placeholder="Last name" className="w-full text-sm sm:text-base bg-transparent rounded p-2 min-w-0" />
                </div>
              </div>
              <div className="flex items-center gap-2 border-b border-dark/50 hover:border-primary p-2 sm:p-3">
                <HiOutlineMailOpen className="text-primary text-lg sm:text-xl shrink-0" />
                <input type="email" name="email" required placeholder="Enter Email" className="flex-1 text-sm sm:text-base bg-transparent rounded p-2 min-w-0" />
              </div>
              <div className="flex items-center gap-2 border-b border-dark/50 hover:border-primary p-2 sm:p-3">
                <MdOutlinePhonelinkRing className="text-primary text-lg sm:text-xl shrink-0" />
                <input type="tel" name="phone" required placeholder="Phone Number" className="flex-1 text-sm sm:text-base bg-transparent rounded p-2 min-w-0" />
              </div>
              <div className="flex gap-2 border-b border-dark/50 hover:border-primary p-2 sm:p-3">
                <BsChatRightTextFill className="text-primary shrink-0 mt-1" />
                <textarea name="message" required rows={4} placeholder="Enter Your Message" className="flex-1 text-sm sm:text-base bg-transparent rounded p-2 min-w-0 resize-y" />
              </div>
              <button type="submit" className="bg-primary hover:bg-primary/80 text-white rounded-full w-full sm:w-max px-6 py-3 sm:py-2 shadow-lg transition-colors">
                Send
              </button>
            </div>
          </form>
        </aside>
      </section>
    </main>
  )
}
