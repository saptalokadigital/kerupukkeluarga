import React from 'react'
import Image from 'next/image';
import Kerupukdangetas from './kerupuk/Kerupukdangetas';
import Kerupukmentah from './kerupuk/Kerupukmentah';
import Rempaku from './kerupuk/Rempaku';

function Catalog() {

    return (
        <section className="lg:py-16" >
            <div>
                <div className="px-[4%] py-[4%] w-full flex flex-col items-start text-start">
                    <h1 className='text-black font-extrabold text-[50px] mb-[-20px]'>
                        CATALOG
                    </h1>
                    <h1 className='text-[#b68060]  font-extrabold  text-[40px] pb-8'>
                        PRODUCT
                    </h1>
                    <div className='flex w-[70%] h-6 bg-black items-center justify-center'>
                        <label className='text-[22px] text-white'>
                            KERUPUK & GETAS
                        </label>
                    </div>
                    <div className='w-full overflow-x-auto '>
                        <div className='flex w-[700px] h-36 items-start'>
                            <Kerupukdangetas
                                image={'/ikan1.png'}
                                alt={'Ikan'}
                                height={100}
                                width={50}

                                image2={'/ikan2.png'}
                                alt2={'Ikan'}
                                height2={60}
                                width2={40}

                                teks={'Fish Cracker'} />
                            <Kerupukdangetas
                                image={'/Cumi1.png'}
                                alt={'Cumi'}
                                height={100}
                                width={50}

                                image2={'/Cumi2.png'}
                                alt2={'Cumi'}
                                height2={60}
                                width2={40}

                                teks={'Squid Cracker'} />
                            <Kerupukdangetas
                                image={'/Udang1.png'}
                                alt={'Udang'}
                                height={100}
                                width={50}

                                image2={'/Udang2.png'}
                                alt2={'Udang'}
                                height2={60}
                                width2={40}

                                teks={'Shrimp Cracker'} />
                            <Kerupukdangetas
                                image={'/Naga1.png'}
                                alt={'Naga'}
                                height={100}
                                width={50}

                                image2={'/Naga2.png'}
                                alt2={'Naga'}
                                height2={60}
                                width2={40}

                                teks={'Dragon Nails Cracker'} />
                            <Kerupukdangetas
                                image={'/Getas1.png'}
                                alt={'Getas'}
                                height={100}
                                width={50}

                                image2={'/Getas2.png'}
                                alt2={'Getas'}
                                height2={60}
                                width2={40}

                                teks={'Fish Roll Cracker'} />
                        </div>

                    </div>
                    <div className='flex w-[70%] h-6 bg-black items-center justify-center'>
                        <label className='text-[22px] text-white'>
                            KERUPUK MENTAH
                        </label>
                    </div>
                    <div className='w-full overflow-x-auto '>
                        <div className='flex w-[700px] h-36 items-start'>
                            <Kerupukmentah
                                image={'/ikan3.png'}
                                alt={'Ikan'}
                                height={100}
                                width={50}


                                teks={'Fish Cracker'} />
                            <Kerupukmentah
                                image={'/cumi3.png'}
                                alt={'Cumi'}
                                height={100}
                                width={50}


                                teks={'Squid Cracker'} />
                            <Kerupukmentah
                                image={'/udang3.png'}
                                alt={'Udang'}
                                height={100}
                                width={50}


                                teks={'Shrimp Cracker'} />

                        </div>

                    </div>
                    <div className='flex w-[70%] h-8 bg-black items-center justify-center'>
                        <label className='text-[25px] text-white'>
                            LADABEL
                        </label>
                    </div>
                    <div className='w-full overflow-x-auto '>
                        <div className='flex w-[700px] h-36 items-center gap-5'>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex'>
                                    <Image
                                        src={'/lada1.png'}
                                        alt={'Lada'}
                                        height={200}
                                        width={70}
                                    />
                                    <Image
                                        src={'/lada3.png'}
                                        alt={'Lada'}
                                        height={200}
                                        width={80}

                                    />
                                    <Image
                                        src={'/lada2.png'}
                                        alt={'Lada'}
                                        height={200}
                                        width={70}
                                    />

                                </div>
                                <div className=''>
                                    <p className='text-black text-[14px]'>
                                        Black & White Pepper
                                    </p>
                                </div>

                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <Image
                                    src={'/lada1.png'}
                                    alt={'Lada'}
                                    height={200}
                                    width={70}
                                />
                                <p className='text-black text-[14px]'>
                                    Black & White Pepper
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-[70%] h-8 bg-black items-center justify-center'>
                        <label className='text-[25px] text-white'>
                            REMPAKU
                        </label>
                    </div>
                    <div className='w-full overflow-x-auto '>
                        <div className='flex w-[700px] h-36 items-start'>
                            <Rempaku
                                image={'/rempaku1.png'}
                                alt={'Ikan'}
                                height={200}
                                width={100}


                                teks={'Fish Cracker'} />
                            <Rempaku
                                image={'/rempaku2.png'}
                                alt={'Cumi'}
                                height={200}
                                width={100}

                                teks={'Squid Cracker'} />
                            <Rempaku
                                image={'/rempaku3.png'}
                                alt={'Udang'}
                                height={200}
                                width={100}


                                teks={'Shrimp Cracker'} />

                        </div>

                    </div>

                </div>


            </div>
        </section >
    )
}

export default Catalog
