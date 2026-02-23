
import { IoLogoFacebook, IoLogoInstagram, } from 'react-icons/io';
import { RiFlowerFill } from 'react-icons/ri';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { footerData } from '../data/footerData'


export default function Footer() {
  return (
    <footer className='bg-secondary py-20 px-4 relative'>
      <div className="absolute -right-4 w-24 h-24 bg-yellow-300 rounded-full mix-blend-multiply filter opacity-50 animate-move-left-right blur-xl animation-delay-4000"></div>
      <div className="absolute -right-4 w-24 h-24 bg-green-500 rounded-full mix-blend-multiply filter opacity-50 animate-move-left-right blur-xl animation-delay-6000"></div>
      <div className="absolute  left-4 w-24 h-24 bg-primary rounded-full mix-blend-multiply filter opacity-50 animate-move-left-right blur-xl"></div>
      <div className="absolute  left-4 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter opacity-50 animate-move-left-right blur-xl animation-delay-2000"></div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
        <div className="sm:col-span-2 flex flex-col gap-3">
          <Link to="/" className="flex gap-3 items-center w-fit">
            <RiFlowerFill className="text-blue-300 text-2xl md:text-4xl shrink-0" />
            <h1 className="text-primary font-bold text-xl sm:text-2xl md:text-4xl font-serif italic">
              PureHaven
            </h1>
          </Link>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-loose max-w-md">
            At Pure Haven, we are committed to providing exceptional cleaning and sanitizing services. Our team of trained professionals ensures a spotless, healthy environment for your home and business.
          </p>
          <div className="flex gap-4 text-2xl md:text-3xl opacity-90">
            <a href="https://www.facebook.com/chedres" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity"><IoLogoFacebook /></a>
            <a href="https://www.twitter.com/chedres" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity"><FaXTwitter /></a>
            <a href="https://www.instagram.com/chedres" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity"><IoLogoInstagram /></a>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:pt-4">
          {footerData.slice(0, 5).map((el) => (
            <Link key={el.id} to={el.link} className="text-primary text-sm sm:text-base md:text-lg hover:translate-x-2 transition-transform py-1">
              {el.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 lg:pt-4">
          {footerData.slice(5).map((el) => (
            <a key={el.id} href={el.link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm sm:text-base md:text-lg hover:translate-x-2 transition-transform py-1">
              {el.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
