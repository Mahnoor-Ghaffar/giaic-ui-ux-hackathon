import AboutNavbar from '@/app/components/AboutComponents/AboutNavbar'
import BrandLogoCards from '@/app/components/AboutComponents/BrandLogoCards'
import HeroCards from '@/app/components/AboutComponents/HeroCards'
import ThreeSecNavbar from '@/app/components/AboutComponents/ThreeSecNavbar'
import AnnouncementBar from '@/app/components/HomeComponents/Announcmentbar'
import Footer from '@/app/components/HomeComponents/footer'
import FooterNavbar from '@/app/components/HomeComponents/FooterNavbar'
import Header from '@/app/components/HomeComponents/header'
import NavigationButton from '@/app/components/HomeComponents/NavigationButton'
import ProductCard from '@/app/components/HomeComponents/Products-Cards'
import React from 'react'

const About = () => {
  return (
    <main>
        <AnnouncementBar bgColor='#23856D'/>
        <Header />
        <AboutNavbar />
        <HeroCards />
        <ThreeSecNavbar />
        <BrandLogoCards />
        <FooterNavbar />
        <Footer />
        <ProductCard />
        <NavigationButton />
    </main>
  )
}

export default About