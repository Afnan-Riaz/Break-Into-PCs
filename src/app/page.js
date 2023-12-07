import Image from "next/image";
import Landing from "./components/homepage/landing-section";
import Brands from "./components/homepage/brands-section";
import Attributes from "./components/homepage/attributes-section";
import Testimonial from "./components/homepage/testimonial-section";

export default function Home() {
    return (
        <>
            <Landing />
            <Brands />
            <Attributes/>
            <Testimonial/>
        </>
    );
}
