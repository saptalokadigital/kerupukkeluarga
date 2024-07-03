import React from 'react'
import Image from 'next/image';

const KerupukMentah = ({ image, alt, height, width, teks }:
    { image: any, alt: any, height: any, width: any, teks: any }) => {

    return (
        <div className='md:max-w-[300px] max-w-[100px] py-2 '>
            <div className='flex w-full gap-x-1 h-28 items-center justify-center '>
                <div>
                    <Image
                        src={image}
                        alt={alt}
                        height={height}
                        width={width}
                    />
                </div>

            </div>
            <div className='text-black text-[14px]'>
                <p>{teks}</p>
            </div>
        </div>

    );
};

export default KerupukMentah;