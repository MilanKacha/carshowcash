"use client"
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {

  const handelScroll = () => {

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Find book or a rent car -- quikly and easily!</h1>
        <p className='hero__subtitle'>StreamLine your car rentel experialnce with our effortless booking process.</p>
        <CustomButton title="Explore Cars" containerStyles="bg-primary-blue text-white rounded-full mt-10" handelClick={handelScroll} />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/hero.png" alt='hero' fill className='object-contain' />
          <div className='hero__image-overlay'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
