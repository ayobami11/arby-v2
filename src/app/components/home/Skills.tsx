"use client"

import { useState } from "react";

type KeysInSkills = "product-designer" | "design-thinking-facilitator" | "motion-designer" | "writer";

const SkillsSection = () => {

    const skills: Record<KeysInSkills, string> = {
        "product-designer": "I am a product designer with 3 years of professional work experience from creating visually aesthetically pleasing designs my goal is to ensure that i am able to provide the best user experience for users and ensure business growth.",
        "design-thinking-facilitator": "I am a self taught design thinking facilitator with over a year of professional experience.",
        "motion-designer": "I will call myself a beginner motion designer with over a year of experience. My passion for motion design stems from the fact that I love animation. This is the reason I ventured into motion design in order to make my designs stand out.",
        "writer": "I am a freelance writer dedicated to writing blogs and articles on UI/UX and any other thing I find interesting things. I see writing as a way of giving back to the community. I constantly blog on Hashnode."
    };

    const [description, setDescription] = useState<KeysInSkills>("product-designer");

    return (
        <section>
            <ul className="text-2xl overflow-x-auto flex gap-4 my-20">
                <li>
                    <button
                        onClick={() => setDescription("product-designer")}
                        className="italic font-light border-2 border-[transparent] hover:border-gray-300 rounded-2xl p-4 whitespace-nowrap"
                    >Product Designer</button>
                </li>
                <li>
                    <button
                        onClick={() => setDescription("design-thinking-facilitator")}
                        className="italic font-light border-2 border-[transparent] hover:border-gray-300 rounded-2xl p-4 whitespace-nowrap"
                    >Design Thinking Facilitator</button>
                </li>
                <li>
                    <button
                        onClick={() => setDescription("motion-designer")}
                        className="italic font-light border-2 border-[transparent] hover:border-gray-300 rounded-2xl p-4 whitespace-nowrap"
                    >Motion Designer</button>
                </li>
                <li>
                    <button
                        onClick={() => setDescription("writer")}
                        className="italic font-light border-2 border-[transparent] hover:border-gray-300 rounded-2xl p-4 whitespace-nowrap"
                    >Writer</button>
                </li>
            </ul>
            <p
                className="border-l-[5px] border-orange p-1 pl-5 text-xl leading-8 text-gray-700 mb-28"
            >{skills[description]}</p>
        </section>
    )

}

export default SkillsSection;