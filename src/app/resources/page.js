"use client";
import { usePathname } from "next/navigation";
import Breadcrumb from "../components/breadcrumbs";
import Link from "next/link";
import Image from "next/image";

export default function Resources() {
    const currentUrl = usePathname();
    return (
        <div className="text-white pl-28">
            <div className="absolute top-96 -left-20 -z-10 min-w-[450px] min-h-[450px] blur-3xl rounded-full bg-opacity-30 bg-red-600"></div>
            <div className="absolute -bottom-[100%] -right-20 -z-10 min-w-[350px] min-h-[350px] blur-3xl rounded-full bg-opacity-30 bg-red-600"></div>

            <Breadcrumb currentUrl={currentUrl} />
            <h1 className="text-3xl underline underline-offset-8 mt-6 font-medium">
                Resources
            </h1>
            <div className="my-16">
                <h2 className="font-orbitron text-4xl font-black mb-4">
                    Custom PC Builder
                </h2>
                <p className="text-lg text-neutral-200 max-w-[1000px] mb-10">
                    Our custom PC builder is useful in such cases where you
                    cannot decide the perfect PC for your use case. Just choose
                    your budget and we will recommend you the best PC you can
                    build in that budget!
                </p>
                <Link
                    href={"#"}
                    className="bg-size-200 bg-center font-semibold text-lg hover:bg-pos-0 transition-all duration-500 bg-red-gradient border-0 py-3 px-6 rounded-md group"
                >
                    Try our PC Builder
                    <Image
                        className="inline-block ml-2 group-hover:translate-x-3 transition-transform"
                        src={"/icons/arrow.svg"}
                        height={10}
                        width={20}
                    />
                </Link>
                <div className="mt-16 bg-white h-px w-2/4 pr-28 mx-auto"></div>
            </div>
            <div className="my-16">
                <h2 className="font-orbitron text-4xl font-black mb-4">
                    Check Benchmark Scores
                </h2>
                <p className="text-lg text-neutral-200 max-w-[1000px] mb-10">
                    Enter the details about your PC and see the Benchmark score
                    your pc manages to score. This score is basically an
                    overview of your System's Capabilities and indicates its
                    performance.
                </p>
                <Link
                    href={"#"}
                    className="bg-size-200 bg-center font-semibold text-lg hover:bg-pos-0 transition-all duration-500 bg-red-gradient border-0 py-3 px-6 rounded-md group"
                >
                    Check Benchmark Score of your PC
                    <Image
                        className="inline-block ml-2 group-hover:translate-x-3 transition-transform"
                        src={"/icons/arrow.svg"}
                        height={10}
                        width={20}
                    />
                </Link>
                <div className="mt-16 bg-white h-px w-2/4 pr-28 mx-auto"></div>
            </div>
            <div className="my-16">
                <h2 className="font-orbitron text-4xl font-black mb-4">
                    Read latest and trending Articles about Tech
                </h2>
                <p className="text-lg text-neutral-200 max-w-[1000px] mb-10">
                    Want to dive deep into the field of Technology and
                    Computers? Well we know where to get started. Read our
                    latest and trending tech blogs and articles to get news and
                    information about latest innovations and advancements in
                    Tech Industry.
                </p>
                <h4 className="font-orbitron text-2xl font-semibold mb-4">
                    Trending Blogs:
                </h4>
                <ul className="space-y-2 mb-10">
                    <li>
                        <Link
                            className="group cursor-pointer flex gap-4 items-center"
                            href={"#"}
                        >
                            <Image
                                src={"/icons/link.svg"}
                                width={35}
                                height={50}
                            />
                            <p className="text-lg group-hover:underline">
                                NVIDIA's Latest Product Line Unveiled: Here's
                                All You Need to Know
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="group cursor-pointer flex gap-4 items-center"
                            href={"#"}
                        >
                            <Image
                                src={"/icons/link.svg"}
                                width={35}
                                height={50}
                            />
                            <p className="text-lg group-hover:underline">
                                Game-Changer: A Deep Dive into How Cutting-Edge
                                Tech is Shaping Your Gaming Experience
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="group cursor-pointer flex gap-4 items-center"
                            href={"#"}
                        >
                            <Image
                                src={"/icons/link.svg"}
                                width={35}
                                height={50}
                            />
                            <p className="text-lg group-hover:underline">
                                The Evolution of Gaming: Next-Gen Titles,
                                Technologies, and Beyond
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="group cursor-pointer flex gap-4 items-center"
                            href={"#"}
                        >
                            <Image
                                src={"/icons/link.svg"}
                                width={35}
                                height={50}
                            />
                            <p className="text-lg group-hover:underline">
                                Beyond Graphics - Unraveling the Future of
                                Gaming PCs and Immersive Gameplay
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="group cursor-pointer flex gap-4 items-center"
                            href={"#"}
                        >
                            <Image
                                src={"/icons/link.svg"}
                                width={35}
                                height={50}
                            />
                            <p className="text-lg group-hover:underline">
                                Power Unleashed: Exploring the Latest
                                Advancements in Gaming PC Hardware
                            </p>
                        </Link>
                    </li>
                </ul>
                <Link
                    href={"#"}
                    className="bg-size-200 bg-center font-semibold text-lg hover:bg-pos-0 transition-all duration-500 bg-red-gradient border-0 py-3 px-6 rounded-md group"
                >
                    Read all Blogs
                    <Image
                        className="inline-block ml-2 group-hover:translate-x-3 transition-transform"
                        src={"/icons/arrow.svg"}
                        height={10}
                        width={20}
                    />
                </Link>
                <div className="mt-16 bg-white h-px w-2/4 pr-28 mx-auto"></div>
            </div>
        </div>
    );
}
