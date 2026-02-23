import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { hands } from "../assets/images";
import { FaChevronDown } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdCleanHands } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";

const SERVICE_OPTIONS = [
  "Home Cleaning & Sanitizing",
  "Carpet Cleaning & Sanitizing",
  "Move Out Cleaning",
  "Regular & Monthly Cleaning",
  "Deep Cleaning",
];

export default function Home() {
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const dropdownRef = useRef(null);
  const dateInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServiceDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectDate = (e) => setSelectedDate(e.target.value);

  const handleSeeDetails = () => {
    navigate("/book", {
      state: { serviceType: selectedServiceType, date: selectedDate },
    });
  };

  const formatDisplayDate = (dateStr) => {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <main className="pt-6 sm:pt-8 md:pt-0 min-h-screen">
      <section className="relative flex items-center justify-center py-8 sm:py-12 md:py-16 px-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 -left-4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter opacity-50 animate-blob blur-xl" />
          <div className="absolute top-0 -right-4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter opacity-50 animate-blob blur-xl animation-delay-6000" />
          <div className="absolute -bottom-8 right-4 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-green-300 rounded-full mix-blend-multiply filter opacity-50 animate-blob blur-xl animation-delay-2000" />
          <div className="absolute -bottom-8 left-4 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter opacity-50 animate-blob blur-xl animation-delay-4000" />
        </div>
        <div className="relative text-center text-primary max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2">Guaranteed House</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            Cleaning Service
          </h1>
          <p className="text-slate-500 text-sm sm:text-base pt-4 sm:pt-6 md:pt-8 leading-relaxed">
            More than five years of providing home cleaning services.
            <span className="hidden sm:inline"> </span>
            <br className="sm:hidden" />
            98% of our customers are satisfied with our services.
          </p>
          <div className="pt-6 sm:pt-8">
            <a href="#what-we-do" className="inline-block bg-primary text-white py-3 px-6 sm:p-4 rounded-full font-semibold hover:bg-primary/80 transition-colors">
              See Details
            </a>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-center pt-4">
          <img src={hands} alt="hands" className="w-full max-w-xs sm:max-w-sm md:max-w-md" />
        </div>
        <aside className="flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between gap-4 sm:gap-6 bg-secondary p-4 sm:p-6 rounded-lg shadow-lg mx-auto max-w-5xl">
          <span className="text-primary font-semibold text-lg sm:text-xl md:text-2xl order-1 w-full md:w-auto text-center md:text-left">
            Get Our Service
          </span>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 order-2">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServiceDropdownOpen((o) => !o)}
                className="rounded-full border-2 border-primary py-2 px-4 text-primary flex items-center gap-2 text-sm sm:text-base bg-white hover:bg-primary/5 transition-colors min-w-[180px] sm:min-w-[200px] justify-between"
              >
                <span className="truncate">
                  {selectedServiceType || "Service Type"}
                </span>
                <FaChevronDown className={`shrink-0 transition-transform ${serviceDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {serviceDropdownOpen && (
                <ul className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-primary rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto py-1">
                  {SERVICE_OPTIONS.map((opt) => (
                    <li key={opt}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedServiceType(opt);
                          setServiceDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm sm:text-base text-slate-700 hover:bg-primary/10 hover:text-primary"
                      >
                        {opt}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <label
              className="relative min-w-[180px] sm:min-w-[200px] flex rounded-full border-2 border-primary py-2 px-4 text-primary items-center gap-2 text-sm sm:text-base bg-white hover:bg-primary/10 transition-colors justify-between cursor-pointer"
              onClick={() => {
                dateInputRef.current?.focus();
                if (typeof dateInputRef.current?.showPicker === "function") {
                  dateInputRef.current.showPicker();
                } else {
                  dateInputRef.current?.click();
                }
              }}
            >
              <span className="truncate">
                {formatDisplayDate(selectedDate) || "Select Date"}
              </span>
              <SlCalender className="shrink-0" />
              <input
                ref={dateInputRef}
                type="date"
                value={selectedDate}
                onChange={handleSelectDate}
                min={new Date().toISOString().split("T")[0]}
                className="sr-only"
                aria-label="Choose date"
              />
            </label>
          </div>
          <button
            type="button"
            onClick={handleSeeDetails}
            className="text-primary font-semibold text-base sm:text-lg md:text-xl rounded-full border-2 border-primary py-2 px-4 hover:scale-105 transition-transform order-3 hover:bg-primary hover:text-white"
          >
            See Details
          </button>
        </aside>

        <section id="what-we-do" className="py-10 sm:py-12 md:py-14">
          <div className="relative flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 rounded-lg shadow-lg bg-secondary/50 p-4 sm:p-6 md:px-8 md:py-8">
            <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-6 text-center lg:text-left max-w-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-primary underline underline-offset-2">
                What We Do?
              </h3>
              <p className="text-slate-500 text-sm sm:text-base">
                More than five years of providing service for house cleaning.
                We have several options that you can choose from.
              </p>
              <Link to="/services" className="text-white font-semibold text-lg sm:text-xl rounded-full py-2 px-4 bg-primary hover:bg-primary/80 transition-colors w-fit inline-block">
                See Details
              </Link>
            </div>
            <div className="w-full max-w-xl space-y-4 sm:space-y-6">
              <aside className="flex flex-col sm:flex-row justify-center items-center gap-4 rounded-lg p-4 bg-white/60">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary shrink-0">
                  <MdCleanHands className="text-primary text-4xl sm:text-5xl" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary underline underline-offset-4">
                    Home Cleaning & Sanitizing
                  </h3>
                  <p className="mt-2 text-slate-500 text-sm sm:text-base">
                    We provide fully trained, insured and highly experienced commercial cleaners.
                  </p>
                </div>
              </aside>
              <aside className="flex flex-col sm:flex-row justify-center items-center gap-4 rounded-lg p-4 bg-white/60">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary shrink-0">
                  <GiVacuumCleaner className="text-primary text-4xl sm:text-5xl" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary underline underline-offset-4">
                    Carpet Cleaning & Sanitizing
                  </h3>
                  <p className="mt-2 text-slate-500 text-sm sm:text-base">
                    Using specialized cleaning solutions, restore the appearance of carpets, making them look and feel like new.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
