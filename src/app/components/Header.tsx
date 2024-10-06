import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between items-center pb-12">
            <h1 className="border-b-[3px] border-orange inline-block">
                <Link href="/">Arby</Link>
            </h1>

            <nav className="hidden sm:block">
                <ul className="flex gap-8 text-xl text-gray-700">
                    <li>
                        <a
                            href="https://www.figma.com/proto/Uh5zZz8V5UfrzPF2gUXLUu/JEGEDE-ABISOLA-C.?node-id=114-2&scaling=scale-down-width&page-id=0%3A1"
                            target="_blank"
                            rel="noreferrer noopener"
                        >Resume</a>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>

            <Link
                href="/contact"
                className="bg-brown py-3 px-4 rounded-3xl"
            >Contact me</Link>
        </header>
    )
}

export default Header;