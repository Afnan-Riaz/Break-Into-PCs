import Image from "next/image";
import Link from "next/link";

export default function Picks() {
    return (
        <div>
            <div className="container px-5 pb-24 mx-auto text-white">
                <h2 className="font-orbitron text-3xl sm:text-[42px] mb-20 text-center">
                    Top Picks For You
                </h2>
                <div className="flex justify-evenly flex-wrap -m-4">
                    <div className="w-80 bg-dark-gradient rounded-lg p-5">
                        <Image
                            width={400}
                            height={400}
                            alt="item"
                            className="object-contain object-center w-full h-48"
                            src="/images/pc-1.png"
                        />
                        <h4 className="font-medium text-center my-3 text-white">Ultron Gamers Edition</h4>
                        <ul className="space-y-2 mb-6">
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/cpu.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">Ryzen 5 5600 CPU</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/gpu.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">GTX 1660 Super Used Graphics Card</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/ssd.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">256GB Nvme + 1TB HDD Used</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/power-supply.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">600W Power Supply</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/motherboard.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">Gigabyte B550m DS3H AC Motherboard</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/case.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">Thunder Lancer Case</p>
                            </li>
                        </ul>
                        <div className="flex justify-between">
                            <p className="font-semibold text-lg">RS 220,000</p>
                            <Link className="text-base underline underline-offset-2 text-neutral-300" href={"/products"}>View details</Link>
                        </div>
                    </div>
                    <div className="w-80 bg-dark-gradient rounded-lg p-5">
                        <Image
                            width={400}
                            height={400}
                            alt="item"
                            className="object-contain object-center w-full h-48"
                            src="/images/pc-2.png"
                        />
                        <h4 className="font-medium text-center my-3 text-white">Genesis MasterCore <span className="text-xs font-light">Special Edition</span></h4>
                        <ul className="space-y-2 mb-6">
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/cpu.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">Ryzen 7 7200 CPU</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/gpu.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">RTX 3060 Ti Graphic Card</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/ssd.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">512GB Nvme + 1TB HDD Used</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/power-supply.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">800W Power Supply</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/motherboard.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">Gigabyte X200 8x AC Motherboard</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/case.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">Wizard Series Case</p>
                            </li>
                        </ul>
                        <div className="flex justify-between">
                            <p className="font-semibold text-lg">RS 360,000</p>
                            <Link className="text-base underline underline-offset-2 text-neutral-300" href={"/products"}>View details</Link>
                        </div>
                    </div>
                    <div className="w-80 bg-dark-gradient rounded-lg p-5">
                        <Image
                            width={400}
                            height={400}
                            alt="item"
                            className="object-contain object-center w-full h-48"
                            src="/images/pc-3.png"
                        />
                        <h4 className="font-medium text-center my-3 text-white">Black Dragon Extreme</h4>
                        <ul className="space-y-2 mb-6">
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/cpu.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">Ryzen 9 10600 CPU</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/gpu.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">RTX 4090 Graphics Card</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/ssd.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">2TB Nvme</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/power-supply.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">1200W Power Supply</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/motherboard.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">Gigabyte X900 Super Motherboard</p>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Image alt="photo" className="h-5 w-5" src={"/icons/case.png"} width={200} height={200}/>
                                <p className="font-light text-neutral-300 text-xs">Deepcool Mattrex 50 Case</p>
                            </li>
                        </ul>
                        <div className="flex justify-between">
                            <p className="font-semibold text-lg">RS 550,000</p>
                            <Link className="text-base underline underline-offset-2 text-neutral-300" href={"/products"}>View details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
