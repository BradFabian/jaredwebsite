import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Accolades from '../components/Accolades'
import Plans from '../components/Plans'
import ContactMe from '../components/ContactMe'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll  overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0a65f7]/80 '>
      <Head>
        <title>Jared Leibowich Portfolio</title>
      
      </Head>

   {/* Header */}
 <Header />
   {/* Hero */}
<section id="hero" className="snap-start">
<Hero />
</section>
   {/* About */}
   <section id="about" className="snap-center">
<About/>
</section>

   {/* Experience */}
  
<section id="experience" className="snap-center">
<Experience />
</section>

   {/* Accolades */}
   <section id="accolades" className="snap-start">
<Accolades />
</section>
{/* Plans */}
<section id="plans" className="snap-center">
<Plans />
</section>
   {/* Contact Me */}
   <section id="contactme" className="snap-start">
<ContactMe />
</section>
    </div>
  )
}
