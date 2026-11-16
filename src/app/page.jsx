// page.jsx (Ordem lógica: Início -> Sobre -> Publicações -> Contato)
import React from "react";
import MyNav from "../Components/Nav";
import MyHome from "../Components/Home";
import MyAbout from "../Components/About";
import MyPublications from "../Components/Publications";
import MyContact from "../Components/Contact";
import MyFooter from "../Components/Footer";

const LawyerLandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MyNav />
      <main className="flex-1">
        <section id="home">
          <MyHome />
        </section>
        <section id="about">
          <MyAbout />
        </section>
        <section id="publications">
          <MyPublications />
        </section>
        <section id="contact">
          <MyContact />
        </section>
      </main>
      <MyFooter />
    </div>
  );
};

export default LawyerLandingPage;