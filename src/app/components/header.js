"use client";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
    const handleNavExpand = (e) => {
        const cheveron = e.currentTarget.querySelector(".cheveron");
        if (cheveron) cheveron.style.transform = "rotate(180deg)";
        const item = e.currentTarget.querySelector(".navItem");
        const menu = item.querySelector(".navMenu");
        if (menu){
            menu.style.maxHeight = "160px";
        }
    };
    const handleNavCollapse = (e) => {
        const cheveron = e.currentTarget.querySelector("img");
        if (cheveron) cheveron.style.transform = "rotate(0deg)";
        const item = e.currentTarget.querySelector(".navItem");
        const menu = item.querySelector(".navMenu");
        if (menu){
            menu.style.maxHeight = "0px";
        }
    };
    return (
        <header className="text-white z-10 relative h-32">
            <div className="absolute -top-32 left-96 -z-10 min-w-[300px] min-h-[300px] blur-3xl rounded-full bg-opacity-40 bg-red-600"></div>
            <nav className="h-full flex px-14 justify-between items-center">
                <Link href="/">
                <h1 className="mr-2 cursor-pointer uppercase font-orbitron text-[40px] font-black text-red-primary">
                    break into pcs
                </h1>
                </Link>
                <div className="flex items-center gap-[6vw] ml-auto mr-8">
                    <Link className="hidden lg:block text-lg font-medium hover:text-gray-200" href="/">
                        Home
                    </Link>
                    <div
                        onMouseEnter={handleNavExpand}
                        onMouseLeave={handleNavCollapse}
                        className="hidden lg:block relative"
                    >
                        <div className="navItem flex flex-col">
                            <Link className="flex gap-2 text-lg font-medium hover:text-gray-200" href="#">
                                Products
                                <Image
                                    alt="photo"
                                    className="cheveron transition-transform duration-300"
                                    src={"/icons/cheveron.svg"}
                                    width={13}
                                    height={13}
                                />
                            </Link>
                            <div className="navMenu max-h-0 transition-all duration-500 w-max bg-gradient-to-tl bg-size-180 to-black via-red-950 from-red-900 absolute rounded-md overflow-hidden top-6">
                                <ul className="m-4">
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm bg-red-primary"></div>
                                        <Link className="hover:text-gray-200" href={"#"}>Gaming PCs and parts</Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm bg-red-primary"></div>
                                        <Link className="hover:text-gray-200" href={"#"}>Games</Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm bg-red-primary"></div>
                                        <Link className="hover:text-gray-200" href={"#"}>Accessories</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        onMouseEnter={handleNavExpand}
                        onMouseLeave={handleNavCollapse}
                        className="hidden lg:block relative"
                    >
                        <div className="navItem flex flex-col">
                            <Link className="flex gap-2 text-lg font-medium hover:text-gray-200" href="/resources">
                                Resourses
                                <Image
                                    alt="photo"
                                    className="cheveron transition-transform duration-300"
                                    src={"/icons/cheveron.svg"}
                                    width={13}
                                    height={13}
                                />
                            </Link>
                            <div className="navMenu max-h-0 transition-all duration-500 w-max bg-gradient-to-tl bg-size-180 to-black via-red-950 from-red-900 absolute rounded-md overflow-hidden top-6">
                                <ul className="m-4">
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm  hover:text-gray-200 bg-red-primary"></div>
                                        <Link className="hover:text-gray-200" href="#">Custom PC Builder</Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm  hover:text-gray-200 bg-red-primary"></div>
                                        <Link className="hover:text-gray-200" href="#">Benchmarking Tool</Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm  hover:text-gray-200 bg-red-primary"></div>
                                        <Link className="hover:text-gray-200" href="#">System Check Tool</Link>
                                    </li>
                                    <li className="flex gap-1 leading-8 items-center">
                                        <div className="h-6 w-1 rounded-sm  hover:text-gray-200 bg-red-primary"></div>
                                        <Link className="hover:text-gray-200" href="/resources/blogs">Tech Blogs</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Link className="hidden lg:block text-lg font-medium hover:text-gray-200" href="#">
                        About Us
                    </Link>
                    <Link href="#">
                        <button className="transition-all duration-500 h-[43px] w-28 min-w-[75px] min-h-[35px] bg-red-gradient rounded-md  bg-size-200 bg-center text-lg font-bold hover:bg-pos-0">
                        Sign Up
                        </button>
                    </Link>
                </div>
                <div className="inline lg:hidden ml-6">
                    <Image
                        alt="photo"
                        src={"/icons/hamburger.svg"}
                        width={30}
                        height={30}
                    />
                </div>
            </nav>
        </header>
    );
}
