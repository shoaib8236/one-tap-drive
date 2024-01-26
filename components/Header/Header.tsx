import Image from "next/image"
import Link from "next/link"


const Header = () => {
    return (
        <header className="sticky header-wrap bg-dark center pl-lg pr-lg">
            <nav className="center flex-grow-1">
                <div className="logo-wrap">
                    <Link href="/">
                    <Image priority className="object-contain" src="/logo.png" alt="logo" width={300} height={80} />
                    </Link>
                </div>
                <ul className="center flex-1">
                    <li className="list-style-none p-sm">
                        <Link className="text-light" href="/">
                            Home
                        </Link>
                    </li>
                    <li className="list-style-none p-sm">
                        <Link className="text-light" href="/about-us">
                            About Us
                        </Link>
                    </li>
                    <li className="list-style-none p-sm">
                        <Link className="text-light" href="/contact-us">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header