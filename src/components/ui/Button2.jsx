import React from 'react'

function Button(props) {
    let btnStyle;
    if(props.type == "btn-outline"){
        btnStyle = 'w-full text-white border-2 border-white px-5 p-[12px] min-w-24 font-sans transition duration-200 rounded-full shadow-2xl cursor-pointer hover:bg-indigo-700/10'
    }
    else if(props.type == "btn-primary"){
        btnStyle ='w-full bg-indigo-600 text-white p-[8px] px-4 min-w-24 font-sans rounded-full transition duration-200 shadow-2xl cursor-pointer hover:bg-indigo-700/50'
    }
    else if(props.type == "btn-white"){
        btnStyle ='w-full text-indigo-600 bg-white px-5  p-[14px] min-w-24 font-sans rounded-full transition duration-200 shadow-2xl cursor-pointer hover:shadow-xl hover:shadow-white/30'
    }
    else if(props.type == "btn-danger"){
        btnStyle ='w-full hover:scale-105 text-white bg-red-600 px-5 hover font-semibold p-[10px] min-w-24 font-sans rounded-full transition duration-200 shadow-2xl cursor-pointer hover:shadow-xl hover:shadow-black/30'
    }
  return (
      <button  
        className={btnStyle}>{props.text}
      </button>
  )
}

export default Button
 