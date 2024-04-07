"use client";
import Breadcrumb from "@/app/components/breadcrumbs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        async function getBlogs() {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_DOMAIN}/api/blogs`
            ).then((res) => res.json());
            setBlogs(response);
        }
        getBlogs();
    }, []);
    const currentUrl = usePathname();
    return (
        <div className="text-white px-6 md:px-28">
            <Breadcrumb currentUrl={currentUrl} />
            <h1 className="text-3xl underline underline-offset-8 mt-6 font-medium">
                Blogs
            </h1>
            <p className="text-lg my-4 text-neutral-200 max-w-[1000px] mb-10">
                Read our latest tech blogs and keep yourself up-to-date with the
                technological advancements
            </p>
            <div className="my-8 sm:my-20 flex flex-wrap gap-9">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="w-96 h-fit py-4 bg-dark-gradient rounded-lg p-4 bg-size-200 bg-center hover:bg-pos-0 transition-all duration-500 border-0"
                    >
                        <Image
                            width={380}
                            height={380}
                            alt="item"
                            className="object-contain rounded-lg mb-6 object-center"
                            src={`/images/${blog.image}`}
                        />
                        <h4 className="font-medium text-2xl text-center mb-4">
                            {blog.title}
                        </h4>
                        <p className="px-4 text-neutral-200">
                            {blog.description}
                        </p>
                        <div className="flex justify-end mt-4">
                            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/resources/blogs/${blog.slug}`} className="text-base underline underline-offset-2 text-neutral-300">Read Full Blog</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
