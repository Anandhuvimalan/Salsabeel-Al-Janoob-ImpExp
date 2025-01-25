import React from "react";
import image1 from "../assets/submenu/image1.webp";
import image2 from "../assets/submenu/image2.webp";
import image3 from "../assets/submenu/image3.webp";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Aisha Al Hashmi",
      title: "CEO, Global Trade Solutions",
      message:
        "Salsabeel Al Janoob has been an exceptional partner in our export-import operations. Their professionalism and efficiency have been key to our success.",
      image: image1,
    },
    {
      name: "Omar Abdullah",
      title: "Director, Waste Management Co.",
      message:
        "The team at Salsabeel Al Janoob excels in waste management solutions. Their attention to detail and commitment to compliance is unmatched.",
      image: image2,
    },
    {
      name: "Fatima Noor",
      title: "Owner, Creative Retail Solutions",
      message:
        "Thanks to Salsabeel Al Janoob's retail consultancy services, our business has seen tremendous growth. Their insights are invaluable!",
      image: image3,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-gray-300">
      {/* Left Section: Heading */}
      <div className="lg:sticky lg:top-0 lg:h-screen w-full lg:w-1/2 bg-gray-800 p-6 lg:p-10 flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Our Testimonials
          </h1>
          <p className="text-sm lg:text-lg text-gray-400 mb-3 lg:mb-4">
            At Salsabeel Al Janoob, we value our clients and strive to build
            lasting relationships based on trust and exceptional service.
          </p>
          <p className="text-sm lg:text-lg text-gray-400">
            Here's what our clients have to say about working with us.
          </p>
        </div>
      </div>

      {/* Right Section: Sticky Scrolling Container */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <div className="h-[230vh] lg:h-[350vh] relative w-[90%] lg:w-[80%] flex flex-col justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="sticky top-[40vh] lg:top-[50vh] transform -translate-y-1/2 transition-transform duration-700 ease-in-out"
              style={{
                zIndex: index + 1, // Ensure proper stacking
                paddingTop: `${index * 1.5}rem`, // Reduced padding for mobile
              }}
            >
              <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700 p-4 md:p-6 lg:p-8 h-[50vh] md:h-[60vh] lg:h-[70vh] flex flex-col justify-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-gray-700 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-green-400 mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 italic mb-3">
                    {testimonial.title}
                  </p>
                  <blockquote className="text-sm md:text-base lg:text-lg text-gray-400">
                    "{testimonial.message}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Testimonial;
