import Link from 'next/link'


import React from 'react'

function About() {
  return (
//     <div className='text-3xl font-serif text-orange-500 p-2  '>About
// <div className='text-3xl font-serif p-2 text-rose-400'> 
//   <Link    href={"projects"}> <h1>Projects</h1></Link>
// </div>

//     </div>


<div className='text-2xl font-serif p-2 text-orange-500'>' ABOUT '   
<div className='text-fuchsia-500 font-extralight  text-1xl' >
    <Link href={"projects"}>    
     <h1>Projects</h1>
    </Link>
    </div>
    <p className='   text-violet-100 font-extrabold  text-center p-56 text-5xl'>Assalamu alaikum</p>
    </div>
  )
}

export default About