import React from 'react'

const MyPhotos = () => {
  let store = JSON.parse(localStorage.getItem('myFavorite'))
  console.log(store)
  return (
    <div>MyPhotos
    estas son mis fotos favoritas
    <h1>{store && store[1]}</h1>
    <img src={store[0]} alt="pic" style={{width:'500px'}}/>
    </div>
    
  )
}

export default MyPhotos