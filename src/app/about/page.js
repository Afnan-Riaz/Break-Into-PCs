import React from "react";
import Image from "next/image";
const About = () => {
    return (
        <div className="py-8 text-white lg:px-28 px-8">
            <h1 className="text-3xl font-orbitron underline underline-offset-8 mt-6 font-medium">
                About Us
            </h1>
            <p className="text-lg my-4 text-neutral-200 max-w-[1000px] mb-10">
                Welcome to Break Into PC's! where gaming passion meets
                cutting-edge technology. At Break Into PC's, we understand that
                gaming isn't just a hobby; it's a lifestyle. That's why we've
                dedicated ourselves to providing gamers of all levels with the
                hardware and software they need to take their gaming experience
                to the next level.
            </p>
            <div className="flex gap-4 md:flex-row flex-col justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-orbitron underline underline-offset-8 mt-6 font-medium">
                        Our Story
                    </h1>
                    <p className="text-lg my-4 text-neutral-200 max-w-[600px] mb-10">
                        Our journey began with a simple idea: to create a
                        one-stop destination where gamers could find everything
                        they need, from powerful gaming PCs to the latest and
                        greatest titles. Today, that idea has blossomed into a
                        thriving community of gamers who share our passion for
                        all things gaming. What sets us apart from the
                        competition? It's our commitment to excellence in
                        everything we do. From hand-picking the best components
                        for our gaming PCs to curating a diverse selection of
                        games. But we're more than just a retailer; we're gamers
                        ourselves. We understand the thrill of a hard-fought
                        victory and the camaraderie that comes from gaming with
                        friends. That's why we're always here to offer expert
                        advice to help you make the most of your gaming
                        experience.
                    </p>
                </div>
                <Image
                    className="rounded-full h-fit lg:w-[500px] w-[350px]"
                    src="/images/about-photo1.jpg"
                    width={500}
                    height={500}
                />
            </div>
            <div className="flex gap-4 md:flex-row-reverse flex-col justify-between items-center">
                <div>
                    <h1 className="text-3xl font-orbitron underline underline-offset-8 mt-6 font-medium">
                        Our Mission
                    </h1>
                    <p className="text-lg my-4 text-neutral-200 max-w-[600px] mb-10">
                        Our mission is to revolutionize the gaming experience
                        for enthusiasts worldwide. With an unwavering commitment
                        to excellence, we tirelessly seek out the most
                        cutting-edge technology to craft gaming PCs that
                        redefine performance benchmarks. Our curated selection
                        of games spans genres, ensuring every gamer finds their
                        perfect match. But we're more than just a platform;
                        we're a vibrant community, fostering connections,
                        providing expert guidance, and celebrating the shared
                        passion that unites us all. Together, we're shaping the
                        future of gaming, one level, one victory, one
                        unforgettable experience at a time.
                    </p>
                </div>
                <Image
                    className="rounded-full h-fit lg:w-[500px] w-[350px]"
                    src="/images/about-photo2.jpg"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
};

export default About;
