import React from "react";
import Image from "next/image";
import { ProductionData } from "../utils/DataTranslate";

function Production({ language }: { language: string }) {
  return (
    <section className="lg:py-16">
      <div>
        <div className="px-[4%] py-[4%] w-full flex flex-col items-start text-start">
          <h1 className="text-[20px] text-black  font-medium">HEREDITARY</h1>
          <div className="flex flex-row gap-1">
            <h1 className="text-[32px] text-black  font-extrabold">
              PRODUCTION
            </h1>
            <h1 className="text-[20px] text-black  font-extrabold pt-[14px]">
              PROCESS
            </h1>
          </div>
          <div className="flex flex-row justify-between gap-2 w-full">
            <h1 className="text-[20px] text-[#b68060]  font-extrabold ">
              KNEADING
            </h1>
            <h1 className="text-[20px] text-[#b68060]  font-extrabold ">
              FRYING
            </h1>
            <h1 className="text-[20px] text-[#b68060]  font-extrabold ">
              SERVING
            </h1>
          </div>
          <div className="flex flex-row justify-between gap-2 w-full">
            <Image
              src={"/kneading.png"}
              alt={"Proses Kneading"}
              width={100}
              height={200}
              className="rounded-sm"
            />
            <Image
              src={"/frying.png"}
              alt={"Proses Frying"}
              width={100}
              height={200}
              className="rounded-sm"
            />
            <Image
              src={"/serving.png"}
              alt={"Proses Serving"}
              width={100}
              height={200}
              className="rounded-sm"
            />
          </div>
          <div className="flex flex-row justify-between gap-2 w-full pt-4">
            <Image src={"/coma1.png"} alt={""} width={30} height={50} />
            <p className="text-black text-center text-[12px]">
              {language == "eng"
                ? ProductionData.testimoniEng
                : language == "in"
                ? ProductionData.testimoniIn
                : ProductionData.testimoniChi}
            </p>
            <Image src={"/coma2.png"} alt={""} width={30} height={50} />
          </div>
          <div className="flex flex-col justify-between gap-2 w-full pt-10 ">
            <div className="flex w-[35%] h-8 bg-[#dd9d62] items-center justify-center">
              <label className="text-[30px]">OUTLET</label>
            </div>
            <p className="text-black pt-3 text-justify">
              {language == "eng"
                ? ProductionData.outletEng
                : language == "in"
                ? ProductionData.outletIn
                : ProductionData.outletChi}
            </p>
            <Image
              src={"/okestore.png"}
              alt={"Oke Store"}
              width={400}
              height={200}
              className="rounded-sm"
            />
          </div>
          <div className="flex flex-col justify-between gap-2 w-full pt-10 ">
            <div className="flex w-[35%] h-8 bg-[#dd9d62] items-center justify-center">
              <label className="text-[30px]">1990</label>
            </div>
            <Image
              src={"/1990.png"}
              alt={"1990 Kerupuk Keluarga"}
              width={400}
              height={200}
              className="rounded-sm"
            />
            {/* <h1 className='text-start text-black font-extrabold text-[30px]'>
                            1990
                        </h1> */}
            <p className="text-black text-justify">
              {language == "eng"
                ? ProductionData.tahun1990Eng
                : language == "in"
                ? ProductionData.tahun1990In
                : ProductionData.tahun1990Chi}
            </p>
            <div className="flex w-[35%] h-8 bg-[#dd9d62] items-center justify-center">
              <label className="text-[30px]">2024</label>
            </div>
            {/* <h1 className='text-start text-black font-extrabold text-[30px]'>
                            2024
                        </h1> */}
            <Image
              src={"/2024.png"}
              alt={"2024 Kerupuk Keluarga"}
              width={400}
              height={200}
              className="rounded-sm"
            />
            <p className="text-black text-justify">
              {language == "eng"
                ? ProductionData.tahun2024Eng
                : language == "in"
                ? ProductionData.tahun1990In
                : ProductionData.tahun2024Chi}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Production;
