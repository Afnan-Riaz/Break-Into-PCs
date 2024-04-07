"use client";
import Image from "next/image";

export default function FAQ() {
    const toggleFaq = (event) => {
        const faqButton = event.currentTarget;
        const faqContent = faqButton.nextElementSibling;
        if (faqContent.style.maxHeight) {
            faqContent.style.maxHeight = null;
            faqContent.style.marginTop = "0px";
            faqButton.querySelector("img").style.transform = "rotate(0deg)";
        } else {
            faqContent.style.maxHeight = faqContent.scrollHeight + "px";
            faqContent.style.marginTop = "5px";
            faqButton.querySelector("img").style.transform = "rotate(180deg)";
        }
    };
    return (
        <div className="container mx-auto text-white mb-16">
            <h2 className="font-orbitron text-3xl sm:text-[42px] mb-20 text-center">
                Common Queries
            </h2>

            <div className="max-w-[900px] mx-auto">
                <div className="faq-item border-b-2 p-3 max-h-fit">
                    <button
                        onClick={toggleFaq}
                        className="flex w-full justify-between items-center"
                    >
                        <h4 className="faq-title font-medium text-lg sm:text-xl">
                            Are there warranty and support services for
                            custom-built PCs?
                        </h4>
                        <Image
                            alt="photo"
                            className="transition-all"
                            src={"/icons/cheveron.svg"}
                            width={20}
                            height={20}
                        />
                    </button>
                    <div className="faq-content text-neutral-200 pl-2 max-h-0 overflow-hidden transition-all">
                        <p>
                            Yes, custom-built PCs typically come with
                            warranties. Individual components have varying
                            warranty coverage, and system builders often offer
                            comprehensive support services. It's advisable to
                            review the warranty details for each component and
                            the overall system.
                        </p>
                    </div>
                </div>
                <div className="faq-item border-b-2 p-3 max-h-fit">
                    <button
                        onClick={toggleFaq}
                        className="flex w-full justify-between items-center"
                    >
                        <h4 className="faq-title font-medium text-lg sm:text-xl">
                            How can benchmarking benefit my PC's performance?
                        </h4>
                        <Image
                            alt="photo"
                            className="transition-all"
                            src={"/icons/cheveron.svg"}
                            width={20}
                            height={20}
                        />
                    </button>
                    <div className="faq-content text-neutral-200 pl-2 max-h-0 overflow-hidden transition-all">
                        <p>
                            Benchmarking is crucial for assessing and optimizing
                            PC performance. By running benchmark tests on
                            components like CPU, GPU, and storage, users can
                            identify bottlenecks, fine-tune their systems, and
                            track performance improvements over time or after
                            upgrades.
                        </p>
                    </div>
                </div>
                <div className="faq-item border-b-2 p-3 max-h-fit">
                    <button
                        onClick={toggleFaq}
                        className="flex w-full justify-between items-center"
                    >
                        <h4 className="faq-title font-medium text-lg sm:text-xl">
                            Can I choose specific components for my custom PC
                            build?
                        </h4>
                        <Image
                            alt="photo"
                            className="transition-all"
                            src={"/icons/cheveron.svg"}
                            width={20}
                            height={20}
                        />
                    </button>
                    <div className="faq-content text-neutral-200 pl-2 max-h-0 overflow-hidden transition-all">
                        <p>
                            Certainly! Custom PC builds offer the freedom to
                            handpick components such as processors, graphics
                            cards, motherboards, RAM, and storage based on
                            individual preferences, performance requirements,
                            and budget constraints. This flexibility ensures a
                            tailored computing experience.
                        </p>
                    </div>
                </div>
                <div className="faq-item border-b-2 p-3 max-h-fit">
                    <button
                        onClick={toggleFaq}
                        className="flex w-full justify-between items-center"
                    >
                        <h4 className="faq-title font-medium text-lg sm:text-xl">
                            Can I track my order once it's been shipped?
                        </h4>
                        <Image
                            alt="photo"
                            className="transition-all"
                            src={"/icons/cheveron.svg"}
                            width={20}
                            height={20}
                        />
                    </button>
                    <div className="faq-content text-neutral-200 pl-2 max-h-0 overflow-hidden transition-all">
                        <p>
                            Absolutely. Once your order is shipped, you can
                            track its status using the provided tracking
                            information. This allows you to monitor the delivery
                            progress in real-time and stay informed about the
                            estimated arrival time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
