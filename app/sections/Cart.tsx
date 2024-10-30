"use client"
import { useState } from "react";
import Image from "next/image";
import card from "../assets/card.png";
import google from "../assets/google.png";
import blackcard from "../assets/blackcard.png";
import whitecard from "../assets/whitecard.png";
import bluecard from "../assets/bluecard.png";
import purplecard from "../assets/purplecard.png";
import blackcard1 from "../assets/blackcard1.png";

export default function Cart() {

    const [selectedImage, setSelectedImage] = useState(card);

    const cards = [
        { src: blackcard, alt: "Black Card" },
        { src: whitecard, alt: "White Card" },
        { src: bluecard, alt: "Blue Card" },
        { src: purplecard, alt: "Purple Card" },
        { src: blackcard1, alt: "Black Card 1" },
    ];

    return (
        <section className="py-4">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start gap-8 md:gap-12">
                <div className="flex flex-row md:flex-col items-center gap-4 overflow-x-auto md:overflow-x-visible">
                    {cards.map((card, index) => (
                        <div key={index}
                         className="w-16 h-16 bg-stone-200 p-2 rounded-lg shadow-sm cursor-pointer flex-shrink-0"
                         onClick={() => setSelectedImage(card.src)}
                         >
                            <Image src={card.src} alt={card.alt} className="rounded-lg" width={60} height={60} />
                        </div>
                    ))}
                </div>
                <div className="bg-stone-200 p-6 rounded-2xl w-full md:w-1/2">
                <Image src={selectedImage} alt="Main Card" width={600} height={400} 
                className="rounded-2xl" />
                </div>
                <div className="w-full md:w-1/2">
                <span className="bg-purple-600 text-white text-xs font-semibold rounded-full px-2 py-1 inline-block mb-2">
                    New
                </span>
                <div className="flex flex-col w-full">

                    <h1 className="text-2xl md:text-4xl font-semibold mt-2 leading-tight">Tap NFC Prestige Card - 
                    <br className="hidden md:block" />
                        Custom Embossed names</h1>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">

                        <p className="text-gray-900 text-lg font-normal mt-2">LE 499 EGP</p>
                        <p className="text-sm flex items-center gap-1">
                            <span>5.0</span>
                            <span>⭐</span>
                        </p>
                        </div>
                            <hr className="my-4 md:my-6 border-t border-gray-300"/>
                            <p className="mt-1 text-sm font-normal text-gray-900 leading-relaxed">Discover the seamless blend of elegance and connectivity with the{" "}
                                <span className="font-semibold">NFC Prestige Card</span>
                                . Tailored for those who make no compromises on quality and convenience, this card places your identity at the forefront with exquisite embossing.</p>
                            <p className="mt-4 text-sm font-normal text-gray-900">It's more than just sharing contact information; it's about making an unforgettable impression.</p>
                        <div className="mt-4">
                            <h3 className="text-gray-600 text-sm">Color: <span className="text-gray-900">Black</span></h3>
                            <div className="flex items-center gap-2 mt-2">
                                    <button className="flex items-center border-2 border-gray-300 rounded-full px-4 py-2 hover:border-gray-600 transition">
                                    <span className="bg-black rounded-full w-2.5 h-2.5"></span>
                                    <span className="text-xs font-normal ml-2">Black</span>
                                    </button>
                                    <button className="flex items-center border-2 border-gray-300 rounded-full px-4 py-2 hover:border-gray-600 transition">
                                    <span className="bg-pink-300 rounded-full w-2.5 h-2.5"></span>
                                    <span className="text-xs font-normal ml-2">Pink</span>
                                    </button>
                                    <button className="flex items-center border-2 border-gray-300 rounded-full px-4 py-2 hover:border-gray-600 transition">
                                    <span className="bg-purple-800 rounded-full w-2.5 h-2.5"></span>
                                    <span className="text-xs font-normal ml-2">Purple</span>
                                    </button>
                                    <button className="flex items-center border-2 border-gray-300 rounded-full px-4 py-2 hover:border-gray-600 transition">
                                    <span className="bg-white border border-gray-300 rounded-full w-2.5 h-2.5"></span>
                                    <span className="text-xs font-normal ml-2">White</span>
                                    </button>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col items-start">
                    <h3 className="text-gray-600 text-sm mb-2">Quantity:</h3>
                    <div className="flex items-center border border-gray-300 rounded-3xl w-28">
                        <button className="mb-1 px-3 py-1 text-lg font-normal">-</button>
                        <span className="px-4 text-sm">1</span>
                        <button className="px-3 py-1 text-lg font-normal">+</button>
                    </div>
                    </div>
                    <div className="mt-6">
                    <input
                        type="text"
                        placeholder="Write Your Name"
                        className="w-full p-3 md:p-4 border rounded-lg mb-4 text-xs"
                    />
                    <input
                        type="text"
                        placeholder="Write Your Title (Optional)"
                        className="w-full p-3 md:p-4 border rounded-lg text-xs"
                    />
                    </div>
                <div className="mt-8">
                    <div className="flex flex-col md:flex-row gap-2">

                    <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-xs py-3 px-28 rounded-full md:w-auto">
                        Add to cart
                    </button>
                    <button className="bg-black hover:bg-gray-800 text-white font-semibold text-xs py-2 px-28 rounded-full flex items-center gap-2 md:w-auto">
                        <span>Buy with</span>
                        <Image src={google} alt="Google Pay" width={24} height={24} />
                        <span>Pay</span>
                    </button>

                    </div>
                    <div className="mt-2 text-right mr-36">
                        
                    <a href="#" className="text-sm text-gray-900 underline mt-2">More payment options</a>
                    </div>

                </div>
                </div>
                </div>
            </div>
        </section>
    );
}