import Image from "next/image";
import contact from "../assets/contact.png";
import business from "../assets/business.png";
import profile from "../assets/profile.png";
import sharing from "../assets/sharing.png";
import product from "../assets/product.png";
import track from "../assets/track.png";

const features = [
  {
    title: "Contact Management",
    description: "Streamline and enhance networking efficiently.",
    image: contact,
  },
  {
    title: "Scan Physical Business Cards",
    description:
      "Enables users to digitize traditional business cards using their smartphone's camera.",
    image: business,
  },
  {
    title: "Personalized Profiles",
    description:
      "Allows users to create highly customizable digital profiles that go beyond basic contact information.",
    image: profile,
  },
  {
    title: "Customized Sharing",
    description:
      "Tailor the information you share based on the specific context or recipient.",
    image: sharing,
  },
  {
    title: "Product Management",
    description:
      "Control your product like never before and yet more to feature to come.",
    image: product,
  },
  {
    title: "Track Your Performance",
    description:
      "Stay ahead by monitoring your performance metrics, views, and taps.",
    image: track,
  },
];

export default function Features() {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-gray-300 to-gray-400">
            Features
          </h1>
          <h3 className="mt-8 md:mt-14 text-xl md:text-3xl font-bold text-gray-900 text-center">
            Get to know more about our solution
          </h3>
          <button className="bg-black text-white hover:bg-gray-700 px-6 py-3 md:px-8 md:py-4 rounded-full mt-6 md:mt-8 font-bold">
            Download The App Now
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 mt-16 md:mt-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-stone-100 border border-white/15 rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-2 mt-4">
                {feature.title}
              </h2>
              <p className="text-gray-800 font-normal px-2">
                {feature.description}
              </p>
              <Image
                src={feature.image}
                alt={feature.title}
                className="mb-2 mt-8 w-full h-auto max-w-xs md:max-w-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
