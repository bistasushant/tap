"use client";
import Image from "next/image";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";
import pic8 from "../assets/pic8.png";
import blackcard from "../assets/blackcard.png";

const products = [
  { image: pic1, name: "Tap NFC Leather Keychain - Burgundy - Share Instantly", price: "LE 349 EGP", rating: 5.0 },
  { image: pic2, name: "Pocket™ - World's Most Advanced NFC Cardholder - Havan", price: "LE 599 EGP", rating: 4.3 },
  { image: pic3, name: "GoWrist™ - Compatible with Apple Watch", price: "LE 549 EGP", rating: 5.0, originalPrice: "LE 750 EGP", discount: "Save 27%" },
  { image: pic4, name: "XL Sticker - For Social Venues - Black", price: "LE 399 EGP", rating: 5.0 },
  { image: pic5, name: "Tap NFC Sticker - White", price: "LE 250 EGP", rating: 5.0 },
  { image: pic6, name: "Tap Display - For Shops & Venues - Black", price: "LE 599 EGP", rating: 5.0 },
  { image: pic7, name: "GoWrist™ - Compatible with Traditional Watch", price: "LE 699 EGP", rating: 5.0, originalPrice: "LE 499 EGP", discount: "Save 29%" },
  { image: pic8, name: "RFID & NFC Business Card", price: "LE 499 EGP", rating: 5.0 },
  { image: blackcard, name: "Tap NFC Prestige Card Holder", price: "LE 499 EGP", rating: 5.0 },
];

export default function FeaturedCollection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-4xl font-semibold">Featured Collection</h1>
          <div className="flex items-center gap-2">
            <a href="#" className="text-sm font-normal text-gray-600 hover:text-gray-800 hover:underline">
              View all
            </a>
            {/* Hide scroll button on mobile */}
            <button
              onClick={scrollRight}
              className="w-6 h-6 bg-gray-200 rounded-full hidden md:flex items-center justify-center hover:bg-gray-300 transition"
            >
              <ArrowRightIcon className="h-4 w-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Products Scrollable Row */}
        <div className="relative mt-6">
          {/* Left Scroll Button - Hidden on Mobile */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-gray-100 rounded-full hidden md:flex items-center justify-center shadow hover:bg-gray-200 transition"
          >
            <ArrowLeftIcon className="h-4 w-4 text-gray-700" />
          </button>

          {/* Product Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll gap-6 pb-4 scroll-smooth scrollbar-hide"
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="relative bg-gray-100 p-4 md:p-6 rounded-lg shadow-md min-w-[250px] md:min-w-[350px] max-w-[250px] md:max-w-[350px] flex-shrink-0"
              >
                {/* Product Image with Overlay */}
                <div className="relative group">
                  {product.discount && (
                    <span className="bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-1 absolute top-1 left-1">
                      {product.discount}
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="rounded-lg w-full h-[250px] md:h-[350px] object-cover"
                  />
                  {/* +Quick Add Button in Bottom Right */}
                  <button className="absolute bottom-2 right-2 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    + Quick add
                  </button>
                </div>

                {/* Product Details */}
                <div className="mt-4">
                  <div className="flex justify-between items-center gap-2">
                    <h2 className="text-xs md:text-sm font-semibold text-gray-800 flex-1">
                      {product.name}
                    </h2>
                    <div className="flex items-center gap-1 text-xs md:text-sm text-gray-500">
                      <span>{product.rating}</span>
                      <span>⭐</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="text-gray-600 text-xs md:text-sm font-normal">
                      {product.originalPrice ? (
                        <span className="text-red-600">{product.price}</span>
                      ) : (
                        product.price
                      )}
                    </p>
                    {product.originalPrice && (
                      <p className="text-gray-500 line-through text-xs md:text-sm">
                        {product.originalPrice}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button - Hidden on Mobile */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-gray-100 rounded-full hidden md:flex items-center justify-center shadow hover:bg-gray-200 transition"
          >
            <ArrowRightIcon className="h-4 w-4 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
