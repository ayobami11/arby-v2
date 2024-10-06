"use client"

import Link from "next/link";

import { useState } from "react";

type KeysInSkills = "product-design" | "facilitation" | "motion-design" | "blog";

const SkillsSection = () => {

    const skills: Record<KeysInSkills, string> = {
        "product-design": "I am a product designer with 3 years of professional work experience from creating visually aesthetically pleasing designs my goal is to ensure that i am able to provide the best user experience for users and ensure business growth.",
        "facilitation": "I am a self taught design thinking facilitator with over a year of professional experience.",
        "motion-design": "I will call myself a beginner motion designer with over a year of experience. My passion for motion design stems from the fact that I love animation. This is the reason I ventured into motion design in order to make my designs stand out.",
        "blog": "I am a freelance writer dedicated to writing blogs and articles on UI/UX and any other thing I find interesting things. I see writing as a way of giving back to the community. I constantly blog on Hashnode."
    };

    const [description, setDescription] = useState<KeysInSkills>("product-design");

    return (
        <section>
            <ul className="text-2xl overflow-x-auto flex justify-between gap-4 my-20">
                <li>
                    <button
                        onClick={() => setDescription("product-design")}
                        className="cursor-custom italic font-light border-2 border-[transparent] hover:border-gray-300 rounded-2xl py-8 px-4 whitespace-nowrap"
                    >Product Designer</button>
                </li>
                <li>
                    <button
                        onClick={() => setDescription("facilitation")}
                        className="cursor-custom italic font-light border-2 border-[transparent] hover:border-gray-300 rounded-2xl py-8 px-4 whitespace-nowrap"
                    >Design Thinking Facilitator</button>
                </li>
                <li>
                    <button
                        onClick={() => setDescription("motion-design")}
                        className="cursor-custom italic font-light border-2 border-[transparent] hover:border-gray-300 rounded-2xl py-8 px-4 whitespace-nowrap"
                    >Motion Designer</button>
                </li>
                <li>
                    <button
                        onClick={() => setDescription("blog")}
                        className="cursor-custom italic font-light border-2 border-[transparent] hover:border-gray-300 rounded-2xl py-8 px-4 whitespace-nowrap"
                    >Writer</button>
                </li>
            </ul>
            <div
                className="group relative border-l-[5px] border-orange p-1 pl-5 text-xl leading-8 text-gray-700 mb-28"
            >
                <p>{skills[description]}</p>
                <Link
                    href={`/${description}`}
                    // className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange text-white font-medium group-hover:grid place-items-center w-[143px] h-[143px] rounded-full"
                    className="block underline mt-2 md:hidden md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bg-orange md:text-white md:no-underline md:font-medium md:group-hover:grid md:place-items-center md:w-[143px] md:h-[143px] md:rounded-full"
                >Dive in</Link>
            </div>
        </section>
    )

}

export default SkillsSection;