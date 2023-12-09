import Image from "next/image";

export default function Attributes() {
    return (
        <div className="container text-white px-8 2xl:px-36 mx-auto">
            <h2 className="font-orbitron text-[42px] text-center">
                Our Prime Attributes
            </h2>
            <div className="-mt-10 w-full xl:w-4/5 h-[670px] bg-contain bg-no-repeat bg-center flex items-center justify-center bg-attributes-bg sm:mx-auto sm:mb-2 ">
                <div className="grid grid-cols-[24rem_24rem] justify-around items-center pb-24 w-4/5 gap-y-8">
                    <div className="gap-3 h-fit flex sm:w-96 w-full">
                        <Image
                            className="h-fit"
                            src={"/icons/delivery.png"}
                            height={70}
                            width={50}
                        />
                        <div>
                            <h4 className="text-red-primary my-3 font-semibold text-2xl">Express Delivery</h4>
                            <p>
                                Swift delivery anytime. Game with minimal wait.
                            </p>
                        </div>
                    </div>
                    <div className="gap-3 h-fit flex sm:w-96 w-full">
                        <Image
                            className="h-fit"
                            src={"/icons/delivery.png"}
                            height={70}
                            width={50}
                        />
                        <div>
                            <h4 className="text-red-primary my-3 font-semibold text-2xl">Exclusive Deals</h4>
                            <p>
                            Save big on gaming bundles and special promotions.
                            </p>
                        </div>
                    </div>
                    <div className="gap-3 h-fit flex sm:w-96 w-full">
                        <Image
                            className="h-fit"
                            src={"/icons/delivery.png"}
                            height={70}
                            width={50}
                        />
                        <div>
                            <h4 className="text-red-primary my-3 font-semibold text-2xl">24/7 Expert Support</h4>
                            <p>
                            Seamless experience ensured with assistance for all your queries.
                            </p>
                        </div>
                    </div>
                    <div className="gap-3 h-fit flex sm:w-96 w-full">
                        <Image
                            className="h-fit"
                            src={"/icons/delivery.png"}
                            height={70}
                            width={50}
                        />
                        <div>
                            <h4 className="text-red-primary my-3 font-semibold text-2xl">Hassle-Free Returns</h4>
                            <p>
                            Easy returns, plus warranties for worry-free gaming gear satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
