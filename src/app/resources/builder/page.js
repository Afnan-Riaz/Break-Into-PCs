"use client";
import Breadcrumb from "@/app/components/breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Builder() {
    const currentUrl = usePathname();
    const [budget, setBudget] = useState(3);
    return (
        <div className="text-white px-28">
            <div className="absolute top-96 -left-20 -z-10 min-w-[450px] min-h-[450px] blur-3xl rounded-full bg-opacity-30 bg-red-600"></div>
            <div className="absolute -bottom-[100%] -right-20 -z-10 min-w-[350px] min-h-[350px] blur-3xl rounded-full bg-opacity-30 bg-red-600"></div>

            <Breadcrumb currentUrl={currentUrl} />
            <h1 className="font-orbitron text-4xl font-semibold mt-10 mb-4">
                Custom PC Builder
            </h1>
            <p className="text-neutral-200">
                Just choose your Budget and We will Recommend you the Best PC
                you can Build in that Budget!
            </p>
            <div className="py-10">
                <label
                    htmlFor="steps-range"
                    className="flex mb-2 text-xl font-medium justify-center items-center"
                >
                    Budget:
                    <div className="px-6 py-2 ml-4 text-xl border border-neutral-200">
                        Rs. {budget * 100000}
                    </div>
                </label>
                <div className="relative w-[500px] mx-auto">
                    <input
                        id="steps-range"
                        type="range"
                        min="1.5"
                        max="6"
                        value={budget}
                        onChange={(e) => {
                            setBudget(e.target.value);
                        }}
                        step="0.5"
                        className="slider w-full h-2 bg-gray-200 appearance-none rounded-xl cursor-pointer dark:bg-gray-700"
                    />
                    <div className="absolute -z-10 top-[2px] left-0 h-full w-full">
                        <div className="absolute w-2 h-[90%] rounded-lg left-[2%] bg-gray-300 dark:bg-gray-600"></div>
                        <div className="absolute w-1 h-[90%] rounded-lg left-[12.6%] bg-gray-300 dark:bg-gray-600"></div>
                        <div className="absolute w-1 h-[90%] rounded-lg left-[23.2%] bg-gray-300 dark:bg-gray-600"></div>
                        <div className="absolute w-1 h-[90%] rounded-lg left-[33.7%] bg-gray-300 dark:bg-gray-600"></div>
                        <div className="absolute w-1 h-[90%] rounded-lg left-[44.3%] bg-gray-300 dark:bg-gray-600"></div>
                        <div className="absolute w-1 h-[90%] rounded-lg left-[54.8%] bg-gray-300 dark:bg-gray-600"></div>
                        <div className="absolute w-1 h-[90%] rounded-lg left-[65.5%] bg-gray-300 dark:bg-gray-600"></div>
                        <div className="absolute w-1 h-[90%] rounded-lg left-[76%] bg-gray-300 dark:bg-gray-600"></div>
                        <div className="absolute w-1 h-[90%] rounded-lg left-[86.5%] bg-gray-300 dark:bg-gray-600"></div>
                        <div className="absolute w-2 h-[90%] rounded-lg left-[96%] bg-gray-300 dark:bg-gray-600"></div>
                    </div>
                </div>
                <div className="w-[550px] mx-auto flex justify-between">
                    <p className="text-lg">Rs. 150000</p>
                    <p className="text-lg">Rs. 350000</p>
                    <p className="text-lg">Rs. 600000</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-5 mb-16">
                <h4 className="font-orbitron text-4xl font-semibold underline">
                    Results
                </h4>
                <p className="text-neutral-200 text-lg max-w-[610px] text-center">
                    These are the components that fit you budget. Now you just
                    have to pick one component from each category and you are
                    good to go.
                </p>
            </div>
            <div>
                <h3 className="font-orbitron text-4xl font-semibold">CPU:</h3>
                <div className="flex gap-8 my-10">
                    <label htmlFor="cpu1" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="cpu1"
                                    type="radio"
                                    name="cpu"
                                    value="cpu1"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={120}
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
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                    <label htmlFor="cpu2" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="cpu2"
                                    type="radio"
                                    name="cpu"
                                    value="cpu2"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={120}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/cpu.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-6">
                        Intel i5 10th Gen
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 25000</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                    <label htmlFor="cpu3" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="cpu3"
                                    type="radio"
                                    name="cpu"
                                    value="cpu3"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={120}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/cpu.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-6">
                        Intel i5 10th Gen
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 29000</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                    <label htmlFor="cpu4" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="cpu4"
                                    type="radio"
                                    name="cpu"
                                    value="cpu4"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={120}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/cpu.png"
                        />
                        <h4 className="font-medium text-2xl text-center my-6">
                        Intel i5 10th Gen
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 28000</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                </div>
                <h3 className="font-orbitron text-4xl font-semibold">Graphic Card:</h3>
                <div className="flex gap-8 my-10">
                    <label htmlFor="gpu1" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="gpu1"
                                    type="radio"
                                    name="gpu"
                                    value="gpu1"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
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
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                    <label htmlFor="gpu2" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="gpu2"
                                    type="radio"
                                    name="gpu"
                                    value="gpu2"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
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
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                    <label htmlFor="gpu3" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="gpu3"
                                    type="radio"
                                    name="gpu"
                                    value="gpu3"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
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
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                    <label htmlFor="gpu4" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="gpu4"
                                    type="radio"
                                    name="gpu"
                                    value="gpu4"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
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
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                </div>
                <h3 className="font-orbitron text-4xl font-semibold">Motherboard:</h3>
                <div className="flex gap-8 my-10">
                    <label htmlFor="mb1" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="mb1"
                                    type="radio"
                                    name="mb"
                                    value="mb1"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={200}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/motherboard.png"
                        />
                        <h4 className="font-medium text-lg text-center my-6">
                        Gigabyte B550M DS3H
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 28000</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                    <label htmlFor="mb2" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="mb2"
                                    type="radio"
                                    name="mb"
                                    value="mb2"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={200}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/motherboard.png"
                        />
                        <h4 className="font-medium text-lg text-center my-6">
                        Gigabyte B550M DS3H
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 28000</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                    <label htmlFor="mb3" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="mb3"
                                    type="radio"
                                    name="mb"
                                    value="mb3"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={200}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/motherboard.png"
                        />
                        <h4 className="font-medium text-lg text-center my-6">
                        Gigabyte B550M DS3H
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 28000</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                    <label htmlFor="mb4" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="mb4"
                                    type="radio"
                                    name="mb"
                                    value="mb4"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={200}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/motherboard.png"
                        />
                        <h4 className="font-medium text-lg text-center my-6">
                        Gigabyte B550M DS3H
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 28000</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                </div>
                <h3 className="font-orbitron text-4xl font-semibold">SSD:</h3>
                <div className="flex gap-8 my-10">
                    <label htmlFor="ssd1" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="ssd1"
                                    type="radio"
                                    name="ssd"
                                    value="ssd1"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={180}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/ssd2.png"
                        />
                        <h4 className="font-medium text-lg text-center my-6">
                        Samsung 256 GB
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 6200</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                    <label htmlFor="ssd2" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="ssd2"
                                    type="radio"
                                    name="ssd"
                                    value="ssd2"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={180}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/ssd2.png"
                        />
                        <h4 className="font-medium text-lg text-center my-6">
                        Samsung 256 GB
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 6200</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                </div>
                <h3 className="font-orbitron text-4xl font-semibold">RAM:</h3>
                <div className="flex gap-8 my-10">
                    <label htmlFor="ram1" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="ram1"
                                    type="radio"
                                    name="ram"
                                    value="ram1"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={150}
                            height={400}
                            alt="item"
                            className="object-contain h-32 object-center"
                            src="/images/ram.png"
                        />
                        <h4 className="font-medium text-lg text-center my-6">
                        ADATA 8GB DDR4
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 10800</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                    <label htmlFor="ram2" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="ram2"
                                    type="radio"
                                    name="ram"
                                    value="ram2"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={150}
                            height={400}
                            alt="item"
                            className="object-contain h-32 object-center"
                            src="/images/ram.png"
                        />
                        <h4 className="font-medium text-lg text-center my-6">
                        ADATA 8GB DDR4
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 10800</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                </div>
                <h3 className="font-orbitron text-4xl font-semibold">Casing:</h3>
                <div className="flex gap-8 my-10">
                    <label htmlFor="case1" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="case1"
                                    type="radio"
                                    name="case"
                                    value="case1"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={200}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/pc-1.png"
                        />
                        <h4 className="font-medium text-lg text-center my-6">
                        Gamemax H-605-RD
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 21000</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                    <label htmlFor="case2" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="case2"
                                    type="radio"
                                    name="case"
                                    value="case2"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={166}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/pc-3.png"
                        />
                        <h4 className="font-medium text-lg text-center my-6">
                        Gamemax H-605-RD
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 21000</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                    <label htmlFor="case3" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="case3"
                                    type="radio"
                                    name="case"
                                    value="case3"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={200}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/pc-2.png"
                        />
                        <h4 className="font-medium text-lg text-center my-6">
                        Gamemax H-605-RD
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 21000</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                    <label htmlFor="case4" className="cursor-pointer w-72 h-fit relative bg-dark-gradient rounded-lg px-8 pt-6 pb-10 bg-size-200 bg-center flex flex-col items-center hover:bg-pos-0 transition-all duration-500 border-0">
                        <div className="flex items-center ml-6 absolute top-6 right-6">
                            <div className="bg-black rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                    id="case4"
                                    type="radio"
                                    name="case"
                                    value="case4"
                                    className="checkbox appearance-none focus:opacity-100 border-2 rounded-sm border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-2 border-red-primary rounded-sm w-full h-full z-1 text-red-primary">&#10004;</div>
                            </div>
                        </div>
                        <Image
                            width={200}
                            height={400}
                            alt="item"
                            className="object-contain object-center"
                            src="/images/pc-1.png"
                        />
                        <h4 className="font-medium text-lg text-center my-6">
                        Gamemax H-605-RD
                        </h4>
                        <div className="flex justify-between items-center w-full">
                            <p className="font-semibold text-lg">RS. 21000</p>
                            <Link className="text-sm hover:text-gray-300 transition-colors font-light underline underline-offset-2" href={"/"}>View details</Link>
                        </div>
                    </label>
                </div>
            </div>
            <div className="my-28 bg-white h-0.5 w-2/4 pr-28 mx-auto"></div>
            <div>
                <h2 className="font-orbitron text-4xl font-semibold">Total (Selected Items):</h2>
                <h3 className="text-2xl my-6">RS. 220000 (including tax)</h3>
                <Link
                    href={"/"}
                    className="bg-size-200 bg-center font-semibold text-lg block w-fit hover:bg-pos-0 transition-all duration-500 bg-red-gradient border-0 py-3 px-6 rounded-md group"
                >
                    Add Selection to Cart
                    <Image
                        alt="photo"
                        className="inline-block ml-2 group-hover:translate-x-3 transition-transform"
                        src={"/icons/arrow.svg"}
                        height={10}
                        width={20}
                    />
                </Link>
                <Link
                    href={"/"}
                    className="bg-size-200 block w-fit bg-center my-4 font-semibold text-lg hover:bg-pos-0 transition-all duration-500 bg-yellow-gradient border-0 py-3 px-6 rounded-md group"
                >
                    View Cart
                    <Image
                        alt="photo"
                        className="inline-block ml-2 group-hover:translate-x-3 transition-transform"
                        src={"/icons/arrow.svg"}
                        height={10}
                        width={20}
                    />
                </Link>

            </div>
        </div>
    );
}

export default Builder;
