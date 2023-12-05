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
            <div className="flex justify-between items-center pt-36 px-32 absolute z-20 top-0 left-0 h-full w-full">
                <Image
                    src={"/images/logo-white.svg"}
                    height={180}
                    width={180}
                    alt="logo"
                />
                <div className="flex gap-24">
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
                    <div>
                        <h5 className="text-lg font-medium mb-5">
                            Social Links
                        </h5>
                        <div className="text-sm grid gap-y-4 grid-cols-2">
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
