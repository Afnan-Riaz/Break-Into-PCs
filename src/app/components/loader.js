export default function Loader() {
    return (
        <div className="h-screen min-w-full top-0 left-0 bg-neutral-800 bg-opacity-60 z-50 fixed flex justify-center items-center">
            <div
                style={{ "border-top-color": "transparent" }}
                className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin"
            ></div>
        </div>
    );
}
