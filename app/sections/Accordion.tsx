"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import googlePlay from "../assets/googleplay.png";
import appStore from "../assets/appstore.png";

export default function FAQ() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-8">
        {/* Left Side */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">FAQ</h2>
          <p className="text-gray-800 mt-4 md:mt-6 text-sm">
            Our customer support is available Saturday to Thursday: 11am-5:30pm.
          </p>
          <p className="text-gray-500 text-sm">Average answer time: 24h</p>
        </div>

        {/* Right Side - Accordion */}
        <div className="flex-1 bg-gray-100 p-4 md:p-6 rounded-lg">
          <Accordion.Root type="single" collapsible>
            {[
              {
                value: "item-1",
                question: "What is tap?",
                answer: `Tap is advancing your networking game by allowing you to share it all; your social media, contact 
                info, files, and so much more. Tap uses NFC technology integrated into various forms 
                such as cards, stickers, and keychains. This contactless technology can up your networking and 
                leave everyone you meet stunned with the ease of sharing everything with just a tap! Other 
                people don’t need an app to receive your info.`,
              },
              {
                value: "item-2",
                question: "How does it work?",
                answer: `An integrated NFC chip in Tap Products wirelessly transmits data 
                to your smartphone. Push notifications appear on other phones to
                begin the sharing. When they tap on that notification, your profile 
                will open on their phone. This doesn't require an app!`,
              },
              {
                value: "item-3",
                question:
                  "Do other people need to download the app to receive my info?",
                answer: `No, other people don't need an app to receive your data. If their device has NFC, simply tap your product 
                to their device and your profile will pop up instantly.`,
              },
              {
                value: "item-4",
                question: "Tapping to older iPhones",
                answer: `Tap Products are compatible with almost all iPhones, including the iPhone XR, XS, XS Max, and later. 
                Older iPhones may require extra steps.`,
              },
              {
                value: "item-5",
                question: "My phone isn't compatible",
                answer: `Tap QR codes can be scanned using the camera on iPhones as old as the iPhone 5S and almost all Android devices.`,
              },
            ].map((item) => (
              <Accordion.Item
                key={item.value}
                value={item.value}
                className="border-b mt-2 overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex items-start justify-between w-full py-2 font-semibold text-sm transition duration-300 ease-in-out">
                    <span className="flex-1 text-left">{item.question}</span>
                    <ChevronDownIcon className="h-4 w-4 flex-shrink-0 ml-2 transition-transform duration-300" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="py-2 text-gray-700 text-sm leading-relaxed">
                  {item.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>

      {/* App Download Section */}
      <div className="py-8">
        <div className="container mx-auto px-8 md:px-16">
          <div className="bg-black flex flex-col-reverse lg:flex-row items-center justify-between gap-8 rounded-3xl p-8 md:p-12 text-white">
            {/* Left Side - Download Message */}
               <div className="flex gap-4">
              <Image
                src={googlePlay}
                alt="Get it on Google Play"
                className="w-36 h-12"
              />
              <Image
                src={appStore}
                alt="Download on the App Store"
                className="w-36 h-12"
              />
            </div>
            <div className="text-center lg:text-left mt-8 lg:mt-0">
              <p className="text-sm font-bold mb-1">4.5/5 ★ stars Rated App</p>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4">
                Download Our Free
                <br className="hidden md:block" />
                App Now!
              </h2>
              <button className="bg-green-400 text-black text-xs py-3 px-6 mt-4 rounded-full font-semibold hover:bg-green-600 transition">
                Download Now!
              </button>
            </div>

            {/* Right Side - App Store Buttons */}
         
          </div>
        </div>
      </div>
    </section>
  );
}
