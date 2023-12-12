"use client";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/app/components/breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/app/components/modal";

const Loader = () => (
    <div className="h-screen min-w-full top-0 left-0 bg-neutral-800 bg-opacity-60 z-50 fixed flex justify-center items-center">
        <div
            style={{ "border-top-color": "transparent" }}
            class="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
        ></div>
    </div>
);

export default function Cart() {
    const currentUrl = usePathname();
    const [option, setOption] = useState(false);
    const [display, setDisplay] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const handlePayment = async () => {
        setDisplay(true)

        if(!display&&option){
            setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 4000));

        setLoading(false);
        setConfirm(true);
        setDisplay(true);
        }
        console.log(display,option)
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
                    head={"Are You Sure?"}
                    text={"Do you want to place this order?"}
                    cancel={true}
                />
            )}
            {confirm && (
                <Modal
                    option={option}
                    setOption={setOption}
                    display={display}
                    setDisplay={setDisplay}
                    head={"Order Placed"}
                    text={""}
                    cancel={false}
                />
            )}

            <div className="absolute top-96 -left-20 -z-10 min-w-[450px] min-h-[450px] blur-3xl rounded-full bg-opacity-30 bg-red-600"></div>
            <div className="absolute -bottom-[100%] -right-20 -z-10 min-w-[350px] min-h-[350px] blur-3xl rounded-full bg-opacity-30 bg-red-600"></div>
            <Breadcrumb currentUrl={currentUrl} />
            <h1 className="text-3xl underline underline-offset-8 mt-6 font-medium">
                Your Cart
            </h1>
            <div className="my-1">
                <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                    <div className="flex justify-start item-start space-y-2 flex-col">
                        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-white">
                            View and edit items in your cart:
                        </h1>
                    </div>

                    <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                            <div className="flex flex-col justify-start items-start bg-dark-gradient bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-white">
                                    Customer's Cart
                                </p>
                                <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                    <div className="pb-4 md:pb-8 w-full md:w-40">
                                        <img
                                            className="w-full hidden md:block"
                                            src="/images/cpu.png"
                                            alt="cpu"
                                        />
                                        <img
                                            className="w-full md:hidden"
                                            src="/images/cpu.png"
                                            alt="cpu"
                                        />
                                    </div>
                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-white">
                                                Intel i5 10th Gen
                                            </h3>
                                            <div className="flex justify-start items-start flex-col space-y-2"></div>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-base xl:text-lg leading-6">
                                                Rs. 26,000
                                                <span className="text-red-300 block line-through">
                                                    Rs. 30,000
                                                </span>
                                            </p>
                                            <p className="text-base xl:text-lg leading-6 text-white">
                                                01
                                            </p>
                                            <p className="text-base xl:text-lg font-semibold leading-6 text-white">
                                                Rs. 26,000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                                    <div className="w-full md:w-40">
                                        <img
                                            className="w-full hidden md:block"
                                            src="/images/gpu.png"
                                            alt="gpu"
                                        />
                                        <img
                                            className="w-full md:hidden"
                                            src="/images/gpu.png"
                                            alt="gpu"
                                        />
                                    </div>
                                    <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-white">
                                                Nvidea Rtx 3060
                                            </h3>
                                            <div className="flex justify-start items-start flex-col space-y-2"></div>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-base xl:text-lg leading-6">
                                                Rs. 260,000
                                                <span className="text-red-300 line-through"></span>
                                            </p>
                                            <p className="text-base xl:text-lg leading-6 text-white">
                                                01
                                            </p>
                                            <p className="text-base xl:text-lg font-semibold leading-6 text-white">
                                                Rs. 260,000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-dark-gradient dark:bg-dark-gradient space-y-6">
                                    <h3 className="text-xl font-semibold leading-5 text-white">
                                        Summary
                                    </h3>
                                    <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                        <div className="flex justify-between w-full">
                                            <p className="text-base leading-4 text-white">
                                                Subtotal
                                            </p>
                                            <p className="text-base dark:text-gray-300 leading-4 text-gray-300">
                                                Rs. 290,000
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base leading-4 text-white">
                                                Discount{" "}
                                                <span className="bg-gray-800 p-1 text-xs font-medium leading-3 text-white">
                                                    STUDENT
                                                </span>
                                            </p>
                                            <p className="text-base dark:text-gray-300 leading-4 text-gray-300">
                                                -Rs. 4000
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base leading-4 text-white">
                                                Shipping
                                            </p>
                                            <p className="text-base dark:text-gray-300 leading-4 text-gray-300">
                                                Rs. 500
                                            </p>
                                        </div>
                                    </div>
                                    <div className="border-gray-200 border-b pb-4 flex justify-between items-center w-full">
                                        <p className="text-base font-semibold leading-4 text-white">
                                            Total
                                        </p>
                                        <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-300">
                                            Rs. 286,500
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base font-semibold leading-4 text-white">
                                            Payment Method
                                        </p>
                                        <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-300">
                                            Card
                                        </p>
                                    </div>
                                    <div className="w-full flex justify-center items-center">
                                        <button
                                            onClick={handlePayment}
                                            // href={"/products/details"}
                                            className="bg-size-200 bg-center w-96 md:w-full font-semibold text-lg hover:bg-pos-0 transition-all duration-500 bg-red-gradient border-0 py-3 px-6 rounded-md group"
                                        >
                                            Place Order
                                            <Image
                                                alt="photo"
                                                className="inline-block ml-3 group-hover:translate-x-3 transition-transform"
                                                src={"/icons/arrow.svg"}
                                                height={20}
                                                width={30}
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between px-4 py-6 md:p-6 xl:p-8 w-full bg-dark-gradient space-y-6">
                                    <h3 className="text-xl font-semibold leading-5 text-white">
                                        Shipping
                                    </h3>
                                    <div className="flex justify-between items-start w-full">
                                        <div className="flex justify-center items-center space-x-4">
                                            <div className="w-8 h-8">
                                                <img
                                                    className="w-full h-full"
                                                    alt="logo"
                                                    src="https://i.ibb.co/L8KSdNQ/image-3.png"
                                                />
                                            </div>
                                            <div className="flex flex-col justify-start items-center">
                                                <p className="text-lg leading-6 font-semibold text-white">
                                                    Standard Delivery
                                                    <br />
                                                    <span className="font-normal">
                                                        Delivery within 2-3 Days
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-lg font-semibold leading-6 text-white">
                                        Rs. 500
                                    </p>
                                    <div className="w-full flex justify-center items-center">
                                        <button className="hover:bg-black transition-colors rounded-lg dark:bg-white dark:text-white dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                                            See Other Options
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-dark-gradient w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                            <h3 className="text-xl font-semibold leading-5 text-white">
                                Customer
                            </h3>
                            <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                                <div className="flex flex-col justify-start items-start flex-shrink-0">
                                    <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                        <img
                                            src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                                            alt="avatar"
                                        />
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-base font-semibold leading-4 text-left text-white">
                                                Afnan Riaz
                                            </p>
                                            <p className="text-sm dark:text-gray-300 leading-5 text-gray-300">
                                                10 Previous Orders
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M3 7L12 13L21 7"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <p className="cursor-pointer text-sm leading-5 ">
                                            afnan@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                    <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                        <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                            <p className="text-base font-semibold leading-4 text-center md:text-left text-white">
                                                Shipping Address
                                            </p>
                                            <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-300">
                                                180 johar town
                                            </p>
                                        </div>
                                        <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                            <p className="text-base font-semibold leading-4 text-center md:text-left text-white">
                                                Billing Address
                                            </p>
                                            <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-300">
                                                180 johar town
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                        <button className="mt-6 md:mt-0 dark:border-white rounded-lg transition-colors dark:hover:bg-gray-900 dark:bg-transparent py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 w-96 2xl:w-full text-base font-medium leading-4 hover:text-black text-white">
                                            Edit Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
