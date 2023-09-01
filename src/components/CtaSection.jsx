import Button from './Button'

function CtaSection () {
  return (
    <section className='bg-BrightRed bg-bg-simplify-mobile md:bg-bg-simplify-desktop bg-[length:_80px] md:bg-cover bg-[0px_1.5rem] md:bg-[0px_-40px] lg:bg-[0px_-80px] bg-no-repeat h-[300px] md:h-[200px] w-screen text-center md:text-left flex justify-center items-center mt-10 px-10 md:px-15 lg:px-20 xl:px-40'>
      <div className='md:w-full space-y-6 md:flex justify-between'>
        <h2 className='text-3xl font-semibold w-[250px] md:w-[400px] text-VaryLightGray'>Simplify how your team works today.</h2>
        <Button textColor='text-BrightRed' bgColor='bg-VaryLightGray' />
      </div>
    </section>
  )
}

export default CtaSection
