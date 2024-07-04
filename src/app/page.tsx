"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Introduction from "./components/Introduction";
import Production from "./components/Production";
import Catalog from "./components/Catalog";
import Image from "next/image";
import ContactUs from "./components/ContactUs";
import Link from "next/link";

function Page() {
  const [scrollLocation, setScrollLocation] = useState(0);
  const [prevScrollLocation, setPrevScrollLocation] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [language, setLanguage] = useState("eng");
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollLocation = window.scrollY;
      setScrollLocation(currentScrollLocation);

      // Check if scrollLocation is decreasing
      if (currentScrollLocation < prevScrollLocation) {
        // Scroll location is decreasing
        setScrollDirection("up");
      } else if (currentScrollLocation > prevScrollLocation) {
        // Scroll location is increasing
        setScrollDirection("down");
      }

      // Update prevScrollLocation with currentScrollLocation
      setPrevScrollLocation(currentScrollLocation);
    };

    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollLocation]);
  return (
    <div >
      <main id="#" className="flex  min-h-screen  flex-col bg-[#f8e4dc]">
        <div
          className={`absolute w-full  flex justify-between items-center md:py-[50px] py-[25px] duration-200 
    ${scrollLocation >= 100 ? "bg-[#000820]" : "bg-transparent"}
    ${scrollLocation >= 100 && scrollDirection == "down"
              ? "-translate-y-[90px]"
              : ""
            }
    `}
        >
          <div className="flex w-full fixed top-0 md:h-[90px] h-[70px] bg-[#d5bfaa] shadow-md backdrop-blur-md z-50 justify-center items-center">
            <div className="flex w-full flex-col-1 justify-between gap-4 px-4">
              <div className="flex gap-3 items-center">
                {/* <a href='/#'>
                            <Image
                                src={'/belitung.png'}
                                width={200}
                                height={200}
                                alt={'logo'}
                                className=' w-28 h-16 '
                            />
                        </a>
                        <a href='/#'>
                            <Image
                                src={'/wonder.png'}
                                width={200}
                                height={200}
                                alt={'logo'}
                                className=' w-[160px] h-16 '
                            />
                        </a> */}
                <a href="/#">
                  <Image
                    src={"/keluarga.png"}
                    width={200}
                    height={200}
                    alt={"logo"}
                    className="md:w-[110px] md:h-16 w-[70px] h-10 "
                  />
                </a>
              </div>
              <div className="flex md:gap-12 gap-2  w-full justify-center items-center ">
                <Link href={"#history"}>
                  <button className="text-white md:text-[30px] underline">
                    History
                  </button>
                </Link>
                <Link href={"#production"}>
                  <button className="text-white md:text-[30px] underline">
                    Production
                  </button>
                </Link>
                <Link href={"#catalog"}>
                  <button className="text-white md:text-[30px] underline">
                    Catalog
                  </button>
                </Link>
              </div>
              <div className="flex gap-1 flex-row md:text-[30px]">
                <button
                  onClick={() => setLanguage("in")}
                  className="  text-[#F0F3FF] font-semibold text-base "
                >
                  <img
                    className=""
                    src="https://flagcdn.com/id.svg"
                    width="40"

                    alt="Indonesia" />
                </button>
                <button
                  onClick={() => setLanguage("eng")}
                  className=" text-[#F0F3FF] font-semibold text-base "
                >
                  <img
                    className=""
                    src="https://flagcdn.com/gb.svg"
                    width="40"

                    alt="English" />
                </button>
                <button
                  onClick={() => setLanguage("chi")}
                  className=" text-[#F0F3FF] font-semibold text-base "
                >
                  <img
                    className=""
                    src="https://flagcdn.com/cn.svg"
                    width="40"
                    alt="Chinese" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen">
          <Introduction />
        </div>
      </main>
      <main
        className="flex  min-h-screen  flex-col bg-white px-4 py-4 backdrop-blur-md"
        id="history"
      >
        <div className="flex  min-h-screen  flex-col bg-[#f8e4dc] rounded-md">
          <About language={language} />
        </div>
      </main>
      <main
        className="flex  min-h-screen  flex-col bg-white px-4 py-4 backdrop-blur-md"
        id="production"
      >
        <Production language={language} />
      </main>
      <main
        className="flex  min-h-screen  flex-col  bg-gradient-to-b from-[#f8e4dc] to-white  px-4 py-4 backdrop-blur-md"
        id="catalog"
      >
        <Catalog language={language} />
      </main>
      <main
        className="flex  min-h-[20%]  flex-col  pl-4 py-6 backdrop-blur-md bg-white"
        id="contact"
      >
        <ContactUs language={language} />
      </main>
    </div>
  );
}

export default Page;
