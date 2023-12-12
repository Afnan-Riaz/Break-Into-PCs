"use client"

import { useRef } from "react";



function Modal({option,setOption,display,setDisplay}) {
    const modalRef=useRef();
    const toggleModal=()=>{
        setDisplay(false);
    }
    return (
        <div
            ref={modalRef}
            className={`min-w-screen h-screen fixed left-0 top-0 ${display?'flex':'hidden'} justify-center items-center inset-0 z-50 outline-none focus:outline-none`}
            id="modal-id"
        >
            <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-dark-gradient ">
                <div className="">
                    <div className="text-center p-5 flex-auto justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 -m-1 flex items-center text-red-primary mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
                        <p className="text-sm text-neutral-200 px-8">
                            Do you really want to delete your account? This
                            process cannot be undone
                        </p>
                    </div>
                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <button onClick={()=>{setOption(false);toggleModal()}} className="mb-2 md:mb-0 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 text-neutral-200 hover:text-neutral-800 rounded-full hover:shadow-lg transition-colors hover:bg-gray-100">
                            Cancel
                        </button>
                        <button onClick={()=>{setOption(true);toggleModal()}} className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
