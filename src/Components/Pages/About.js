import React from 'react'
import Header from '../SubComponents/Header'
import HeroSection from '../SubComponents/HeroSection'
// import SocialMediaSection from '../SubComponents/SocialMediaSection'
import InfoCards from '../SubComponents/Cards/InfoCards'
import TeamSection from '../SubComponents/TeamSection'
import StorySection from '../SubComponents/StorySection'
import CommunitySection from '../SubComponents/CommunitySection'
import ReviewSection from '../SubComponents/ReviewSection'
import RatingSection from '../SubComponents/RatingSection'
import ExpertSection from '../SubComponents/ExpertSection'
import FeaturedSection from '../SubComponents/FeaturedSection'
import SocialMediaSection from '../SubComponents/SocialMediaSection'
import FooterForAbout from '../SubComponents/FooterForAbout'

function About() {
  return (
    <div>
      <Header aboutpage={true} />
      <HeroSection aboutpage={true} />
      <InfoCards aboutpage={true} />
      <TeamSection />
      <StorySection />
      <CommunitySection />
      <ReviewSection />
      <RatingSection />
      <ExpertSection />
      <FeaturedSection />
      <SocialMediaSection aboutpage={true} />
      <FooterForAbout />
    </div>
  )
}

export default About