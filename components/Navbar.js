import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    return (<nav>
        <div className="logo">
            <h1>Ninja List</h1>
            <Image src={"/logo.png"} width={128} height={77} alt="" />
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Ninjas</Link>
    </nav>);
}

export default Navbar;