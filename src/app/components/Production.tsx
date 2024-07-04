import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ProductionData } from "../utils/DataTranslate";
import { motion, useInView } from 'framer-motion';

function Production({ language }: { language: string }) {

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
    <section className="lg:py-16">
      <div>
        <motion.div
          initial={{ opacity: 0, x: '-100vw' }}

          whileInView={{ opacity: 1 }}
          // viewport={{ once: true }}
          animate={{ opacity: 0, scale: 1, x: 0 }}
          transition={{ duration: 2 }}



          className="flex place-self-start text-center sm:text-left justify-self-start"
        >
          {isMobile && (
            <>
              <div className="px-[4%] py-[4%] w-full flex flex-col items-start text-start">
                <h1 className="text-[20px] text-black  font-medium">{language == "eng"
                  ? ProductionData.herediteryIng
                  : language == "in"
                    ? ProductionData.herediteryIn
                    : ProductionData.herediteryChi}</h1>
                <div className="flex flex-row gap-1">
                  <h1 className="text-[32px] text-black  font-extrabold">
                    {language == "eng"
                      ? ProductionData.productionIng
                      : language == "in"
                        ? ProductionData.productionIn
                        : ProductionData.productionChi}
                  </h1>
                  <h1 className="text-[20px] text-black  font-extrabold pt-[14px]">
                    {language == "eng"
                      ? ProductionData.processIng
                      : language == "in"
                        ? ProductionData.processIn
                        : ProductionData.processChi}
                  </h1>
                </div>
                <div className="flex flex-row justify-between gap-2 w-full">
                  <h1 className="text-[20px] text-[#b68060]  font-extrabold ">
                    {language == "eng"
                      ? ProductionData.kneadingIng
                      : language == "in"
                        ? ProductionData.kneadingIn
                        : ProductionData.kneadingChi}
                  </h1>
                  <h1 className="text-[20px] text-[#b68060]  font-extrabold ">
                    {language == "eng"
                      ? ProductionData.fryingIng
                      : language == "in"
                        ? ProductionData.fryingIn
                        : ProductionData.fryingChi}
                  </h1>
                  <h1 className="text-[20px] text-[#b68060]  font-extrabold ">
                    {language == "eng"
                      ? ProductionData.servingIng
                      : language == "in"
                        ? ProductionData.servingIn
                        : ProductionData.servingChi}
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
                    <label className="text-[30px]">{language == "eng"
                      ? ProductionData.outletJudulEng
                      : language == "in"
                        ? ProductionData.outletJudulIn
                        : ProductionData.outletJudulChi}</label>
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
                        ? ProductionData.tahun2024In
                        : ProductionData.tahun2024Chi}
                  </p>
                </div>
              </div>
            </>
          )}
          {!isMobile && (
            <>
              <div className="flex w-full flex-row">
                <div className="px-[4%] py-[4%] w-full flex flex-col items-start text-start">
                  <h1 className="text-[20px] md:text-[40px] text-black  font-medium">{language == "eng"
                    ? ProductionData.herediteryIng
                    : language == "in"
                      ? ProductionData.herediteryIn
                      : ProductionData.herediteryChi}</h1>
                  <div className="flex flex-row gap-1">
                    <h1 className="text-[32px] md:text-[64px] leading-[30px] text-black  font-extrabold">
                      {language == "eng"
                        ? ProductionData.productionIng
                        : language == "in"
                          ? ProductionData.productionIn
                          : ProductionData.productionChi}
                    </h1>
                    <h1 className="text-[20px] md:text-[40px] text-black  font-extrabold mb-2">
                      {language == "eng"
                        ? ProductionData.processIng
                        : language == "in"
                          ? ProductionData.processIn
                          : ProductionData.processChi}
                    </h1>
                  </div>
                  <div className="flex flex-row justify-between gap-2 w-full">
                    <h1 className="text-[20px] md:text-[40px] text-[#b68060]  font-extrabold ">
                      {language == "eng"
                        ? ProductionData.kneadingIng
                        : language == "in"
                          ? ProductionData.kneadingIn
                          : ProductionData.kneadingChi}
                    </h1>
                    <h1 className="text-[20px] md:text-[40px] text-[#b68060]  font-extrabold ">
                      {language == "eng"
                        ? ProductionData.fryingIng
                        : language == "in"
                          ? ProductionData.fryingIn
                          : ProductionData.fryingChi}
                    </h1>
                    <h1 className="text-[20px] md:text-[40px] text-[#b68060]  font-extrabold ">
                      {language == "eng"
                        ? ProductionData.servingIng
                        : language == "in"
                          ? ProductionData.servingIn
                          : ProductionData.servingChi}
                    </h1>
                  </div>
                  <div className="flex flex-row justify-between px-10 w-full">
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
                    <Image src={"/coma1.png"} alt={""} width={30} height={30} />
                    <p className="text-black text-center text-[18px]">
                      {language == "eng"
                        ? ProductionData.testimoniEng
                        : language == "in"
                          ? ProductionData.testimoniIn
                          : ProductionData.testimoniChi}
                    </p>
                    <Image src={"/coma2.png"} alt={""} width={30} height={30} />
                  </div>
                  <div className="flex flex-col justify-between gap-2 w-full pt-10 ">
                    <div className="flex w-[35%] h-8 bg-[#dd9d62] items-center justify-center">
                      <label className="text-[30px]"> {language == "eng"
                        ? ProductionData.outletJudulEng
                        : language == "in"
                          ? ProductionData.outletJudulIn
                          : ProductionData.outletJudulChi}</label>
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
                </div>
                <div className="px-[4%] py-[4%] w-full flex flex-col items-start text-start gap-3">
                  <div className="flex w-[35%] h-8 bg-[#dd9d62] items-center justify-center mt-20">
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
                  <div className="flex w-[35%] h-8 bg-[#dd9d62] items-center justify-center mt-10">
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
                        ? ProductionData.tahun2024In
                        : ProductionData.tahun2024Chi}
                  </p>
                </div>
              </div>
            </>
          )}

        </motion.div>
      </div>
    </section >
  );
}

export default Production;
