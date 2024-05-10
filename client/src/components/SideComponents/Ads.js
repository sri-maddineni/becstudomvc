import React from 'react'

const Ads = () => {
  const images = [
    "https://img.restaurantguru.com/c777-Restaurant-BLUE-PLATE-MULTICUISINE-photo.jpg",
    "https://img.restaurantguru.com/c62a-Bhavapuri-Biriyanis-Bapatla-design.jpg"
  ]
  return (
    <>
      <div className="container text-center">
        {images.map(item=>(
          <>
          <img src={item} className='my-2' style={{maxWidth:"100%",height:"auto"}} alt="" /></>
        ))}
      </div>
    </>
  )
}

export default Ads