import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { SlCalender } from "react-icons/sl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE = "http://localhost:5000";

const SERVICE_OPTIONS = [
  "Home Cleaning & Sanitizing",
  "Carpet Cleaning & Sanitizing",
  "Move Out Cleaning",
  "Regular & Monthly Cleaning",
  "Deep Cleaning",
];

function formatDisplayDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BookService() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const dateInputRef = useRef(null);

  const [serviceType, setServiceType] = useState(state.serviceType || "");
  const [date, setDate] = useState(state.date || "");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      toast.error("Please enter your phone number.");
      return;
    }
    try {
      const response = await axios.post(`${API_BASE}/api/booking`, {
        serviceType,
        date,
        name: name.trim(),
        phone: phone.trim(),
      });
      if (response.status === 201) {
        toast.success(response.data.message || "Booking request received! We'll contact you shortly.");
        setServiceType("");
        setDate("");
        setName("");
        setPhone("");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong. Please try again.";
      toast.error(message);
    }
  };

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6">
      <ToastContainer />
      <div className="container mx-auto max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8">
          Complete Your Booking
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-secondary rounded-xl shadow-lg p-6 sm:p-8 space-y-6"
        >
          <div>
            <label htmlFor="book-service" className="block text-sm font-semibold text-primary mb-1">
              Service Type
            </label>
            <select
              id="book-service"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
              className="w-full rounded-lg border-2 border-primary/30 bg-white px-4 py-3 text-slate-700 focus:border-primary focus:outline-none appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%23FF9EAA%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5rem] bg-[right_0.5rem_center] bg-no-repeat pr-10"
            >
              <option value="">Select a service type</option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-1">
              Date
            </label>
            <label
              className="flex items-center gap-2 w-full rounded-lg border-2 border-primary/30 bg-white px-4 py-3 text-slate-700 cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => {
                dateInputRef.current?.focus();
                if (typeof dateInputRef.current?.showPicker === "function") {
                  dateInputRef.current.showPicker();
                } else {
                  dateInputRef.current?.click();
                }
              }}
            >
              <SlCalender className="text-primary shrink-0" />
              <span className="flex-1 flex items-center min-h-[1.5rem]">
                {formatDisplayDate(date) || "Select date"}
              </span>
              <input
                ref={dateInputRef}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="sr-only"
                aria-label="Choose date"
              />
            </label>
          </div>
          <div>
            <label htmlFor="book-name" className="block text-sm font-semibold text-primary mb-1">
              Name
            </label>
            <input
              id="book-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full rounded-lg border-2 border-primary/30 bg-white px-4 py-3 text-slate-700 placeholder-slate-400 focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="book-phone" className="block text-sm font-semibold text-primary mb-1">
              Phone Number
            </label>
            <input
              id="book-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
              className="w-full rounded-lg border-2 border-primary/30 bg-white px-4 py-3 text-slate-700 placeholder-slate-400 focus:border-primary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary/80 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
