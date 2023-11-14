import { ReactComponent as Facebook } from '@/assets/facebook.svg'
import { ReactComponent as Linkedin } from '@/assets/linkedin.svg'
import { ReactComponent as Twitter } from '@/assets/twitter.svg'
import { ReactComponent as Youtube } from '@/assets/youtube.svg'
import { ReactComponent as Earth } from '@/assets/earth.svg'
import { ReactComponent as Arrow } from '@/assets/arrow.svg'
import { ReactComponent as FacebookMobile } from '@/assets/facebook-2.svg'
import { ReactComponent as LinkInMobile } from '@/assets/linkedin-2.svg'
import { ReactComponent as TwitterMobile } from '@/assets/twitter-2.svg'
import { ReactComponent as YoutubeMobile } from '@/assets/youtube-2.svg'
import Logo2 from '@/assets/logo-2.png'

export default function Footer() {
  return (
    <footer className='bg-primary text-white md:h-screen h-[calc(100vh-20vh)] w-full snap-start flex flex-col'>
      <div className='md:hidden block bg-secondary py-3'>
        <p className='text-primary text-center font-semibold mb-2'>Follow Us</p>
        <div className='flex justify-center items-center gap-3'>
          <FacebookMobile />
          <LinkInMobile />
          <TwitterMobile />
          <YoutubeMobile />
        </div>
      </div>
      <div className='md:grow flex max-w-[1028px] mx-auto md:items-center'>
        <div className='grid md:grid-cols-2 grid-cols-1 md:px-0 px-5'>
          <div className='flex flex-col gap-6'>
            <img src={Logo2} width={414} />
            <div className='md:flex flex-col gap-5 hidden'>
              <h1 className='text-white text-2xl font-bold'>Follow Us</h1>
              <div className='flex gap-4'>
                <Facebook />
                <Linkedin />
                <Twitter />
                <Youtube />
              </div>
              <div className='bg-white rounded flex justify-between items-center w-[145px] p-3 cursor-pointer'>
                <Earth />
                <p className='text-primary font-medium'>English</p>
                <Arrow />
              </div>
            </div>
          </div>
          <div className='flex md:justify-end justify-between'>
            <div className='grid md:grid-cols-1 grid-cols-2 gap-10'>
              <div className='text-white md:text-xl text-sm mb-10 md:block flex flex-col gap-4 md:font-normal font-bold'>
                <h1 className='uppercase font-bold text-2xl mb-8 md:block hidden'>visit</h1>
                <p>Gameloft Games</p>
                <p>Gameloft Careers</p>
                <p>Gameloft News</p>
                <p>Gameloft Forum</p>
                <p>Gameloft Corporate</p>
                <p>Gameloft Advertising</p>
                <p>Gameloft Support</p>
              </div>
              <div className='text-white md:text-xl text-sm md:block flex flex-col gap-4 md:font-normal font-bold'>
                <h1 className='uppercase font-bold text-2xl mb-8 md:block hidden'>legal</h1>
                <p>Terms of Use</p>
                <p>Private Policy</p>
                <p>Cookies Policy</p>
                <p>EULA</p>
                <p>Legal Notices</p>
                <p>Event Rules</p>
                <p>Business Contacts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t-2 border-white md:block hidden' />
      <p className='text-center max-w-[1028px] mx-auto py-7'>
        ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S.
        and/or other countries. All other trademarks are the property of their respective owners.
      </p>
    </footer>
  )
}
