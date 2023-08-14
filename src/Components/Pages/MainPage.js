import React from "react";
import "./MainPage.css";
import DownloadLink from "../SubComponents/DownloadLink";
import InfoCards from "../SubComponents/Cards/InfoCards";
import DemoSection from "../SubComponents/DemoSection";
import { demoCards, advantageCards } from "../SubComponents/Cards/Utilities";
import AdvantageCards from "../SubComponents/AdvantageCards";
import UtilityCards from "../SubComponents/UtilityCards";
import Features from "../SubComponents/Features";
import ExpertsTestimonials from "../SubComponents/ExpertsTestimonials";
import DownloadSection from "../SubComponents/DownloadSection";
import ImageSection from "../SubComponents/ImageSection";
import CarouselSection from "../SubComponents/CarouselSection";
import VideoPreviewSection from "../SubComponents/VideoPreviewSection";
import FAQSection from "../SubComponents/FAQSection";
import Header from "../SubComponents/Header";
import SocialMediaSection from "../SubComponents/SocialMediaSection";
import FooterSection from "../SubComponents/FooterSection";
import HeroSection from "../SubComponents/HeroSection";
import DemoIframeSection from "../SubComponents/DemoIframeSection";
import TemplateSection from "../SubComponents/TemplateSection";

function MainPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <DemoIframeSection />
      <InfoCards />
      <TemplateSection />
      <DownloadLink />
      <DemoSection cardsToBeRendered={demoCards} bgRequired={true} />
      <DemoSection cardsToBeRendered={advantageCards} bgRequired={false} />
      <AdvantageCards />
      <UtilityCards />
      <Features />
      <ExpertsTestimonials />
      <DownloadSection />
      <ImageSection />
      <CarouselSection />
      <DownloadSection appSection={true} />
      <VideoPreviewSection />
      <FAQSection />
      <SocialMediaSection />
      <FooterSection />
    </>
  );
}

export default MainPage;
