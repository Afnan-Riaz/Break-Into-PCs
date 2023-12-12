"use client";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/app/components/breadcrumbs";
import Link from "next/link";
import Image from "next/image";

export default function Games() {
    const currentUrl = usePathname();
    return (
        <div className="text-white px-28">
            <div className="absolute top-96 -left-20 -z-10 min-w-[450px] min-h-[450px] blur-3xl rounded-full bg-opacity-30 bg-red-600"></div>
            <div className="absolute -bottom-[100%] -right-20 -z-10 min-w-[350px] min-h-[350px] blur-3xl rounded-full bg-opacity-30 bg-red-600"></div>
            <Breadcrumb currentUrl={currentUrl} />
            <h1 className="text-3xl underline underline-offset-8 mt-6 font-medium">
                Games
            </h1>
            <div className="my-16">
                <h2 className="font-orbitron text-4xl font-black mb-4">
                    Trending Games handpicked for You
                </h2>
                <p className="text-lg text-neutral-200 max-w-[1000px] mb-10">
                    A list of Currently Trending Top Games.
                </p>
                <div className="flex gap-9">
                    <Link
                        href={"#"}
                        className="w-72 h-[330px] bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={400}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/gta6.jpg"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                            GTA VI
                        </h4>
                        {/* <p className="px-4 text-sm text-center text-neutral-200">
                            Explore a wide variety of Graphics Processing Units
                            from Nvidia and AMD both.
                        </p> */}
                    </Link>
                    <Link
                        href={"#"}
                        className="w-72 h-[330px]  bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={400}
                            height={400}
                            alt="item"
                            className="py-[27px] object-contain object-center"
                            src="/images/codmw2.jpg"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                            COD Modern Warfere 2
                        </h4>
                        {/* <p className="px-4 text-sm text-center text-neutral-200">
                            Explore a variety of Latest Processors, from Intel i
                            series to Amd Ryzen CPUs.
                        </p> */}
                    </Link>
                    <Link
                        href={"#"}
                        className="w-72 h-[330px] bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={400}
                            height={400}
                            alt="item"
                            className="object-contain py-1 object-center w-full"
                            src="/images/rdr2.jpeg"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                            Red Dead Redemption 2
                        </h4>
                        {/* <p className="text-sm text-center text-neutral-200">
                            We've got a range of storage device options as well
                            as fastest RAMs from top brands.
                        </p> */}
                    </Link>
                    <Link
                        href={"#"}
                        className="w-72 h-[330px] bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={200}
                            height={200}
                            alt="item"
                            className="object-contain py-6 object-center w-full"
                            src="/images/apex.jpg"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                            Apex Legends
                        </h4>
                        {/* <p className="px-4 text-sm text-center text-neutral-200">
                            From Mouse & Keyboards to Monitors, we've got a wide
                            variety to seek from.
                        </p> */}
                    </Link>
                </div>
                <div className="mt-16 bg-white h-px w-2/4 pr-28 mx-auto"></div>
            </div>
            <div className="my-16">
                <h2 className="font-orbitron text-4xl font-black mb-4">
                    Explore from a list of Latest Games
                </h2>
                <p className="text-lg text-neutral-200 max-w-[1000px] mb-10">
                    Latest top games right now.
                </p>
                <div className="flex gap-9">
                    <Link
                        href={"#"}
                        className="w-72 h-[330px] bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={400}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/assassins.jpg"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                            Assassins Creed Mirage
                        </h4>
                        <p className="px-4 text-sm text-center text-neutral-200">
                            2023
                        </p>
                    </Link>
                </div>
                <div className="mt-16 bg-white h-px w-2/4 pr-28 mx-auto"></div>
            </div>
        </div>
    );
}
