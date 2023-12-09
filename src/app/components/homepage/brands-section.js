import Image from "next/image";

export default function Brands() {
    return (
        <div className="text-white bg-brands-bg bg-cover bg-center">
            <div className="container flex py-16 flex-col gap-6 items-center mx-auto">
                <h2 className="font-orbitron text-[42px] text-center">
                    LEVEL UP YOUR EXPERIENCE WITH <br />
                    BREAK INTO PCS
                </h2>
                <p className="w-[900px] text-center text-xl">
                    Elevate your setup with the premier destination for PC
                    enthusiasts and avid gamers. Dive into an unparalleled
                    gaming experience as we exclusively offer top-tier gaming
                    components and accessories. We take pride in working with
                    only the best brands to ensure you have access to
                    cutting-edge technology.
                </p>
                <Image
                alt="photo"
                className="-mt-5"
                    src={"/images/brands-photo.png"}
                    height={300}
                    width={1000}
                />
            </div>
        </div>
    );
}
