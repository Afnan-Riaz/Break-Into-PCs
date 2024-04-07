import Image from "next/image";

export default function Attributes() {
    return (
        <div className="container text-white px-8 2xl:px-36 mx-auto">
            <h2 className="font-orbitron text-3xl sm:text-[42px] text-center">
                Our Prime Attributes
            </h2>
            <div className="xs:-mt-10 mt-6 w-full xl:w-4/5 xs:h-[330px] sm:h-[450px] md:h-[500px] lg:h-[670px] max-xs:bg-none bg-contain bg-no-repeat bg-center flex items-center justify-center bg-attributes-bg sm:mx-auto sm:mb-2 ">
                <div className="grid xs:grid-cols-[1fr_1fr] justify-around items-center pb-10 sm:pb-16 md:pb-24 w-[90%] lg:w-4/5 gap-y-2 lg:gap-y-8">
                    <div className="gap-3 h-fit flex w-full">
                        <Image
                        alt="photo"
                            className="h-fit w-8 sm:w-10 md:12"
                            src={"/icons/delivery.png"}
                            height={70}
                            width={50}
                        />
                        <div>
                            <h4 className="text-red-primary sm:my-1 lg:my-3 font-medium sm:font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">Express Delivery</h4>
                            <p className="text-sm md:text-base xs:max-sm:hidden block">
                                Swift delivery anytime. Game with minimal wait.
                            </p>
                        </div>
                    </div>
                    <div className="gap-3 h-fit flex w-full">
                        <Image
                        alt="photo"
                            className="h-fit w-8 sm:w-10 md:12"
                            src={"/icons/discount.png"}
                            height={70}
                            width={50}
                        />
                        <div>
                            <h4 className="text-red-primary sm:my-1 lg:my-3 font-medium sm:font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">Exclusive Deals</h4>
                            <p className="text-sm md:text-base xs:max-sm:hidden block">
                            Save big on gaming bundles and special promotions.
                            </p>
                        </div>
                    </div>
                    <div className="gap-3 h-fit flex w-full">
                        <Image
                        alt="photo"
                            className="h-fit w-8 sm:w-10 md:12"
                            src={"/icons/support.png"}
                            height={70}
                            width={50}
                        />
                        <div>
                            <h4 className="text-red-primary sm:my-1 lg:my-3 font-medium sm:font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">24/7 Expert Support</h4>
                            <p className="text-sm md:text-base xs:max-sm:hidden block">
                            Seamless experience ensured with assistance for all your queries.
                            </p>
                        </div>
                    </div>
                    <div className="gap-3 h-fit flex w-full">
                        <Image
                        alt="photo"
                            className="h-fit w-8 sm:w-10 md:12"
                            src={"/icons/purchase.png"}
                            height={70}
                            width={50}
                        />
                        <div>
                            <h4 className="text-red-primary sm:my-1 lg:my-3 font-medium sm:font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">Hassle-Free Returns</h4>
                            <p className="text-sm md:text-base xs:max-sm:hidden block">
                            Easy returns, plus warranties for worry-free gaming gear satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
