import Link from "next/link";

const Header = () => {
    return (
        <header className="w-[90%] mx-auto flex justify-between items-center pb-12">
            <h1 className="border-b-[3px] border-orange inline-block">Arby</h1>

            <Link 
            href="/contact"
            className="bg-brown py-3 px-4 rounded-3xl"
            >Contact me</Link>
        </header>
    )
}

export default Header;