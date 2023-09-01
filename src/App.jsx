import FeaturesSection from './components/FeaturesSection'
import HeroSection from './components/HeroSection'
import Nav from './components/Nav'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TestimonialSection from './components/TestimonialSection'

function App () {
  return (
    <div className='overflow-hidden w-full bg-VaryLightGray bg-bg-pattern bg-no-repeat bg-[-50px_-160px] md:bg-[400px_-160px] lg:bg-[600px_-160px] xl:bg-[800px_-160px]'>
      <Nav />
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
    </div>
  )
}

export default App
