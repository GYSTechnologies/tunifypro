import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import WhyChooseSection from './WhyChooseSection'
import TestimonialsSection from './TestimonialsSection'
import CtaSection from './CtaSection'
import BrandComparison from './BrandComparison'
import BrandsSection from './BrandsSection'
import FAQSection from './FAQSection'
import CallToActionSection from './CallToActionSection'
import UttarakhandMap from './UttarakhandMap'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <UttarakhandMap/>
        <AboutSection/>
        <BrandsSection/>
        <WhyChooseSection/>
        <TestimonialsSection/>
        <BrandComparison/>
        <FAQSection/>
        <CallToActionSection/>
      
    </div>
  )
}

export default Home