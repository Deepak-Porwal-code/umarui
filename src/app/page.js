"use client";
import { useState } from "react";
import {
  Header,
  MobileNavigation,
  HeroSection,
  FormCard,
  StatsSection,
  PlanUmrahSection,
  ServicesSection,
  SpecialHajjOffers,
  FeaturedPackages,
  CompleteUmrahServices,
  Testimonials,
  Guides,
  FAQSection,
  Footer,
  MobileNavigationBar
} from "../components";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="min-h-screen bg-white">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileNavigation menuOpen={menuOpen} />
      <HeroSection />
      <FormCard />
      <StatsSection />
      <PlanUmrahSection />
      <ServicesSection />
      <SpecialHajjOffers />
      <FeaturedPackages />
      <CompleteUmrahServices />
      <Testimonials />
      <Guides />
      <FAQSection />
      <Footer />
      <MobileNavigationBar />
    </div>
  );
}