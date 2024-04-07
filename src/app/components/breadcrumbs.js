import Link from "next/link";

const Breadcrumb = ({ currentUrl }) => {
    const pathSegments = currentUrl
        .split("/")
        .filter((segment) => segment !== "");

    return (
        <nav className="text-white my-4 sm:-ml-6">
            <ol className="flex flex-wrap gap-1">
                <div className="flex gap-x-3">
                    <Link href={"/"}>Home</Link>
                    <p className="leading-[9px] w-4">&emsp;&gt;</p>
                </div>
                {pathSegments.map((segment, index) => (
                    <li key={index} className="capitalize">
                        {index === pathSegments.length - 1 ? (
                            <span className="underline underline-offset-2">
                                {segment}
                            </span>
                        ) : (
                            <div className="flex gap-x-3">
                                <Link
                                    className="capitalize"
                                    href={`/${pathSegments
                                        .slice(0, index + 1)
                                        .join("/")}`}
                                >
                                    {segment}
                                </Link>
                                <p className="leading-[9px] w-4">&emsp;&gt;</p>
                            </div>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
