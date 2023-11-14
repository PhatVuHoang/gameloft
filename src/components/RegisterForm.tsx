import Button from './Button'
import Input from './Input'
import Select from './Select'
import MinionGrey2 from '@/assets/minion.png'

export default function RegisterForm() {
  return (
    <section className='w-full h-screen md:snap-start bg-secondary bg-opacity-50'>
      <div className='h-full items-center grid md:grid-cols-2 grid-cols-1 max-w-[1028px] mx-auto px-5 gap-6'>
        <img src={MinionGrey2} alt='minion-grey2' className='md:block hidden' />
        <div className='flex flex-col gap-7 max-w-[251px] md:mx-0 mx-auto'>
          <div>
            <h1 className='text-2xl text-primary font-bold'>Stay in the Know!</h1>
            <p className='text-primary text-xs'>
              Don't get left behind!
              <br /> Subscribe to our newsletters today!
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <Input placeholder='Name' className='w-[251px]' />
            <Input placeholder='Email' className='w-[251px]' />
            <Select
              className='w-[251px]'
              options={[
                {
                  label: 'Country',
                  value: '',
                  disabled: true
                },
                {
                  label: 'Vietnam',
                  value: '1'
                },
                {
                  label: 'France',
                  value: '2'
                }
              ]}
              onSelect={(value) => {
                console.log(value)
              }}
            />
            <Select
              className='w-[251px]'
              options={[
                {
                  label: 'Platform',
                  value: '',
                  disabled: true
                },
                {
                  label: 'Tablet',
                  value: '1'
                },
                {
                  label: 'Mobile',
                  value: '2'
                }
              ]}
              onSelect={(value) => {
                console.log(value)
              }}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-start justify-between gap-2'>
              <input type='checkbox' id='checkbox1' name='checkbox1' className='h-5 w-5 outline-none' />
              <label htmlFor='checkbox1' className='text-primary text-xs block'>
                By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions
                and I have read the Privacy Policy.
              </label>
            </div>
            <div className='flex items-start gap-2'>
              <input type='checkbox' id='checkbox2' name='checkbox2' className='h-5 w-5 outline-none' />
              <label htmlFor='checkbox2' className='text-primary  text-xs'>
                I agree to receive promotional offers relating to all Gameloft games and services.
              </label>
            </div>
            <Button>Button</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
