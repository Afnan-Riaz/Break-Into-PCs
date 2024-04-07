"use client";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/app/components/breadcrumbs";
import Link from "next/link";
import Image from "next/image";

export default function MarketPlace() {
    const currentUrl = usePathname();
    return (
        <div className="text-white px-4 sm:px-14 md:px-28 relative overflow-x-hidden">
            <div className="absolute top-96 -left-20 -z-10 min-w-[450px] min-h-[450px] blur-3xl rounded-full bg-opacity-30 bg-red-600"></div>
            <div className="absolute  -right-20 -z-10 min-w-[350px] min-h-[350px] blur-3xl rounded-full bg-opacity-30 bg-red-600"></div>
            <Breadcrumb currentUrl={currentUrl} />
            <h1 className="text-2xl sm:text-3xl underline underline-offset-8 mt-6 font-medium">
                MarketPlace
            </h1>
            <div className="my-16">
                <h2 className="font-orbitron text-3xl md:text-4xl font-black mb-4">
                    Everthing about Computers!
                </h2>
                <p className="text-2xl text-neutral-200 mt-10 max-w-[1000px]">
                    Featured Products
                </p>
                <div className="flex flex-wrap gap-8 mt-5 mb-10">
                    <label
                        htmlFor="cpu1"
                        className="cursor-pointer w-72  relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={200}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/cpu.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-6">
                            Intel i5 10th Gen
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 27000</p>
                            <Link
                                className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2"
                                href={"/products/details"}
                            >
                                View details
                            </Link>
                        </div>
                    </label>
                    <label
                        htmlFor="gpu1"
                        className="cursor-pointer w-72  relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={200}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/gpu2.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-6">
                            Geforce GTX 1070
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 64000</p>
                            <Link
                                className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2"
                                href={"/products/details"}
                            >
                                View details
                            </Link>
                        </div>
                    </label>
                    <label
                        htmlFor="cpu3"
                        className="cursor-pointer w-72  relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={200}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/motherboard.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-6">
                            Gigabyte B550M DS3H
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 29000</p>
                            <Link
                                className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2"
                                href={"/products/details"}
                            >
                                View details
                            </Link>
                        </div>
                    </label>
                    <label
                        htmlFor="cpu4"
                        className="cursor-pointer w-72  relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={150}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/pc-1.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-6">
                            Gamemax H-605-RD
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 28000</p>
                            <Link
                                className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2"
                                href={"/products/details"}
                            >
                                View details
                            </Link>
                        </div>
                    </label>
                </div>
                {/* <div className="mt-16 bg-white h-px w-2/4 pr-28 mx-auto"></div> */}
            </div>
            <div className="my-16">
                <p className="text-2xl text-neutral-200 mt-10 max-w-[1000px] mb-5">
                    Browse By Categories
                </p>
                <div className="flex flex-wrap gap-9">
                    <Link
                        href={"#"}
                        className="w-72 py-5 pb-10 bg-dark-gradient rounded-lg p-4 bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={300}
                            height={300}
                            alt="item"
                            className="object-contain h-40 object-center"
                            src="/images/gpu.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-2">
                            Explore GPUs
                        </h4>
                        <p className="px-4 text-sm text-center text-neutral-200">
                            Explore a wide variety of Graphics Processing Units
                            from Nvidia and AMD both.
                        </p>
                    </Link>
                    <Link
                        href={"#"}
                        className="w-72 py-5 pb-10 bg-dark-gradient rounded-lg p-4 bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={300}
                            height={300}
                            alt="item"
                            className="object-contain h-40 object-center"
                            src="/images/cpu.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-2">
                            Latest Processors
                        </h4>
                        <p className="px-4 text-sm text-center text-neutral-200">
                            Explore a variety of Latest Processors, from Intel i
                            series to Amd Ryzen CPUs.
                        </p>
                    </Link>
                    <Link
                        href={"#"}
                        className="w-72 py-5 pb-10 bg-dark-gradient rounded-lg p-4 bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={300}
                            height={300}
                            alt="item"
                            className="object-contain h-40 object-center"
                            src="/images/ssd.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-2">
                            Storage Devices
                        </h4>
                        <p className="px-4 text-sm text-center text-neutral-200">
                            We’ve got a range of storage device options as well
                            as fastest RAMs from top brands.
                        </p>
                    </Link>
                    <Link
                        href={"#"}
                        className="w-72 bg-dark-gradient rounded-lg p-4 bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={400}
                            height={400}
                            alt="item"
                            className="object-contain h-40 object-center"
                            src="/images/peripheral.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                            Other Devices
                        </h4>
                        <p className="px-4 text-sm text-center text-neutral-200">
                            From Mouse & Keyboards to Monitors, we’ve got a wide
                            variety to seek from.
                        </p>
                    </Link>
                </div>
                <div className="mt-16 bg-white h-px w-2/4 pr-28 mx-auto"></div>
            </div>
            <div className="my-16">
                <h2 className="font-orbitron text-3xl md:text-4xl font-black mb-4">
                    Games MarketPlace
                </h2>
                <p className="text-lg text-neutral-200 max-w-[1000px] mb-10">
                    Latest & Tending Games
                </p>
                <Link
                    href={"/products/games"}
                    className="bg-size-200 bg-center font-semibold mb- text-lg hover:bg-pos-0 transition-all duration-500 bg-red-gradient border-0 py-3 px-6 rounded-md group"
                >
                    Explore All
                    <Image
                        alt="photo"
                        className="inline-block ml-2 group-hover:translate-x-3 transition-transform"
                        src={"/icons/arrow.svg"}
                        height={10}
                        width={20}
                    />
                </Link>
                <div className="flex flex-wrap gap-9 mt-10">
                    <Link
                        href={"#"}
                        className="w-72 bg-dark-gradient rounded-lg p-4 bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={400}
                            height={400}
                            alt="item"
                            className="object-contain h-40 object-center"
                            src="/images/assassins.jpg"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                            Assassins Creed Mirage
                        </h4>
                        <p className="px-4 text-sm text-center text-neutral-200">
                            2023
                        </p>
                    </Link>
                    <Link
                        href={"#"}
                        className="w-72 bg-dark-gradient rounded-lg p-4 bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={400}
                            height={400}
                            alt="item"
                            className="object-contain h-40 object-center"
                            src="/images/far-cry.jpg"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                            Far Cry 4
                        </h4>
                        <p className="px-4 text-sm text-center text-neutral-200">
                            2023
                        </p>
                    </Link>
                    <Link
                        href={"#"}
                        className="w-72 bg-dark-gradient rounded-lg p-4 bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={400}
                            height={400}
                            alt="item"
                            className="object-contain h-40 py-1 object-center w-full"
                            src="/images/rdr2.jpeg"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                            Red Dead Redemption 2
                        </h4>
                    </Link>
                    <Link
                        href={"#"}
                        className="w-72 bg-dark-gradient rounded-lg p-4 bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={400}
                            height={400}
                            alt="item"
                            className="object-contain h-40 object-center w-full"
                            src="/images/cooking.jpg"
                        />
                        <h4 className="font-medium text-2xl text-center my-3">
                            Cooking Simulator
                        </h4>
                    </Link>
                </div>
                <div className="mt-16 bg-white h-px w-2/4 pr-28 mx-auto"></div>
            </div>
        </div>
    );
}
