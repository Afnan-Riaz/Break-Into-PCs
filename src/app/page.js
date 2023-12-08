import Image from "next/image";
import Landing from "./components/homepage/landing-section";
import Brands from "./components/homepage/brands-section";
import Attributes from "./components/homepage/attributes-section";
import Testimonial from "./components/homepage/testimonial-section";
import Picks from "./components/homepage/picks-section";
import FAQ from "./components/homepage/faq-section";

export default function Home() {
    return (
        <>
            <Landing />
            <Brands />
            <Attributes/>
            <Testimonial/>
            <Picks/>
            <FAQ/>
        </>
    );
}
