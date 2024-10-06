import Image from "next/image";

import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Socials from "@/components/Socials";

import driveIcon from "../../../public/assets/icons/drive.svg";

const Facilitation = () => {
    return (
        <div className="pt-8">
            <div className="w-[90%] mx-auto">
                <Header />
                <main>
                    <div>
                        <Introduction />
                        <p className="text-lg leading-8 text-gray-700 mb-16">I am a self taught design thinking facilitator with over a year of professional experience.</p>
                    </div>
                    <section className="grid gap-y-20 gap-x-[calc(3rem+5%)] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
                        <article className="md:min-w-96">
                            <header>
                                <h2 className="text-2xl border-b-2 border-[hsl(15deg,100%,50%)] pb-3 mb-4">Orvalon Digital</h2>
                                <p className="italic font-light text-lg mb-6">Startup Incubation - Design Thinking Facilitator</p>
                            </header>
                            <p className="italic font-extralight text-lg mb-10">
                                I worked with designers engineers, project managers and team leads across Nithub to develop start-up ideas and turn them
                                into products.
                            </p>
                            <ol className="list-decimal list-inside font-extralight italic text-lg text-gray-700 bg-gray-300/[0.21] rounded-3xl py-10 px-5">
                                <li>
                                    Led and facilitated collaborative design thinking workshops, guiding participants through the entire process, from problem definition to testing.
                                </li>
                                <li>
                                    Promoted teamwork by closely collaborating with cross-functional teams, uniting individuals with diverse expertise and perspectives.
                                </li>
                            </ol>
                        </article>
                        <article className="md:min-w-96">
                            <header>
                                <h2 className="text-2xl border-b-2 border-[hsl(208deg,82%,45%)] pb-3 mb-4">Nithub Design</h2>
                                <p className="italic font-light text-lg mb-6">UX Strategist - Design Thinking Facilitator</p>
                            </header>
                            <p className="italic font-extralight text-lg mb-10">
                                I worked with designers engineers, project managers and team leads across Nithub to develop start-up ideas and turn them
                                into products.
                            </p>
                            <ol className="list-decimal list-inside font-extralight italic text-lg text-gray-700 bg-gray-300/[0.21] rounded-3xl py-10 px-5">
                                <li>
                                    Led and facilitated collaborative design thinking workshops, guiding participants through the entire process, from problem definition to testing.
                                </li>
                                <li>
                                    Promoted teamwork by closely collaborating with cross-functional teams, uniting individuals with diverse expertise and perspectives.
                                </li>
                            </ol>
                        </article>
                        <article className="md:min-w-96">
                            <header>
                                <h2 className="text-2xl border-b-2 border-[hsl(169deg,94%,31%)] pb-3 mb-4">ODJ Tech</h2>
                                <p className="italic font-light text-lg mb-6">Start-Up Incubation - Design Thinking Facilitator</p>
                            </header>
                            <p className="italic font-extralight text-lg mb-10">
                                I worked with designers engineers, project managers and team leads across ithub to develop start-up ideas and turn them
                                into products.
                            </p>
                            <ol className="list-decimal list-inside font-extralight italic text-lg text-gray-700 bg-gray-300/[0.21] rounded-3xl py-10 px-5">
                                <li>
                                    Led and facilitated collaborative design thinking workshops, guiding participants through the entire process, from problem definition to testing.
                                </li>
                                <li>
                                    Promoted teamwork by closely collaborating with cross-functional teams, uniting individuals with diverse expertise and perspectives.
                                </li>
                            </ol>
                        </article>
                        <a
                            href="https://drive.google.com/drive/folders/1oV1DZzaO0hQViWnUjT_XbfOjZ_ZfpYWc?usp=sharing"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="self-end bg-gray-300/[0.21] rounded-3xl grid gap-6 place-content-center place-items-center p-6 md:h-[317px]">
                            <Image
                                src={driveIcon}
                                alt=""
                            />
                            <p
                                className="italic font-extralight text-base leading-6 max-w-[370px]"
                            >Check out links to some of the slides and images from several design thinking workshops I have hosted.</p>
                        </a>
                    </section>

                    <div className="pt-40 pb-8">
                        <Socials />
                    </div>
                </main>
            </div>
        </div>
    );

}

export default Facilitation;