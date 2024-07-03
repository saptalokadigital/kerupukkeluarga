import React, { useEffect, useState } from "react";
import Image from "next/image";

const Introduction = () => {
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };
    useEffect(() => {

        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="pt-16">
            {isMobile && (
                <>
                    <div
                        className="absolute inset-0 bg-fixed bg-center"
                        style={{
                            backgroundImage: "url('/bg1.png')",
                            backgroundPosition: "bottom",
                            backgroundSize: "cover",
                        }}
                    ></div>
                </>
            )}
            {!isMobile && (
                <>
                    <div
                        className="absolute inset-0 bg-fixed bg-center"
                        style={{
                            backgroundImage: "url('/kakek1.png')",
                            backgroundPosition: "bottom",
                            backgroundSize: "cover",
                        }}
                    ></div>
                </>
            )}

            <div className="w-full h-full absolute">
                {isMobile && (
                    <>
                        <div className="w-full h-screen flex flex-col ">
                            <div className=" h-[80%] inset-0 flex md:flex-row flex-col items-center w-full  md:py-0 py-[50%]">
                                <div className="px-[4%] text-white w-full  flex flex-col items-start text-start  leading-[28px] md:mb-0 mb-5 md:gap-10 gap-4">
                                    <h1 className="light-text  md:text-[140px] text-[60px] font-bold md:leading-[65px] text-shadow-sm shadow-black">
                                        KERUPUK
                                    </h1>
                                    <h1 className="light-text md:text-[87px] text-[37px] font-bold md:leading-[65px] text-shadow-sm shadow-black">
                                        CAP KELUARGA
                                    </h1>
                                </div>
                                <div className="text-white w-full flex flex-col md:items-end md:text-end items-start pt-[25%]">
                                    <div className="flex flex-col md:w-[60%] w-[48%]  bg-[#dd9e62ae] shadow-sm px-3 py-2">
                                        <h1 className="w-full md:w-full md:text-[60px] text-[23px] text-start   font-semibold text-shadow-sm shadow-black">
                                            BELITUNG BEST CRACKER
                                        </h1>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </>
                )}
                {!isMobile && (
                    <>
                        <div className="w-full h-screen flex flex-col ">
                            <div className=" h-[80%] inset-0 flex md:flex-row flex-col items-center w-full  md:py-0 py-[50%]">

                                <div className="text-white w-full flex flex-col md:items-start md:text-end items-start pt-[25%]">
                                    <div className="flex flex-col md:w-[70%] w-[48%]  bg-[#dd9e62ae] shadow-sm px-3 py-2">
                                        <h1 className="w-full md:w-full md:text-[60px] text-[23px] text-start   font-semibold text-shadow-sm shadow-black">
                                            BELITUNG BEST CRACKER
                                        </h1>
                                    </div>

                                </div>
                                <div className="px-[4%] text-white w-full  flex flex-col items-end text-start  leading-[28px] md:mb-0 mb-5 md:gap-10 gap-4">
                                    <h1 className="light-text  md:text-[140px] text-[60px] font-bold md:leading-[65px] text-shadow-sm shadow-black">
                                        KERUPUK
                                    </h1>
                                    <h1 className="light-text md:text-[87px] text-[37px] font-bold md:leading-[65px] text-shadow-sm shadow-black">
                                        CAP KELUARGA
                                    </h1>
                                </div>
                            </div>

                        </div>
                    </>
                )}
            </div>
        </section >
    );
};

export default Introduction;