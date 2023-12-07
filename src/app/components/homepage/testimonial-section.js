"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Testimonial() {
    return (
        <div className="text-white">
            <h2 className="font-orbitron text-[42px] text-center">What Our Customers Say</h2>
            <Swiper
                style={{ "--swiper-navigation-color": "#ffffff" }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                loop
                initialSlide={1}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 10,
                    depth: 500,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation={true}
                modules={[EffectCoverflow, Navigation]}
                className="w-5/6"
            >
                <SwiperSlide>
                        <div className="w-[390px] mx-auto rounded-lg bg-gray-gradient p-10 pt-7 text-center">
                            <Image
                                src={"/icons/quote.svg"}
                                height={64}
                                width={55}
                            />
                            <div className="w-60 mx-auto flex flex-col items-center mt-7 gap-5">
                            <p className="leading-relaxed text-lg">
                                Just Bought a Gaming PC. Super Quality and Dealing
                            </p>
                            <div className="flex gap-1">
                                <Image
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
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
                <SwiperSlide>
                        <div className="w-[390px] mx-auto rounded-lg bg-gray-gradient p-10 pt-7 text-center">
                            <Image
                                src={"/icons/quote.svg"}
                                height={64}
                                width={55}
                            />
                            <div className="w-60 mx-auto flex flex-col items-center mt-7 gap-5">
                            <p className="leading-relaxed text-lg">
                                Just Bought a Gaming PC. Super Quality and Dealing
                            </p>
                            <div className="flex gap-1">
                                <Image
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
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
                <SwiperSlide>
                        <div className="w-[390px] mx-auto rounded-lg bg-gray-gradient p-10 pt-7 text-center">
                            <Image
                                src={"/icons/quote.svg"}
                                height={64}
                                width={55}
                            />
                            <div className="w-60 mx-auto flex flex-col items-center mt-7 gap-5">
                            <p className="leading-relaxed text-lg">
                                Just Bought a Gaming PC. Super Quality and Dealing
                            </p>
                            <div className="flex gap-1">
                                <Image
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    src={"/icons/star.png"}
                                    width={40}
                                    height={40}
                                />
                                <Image
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
            </Swiper>
        </div>
    );
}
