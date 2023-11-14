import Logo from '@/assets/logo.png'
import HamburgerIcon from '@/assets/hamburger-icon.svg'

export default function Header() {
  return (
    <header className='bg-white opacity-60 flex justify-between items-center lg:px-20 px-3 fixed md:w-[calc(100%-5px)] w-full'>
      <img src={Logo} alt='logo' width={229} />
      <img src={HamburgerIcon} alt='icon' width={40} />
    </header>
  )
}
