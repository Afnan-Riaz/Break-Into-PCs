import Image from "next/image";

export default function Attributes() {
    return (
        <div class="container text-white px-5 mx-auto">
            <h2 className="font-orbitron text-[42px] text-center">
                Our Prime Attributes
            </h2>
            <div class="flex flex-wrap justify-around lg:w-4/5 h-[670px] bg-cover bg-attributes-bg sm:mx-auto sm:mb-2 -mx-2">
                <div class="p-2 flex sm:w-1/2 w-full">
                    {/* <Image src={"/icons/delivery.png"} height={70} width={70}/>
                    <div>
                        <h4>Express Delivery</h4>
                        <p>Swift delivery anytime. Game with minimal wait.</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
