import FeaturesSection from './components/FeaturesSection'
import HeroSection from './components/HeroSection'
import Nav from './components/Nav'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TestimonialSection from './components/TestimonialSection'
import Button from './components/Button'

function App () {
  return (
    <div className='overflow-hidden w-full bg-VaryLightGray bg-bg-pattern bg-no-repeat bg-[-50px_-160px] md:bg-[400px_-160px] lg:bg-[600px_-160px] xl:bg-[800px_-160px]'>
      <Nav />
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <section className='bg-BrightRed bg-bg-simplify-mobile md:bg-bg-simplify-desktop bg-[length:_80px] md:bg-cover bg-[0px_1.5rem] md:bg-[0px_-40px] lg:bg-[0px_-80px] bg-no-repeat h-[300px] md:h-[200px] w-screen text-center md:text-left flex justify-center items-center mt-10 px-10 md:px-15 lg:px-20 xl:px-40'>
        <div className='md:w-full space-y-6 md:flex justify-between'>
          <h2 className='text-3xl font-semibold w-[250px] md:w-[400px] text-VaryLightGray'>Simplify how your team works today.</h2>
          <Button textColor='text-BrightRed' bgColor='bg-VaryLightGray' />
        </div>
      </section>
    </div>
  )
}

export default App
