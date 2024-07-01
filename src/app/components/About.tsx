import Image from "next/image";
import React from "react";
import { AboutData } from "../utils/DataTranslate";

function About({ language }: { language: string }) {
  return (
    <section className="lg:py-16">
      <div>
        <div className="px-[4%] py-[4%] w-full flex flex-col items-start text-start">
          <Image
            src={"/history.png"}
            alt={"Gambar Lokasi Kerupuk Cap Keluarga"}
            height={400}
            width={500}
            className="rounded-sm"
          />

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

          <Image
            src={"/indonesia.png"}
            alt={"Gambar Lokasi Kerupuk Cap Keluarga"}
            height={400}
            width={500}
            className="pt-4 rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
