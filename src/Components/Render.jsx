import React from 'react'

const Render = ({props}) => {
    console.log(props)

  return (
    <>
      <div>Render</div>
      {props.map((element,key)=>{
        return ( 
                  <img key={key} src={element.urls.small} alt='img'/>
              )
            }
          )
      }
    </>
  )
}

export default Render