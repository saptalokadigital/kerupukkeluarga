import React from 'react'
import Image from 'next/image';

const KerupukMentah = ({ image, alt, height, width, teks }:
    { image: any, alt: any, height: any, width: any, teks: any }) => {

    return (
        <div className='md:max-w-[150px] max-w-[100px] flex flex-col gap-2 justify-center item-start'>
            <div className='grid grid-cols-2 gap-x-1 h-24 items-end'>
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