import Image from "next/image";
import { AboutData } from "../utils/DataTranslate";
import React from "react";
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';


function About({ language }: { language: string }) {

  return (
    <section className=" md:py-2">
      <motion.div
        initial={{ opacity: 0, x: '-100vw' }}

        whileInView={{ opacity: 1 }}
        // viewport={{ once: true }}
        animate={{ opacity: 0, scale: 1, x: 0 }}
        transition={{ duration: 2 }}



        className="flex place-self-start text-center sm:text-left justify-self-start"
      >
        <div>

          <div className="px-[4%] py-[4%] w-full flex-col  items-start text-start">
            <div className="flex flex-wrap justify-between">
              <div className=" flex flex-col">
                <h1 className="text-[34px] text-black  font-extrabold">
                  KERUPUK KELUARGA
                </h1>
                <h1 className="text-[34px] text-black  font-extrabold">BELITUNG</h1>
                <h2 className="text-[15px] text-black  font-extrabold">
                  {language == "eng"
                    ? AboutData.titleEng
                    : language == "in"
                      ? AboutData.titleIn
                      : AboutData.titleChi}
                </h2>
              </div>
              <div>
                <Image
                  src={"/history.png"}
                  alt={"Gambar Lokasi Kerupuk Cap Keluarga"}
                  height={400}
                  width={500}
                  className="rounded-sm md:w-[700px]"
                />
              </div>
            </div>



            {language == "eng"
              ? AboutData.paragrafEng.map((data, i) => (
                <p key={i} className="text-black pt-3 text-justify">
                  {data}
                </p>
              ))
              : language == "in"
                ? AboutData.paragrafIn.map((data, i) => (
                  <p key={i} className="text-black pt-3 text-justify">
                    {data}
                  </p>
                ))
                : AboutData.paragrafChi.map((data, i) => (
                  <p key={i} className="text-black pt-3 text-justify">
                    {data}
                  </p>
                ))}

            <div className="w-full flex justify-center">
              <Image
                src={"/indo.png"}
                alt={"Gambar Lokasi Kerupuk Cap Keluarga"}
                height={400}
                width={500}
                className="pt-4 rounded-md md:w-[700px] md:h-[400px]"
              />
            </div>


          </div>

        </div>
      </motion.div>
    </section >
  );
}

export default About;
