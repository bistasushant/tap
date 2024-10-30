"use client";
import Image from "next/image";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import { useRef } from "react";

const testimonials = [
    {
        image: person1,
        name: "Assem Emam",
        title: "CEO, ElCoach, Inc.",
        feedback: "I've never been a big fan of business cards in general, but I've had the chance to attend two major events relying solely on Tap's card. I'm now a big fan! The experience was seamless and super efficient. Thank you, Tap!",
        rating: 5,
    },
    {
        image: person2,
        name: "Amr elmeligui",
        title: "Marketing executive, Arab Developers holding",
        feedback: "Perfect and beyond",
        rating: 5,
    },
    {
        image: person3,
        name: "Marwan Ramadan",
        title: "CEO, HITCH",
        feedback: "I love the whole experience and how it is easy to share your info to others, great work guys!",
        rating: 5,
    },
    {
        image: person4,
        name: "Mohamed Sherif",
        title: "Art Director / OIC, Nithar",
        feedback: "Great smart products with a high quality material.",
        rating: 5,
    },
    {
        image: person2,
        name: "Assem Emam",
        title: "CEO, ElCoach, Inc.",
        feedback: "I've never been a big fan of business cards in general, but I've had the chance to attend two major events relying solely on Tap's card. I'm now a big fan! The experience was seamless and super efficient. Thank you, Tap!",
        rating: 5,
    }
];

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-8">
            <div className="container mx-auto px-8">
                <h1 className="text-4xl font-semibold mb-8">Testimonials</h1>

                {/* Testimonials Scrollable Row */}
                <div className="mt-6">
                    <div ref={scrollRef} className="flex overflow-x-scroll gap-6 pb-4 scroll-smooth">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 p-6 rounded-lg shadow-md min-w-[300px] max-w-[300px]"
                            >
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <div className="flex items-center gap-1 text-yellow-500 text-xs">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <span key={i}>⭐</span>
                                            ))}
                                        </div>
                                        <p className="text-gray-500 font-normal mt-2">{testimonial.name}</p>
                                    </div>
                                </div>
                                <p className="text-gray-900 font-bold text-sm mt-4">{testimonial.title}</p>
                                <p className="text-gray-600 text-sm mt-2">{testimonial.feedback}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
