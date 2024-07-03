import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const ContactUs = () => {
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
                            CONTACT US
                        </label>
                        <div className='flex pt-4 gap-5'>
                            <div className='flex flex-col gap-3'>
                                <label className='text-[12px] md:text-[20px] text-black font-bold'>
                                    FACTORY ADDRESS
                                </label>
                                <label className='text-[12px] md:text-[20px] text-black font-bold'>
                                    STORE ADDRESS
                                </label>
                                <label className='text-[12px] md:text-[20px] text-black font-bold'>
                                    EMAIL
                                </label>
                                <label className='text-[12px] md:text-[20px] text-black font-bold'>
                                    PHONE NUMBER
                                </label>
                            </div>
                            <div>
                                <img
                                    src='/garis.png'
                                    className='w-1 h-[160px]'
                                />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <Link href='https://maps.app.goo.gl/Sw52SeGhGf4TxFhZ9' className='text-[12px] md:text-[20px] text-black '>
                                    JL. GATOT SUBROTO NO.9, TJ.PENDAM, KEC. TJ.PANDAN, KABUPATEN BELITUNG
                                </Link>
                                <Link href='https://maps.app.goo.gl/p3jSgi483jk1Qrxx7' className='text-[12px] md:text-[20px] text-black '>
                                    JL. PATIMURA, TJ.PENDAM, KEC. TJ.PANDAN, KABUPATEN BELITUNG
                                </Link>
                                <Link href={'mailto:keluargabelitung@gmail.com'} className='text-[12px] md:text-[20px] text-black '>
                                    KELUARGABELITUNG@GMAIL.COM
                                </Link >
                                <Link href={'https://wa.me/628780633338'} className='text-[12px] md:text-[20px] text-black '>
                                    +62 878-0163-3338
                                </Link>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactUs
