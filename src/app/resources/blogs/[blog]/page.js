"use client";
import Breadcrumb from "@/app/components/breadcrumbs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "@/app/components/loader";
export default function Blog({ params }) {
    const [blog, setBlog] = useState();
    console.log(blog);
    useEffect(() => {
        async function getBlogs() {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_DOMAIN}/api/blogs`
            )
                .then((res) => res.json())
                .then((res) => res.find((item) => item.slug === params.blog));
            setBlog(response);
        }
        getBlogs();
    }, []);
    const currentUrl = usePathname();
    return blog ? (
        <div className="text-white px-28">
            <Breadcrumb currentUrl={currentUrl} />
            <Image className="mx-auto" width={600} height={1080} src={`/images/${blog.image}`} />
            <h1 className="text-3xl underline underline-offset-8 my-6 font-medium">
                {blog.title}
            </h1>
            <div className="markup" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </div>
    ) : (
        <Loader />
    );
}
