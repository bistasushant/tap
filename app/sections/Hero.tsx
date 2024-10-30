import Image from "next/image";
import image from "../assets/image.png";

export const Hero = () => {
    return (
        <div className="pt-12 bg-stone-100">

            {/* Heading Section */}
            <h1 className="text-5xl font-bold text-center">
                Tap Into Advanced Networking:
            </h1>
            <h1 className="py-2 text-5xl font-bold text-center">
                The Future of Digital Business
            </h1>
            <h1 className="py-2 text-5xl font-bold text-center">
                Cards
            </h1>

            {/* Buttons */}
            <div className="flex justify-center gap-1 mt-6">
                <button className="bg-violet-600 text-white text-mdfont-semibold py-4 px-8 rounded-full hover:bg-violet-500 transition">
                    Start For Free Now
                </button>
                <button className="bg-white text-black font-semibold text-md py-4 px-8 border-2 border-gray-800 rounded-full hover:bg-gray-100 transition">
                    For Teams
                </button>
            </div>

            {/* Image Row */}
            <div className="flex justify-center items-center mt-10">
                <Image src={image} alt="Image" className="w-5/6" />
            </div>

        </div>
    );
};
