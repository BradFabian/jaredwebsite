import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Accolades from '../components/Accolades'
import Plans from '../components/Plans'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
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
   <section id="accolades" className="snap-center">
<Accolades />
</section>
{/* Plans */}
<section id="plans" className="snap-center">
<Plans />
</section>
   {/* Contact Me */}

    </div>
  )
}
