import React from 'react'
import { useNavigate } from 'react-router-dom'

const PolygonNftCard = ({data}) => {

    const navigate = useNavigate()
  return (
    <div className='curson-pointer rounded-xl shadow-md hover:shadow-lg transition bg-white'
        onClick={() => navigate(`/explore/${data.id}`)}
    >
      {/* Card Container */}
      <div className='flex flex-col gap-2 h-52'>
        {/* Main Image */}
        <div className='overflow-hidden rounded-t-lg'>
          <img
            src={data.image} 
            alt={data.title} 
            className='object-cover w-96 h-42 rounded-lg '
          />
        </div>

        {/* Title and Logo Section */}
        <div className='flex items-center gap-3 p-2 mx-auto'>
          {/* Logo */}
          <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200'>
            <img 
              src={data.logo} 
              alt="logo" 
              className='w-full h-full object-cover'
            />
          </div>
          
          {/* Title with Verification */}
          <div className='flex items-center gap-2'>
            <h3 className='font-bold text-lg text-black'>{data.title}</h3>
            {/* Verification Badge */}
            <svg 
              className="w-5 h-5 text-white bg-blue-500 rounded-full" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(PolygonNftCard);