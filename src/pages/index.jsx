import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import  Hero  from '@/components/Hero'
import { AboutMe } from '@/components/AboutMe'
import { WhatCanDo } from '@/components/WhatCanDo'
import OurTeam from '@/components/OurTeam'
import { Contacts } from '@/components/Contacts'
import Parceries from '@/components/Parceries'
import FAQs from '@/components/FAQs'




export default function Home() {
  return (
    <>
      <Head>
        <title>DI Gabinete de Terapia da Fala</title>
      </Head>
      <Header />
      <main className='primaryBack'>
        <Hero />
        <AboutMe />
        <OurTeam />
        <Parceries />
        <CallToAction />
        <Contacts />
        <FAQs />
      </main>
      <Footer />
    </>
  )
}
