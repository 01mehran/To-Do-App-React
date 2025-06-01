import React from 'react'

export const Input = ({placeholder, type}) => {
  return (
   <input
        type={type}
        placeholder={placeholder}
        className="focus:ring-light-green accent-light-green w-full rounded-[7px] border border-black/60 px-2 py-2 outline-0 focus:border-transparent focus:ring-2 focus:outline-none"
      />
  )
}
