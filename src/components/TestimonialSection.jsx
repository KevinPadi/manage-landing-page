import Slider from 'react-slick'
import Button from './Button'
import TestimonialItem from './TestimonialItem'
import anishaAvatar from '../assets/images/avatar-anisha.png'
import aliAvatar from '../assets/images/avatar-ali.png'
import richardAvatar from '../assets/images/avatar-richard.png'
import shanaiAvatar from '../assets/images/avatar-shanai.png'

function TestimonialSection () {
  const testimonialsMobile = [
    {
      text: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
      author: 'Anisha Li',
      avatar: anishaAvatar
    },
    {
      text: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
      author: 'Ali Bravo',
      avatar: aliAvatar
    },
    {
      text: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
      author: 'Richard Watts',
      avatar: richardAvatar
    },
    {
      text: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
      author: 'Shanai Gough',
      avatar: shanaiAvatar
    }
  ]

  const testimonialsDesktop = [
    {
      text: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
      author: 'Anisha Li',
      avatar: anishaAvatar
    },
    {
      text: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
      author: 'Ali Bravo',
      avatar: aliAvatar
    },
    {
      text: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
      author: 'Richard Watts',
      avatar: richardAvatar
    }
  ]

  const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-active',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: 'transparent',
          borderRadius: '10px',
          padding: '10px'
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '10px',
          height: '10px',
          border: '1px red solid',
          borderRadius: '99px'
        }}
      />
    )
  }
  return (
    <section className='w-full space-y-8 mt-20 text-center'>
      <h2 className='text-3xl text-center font-bold text-DarkBlue w-80 mx-auto md:mx-0 md:w-full'>What they've said</h2>
      <div className='flex justify-center items-center'>
        <div className='w-full max-w-md lg:hidden'>
          <Slider {...settings}>
            {/* {testimonialsMobile.map((testimonial, index) => (
              <div key={index}>
                <TestimonialItem text={testimonial.text} author={testimonial.author} avatar={testimonial.avatar} />
              </div>
            ))} */}
            <div>
              <div className='flex flex-col items-center w-full p-8 text-center space-y-6'>
                <img src={anishaAvatar} alt='avatar' className='w-20' />
                <p className='text-lg text-DarkBlue font-bold'>Anisha Li</p>
                <p className='text-DarkGrayishBlue'>'“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'</p>
              </div>
            </div>
            <div>
              <div className='flex flex-col items-center w-full p-8 text-center space-y-6'>
                <img src={aliAvatar} alt='avatar' className='w-20' />
                <p className='text-lg text-DarkBlue font-bold'>Ali Bravo</p>
                <p className='text-DarkGrayishBlue'>'“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'</p>
              </div>
            </div>
            <div>
              <div className='flex flex-col items-center w-full p-8 text-center space-y-6'>
                <img src={richardAvatar} alt='avatar' className='w-20' />
                <p className='text-lg text-DarkBlue font-bold'>Richard Watts</p>
                <p className='text-DarkGrayishBlue'>'“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'</p>
              </div>
            </div>
            <div>
              <div className='flex flex-col items-center w-full p-8 text-center space-y-6'>
                <img src={shanaiAvatar} alt='avatar' className='w-20' />
                <p className='text-lg text-DarkBlue font-bold'>Shanai Gough</p>
                <p className='text-DarkGrayishBlue'>'“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',</p>
              </div>
            </div>
          </Slider>
        </div>
        <div className='hidden w-screen lg:flex lg:justify-between lg:gap-5 xl:gap-10'>
          {/* {testimonialsDesktop.map((testimonial, index) => (
            <div key={index}>
              <TestimonialItem text={testimonial.text} author={testimonial.author} avatar={testimonial.avatar} />
            </div>
          ))} */}
          <div className='flex flex-col items-center w-full p-8 text-center space-y-6'>
            <img src={anishaAvatar} alt='avatar' className='w-20' />
            <p className='text-lg text-DarkBlue font-bold'>Anisha Li</p>
            <p className='text-DarkGrayishBlue'>'“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'</p>
          </div>
          <div className='flex flex-col items-center w-full p-8 text-center space-y-6'>
            <img src={aliAvatar} alt='avatar' className='w-20' />
            <p className='text-lg text-DarkBlue font-bold'>Ali Bravo</p>
            <p className='text-DarkGrayishBlue'>'“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'</p>
          </div>
          <div className='flex flex-col items-center w-full p-8 text-center space-y-6'>
            <img src={richardAvatar} alt='avatar' className='w-20' />
            <p className='text-lg text-DarkBlue font-bold'>Richard Watts</p>
            <p className='text-DarkGrayishBlue'>'“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center pt-10'>
        <Button textColor='text-VaryLightGray' bgColor='bg-BrightRed' />
      </div>
    </section>
  )
}

export default TestimonialSection
