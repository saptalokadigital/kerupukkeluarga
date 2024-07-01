"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Introduction from "./components/Introduction";
import Production from "./components/Production";
import Catalog from "./components/Catalog";
import Image from "next/image";

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
    <div id="#">
      <main className="flex  min-h-screen  flex-col bg-[#f8e4dc]">
        <div
          className={`absolute w-full  flex justify-between items-center py-[25px] duration-200 
    ${scrollLocation >= 100 ? "bg-[#000820]" : "bg-transparent"}
    ${
      scrollLocation >= 100 && scrollDirection == "down"
        ? "-translate-y-[90px]"
        : ""
    }
    `}
        >
          <div className="flex w-full fixed top-0 h-[70px] bg-[#d5bfaa] shadow-md backdrop-blur-md z-50 justify-center items-center">
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
                    className=" w-[80px] h-12 "
                  />
                </a>
              </div>
              <div className="flex gap-4 flex-row">
                <button
                  onClick={() => setLanguage("in")}
                  className="  text-[#F0F3FF] font-semibold text-base "
                >
                  Indonesia
                </button>
                <button
                  onClick={() => setLanguage("eng")}
                  className=" text-[#F0F3FF] font-semibold text-base "
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("chi")}
                  className=" text-[#F0F3FF] font-semibold text-base "
                >
                  Chinese
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
        className="flex  min-h-screen  flex-col bg-[#f8e4dc] px-4 py-4 backdrop-blur-md"
        id="catalog"
      >
        <Catalog />
      </main>
    </div>
  );
}

export default Page;
