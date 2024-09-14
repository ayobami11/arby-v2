import Image from "next/image";

import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Socials from "@/components/Socials";

import shoppieImg from "../../../public/assets/images/shoppie.png";
import gleephoriaImg from "../../../public/assets/images/gleephoria.png";
import orvalonDigitalImg from "../../../public/assets/images/orvalon-digital.png";
import uxResearchPaperImg from "../../../public/assets/images/ux-research-paper.png";

const ProductDesignPage = () => {
    return (
        <>
            <Header />

            <Introduction />

            <p className="text-xl leading-8">
                I am a <span className="font-extrabold">Product designer</span> with 3 years of professional work
                experience from creating visually aesthetically pleasing designs my goal is to ensure that I am able
                to provide the best user experience for users and ensure business growth.
            </p>
            <section>
                <h2>My works</h2>
                <ul className="flex flex-col gap-8">
                    <li className="rounded-3xl py-8 px-5">
                        <article className="flex flex-col items-center text-center">
                            <header>
                                <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">Shoppie</span>
                                <h3 className="italic font-light text-2xl mb-6 leading-8">Shoppie</h3>
                            </header>
                            <p className="text-gray-700 text-lg leading-8 mb-4">Redesigning a mobility application to ease user transportation.</p>
                            <Image
                                src={shoppieImg}
                                alt="Shoppie"
                            />
                        </article>
                    </li>
                    <li className="rounded-3xl py-8 px-5 [&:nth-child(odd)]:bg-gray-300 [&:nth-child(even)]:bg-gray-100/40 [&:nth-child(even)]:border [&:nth-child(even)]:border-white">
                        <article className="flex flex-col items-center text-center">
                            <header>
                                <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">Gleephoria NDA Bound</span>
                                <h3 className="italic font-light text-2xl mb-6 leading-8">An online dating application.</h3>
                            </header>
                            <p className="text-gray-700 text-lg leading-8 mb-4">Redesigning a mobility application to ease user transportation.</p>
                            <Image
                                src={gleephoriaImg}
                                alt="Gleephoria"
                            />
                        </article>
                    </li>
                    <li className="rounded-3xl py-8 px-5 [&:nth-child(odd)]:bg-gray-300 [&:nth-child(even)]:bg-gray-100/40 [&:nth-child(even)]:border [&:nth-child(even)]:border-white">
                        <article className="flex flex-col items-center text-center">
                            <header>
                                <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">Transtura</span>
                                <h3 className="italic font-light text-2xl mb-6 leading-8">Order buses at cheap and convenient prices.</h3>
                            </header>
                            <p className="text-gray-700 text-lg leading-8 mb-4">Redesigning a mobility application to ease user transportation.</p>
                            <Image
                                src={gleephoriaImg}
                                alt="Gleephoria"
                            />
                        </article>
                    </li>
                    <li className="rounded-3xl py-8 px-5 [&:nth-child(odd)]:bg-gray-300 [&:nth-child(even)]:bg-gray-100/40 [&:nth-child(even)]:border [&:nth-child(even)]:border-white">
                        <article className="flex flex-col items-center text-center">
                            <header>
                                <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">Orvalon Digital</span>
                                <h3 className="italic font-light text-2xl mb-6 leading-8">Order buses at cheap and convenient prices.</h3>
                            </header>
                            <p className="text-gray-700 text-lg leading-8 mb-4">Redesigning a mobility application to ease user transportation.</p>
                            <Image
                                src={orvalonDigitalImg}
                                alt="Orvalon Digital"
                            />
                        </article>
                    </li>
                    <li className="rounded-3xl py-8 px-5 [&:nth-child(odd)]:bg-gray-300 [&:nth-child(even)]:bg-gray-100/40 [&:nth-child(even)]:border [&:nth-child(even)]:border-white">
                        <article className="flex flex-col items-center text-center">
                            <header>
                                <span className="inline-block bg-yellow/15 font-medium text-sm mb-4 py-1.5 px-3 rounded-2xl">UX Research Paper</span>
                                <h3 className="italic font-light text-2xl mb-6 leading-8">Understanding why students take time to </h3>
                            </header>
                            <p className="text-gray-700 text-lg leading-8 mb-4">Redesigning a mobility application to ease user transportation.</p>
                            <Image
                                src={uxResearchPaperImg}
                                alt="UX Research Paper"
                            />
                        </article>
                    </li>
                </ul>
            </section >

            <Socials />
        </>
    )
}

export default ProductDesignPage;