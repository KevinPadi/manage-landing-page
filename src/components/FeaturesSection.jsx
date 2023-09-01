import React from 'react'

function FeaturesSection () {
  return (
    <div className='mt-20 w-full h-[800px] md:h-fit flex flex-col gap-10 mx-auto max-w-sm md:max-w-full md:flex-row md:justify-between px-10 md:px-15 lg:px-20 xl:px-40'>
      <div className='text-center space-y-4 md:space-y-6 md:text-left md:w-1/2'>
        <h2 className='text-4xl font-bold text-DarkBlue w-80 mx-auto md:mx-0 md:w-full'>What's different about Manage?</h2>
        <p className='text-sm text-DarkGrayishBlue leading-[1.8] w-[300px] mx-auto md:mx-0'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
      </div>
      <div className='w-full flex flex-col gap-10 md:w-1/2 '>
        <div className='space-y-4'>
          <div className='bg-VeryPaleRed space-x-4 w-screen md:w-full h-9 flex items-center rounded-s-full md:bg-transparent'>
            <span className='flex items-center justify-center bg-BrightRed text-white font-bold h-full w-16 rounded-full'>01</span><h3 className='font-bold text-DarkBlue inline-block'>Track company-wide progress</h3>
          </div>
          <p className='text-sm text-DarkGrayishBlue leading-[1.8]'>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the mileston level all the way donde to the smallest of details. Never lose sight of the bigger pitcure again.</p>
        </div>
        <div className='space-y-4'>
          <div className='bg-VeryPaleRed space-x-4 w-screen md:w-full h-9 flex items-center rounded-s-full md:bg-transparent'>
            <span className='flex items-center justify-center bg-BrightRed text-white font-bold h-full w-16 rounded-full'>02</span><h3 className='font-bold text-DarkBlue inline-block'>Advanced built-in reports</h3>
          </div>
          <p className='text-sm text-DarkGrayishBlue leading-[1.8]'>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
        </div>
        <div className='space-y-4'>
          <div className='bg-VeryPaleRed space-x-4 w-screen md:w-full h-9 flex items-center rounded-s-full md:bg-transparent'>
            <span className='flex items-center justify-center bg-BrightRed text-white font-bold h-full w-16 rounded-full'>03</span><h3 className='font-bold text-DarkBlue inline-block'>Everything you need in one place</h3>
          </div>
          <p className='text-sm text-DarkGrayishBlue leading-[1.8]'>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
