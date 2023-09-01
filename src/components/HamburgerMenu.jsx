import { useState } from 'react'

function HamburgerMenu () {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <div className='md:hidden'>
      <div onClick={toggleModal}>
        {modalOpen ? <svg className='cursor-pointer' xmlns='http://www.w3.org/2000/svg' width='21' height='22'><path fill='#242D52' fill-rule='evenodd' d='M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z' /></svg> : <svg className='cursor-pointer' xmlns='http://www.w3.org/2000/svg' width='25' height='18'><g fill='#242D52' fill-rule='evenodd'><path d='M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z' /></g></svg>}
      </div>
      {modalOpen && (
        <div className='mt-28 fixed inset-0 px-10 '>
          <div className='flex flex-col items-center justify-between mt-4 mx-auto h-64 w-full text-DarkBlue font-bold bg-VaryLightGray p-6 rounded-md shadow-2xl shadow-gray-500'>
            <a href='#'>Pricing</a>
            <a href='#'>Product</a>
            <a href='#'>About Us</a>
            <a href='#'>Careers</a>
            <a href='#'>Community</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu
