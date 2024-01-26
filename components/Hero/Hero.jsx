import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='__hero'>
            <div className="container">
                <div className="grid-2 grid-md-1 center">
                    <div className='text-left'>
                        <h1 className='font-style-italic font-bolder'>
                            Find Your Best <br />
                            <span className="text-primary font-style-normal">
                                Dream Car for Rental
                            </span>
                        </h1>
                        <p className='font-semibold'>
                            Drive the Extraordinary: Rent a Car, Elevate Your Dubai Experience. Unmatched Luxury, Unforgettable Journeys.
                        </p>
                    </div>
                    <div className='center'>
                        <Image priority className='object-contain' src="/car-right.png" width={546} height={358} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero