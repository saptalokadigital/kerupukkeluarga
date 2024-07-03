import React from 'react'
import Image from 'next/image';

const Kerupukdangetas = ({ image, alt, height, width, image2, alt2, height2, width2, teks }:
    { image: any, alt: any, height: any, width: any, teks: any, image2: any, alt2: any, height2: any, width2: any }) => {

    return (
        <div className='md:max-w-[400px] max-w-[100px] py-2 '>
            <div className='grid grid-cols-2 gap-x-1 h-24 md:h-40 items-end '>
                <div>
                    <Image
                        src={image}
                        alt={alt}
                        height={height}
                        width={width}
                    />
                </div>
                <div className='pt-4'>
                    <img
                        src={image2}
                        alt={alt2}
                        height={height2}
                        width={width2}

                    />
                </div>


            </div>
            <div className='text-black text-[14px]'>
                <p>{teks}</p>
            </div>
        </div>

    );
};

export default Kerupukdangetas;