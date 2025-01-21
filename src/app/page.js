import React from 'react';
import MyNav from '@/Components/Nav';
import MyHome from '@/Components/Home';
import MyPublications from '@/Components/Publications';
import MyAbout from '@/Components/About';
import MyContact from '@/Components/Contact';
import MyFooter from '@/Components/Footer';

const LawyerLandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MyNav />
      <section id="home" className="bg-[#e2f5d9] text-black text-center">
        <MyHome />
      </section>
      <section id="publications">
        <MyPublications />
      </section>
      <section id="about">
        <MyAbout />
      </section>
      <section id="contact">
        <MyContact />
      </section>
      <MyFooter />
    </div>
  );
};

export default LawyerLandingPage;