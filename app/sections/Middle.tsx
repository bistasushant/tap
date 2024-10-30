import Image from "next/image";
import dark from "../assets/dark.png";
import management from "../assets/management.png";
import tap from "../assets/tap.png";
import store from "../assets/store.png";
import ring from "../assets/ring.png";
import tapicon from "../assets/tapicon.png";

export default function Middle() {
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-purple-400 to-purple-800 rounded-2xl p-6 md:p-12 text-center text-white shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 mt-4 md:mt-6">
            Be a part of the largest
            <br className="hidden md:block" />
            community in MENA region.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mt-1">
                1000+ Organizations
              </h2>
              <p className="text-gray-200 mt-2 text-sm md:text-base">
                Many companies trust our technology in digitalizing their
                business cards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mt-1">
                1,000,000+ Interactions
                <br className="hidden md:block" />
                Made
              </h2>
              <p className="text-gray-200 mt-2 text-sm md:text-base">
                Connections made every day on our app make it easy for people to
                share their info.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mt-1">
                65+ Countries
              </h2>
              <p className="text-gray-200 mt-2 text-sm md:text-base">
                People around the world trust our technology.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-20">
          <div className="bg-black rounded-2xl flex justify-center items-center">
            <Image
              src={dark}
              alt="Dark"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-20">
        <div className="bg-black flex justify-center items-center">
          <div className="mt-8 mb-8 md:mt-12 md:mb-12">
            <Image
              src={management}
              alt="Management"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 mt-10 md:mt-20">
        <div className="bg-black rounded-2xl text-center py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl text-white font-bold mb-6 md:mb-10">
            How it works?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center px-4 md:px-12">
            <div className="flex flex-col items-center gap-4">
              <Image
                src={ring}
                alt="Ring"
                width={150}
                height={100}
                className="w-32 h-auto"
              />
              <h2 className="text-white text-lg md:text-xl font-bold text-center">
                Get a tap product that suits you
              </h2>
              <p className="text-gray-300 text-sm text-center">
                Select from a variety of different products.
              </p>
              <a
                href="#"
                className="text-sm text-white underline hover:no-underline"
              >
                View Collections
              </a>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src={store}
                alt="Store"
                width={150}
                height={100}
                className="w-32 h-auto"
              />
              <h2 className="text-white text-lg md:text-xl font-bold text-center">
                Create Your Free Profile Now
              </h2>
              <p className="text-gray-300 text-sm text-center">
                Download our free app and create your profile, add your info and
                your social media accounts for free.
              </p>
              <a
                href="#"
                className="text-sm text-white underline hover:no-underline"
              >
                Download App
              </a>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src={tap}
                alt="Tap"
                width={150}
                height={100}
                className="w-32 h-auto"
              />
              <h2 className="text-white text-lg md:text-xl font-bold text-center">
                Activate Your Product
              </h2>
              <p className="text-gray-300 text-sm text-center">
                Whenever you receive your product, activate it from the app.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src={tapicon}
                alt="Tapicon"
                width={150}
                height={100}
                className="w-32 h-auto"
              />
              <h2 className="text-white text-lg md:text-xl font-bold text-center">
                Start Networking
              </h2>
              <p className="text-gray-300 text-sm text-center">
                You can now share your info with others with ease!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
