import React from 'react'
import Logo from './Logo'

export default function LogoDivider() {
    {/* divider */}
  return (
      <div className="wrapper flex items-center w-full gap-3   ">
        <div className="line blueGradient w-full h-0.5"></div>
        <Logo className="w-20 lg:w-28" />
        <div className="line blueGradient w-full h-0.5"></div>
      </div>
  )
}
