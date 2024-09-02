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
                        <Link href="/">Resume</Link>
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