"use client";
import Breadcrumb from "@/app/components/breadcrumbs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Blogs() {
    const [apiData, setData] = useState([]);
    useEffect(() => {
        async function api() {
            const apiUrl =
                "https://newsdata.io/api/1/news?apikey=pub_345740a4ae9716bc36d938ff4b96e60de3822&category=technology";
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
        blogs=apiData.map((blog,index)=>{
            <div key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>}
)

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
            <div className="my-10">
                {blogs}
            </div>
        </div>
    );
}
