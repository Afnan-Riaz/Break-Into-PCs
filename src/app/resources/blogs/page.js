"use client"
import Breadcrumb from "@/app/components/breadcrumbs";
import { usePathname } from "next/navigation"



export default function Blogs() {
    const currentUrl=usePathname();
    return(
        <div>
            <Breadcrumb currentUrl={currentUrl}/>
        </div>
    )
}