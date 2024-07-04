import Image from "next/image";
import React from "react";
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';


function Testi() {

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

                <div className="px-[4%] py-[4%] w-full flex-col  items-start text-start gap-10 ">
                    <h1 className='text-black font-extrabold text-[30px]'>
                        TESTIMONI
                    </h1>
                    <div className="flex w-auto  border-2 py-4 px-2 rounded-xl border-[#f8e4dc] bg-[#f8e4dc] justify-between">
                        <Image
                            src={"/testi1.jpg"}
                            alt={"Testimoni"}
                            width={100}
                            height={100}
                            className="rounded-xl md:w-[300px]"
                        />
                        <Image
                            src={"/testi2.jpg"}
                            alt={"Testimoni"}
                            width={100}
                            height={100}
                            className="rounded-xl md:w-[300px]"
                        />
                        <Image
                            src={"/testi3.jpg"}
                            alt={"Testimoni"}
                            width={100}
                            height={100}
                            className="rounded-xl md:w-[300px] "
                        />
                    </div>

                </div>
            </motion.div>
        </section >
    );
}

export default Testi;
