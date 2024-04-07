"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Testimonial() {
    return (
        <div className="text-white pt-6 md:pt-24 pb-20 lg:pb-60 bg-testimonial-bg bg-cover bg-center">
            <h2 className="font-orbitron text-3xl md:text-[42px] mb-20 text-center">
                What Our Customers Say
            </h2>
            <Swiper
                style={{
                    "--swiper-pagination-bullet-inactive-color": "#fff",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bottom": "-4px",
                    "--swiper-pagination-color": "#ff0000",
                    "--swiper-pagination-bullet-inactive-opacity": "0.5",
                }}
                effect={"coverflow"}
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                }}
                initialSlide={1}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 10,
                    depth: 500,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination
                modules={[EffectCoverflow, Pagination]}
                className="max-w-[400px] mx-auto md:max-w-full select-none"
            >
                <SwiperSlide className="">
                    <div className="sm:w-[390px] max-w-[390px] mb-8 rounded-lg bg-gray-gradient p-10 pt-7 text-center">
                        <Image
                            alt="photo"
                            src={"/icons/quote.svg"}
                            height={64}
                            width={55}
                        />
                        <div className="w-60 mx-auto flex flex-col items-center mt-7 gap-5">
                            <p className="leading-relaxed text-lg">
                                The gaming PC I purchased from them is a
                                phenominal!
                            </p>
                            <div className="flex gap-1">
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <h2 className="font-medium tracking-wider text-xl">
                                Bhupindar Jog{" "}
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="sm:w-[390px] max-w-[390px] mb-8 rounded-lg bg-gray-gradient p-10 pt-7 text-center">
                        <Image
                            alt="photo"
                            src={"/icons/quote.svg"}
                            height={64}
                            width={55}
                        />
                        <div className="w-60 mx-auto flex flex-col items-center mt-7 gap-5">
                            <p className="leading-relaxed text-lg">
                                Just Bought a Gaming PC. Super Quality and
                                Dealing
                            </p>
                            <div className="flex gap-1">
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <h2 className="font-medium tracking-wider text-xl">
                                Cristiano Ronaldo
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="">
                    <div className="sm:w-[390px] max-w-[390px] mb-8 rounded-lg bg-gray-gradient p-10 pt-7 text-center">
                        <Image
                            alt="photo"
                            src={"/icons/quote.svg"}
                            height={64}
                            width={55}
                        />
                        <div className="w-60 mx-auto flex flex-col items-center mt-7 gap-5">
                            <p className="leading-relaxed text-lg">
                                Their recommendations helped me choose the
                                perfect gaming setup.{" "}
                            </p>
                            <div className="flex gap-1">
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    alt="photo"
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <h2 className="font-medium tracking-wider text-xl">
                                Bobsie the King{" "}
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
