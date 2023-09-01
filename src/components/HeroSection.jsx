import Button from './Button'
import illustration from '../assets/images/illustration-intro.svg'

function HeroSection () {
  return (
    <section className='flex flex-col-reverse md:flex md:flex-row md:justify-between md:items-center mx-auto max-w-sm md:max-w-full w-full h-[660px] md:h-[550px] sm:px-10 md:px-15 lg:px-20 xl:px-40'>
      <div className='flex flex-col items-center text-center space-y-6 md:text-left md:justify-center md:items-start md:space-y-10 md:w-[450px] md:h-full'>
        <h1 className='text-DarkBlue text-[42px] font-semibold leading-[1.1]'>Bring everyone together to build better products.</h1>
        <p className='text-sm w-[280px] lg:w-[300px] text-DarkGrayishBlue leading-[1.6]'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goats in view.
        </p>
        <div>
          <Button textColor='text-VaryLightGray' bgColor='bg-BrightRed' />
        </div>
      </div>
      <div>
        <img src={illustration} alt='illustration image' className='' />
      </div>
    </section>
  )
}

export default HeroSection
