"use client";
import Breadcrumb from "@/app/components/breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Modal from "@/app/components/modal";

const Loader = () => (
    <div className="h-screen min-w-full top-0 left-0 bg-neutral-800 bg-opacity-60 z-50 fixed flex justify-center items-center">
        <div
            style={{ "border-top-color": "transparent" }}
            className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
        ></div>
    </div>
);

function Builder() {
    const currentUrl = usePathname();
    const [budget, setBudget] = useState(3);
    const [option, setOption] = useState(false);
    const [display, setDisplay] = useState(false);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(false);

    const toggleResult = async () => {
        setResult(false);
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 4000));

        setLoading(false);
        setResult(true);
    };
    return (
        <div className="text-white px-28 relative">
            {loading && <Loader />}
            {display && (
                <Modal
                    option={option}
                    setOption={setOption}
                    display={display}
                    setDisplay={setDisplay}
                />
            )}

            <div className="absolute top-96 -left-20 -z-10 min-w-[450px] min-h-[450px] blur-3xl rounded-full bg-opacity-30 bg-red-600"></div>
            <div className="absolute -bottom-[100%] -right-20 -z-10 min-w-[350px] min-h-[350px] blur-3xl rounded-full bg-opacity-30 bg-red-600"></div>

            <Breadcrumb currentUrl={currentUrl} />
            <h1 className="font-orbitron text-4xl font-semibold mt-10 mb-4">
                Check Benchmark Score
            </h1>
            <p className="text-neutral-200">
                Input the following details about your Computer and the tool will give you
                the Benchmark Score of your PC.
            </p>
            <div className="py-10 px-6">

                    <div className="mx-auto max-w-md px-6 py-12 bg-dark-gradient border-0 shadow-lg sm:rounded-3xl">
                        <h1 className="text-2xl font-bold mb-8">Input Details:</h1>
                        <form id="form" novalidate>
                        <div className="relative z-0 w-full mb-5">
                            <input
                            type="text"
                            name="name"
                            placeholder=" "
                            required
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter name</label>
                            <span className="text-sm text-red-600 hidden" id="error">Name is required</span>
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                            type="email"
                            name="email"
                            placeholder=" "
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter email address</label>
                            <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                            type="password"
                            name="password"
                            placeholder=" "
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter password</label>
                            <span className="text-sm text-red-600 hidden" id="error">Password is required</span>
                        </div>
                        </form>
                    </div>
            </div>
            <div className="flex mb-16 justify-center">
                <button
                    onClick={() => toggleResult(true)}
                    className="bg-size-200 bg-center font-semibold text-lg block w-fit hover:bg-pos-0 transition-all duration-500 bg-red-gradient border-0 py-3 px-6 rounded-md group"
                    type="button"
                >
                    Generate Results
                </button>
            </div>
            <div hidden={!result}>
                <div>
                    <div className="flex flex-col items-center gap-5 mb-16">
                        <h4 className="font-orbitron text-4xl font-semibold underline">
                            Results
                        </h4>
                        <p className="text-neutral-200 text-lg max-w-[610px] text-center">
                            These are the components that fit you budget. Now
                            you just have to pick one component from each
                            category and you are good to go.
                        </p>
                    </div>
                    <h3 className="font-orbitron text-4xl font-semibold">
                        CPU:
                    </h3>
                </div>
                <div className="my-28 bg-white h-0.5 w-2/4 pr-28 mx-auto"></div>
                <div>
                    <h2 className="font-orbitron text-4xl font-semibold">
                        Total (Selected Items):
                    </h2>
                    <h3 className="text-2xl my-6">
                        RS. 220000 (including tax)
                    </h3>
                    <button
                        type="button"
                        onClick={() => {
                            setDisplay(true);
                        }}
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
                    </button>
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
        </div>
    );
}

export default Builder;
