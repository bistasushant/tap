import ambuja from "../assets/ambuja.png";
import esewa from "../assets/esewa.png";
import Eyeplex from "../assets/Eyeplex.png";
import khalti from "../assets/khalti.png";
import oyo from "../assets/oyo.png";
import Yeti from "../assets/Yeti.png";
import fonpay from "../assets/fonpay.png";
import iphone from "../assets/iphone.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Logo Slider */}
        <div className="overflow-x-auto md:overflow-x-visible scrollbar-hide">
          <div className="flex items-center gap-10 md:gap-6 md:justify-between">
            {[ambuja, esewa, Eyeplex, khalti, oyo, Yeti, fonpay].map(
              (logo, index) => (
                <img
                  src={logo.src}
                  key={index}
                  className="h-16 w-auto object-contain transform transition duration-300 hover:scale-110 flex-shrink-0 md:flex-shrink"
                  alt="Brand Logo"
                />
              )
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-4 md:px-10 border border-white bg-gray-200 rounded-3xl">
            <div className="py-10 md:py-20 md:ml-8">
            <h1 className="text-4xl md:text-5xl font-bold">
                What is a digital <br className="hidden md:block" /> business card?
            </h1>
              <p className="text-md mt-4 text-gray-800 leading-relaxed">
                In today's fast-paced business world, our Digital Business 
                Card represents the cutting edge of networking. It's an eco-friendly,
                tech-savvy solution, enabling you to share your contact
                information instantly and effortlessly. Powered by Near Field
                Communication (NFC) and QR code technology, our digital card
                transforms the traditional business card into a dynamic,
                interactive experience.
              </p>
              <button className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full mt-4 font-bold">
                Learn More
              </button>
            </div>
            <div className="p-8">
            <Image
              src={iphone}
              alt="Digital Business Card"
              className="w-full h-auto object-cover rounded-xl"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
