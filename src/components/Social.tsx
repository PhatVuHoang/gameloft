import { ReactComponent as Share } from '@/assets/share.svg'
import { ReactComponent as Support } from '@/assets/support.svg'
import { ReactComponent as Mail } from '@/assets/mail.svg'

export default function Social() {
  const icons = [<Share width={12} />, <Mail width={12} />, <Support width={12} />]
  return (
    <div className='fixed right-7 bottom-28 flex flex-col gap-2 z-[99]'>
      {icons.map((icon) => (
        <div className='group rounded-full border-4 hover:border-[rgba(255,255,255,.3)] border-transparent'>
          <div
            className={
              'w-8 h-8 rounded-full bg-white flex justify-center items-center group-hover:text-primary shadow-1'
            }
          >
            {icon}
          </div>
        </div>
      ))}
    </div>
  )
}
