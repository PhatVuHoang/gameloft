import Nintendo from '@/assets/nintendo.png'
import Microsoft from '@/assets/microsoft.png'
import Steam from '@/assets/steam.png'
import Star from '@/assets/star.svg'
import StarUnrate from '@/assets/star-unrate.svg'
import PlaceholderImg from '@/assets/placeholder-img.svg'

export default function Banner() {
  return (
    <section className='w-full h-screen md:flex md:flex-col md:snap-start'>
      <div className='h-full bg-primary bg-center bg-no-repeat pb-12'>
        <div className='relative w-full h-full flex flex-col justify-end'>
          <img
            src={PlaceholderImg}
            className='md:w-[334px] w-[154px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          />
          <div className='grid md:grid-cols-2 grid-cols-1 max-w-[1028px] mx-auto px-5 gap-6'>
            <div>
              <h1 className='text-[45px] font-bold text-white'>GAMELOFT GAME</h1>
              <div className='flex items-center gap-4 mb-[37px]'>
                <p className='text-white'>Racing / Action</p>
                <p className='text-white'>|</p>
                <div className='flex items-center gap-1'>
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                  <img src={StarUnrate} />
                </div>
              </div>
              <p className='md:text-xl text-xs text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#D8EDFF]'>
        <div className='py-5 grid md:grid-cols-2 grid-cols-1 items-center max-w-[1028px] px-5 mx-auto gap-6'>
          <p className='text-primary text-xl font-bold cursor-pointer'>Download latest version</p>
          <div className='flex flex-row-reverse justify-end items-center flex-wrap gap-2'>
            <img src={Steam} alt='steam' />
            <img src={Microsoft} alt='microsoft' />
            <img src={Nintendo} alt='nintendo' />
          </div>
        </div>
      </div>
    </section>
  )
}
