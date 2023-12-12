"use client";
import Breadcrumb from "@/app/components/breadcrumbs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Blogs() {
    const [apiData, setData] = useState([]);
    const [,forceUpdate]=useState();
    useEffect(() => {
        async function api() {
            const apiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_345740a4ae9716bc36d938ff4b96e60de3822&category=technology&language=en";
            await fetch(apiUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `HTTP error! Status: ${response.status}`
                        );
                    }
                    return response.json();
                })
                .then((data) => {
                    setData(data.results);
                    forceUpdate({});
                })
                .catch((error) => {
                    console.error("Fetch error:", error);
                });
        }
        api();
    }, []);
    var blogs;
    useEffect(() => {
        console.log(apiData);
    }, [apiData]);
    const currentUrl = usePathname();
    return (
        <div className="text-white px-28">
            <Breadcrumb currentUrl={currentUrl} />
            <h1 className="text-3xl underline underline-offset-8 mt-6 font-medium">
                Blogs
            </h1>
            <p className="text-lg my-4 text-neutral-200 max-w-[1000px] mb-10">
                Read our latest tech blogs and keep yourself up-to-date with the
                technological advancements
            </p>
            <div className="my-20">
            {Array.isArray(apiData) &&
                    apiData.map((blog, index) => (
                        <div className="my-16 px-10" key={index}>
                            <h2 className="text-4xl mb-6 font-semibold">{blog.title}</h2>
                            <p className="leading-relaxed text-lg">{blog.content}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}
