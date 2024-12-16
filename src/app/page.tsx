import React from 'react'
import AnnouncementBar from './components/HomeComponents/Announcmentbar'
import Header from './components/HomeComponents/header';
import Hero from './components/HomeComponents/Hero'
import FourCards from './components/HomeComponents/FourCards';
import Footer from './components/HomeComponents/footer';
import ProductCard from './components/HomeComponents/Products-Cards';
import SecondHero from './components/HomeComponents/secondHero';
import ThirdHero from './components/HomeComponents/ThirdHero';
import FeaturedPost from './components/HomeComponents/FeaturedPost';

const Home = () => {
  return (
   <main>
    <AnnouncementBar />
    <Header />
    <Hero />
    <FourCards />
    <ProductCard />
    <SecondHero />
    <ThirdHero />
    <FeaturedPost />
    <Footer />
   </main>
  )
}

export default Home