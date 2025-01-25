import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer"
export default function ContactForm() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <Navbar />
      {/* Add padding at the top */}
      <div className="mx-auto px-6 lg:px-10 space-y-12 py-20 lg:py-28">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-light text-white">Contact Salsabeel Al Janoob ImpExp</h1>
          <p className="text-lg text-gray-400">We usually respond within 30 minutes.</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-16">
          {/* Form */}
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block">
                  What is your name? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full bg-gray-900 border border-gray-800 rounded-md h-12 px-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="block">
                  Your company?
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company name"
                  className="w-full bg-gray-900 border border-gray-800 rounded-md h-12 px-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block">
                What do you need? <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your requirements"
                className="w-full bg-gray-900 border border-gray-800 rounded-md min-h-[120px] px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                required
              ></textarea>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block">
                Your email address? <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@example.com"
                className="w-full bg-gray-900 border border-gray-800 rounded-md h-12 px-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block">
                A contact number <span className="text-gray-500">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your phone number"
                className="w-full bg-gray-900 border border-gray-800 rounded-md h-12 px-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-base rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Send
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-500 mb-1">Email</h3>
              <a href="mailto:info@salsabeelaljanoobimpexp.com" className="text-white hover:text-gray-300">
                info@salsabeelaljanoobimpexp.com
              </a>
            </div>
            <div>
              <h3 className="text-gray-500 mb-1">Phone</h3>
              <div className="space-y-2">
                <a href="tel:+96891718606" className="block text-white hover:text-gray-300">
                  Oman: +968 9171 8606
                </a>
                <a href="tel:+919349474746" className="block text-white hover:text-gray-300">
                  India: +91 93494 74746
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-gray-500 mb-1">Mon-Fri</h3>
              <p className="text-white">9:30 - 19:00</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
