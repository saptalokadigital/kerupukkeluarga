import React from 'react'
import Image from 'next/image';

const Rempaku = ({ image, alt, height, width, teks }:
    { image: any, alt: any, height: any, width: any, teks: any }) => {

    return (
        <div className='max-w-[100px] '>
            <div className='flex w-[70%] gap-x-1 h-24 items-center justify-center'>
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

export default Rempaku;