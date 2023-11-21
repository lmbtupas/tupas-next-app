'use client'
import React from 'react'

const Button = ({ onClick, text, className}) => {
  return (
    <button onClick={onClick} className={`${className} text-white px-4 py-2 bg-slate-600 font-bold rounded-md`}> 
        {text}
    </button>
  )
}

export default Button