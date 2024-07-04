import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { Contact } from '../utils/DataTranslate'

const ContactUs = ({ language }: { language: any }) => {
    return (
        <section className="">
            <div>
                <motion.div
                    initial={{ opacity: 0, x: '-100vw' }}

                    whileInView={{ opacity: 1 }}
                    // viewport={{ once: true }}
                    animate={{ opacity: 0, scale: 1, x: 0 }}
                    transition={{ duration: 2 }}



                    className="flex place-self-start text-center sm:text-left justify-self-start"
                >
                    <div className="px-[4%] py-[4%] w-full flex flex-col items-start text-start bg-[#f8e4dc] rounded-sm">
                        <label className='text-[30px] md:text-[40px] text-black font-extrabold'>
                            {language == "eng"
                                ? Contact.contactUsEng
                                : language == "in"
                                    ? Contact.contactUsIn
                                    : Contact.contactUsChi}
                        </label>
                        <div className='flex pt-4 gap-2'>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[12px] md:text-[20px] text-black font-bold'>
                                    {language == "eng"
                                        ? Contact.factoryAddressEng
                                        : language == "in"
                                            ? Contact.factoryAddressIn
                                            : Contact.factoryAddressChi}
                                </label>
                                <label className='text-[12px] md:text-[20px] text-black font-bold'>
                                    {language == "eng"
                                        ? Contact.storeAddressEng
                                        : language == "in"
                                            ? Contact.storeAddressIn
                                            : Contact.storeAddressChi}
                                </label>
                                <label className='text-[12px] md:text-[20px] text-black font-bold'>
                                    {language == "eng"
                                        ? Contact.emailEng
                                        : language == "in"
                                            ? Contact.emailIn
                                            : Contact.emailChi}
                                </label>
                                <label className='text-[12px] md:text-[20px] text-black font-bold'>
                                    {language == "eng"
                                        ? Contact.hpEng
                                        : language == "in"
                                            ? Contact.hpIn
                                            : Contact.hpChi}
                                </label>
                            </div>
                            <div>
                                <img
                                    src='/garis.png'
                                    className='w-1 h-[160px]'
                                />
                            </div>
                            <div className='flex flex-col gap-3 '>
                                <div className='flex gap-1 w-full'>

                                    <Link href='https://maps.app.goo.gl/Sw52SeGhGf4TxFhZ9' className='text-[12px] md:text-[20px] text-black underline'>
                                        JL. GATOT SUBROTO NO.9, TJ.PENDAM, KEC. TJ.PANDAN, KABUPATEN BELITUNG
                                    </Link>
                                </div>
                                <div className='flex gap-1'>

                                    <Link href='https://maps.app.goo.gl/p3jSgi483jk1Qrxx7' className='text-[12px] md:text-[20px] text-black underline'>
                                        JL. PATIMURA, TJ.PENDAM, KEC. TJ.PANDAN, KABUPATEN BELITUNG
                                    </Link>
                                </div>
                                <div className='flex gap-1 md:pl-1 w-[82%]'>

                                    <Link href={'mailto:keluargabelitung@gmail.com'} className='text-[12px] md:mt-0 mt-1 md:text-[20px] text-black underline'>
                                        KELUARGABELITUNG@GMAIL.COM
                                    </Link >
                                </div>
                                <div className='flex gap-1 md:pl-1 md:w-[82%] w-auto'>

                                    <Link href={'https://wa.me/6287801633338'} className='text-[12px] md:text-[20px] text-black underline'>
                                        +62 878-0163-3338
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactUs
