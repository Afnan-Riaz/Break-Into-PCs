"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function Landing() {
    return (
        <div className="relative overflow-hidden">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                style={{
                    "--swiper-pagination-bullet-inactive-color": "#fff",
                    "--swiper-pagination-bullet-size": "16px",
                    "--swiper-pagination-color": "#ff0000",
                    "--swiper-pagination-bullet-inactive-opacity": "0.5",
                }}
                loop
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                className="max-h-[520px] select-none"
            >
                <SwiperSlide>
                    <div className="container mx-auto flex px-4 2xl:px-28 py-12 text-white md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:max-w-[400px] lg:max-w-[600px] lg:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
                            <h1 className="lg:text-5xl sm:text-4xl font-orbitron text-3xl mb-8 md:mb-14 sm:!leading-[3.5rem] font-medium">
                                Build Your Dream Setup NOW!
                            </h1>
                            <p className="mb-9 md:mb-16 leading-relaxed text-lg xs:text-xl lg:text-2xl text-neutral-300">
                                Helping You to build your Dream Setup, the Way
                                you Want - Easy, Hassle Free, Genuine and ...
                                the Best!
                            </p>
                            <div className="flex gap-4 items-center xs:flex-row flex-col justify-center">
                                <Link
                                    href={"/resources"}
                                    className="bg-size-200 bg-center hover:bg-pos-0 transition-[background] w-fit duration-500 inline-flex font-semibold text-lg lg:text-xl bg-red-gradient border-0 py-3 px-6 lg:px-10 rounded-lg"
                                >
                                    Explore
                                </Link>
                                <Link
                                    href={"/products/marketplace"}
                                    className="inline-flex py-3 px-4 lg:px-8 w-fit font-semibold rounded-lg outline outline-1 hover:outline-2 transition-[background,outline] text-lg lg:text-xl"
                                >
                                    Go To Marketplace
                                </Link>
                            </div>
                        </div>
                        <div className="w-full hidden md:block">
                            <Image
                                loading="eager"
                                priority={true}
                                className="object-cover object-center"
                                alt="hero"
                                src="/images/landing-photo-1.png"
                                height={1000}
                                width={1000}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container mx-auto flex px-4 2xl:px-28 py-12 text-white md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:max-w-[400px] lg:max-w-[600px] lg:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
                            <h1 className="lg:text-5xl font-orbitron md:text-4xl text-3xl mb-8 md:mb-14 sm:!leading-[3.5rem] font-medium">
                                Buy PC Parts From Top Brands
                            </h1>
                            <p className="mb-9 md:mb-16 leading-relaxed text-lg xs:text-xl lg:text-2xl text-neutral-300">
                                We offer a versatile marketplace where you can
                                buy any PC part from well known brands in the PC
                                world.
                            </p>
                            <div className="flex gap-4 items-center xs:flex-row flex-col justify-center">
                                <Link
                                    href={"/products"}
                                    className="bg-size-200 bg-center hover:bg-pos-0 transition-[background] w-fit duration-500 inline-flex font-semibold text-lg lg:text-xl bg-red-gradient border-0 py-3 px-6 lg:px-10 rounded-lg"
                                >
                                    Explore
                                </Link>
                                <Link
                                    href={"/products/marketplace"}
                                    className="xs:ml-4 inline-flex py-3 px-4 lg:px-8 w-fit font-semibold rounded-lg outline outline-1 hover:outline-2 transition-[background,outline] text-lg lg:text-xl"
                                >
                                    Go To Marketplace
                                </Link>
                            </div>
                        </div>
                        <div className="w-full hidden md:block">
                            <Image
                                loading="eager"
                                priority={true}
                                className="object-cover object-center"
                                alt="hero"
                                src="/images/landing-photo-2.png"
                                height={1000}
                                width={1000}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container mx-auto flex px-4 2xl:pl-28 py-4 xs:py-12 text-white md:flex-row flex-col items-center justify-between">
                        <div className="lg:flex-grow md:max-w-[400px] lg:max-w-[600px] lg:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
                            <h1 className="lg:text-5xl font-orbitron md:text-4xl text-3xl mb-8 md:mb-14 sm:!leading-[3.5rem] font-medium">
                                Buy Newly Released Games
                            </h1>
                            <p className="mb-9 md:mb-16 leading-relaxed text-lg xs:text-xl lg:text-2xl text-neutral-300">
                                At Break Into PCs, you can buy freshly released
                                gaming titles and enjoy them on your capable PC.
                            </p>
                            <div className="flex gap-4 items-center xs:flex-row flex-col justify-center">
                                <Link
                                    href={"products/games"}
                                    className="bg-size-200 bg-center hover:bg-pos-0 transition-[background] w-fit duration-500 inline-flex font-semibold text-lg lg:text-xl bg-red-gradient border-0 py-3 px-6 lg:px-10 rounded-lg"
                                >
                                    Explore
                                </Link>
                                <Link
                                    href={"/products/marketplace"}
                                    className="xs:ml-4 inline-flex py-3 px-4 lg:px-8 w-fit font-semibold rounded-lg outline outline-1 hover:outline-2 transition-[background,outline] text-lg lg:text-xl"
                                >
                                    Go To Marketplace
                                </Link>
                            </div>
                        </div>
                        <div className="w-full hidden md:block -mt-10">
                            <Image
                                loading="eager"
                                priority={true}
                                className="object-cover object-center"
                                alt="hero"
                                src="/images/landing-photo-3.png"
                                height={1000}
                                width={750}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="absolute -bottom-20 -left-20 -z-10 min-w-[450px] min-h-[450px] blur-3xl rounded-full bg-opacity-30 bg-blue-600"></div>
            <div className="absolute bottom-20 -right-20 -z-10 min-w-[350px] min-h-[350px] blur-3xl rounded-full bg-opacity-30 bg-green-600"></div>
        </div>
    );
}
