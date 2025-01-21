import React from 'react';
import MyNav from '@/app/Components/Nav';
import MyHome from '@/app/Components/Home';
import MyPublications from '@/Components/Publications';
import MyAbout from '@/app/Components/About';
import MyContact from '@/app/Components/Contact';
import MyFooter from '@/app/Components/Footer';

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