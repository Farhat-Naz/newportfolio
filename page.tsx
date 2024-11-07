import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SiVisualstudiocode } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { IoLogoHtml5 } from "react-icons/io5";
import Typewriter from 'typewriter-effect';
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { SiPrivateinternetaccess } from "react-icons/si";



function Home() {
  return (
    <div className="flex bg-rose-100 h-screen">
      <div className="flex border h-28 w-full bg-pink-600">
        <title>Farhat Website</title>

<header className=" text-grey-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5   flex-col md:flex-row items-center pt-1 "/>
<a className="flex mt-1 titlefont font-serif items-center text-grey-900 mb-2 md:mb-0">
<div className="flex x-4">
        <div className="Avatar">
            <div className="w-20 rounded-full relative">

            
            <img src="https://e1.pngegg.com/pngimages/536/365/png-clipart-f-type-logos-for-sale-black-and-red-f-logo-thumbnail.png" alt="farhat logo"/>
<span className="absolute bottom-0 right-0 w-5 h-5 bg-pink-950 rounded-full border-full border-black"></span>
        
</div>
</div>

    </div>
   
    <span className="ml-10 text-2xl text-pink-950 ">Farhat Naz</span></a>
    
    <div className="flex flex-auto px-48 h-12 text-3xl font-serif text-pink-950"/>
 
    
    </header>
    
            <ul className="flex text-3xl gap-6 ml-20 flex-grow pt-12 ">
                <Link href={"http://localhost:3000/about"}>
                <li>About me</li>
                </Link>
                <Link href="">
                <li>Project</li>
                </Link>
                <Link href={"http://localhost:3000/blog"}>
                <li>Blog</li>
                </Link>
            </ul>
            <div>

                   {/*Button*/}
<div className="flex  mt-4 md:mt-0 pt-12 gap-4  ml-80">
  
  <button className="inline-flex intem-center rounded-lg bg-red-400 text-pink-950 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 text-base">
    Login
  </button>
  <button className="inline-ntem-centflex ier rounded-lg bg-red-400 text-pink-950 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 text-base" >
    Signup

  </button>
  </div>
    </div>
    </div>

    <div className=" pt-0 grid grid-cols-5  border-1 rounded-ld ">
        <div className="grid-cols-2 bg-pink-300 text-3xl text-red-950 w-56 h-screen p-2  rounded-lg">
        
        <ul>
          <Link href=''>
          <li>Skills</li>
          </Link>
          <br/>
          <Link href=''>
          <li>Projects</li>
          </Link>
          <br/>
          <Link href=''>
          <li>About</li>
          </Link>
        </ul>
        
       
        </div>
        
        <div className=" grid col-span-2">
          <section>
          
          <h1  className="title-font sm:text-2xl text-xl mb-4 font-bold text-red-950">
         
         <Typewriter
  options={{
    strings: ['Hello I am Farhat Naz Full Stack Developer', 'Quater II student of GIAC'],
    autoStart: true,
    loop: true,
  }}
/>
</h1>

 <h2  className="-font sm:text-xl text-title mb-4 font-medium text-red-950"> 

Thank you for outlining your project requirements. I am Computer System Engineer and eight years experience in IT field.

With experience in HTML, CSS. I have some experience in projects making.
</h2>
  



{/* icons*/}
<div className='container px-2 py-8 max-auto flex flex-wrap justify-center item-center space-x-6 text-2xl' >

<div className="flex flex-wrap item-center bg-white border-2 border-yelow-500 p-4 transition-transform duration-300 ease-in-out transfor hover:scale-110" >
<SiVisualstudiocode className="text-sky-500 text-6xl"/>
<span className="mta-2 text-lg text-black">visual Studio</span>
</div>
<div className="flex flex-wrap item-center bg-white border-2 border-yelow-500 p-4 transition-transform duration-300 ease-in-out transfor hover:scale-110" >
<SiPython className="text-sky-500 text-6xl"/>
<span className="mt-2 text-lg text-black">Python</span>
</div>
<div className="flex flex-wrap item-center bg-white border-2 border-yelow-500 p-4 transition-transform duration-300 ease-in-out transfor hover:scale-110" >
<IoLogoHtml5 className="text-sky-500 text-6xl"/>
<span className="mt-2 text-lg text-black">HTML</span>
</div>
<div className="flex flex-wrap item-center bg-white border-2 border-yelow-500 p-4 transition-transform duration-300 ease-in-out transfor hover:scale-110" >

<DiJavascript className="text-sky-500 text-6xl"/>
<span className="mt-2 text-lg text-black">JavaScript</span>
</div>
{/*type writer effect*/}

 <h1  className="-font sm:text-3xl text-title3xl mb-4 font-bold text-red-950"> 
 <Typewriter 
   options={{
     strings: ['Courses Available Here'],
     autoStart: true,
     loop: true,
   }}
 />
 </h1>
                </div>
               


</section>
</div>
<div className='pr-32 pt-18 grid grid-col-2  '>
          <div className="w-1/2  mx-16">
<div>
        <Image  className="flex flex-end pr-4 rounded-full mr-96 " src={"/images/farhat.jpg"} alt="logo" width={400} height={400} ></Image>
        
          
           
        </div>
        
</div>
</div>
          
          </div>


          <div className="w-full h-1 bg-red-700 border-1  ">
        <div className="grid grid-cols-3 bg-rose-700 gap-4 pt-2">
       
          <div className="px-32  text-pink-950 text-2xl">
            <Link href="">
          < div className="flex flex-row">
          <MdContactPage />
            contact us
            </div>
            </Link>
            <Link href="">
            < div className="flex flex-row">
            <SiPrivateinternetaccess />
            private policy
          </div>
          </Link>
        </div>
        
          <div className="px-32  text-pink-950 text-2xl">
            <Link href="">
          < div className="flex flex-row">
          <RiHome7Fill />
            Home
            </div>
            </Link>
            <Link href="">
            < div className="flex flex-row">
            <MdEmail />
            Email
          </div>
          </Link>
          </div>
        
     
          <  div className=" text-pink-950 text-2xl">
          <Link href="">
          < div className="flex flex-row">
          
          <IoLogoFacebook />
           Facebook

          </div>
          </Link>
          <Link href="">
          <div className="flex flex-row">
          <FaTwitterSquare />
          Twitter
          </div>
          </Link>
          <Link href="">
          <div className="flex flex-row">
          <FaLinkedin />
          Linked In
          </div>
          </Link>
</div>
          </div>
      
      
    </div>


    </div>
  )
}

export default Home
