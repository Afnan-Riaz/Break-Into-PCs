"use client";
import { usePathname } from "next/navigation";
import Breadcrumb from "../components/breadcrumbs";
import Link from "next/link";
import Image from "next/image";

export default function Products() {
    const currentUrl = usePathname();
    return (
        <div className="text-white pl-28">
            <div className="absolute top-96 -left-20 -z-10 min-w-[450px] min-h-[450px] blur-3xl rounded-full bg-opacity-30 bg-red-600"></div>
            <div className="absolute -bottom-[100%] -right-20 -z-10 min-w-[350px] min-h-[350px] blur-3xl rounded-full bg-opacity-30 bg-red-600"></div>
            <Breadcrumb currentUrl={currentUrl} />
            <h1 className="text-3xl underline underline-offset-8 mt-6 font-medium">
                Products
            </h1>
            <div className="my-16">
                <h2 className="font-orbitron text-4xl font-black mb-4">
                    Computers Marketplace
                </h2>
                <p className="text-lg text-neutral-200 max-w-[1000px] mb-10">
                    An online marketplace where you can Buy from a variety of Components and devices related to Computers. From latest Processors to cutting-edge Graphics Processing Units, we got everything you need for your Computer. We also have a vast variety of games available too.
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
                            src="/images/gpu.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                            Explore GPUs
                        </h4>
                        <p className="px-4 text-sm text-center text-neutral-200">
                            Explore a wide variety of Graphics Processing Units from Nvidia and AMD both.
                        </p>
                    </Link>
                    <Link
                        href={"#"}
                        className="w-72 h-[330px]  bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={120}
                            height={400}
                            alt="item"
                            className="py-[27px] object-contain object-center"
                            src="/images/cpu.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                        Latest Processors
                        </h4>
                        <p className="px-4 text-sm text-center text-neutral-200">
                        Explore a variety of Latest Processors, from Intel i series to Amd Ryzen CPUs.
                        </p>
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
                            src="/images/ssd.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                        Storage Devices
                        </h4>
                        <p className="text-sm text-center text-neutral-200">
                        We've got a range of storage device options as well as fastest RAMs from top brands.
                        </p>
                    </Link>
                    <Link
                        href={"#"}
                        className="w-72 h-[330px] bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={400}
                            height={400}
                            alt="item"
                            className="object-contain py-6 object-center w-full"
                            src="/images/peripheral.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                        Other Devices
                        </h4>
                        <p className="px-4 text-sm text-center text-neutral-200">
                        From Mouse & Keyboards to Monitors, we've got a wide variety to seek from.
                        </p>
                    </Link>
                </div>
                <div className="mt-16 bg-white h-px w-2/4 pr-28 mx-auto"></div>
            </div>
            <div className="my-16">
                <h2 className="font-orbitron text-4xl font-black mb-4">
                    Games and Softwares
                </h2>
                <p className="text-lg text-neutral-200 max-w-[1000px] mb-10">
                    
An online hub for gaming enthusiasts, offering a diverse selection of cutting-edge games and software. Explore our extensive catalog, ranging from the latest game titles to a variety of software solutions. Whether you're looking for immersive gaming experiences or essential applications, we have everything you need for your digital world.
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
                            src="/images/games-cover.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                            Explore Gaming Titles
                        </h4>
                        <p className="px-4 text-sm text-center text-neutral-200">
                            Buy newly released games to play on your performant gaming PC.
                        </p>
                    </Link>
                    <Link
                        href={"#"}
                        className="w-72 h-[330px]  bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={170}
                            height={400}
                            alt="item"
                            className="py-[2px] object-contain object-center"
                            src="/images/softwares.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                        Download Productivity tools
                        </h4>
                        <p className="px-4 text-sm text-center text-neutral-200">
                        No need to crawl whole web to find authentic softwares. We got you!
                        </p>
                    </Link>
                </div>
                <div className="mt-16 bg-white h-px w-2/4 pr-28 mx-auto"></div>
            </div>
        </div>
    );
}
