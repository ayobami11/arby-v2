import Image from "next/image";

import mailIcon from "../../../public/assets/icons/mail.svg";
import linkedinIcon from "../../../public/assets/icons/linkedin.svg";
import dribbbleIcon from "../../../public/assets/icons/dribbble.svg";
import instagramIcon from "../../../public/assets/icons/instagram.svg";
import xIcon from "../../../public/assets/icons/x.svg";
import behanceIcon from "../../../public/assets/icons/behance.svg";

const Socials = () => {

    return (
        <ul className="text-2xl grid grid-cols-[repeat(auto-fill,40px)] place-content-center gap-4 max-w-[350px] mx-auto py-8">
            <li>
                <a
                    href="mailto:arby.jegede@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email"
                    className="w-6 h-6 grid place-items-center rounded-full box-content p-2 bg-[hsl(200deg,9%,22%)]"
                >
                    <Image
                        src={mailIcon}
                        alt="Mail icon"
                        className=""
                    />
                    <span className="sr-only">Mail</span>
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/abisola-jegede"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Linkedin"
                    className="w-6 h-6 grid place-items-center rounded-full box-content p-2 bg-[hsl(200deg,9%,22%)]"
                >
                    <Image
                        src={linkedinIcon}
                        alt="Linkedin icon"
                        className=""
                    />
                    <span className="sr-only">Linkedin</span>
                </a>
            </li>
            <li>
                <a
                    href="https://dribbble.com/AbisolaJegede"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Dribbble"
                    className="w-6 h-6 grid place-items-center rounded-full box-content p-2 bg-[hsl(200deg,9%,22%)]"
                >
                    <Image
                        src={dribbbleIcon}
                        alt="Dribbble icon"
                        className=""
                    />
                    <span className="sr-only">Dribbble</span>
                </a>
            </li>
            <li>
                <a
                    href="https://www.instagram.com/arby_ui.ux"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    className="w-6 h-6 grid place-items-center rounded-full box-content p-2 bg-[hsl(200deg,9%,22%)]"
                >
                    <Image
                        src={instagramIcon}
                        alt="Instagram icon"
                        className=""
                    />
                    <span className="sr-only">Instagram</span>
                </a>
            </li>
            <li>
                <a
                    href="https://x.com/arby981"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="X (formerly, Twitter)"
                    className="w-6 h-6 grid place-items-center rounded-full box-content p-2 bg-[hsl(200deg,9%,22%)]"
                >
                    <Image
                        src={xIcon}
                        alt="X icon"
                        className=""
                    />
                    <span className="sr-only">Twitter</span>
                </a>
            </li>
            <li>
                <a
                    href="https://www.behance.net/abisolajegedea"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Behance"
                    className="w-6 h-6 grid place-items-center rounded-full box-content p-2 bg-[hsl(200deg,9%,22%)]"
                >
                    <Image
                        src={behanceIcon}
                        alt="Behance icon"
                        className=""
                    />
                    <span className="sr-only">Behance</span>
                </a>
            </li>
        </ul>
    )

}

export default Socials;