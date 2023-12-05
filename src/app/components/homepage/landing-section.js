"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Landing() {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            style={{
                '--swiper-pagination-bullet-inactive-color': '#fff',
                '--swiper-pagination-bullet-size': '16px',
                '--swiper-pagination-color': '#ff0000',
                '--swiper-pagination-bullet-inactive-opacity': '0.5',
            }}
        >
            <SwiperSlide>
                <div class="mx-auto flex px-28 py-12 text-white md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:max-w-[600px] lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="sm:text-5xl font-orbitron text-3xl mb-14 sm:!leading-[3.5rem] font-medium">
                            Build Your Dream Setup NOW!
                        </h1>
                        <p class="mb-16 leading-relaxed text-2xl text-neutral-300">
                            Helping You to build your Dream Setup, the Way you
                            Want - Easy, Hassle Free, Genuine and ... the Best!
                        </p>
                        <div class="flex justify-center">
                            <button class="bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 inline-flex font-semibold text-xl bg-red-gradient border-0 py-3 px-10 rounded-lg">
                                Explore
                            </button>
                            <button class="ml-4 inline-flex py-3 px-8 font-semibold rounded-lg hover:outline hover:outline-2 transition-all text-xl">
                                Go To Marketplace
                            </button>
                        </div>
                    </div>
                    <div class="lg:w-full w-5/6">
                        <Image
                            class="object-cover object-center"
                            alt="hero"
                            src="/images/landing-bg-1.png"
                            height={1000}
                            width={1000}
                        />
                    </div>
                    <div className="absolute -bottom-20 -left-20 -z-10 min-w-[450px] min-h-[450px] blur-3xl rounded-full bg-opacity-30 bg-blue-600"></div>
                    <div className="absolute bottom-20 -right-20 -z-10 min-w-[350px] min-h-[350px] blur-3xl rounded-full bg-opacity-30 bg-green-600"></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="mx-auto flex px-28 py-12 text-white md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:max-w-[600px] lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="sm:text-5xl font-orbitron text-3xl mb-14 sm:!leading-[3.5rem] font-medium">
                            Buy PC Parts From Top Brands
                        </h1>
                        <p class="mb-16 leading-relaxed text-2xl text-neutral-300">
                            We offer a versatile marketplace where you can buy any PC part from well known brands in the PC world.
                        </p>
                        <div class="flex justify-center">
                            <button class="bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 inline-flex font-semibold text-xl bg-red-gradient border-0 py-3 px-10 rounded-lg">
                                Explore
                            </button>
                            <button class="ml-4 inline-flex py-3 px-8 font-semibold rounded-lg hover:outline hover:outline-2 transition-all text-xl">
                                Go To Marketplace
                            </button>
                        </div>
                    </div>
                    <div class="lg:w-full w-5/6">
                        <Image
                            class="object-cover object-center"
                            alt="hero"
                            src="/images/landing-bg-2.png"
                            height={1000}
                            width={1000}
                        />
                    </div>
                    <div className="absolute -bottom-20 -left-20 -z-10 min-w-[450px] min-h-[450px] blur-3xl rounded-full bg-opacity-30 bg-blue-600"></div>
                    <div className="absolute bottom-20 -right-20 -z-10 min-w-[350px] min-h-[350px] blur-3xl rounded-full bg-opacity-30 bg-green-600"></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="mx-auto flex pl-28 py-12 text-white md:flex-row flex-col items-center justify-between">
                    <div class="lg:flex-grow md:max-w-[600px] lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="sm:text-5xl font-orbitron text-3xl mb-14 sm:!leading-[3.5rem] font-medium">
                            Buy Newly Released Games
                        </h1>
                        <p class="mb-16 leading-relaxed text-2xl text-neutral-300">
                            At Break Into PCs, you can buy freshly released gaming titles and enjoy them on your capable PC.
                        </p>
                        <div class="flex justify-center">
                            <button class="bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 inline-flex font-semibold text-xl bg-red-gradient border-0 py-3 px-10 rounded-lg">
                                Explore
                            </button>
                            <button class="ml-4 inline-flex py-3 px-8 font-semibold rounded-lg hover:outline hover:outline-2 transition-all text-xl">
                                Go To Marketplace
                            </button>
                        </div>
                    </div>
                    <div style={{'box-shadow': '0 0 8px 8px white inset'}} class="lg:w-fit -mt-10 w-5/6">
                        <Image
                        
                            class="object-cover object-center"
                            alt="hero"
                            src="/images/landing-bg-33.png"
                            height={1000}
                            width={800}
                        />
                    </div>
                    <div className="absolute -bottom-20 -left-20 -z-10 min-w-[450px] min-h-[450px] blur-3xl rounded-full bg-opacity-30 bg-blue-600"></div>
                    <div className="absolute bottom-20 -right-20 -z-10 min-w-[350px] min-h-[350px] blur-3xl rounded-full bg-opacity-30 bg-green-600"></div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
