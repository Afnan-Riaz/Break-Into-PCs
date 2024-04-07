import Image from "next/image";
import Link from "next/link";
import {
    YoutubeSVG,
    InstagramSVG,
    FacebookSVG,
    WhatsappSVG,
} from "./interactive-svgs";

export default function Footer() {
    return (
        <div className="h-[500px] relative text-white">
            <div className="bg-neutral-800 blur-xl absolute w-full h-full top-10 left-0"></div>
            <div className="flex flex-col sm:flex-row justify-between items-center pt-16 lg:pt-36 px-16 lg:px-32 gap-4 absolute z-20 top-0 left-0 h-full w-full">
                <Image
                    src={"/images/logo-white.svg"}
                    height={180}
                    width={180}
                    alt="logo"
                    className="lg:w-44 w-24"
                />
                <div className="grid grid-cols-[auto_auto] xs:grid-cols-[auto_auto_auto] gap-x-8 gap-y-4 lg:gap-24">
                    <div>
                        <h5 className="text-lg font-medium mb-5">Site map</h5>
                        <ul className="text-sm leading-8">
                            <li>Home</li>
                            <li>About</li>
                            <li>Products</li>
                            <li>Resources</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-medium mb-5">Contact Us</h5>
                        <ul className="text-sm leading-8">
                            <li>Tel: +923110655363</li>
                            <li>Email: breakinto.pcs@gmail.com</li>
                            <li>Location: Lahore, Pakistan</li>
                        </ul>
                    </div>
                    <div className="xs:col-span-1 col-span-2">
                        <h5 className="text-lg font-medium mb-5">
                            Social Links
                        </h5>
                        <div className="text-sm grid gap-4 grid-cols-[40px_40px_40px_40px] xs:grid-cols-2">
                            <FacebookSVG />
                            <InstagramSVG />
                            <YoutubeSVG />
                            <WhatsappSVG />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
