import Button from './components/Button'
import illustration from './assets/images/illustration-intro.svg'
import Nav from './components/Nav'

function App () {
  return (
    <div className='w-full px-10 md:px-15 lg:px-20 xl:px-40 bg-VaryLightGray bg-bg-pattern bg-no-repeat bg-[-50px_-160px] md:bg-[400px_-160px] lg:bg-[600px_-160px] xl:bg-[800px_-160px]'>
      <Nav />
      <section className='flex flex-col-reverse md:flex md:flex-row md:justify-between md:items-center mx-auto max-w-sm md:max-w-full w-full h-[660px] md:h-[550px]'>
        <div className='flex flex-col items-center text-center space-y-6 md:text-left md:justify-center md:items-start md:space-y-10 md:w-[450px] md:h-full'>
          <h1 className='text-DarkBlue text-[42px] font-semibold leading-[1.1]'>Bring everyone together to build better products.</h1>
          <p className='text-sm w-[280px] lg:w-[300px] text-DarkGrayishBlue'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goats in view.
          </p>
          <div>
            <Button />
          </div>
        </div>
        <div>
          <img src={illustration} alt='illustration image' className='' />
        </div>
      </section>
    </div>
  )
}

export default App
