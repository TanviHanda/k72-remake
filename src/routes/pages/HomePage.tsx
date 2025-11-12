import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { BiMenuAltRight } from "react-icons/bi"
import { GoX } from "react-icons/go"

const HomePage = () => {
  const [openMenu, setOpenMenu] = React.useState(false)

  // -----------------------
  // PAGE LOAD ANIMATIONS
  // -----------------------
  useGSAP(() => {
    gsap.from('video', { 
      opacity: 0, 
      duration: 1,
      delay: 0.5 
    })

    gsap.to('.revealer-rect', {
      y: '100%',        
      stagger: 0.1,       
      duration: 1,
      ease: 'power3.inOut',
      delay: 1.0 
    })

    gsap.from('.textcontent', {
      opacity: 0,
      y: -50,
      stagger: 0.3,
      duration: 1,
      ease: 'power3.out',
      delay: 2.0 
    })

    gsap.from('.cross-icon', {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 2.5
    })
  }, [])

  // -----------------------
  // MENU OPEN ANIMATION
  // -----------------------
  React.useEffect(() => {
    if (openMenu) {
      const tl = gsap.timeline()
      tl.from(".top-div", {
        y: -50,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        stagger: {
          each: 0.5
        }
      })
    }
  }, [openMenu])

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      {/* --- BACKGROUND VIDEO --- */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video 
          src="HomePageVideo.mp4" 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* --- REVEALER LAYERS --- */}
      <div className="absolute top-0 left-0 w-full h-full flex">
        {[...Array(5)].map((_, i) => (
          <div key={i} className='revealer-rect h-full w-1/5 bg-black'></div>
        ))}
      </div>

      {/* --- MAIN TEXT --- */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen text-white text-[8rem] leading-[0.9]">
        <div className='textcontent'>
          <h1 className="m-0">L'ÉTINCELLE</h1>
        </div>
        
        <div className='textcontent flex items-center gap-2'>
          <h1 className="m-0">QUI</h1>
          <div className='rounded-[50px] overflow-hidden w-[200px] h-[95px] flex items-center mx-auto'>
            <video 
              src="HomePageVideo.mp4" 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover rounded-[50px]" 
            />
          </div>
          <h1 className="m-0">GÉNÈRE</h1>
        </div>

        <div className='textcontent'>
          <h1 className="m-0">LA CRÉATIVE</h1>
        </div>
      </div>

      {/* --- MENU BUTTON --- */}
      <div className="absolute top-0 right-0 w-fit z-50">
        <div 
          className="cursor-pointer transition duration-300 bg-black/80 hover:bg-black m-0"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <GoX size={150} color="white" className='m-0 p-0 border-2 border-white cross-icon'/>
          ) : (
            <BiMenuAltRight size={35} color="white" />
          )}
        </div>
      </div>

      {/* --- SIDE MENU --- */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black text-white transform transition-transform duration-500 ease-in-out z-40 
          ${openMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-center justify-center h-full font-semibold gap-5">
          <div className="hover:text-gray-400 transition duration-200 cursor-pointer text-[5rem] border-2 border-white w-full text-center top-div"><h1>PROJECTS</h1></div>
          <div className="hover:text-gray-400 transition duration-200 cursor-pointer text-[5rem] border-2 border-white w-full text-center top-div"><h1>AGENCE</h1></div>
          <div className="hover:text-gray-400 transition duration-200 cursor-pointer text-[5rem] border-2 border-white w-full text-center top-div"><h1>CONTACT</h1></div>
          <div className="hover:text-gray-400 transition duration-200 cursor-pointer text-[5rem] border-2 border-white w-full text-center top-div"><h1>BLOGUE</h1></div>
        </div>
      </div>

      {/* --- BACKDROP --- */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setOpenMenu(false)}
        />
      )}

      {/* --- SIDE TEXT --- */}
      <div className="absolute top-[57%] right-[2%] textcontent w-[15%] text-[0.7rem] selection:bg-fuchsia-300 selection:text-fuchsia-900 z-20">
        <p>
          K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. 
          On cherche la friction qui crée l'étincelle pour générer de l'émotion. Pour assurer une relation honnête, 
          on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
        </p>
      </div>

      {/* --- BOTTOM BUTTONS --- */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-8 z-20">
        <div className="textcontent bg-transparent text-[5rem] font-bold text-white rounded-[60px] border-2 border-white px-8">
          <h1>PROJECTS</h1>
        </div>
        <div className="textcontent bg-transparent text-[5rem] font-bold text-white rounded-[60px] border-2 border-white px-8">
          <h1>AGENCE</h1>
        </div>
      </div>
    </section>
  )
}

export default HomePage
