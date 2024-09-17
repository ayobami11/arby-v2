import Image from "next/image";

import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Socials from "@/components/Socials";

import shoppieImg from "../../../public/assets/images/shoppie.png";
import gleephoriaImg from "../../../public/assets/images/gleephoria.png";
import transturaImg from "../../../public/assets/images/transtura.png";
import orvalonDigitalImg from "../../../public/assets/images/orvalon-digital.png";
import uxResearchPaperImg from "../../../public/assets/images/ux-research-paper.png";

const ProductDesignPage = () => {
    return (
        <div className="pt-8 mx-[5%]">
            < Header />

            <div className="mt-8 mb-24">
                <Introduction />

                <p className="text-xl leading-8">
                    I am a <span className="font-extrabold">Product designer</span> with 3 years of professional work
                    experience from creating visually aesthetically pleasing designs my goal is to ensure that I am able
                    to provide the best user experience for users and ensure business growth.
                </p>
            </div>
            <section className="mb-24">
                <h2 className="font-extralight italic text-2xl lg:text-[2rem] mb-10">My works</h2>
                <ul className="grid gap-x-16 gap-y-8 lg:grid-cols-[repeat(auto-fill,minmax(450px,1fr))]">
                    <li className="max-w-[550px] border border-white rounded-3xl bg-gray-100 py-8 px-5">
                        <article className="flex flex-col items-center text-center">
                            <div className="max-w-[340px]">
                                <header>
                                    <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">Shoppie</span>
                                    <h3 className="italic font-light text-2xl mb-6 leading-8">Shoppie</h3>
                                </header>
                                <p className="text-gray-700 text-lg leading-8 mb-4">Redesigning a mobility application to ease user transportation.</p>
                            </div>
                            <Image
                                src={shoppieImg}
                                alt="Shoppie"
                            />
                        </article>
                    </li>
                    <li className="max-w-[550px] rounded-3xl py-8 px-5 bg-gray-300">
                        <article className="flex flex-col items-center text-center">
                            <div className="max-w-[340px]">
                                <header>
                                    <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">Gleephoria NDA Bound</span>
                                    <h3 className="italic font-light text-2xl mb-6 leading-8">An online dating application.</h3>
                                </header>
                                <p className="text-gray-700 text-lg leading-8 mb-4">Redesigning a mobility application to ease user transportation.</p>
                            </div>
                            <Image
                                src={gleephoriaImg}
                                alt="Gleephoria"
                            />
                        </article>
                    </li>
                    <li className="max-w-[550px] rounded-3xl py-8 px-5 bg-gray-300">
                        <article className="flex flex-col items-center text-center">
                            <div className="max-w-[340px]">
                                <header>
                                    <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">Transtura</span>
                                    <h3 className="italic font-light text-2xl mb-6 leading-8">Order buses at cheap and convenient prices.</h3>
                                </header>
                                <p className="text-gray-700 text-lg leading-8 mb-4">Redesigning a mobility application to ease user transportation.</p>
                            </div>
                            <Image
                                src={transturaImg}
                                alt="Transtura"
                            />
                        </article>
                    </li>
                    <li className="max-w-[550px] border border-white bg-gray-300/[0.26] rounded-3xl py-8 px-5">
                        <article className="flex flex-col items-center text-center">
                            <div className="max-w-[340px]">
                                <header>
                                    <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">Orvalon Digital</span>
                                    <h3 className="italic font-light text-2xl mb-6 leading-8">Order buses at cheap and convenient prices.</h3>
                                </header>
                                <p className="text-gray-700 text-lg leading-8 mb-4">Redesigning a mobility application to ease user transportation.</p>
                            </div>
                            <Image
                                src={orvalonDigitalImg}
                                alt="Orvalon Digital"
                            />
                        </article>
                    </li>
                    <li className="max-w-[550px] border border-white bg-gray-100 rounded-3xl py-8 px-5">
                        <article className="flex flex-col items-center text-center">
                            <div className="max-w-[340px]">
                                <header>
                                    <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">UX Research Paper</span>
                                    <h3 className="italic font-light text-2xl mb-6 leading-8">Understanding why students take time to </h3>
                                </header>
                                <p className="text-gray-700 text-lg leading-8 mb-4">Redesigning a mobility application to ease user transportation.</p>
                            </div>
                            <Image
                                src={uxResearchPaperImg}
                                alt="UX Research Paper"
                            />
                        </article>
                    </li>
                </ul>
            </section>

            <Socials />
        </div>
    )
}

export default ProductDesignPage;