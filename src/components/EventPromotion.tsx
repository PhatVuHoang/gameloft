import { ReactComponent as Share } from '@/assets/share.svg'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function Card() {
  return (
    <div className='relative md:h-[599px] h-[385px] bg-primary scale-90 hover:scale-100 transition-all ease-in-out rounded-xl group'>
      <div
        className='absolute md:h-[599px] h-[385px] w-full rounded-xl px-10 pt-7 pb-[55px] flex flex-col justify-between'
        style={{
          background: 'transparent linear-gradient(180deg, #00000000 0%, #000000 100%) 0% 0% no-repeat padding-box'
        }}
      >
        <div className='flex-1'>
          <div className='flex w-full h-full justify-center items-center group-hover:hidden'>
            <img src='/public/icons/placeholder-img.svg' width={220} />
          </div>
          <div className='justify-between group-hover:flex hidden'>
            <p className='md:text-4xl text-xl text-white font-bold uppercase flex-1'>short title here</p>
            <div className='rounded-full bg-white w-8 h-8 flex justify-center items-center cursor-pointer hover:text-primary'>
              <Share width={20} />
            </div>
          </div>
          <hr className='w-[77px] my-4 group-hover:block hidden' />
          <p className='text-white group-hover:block hidden md:text-base text-sm'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore ...
          </p>
        </div>
        <div className='flex-1 flex items-end'>
          <button className='group-hover:block hidden uppercase border-4 w-full md:py-6 py-3 font-bold text-white border-white'>
            read more
          </button>
          <h1 className='uppercase group-hover:hidden block text-white font-bold md:text-4xl text-xl'>
            short title here
          </h1>
        </div>
      </div>
    </div>
  )
}

export default function EventPromotion() {
  return (
    <section className='h-screen snap-start w-full bg-secondary pt-[72px]'>
      <div className='max-w-[1028px] mx-auto px-3 lg:mb-16 mb-12'>
        <h1 className='font-bold text-primary md:text-[45px] text-2xl mb-3'>Special Events & Promotional</h1>
        <p className='text-primary md:text-2xl text-xl'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam
        </p>
      </div>

      <Swiper
        slidesPerView={1.5}
        resizeObserver={true}
        updateOnWindowResize={true}
        breakpoints={{
          1025: {
            slidesPerView: 3.5
          }
        }}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
          renderBullet: (i, className) => {
            return `
              <button class="${className}">
                <svg class="progress" width="41" height="41"><circle class="circle-origin" r="20" cx="20.5" cy="20.5"></circle></svg><span>${
                  i + 1
                }</span>
              </button>
            `
          }
        }}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
