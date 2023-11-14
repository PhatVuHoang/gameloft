export default function Header() {
  return (
    <header className='bg-white opacity-60 flex justify-between items-center lg:px-20 px-3 fixed md:w-[calc(100%-5px)] w-full'>
      <img src='/public/logo.png' alt='logo' width={229} />
      <img src='/public/icons/hamburger-icon.svg' alt='icon' width={40} />
    </header>
  )
}
