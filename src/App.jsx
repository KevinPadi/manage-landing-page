import HeroSection from './components/HeroSection'
import Nav from './components/Nav'

function App () {
  return (
    <div className='w-full px-10 md:px-15 lg:px-20 xl:px-40 bg-VaryLightGray bg-bg-pattern bg-no-repeat bg-[-50px_-160px] md:bg-[400px_-160px] lg:bg-[600px_-160px] xl:bg-[800px_-160px]'>
      <Nav />
      <HeroSection />
    </div>
  )
}

export default App
