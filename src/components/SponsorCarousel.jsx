// src/components/SponsorCarousel.jsx
import React from 'react';
import Madecode from '../assets/madecode.png';

const SponsorCarousel = () => {
  return (
    <section className="bg-white py-10 mt-10 mb-10">
      <h2 className="text-3xl text-center font-bold text-[#008000] mb-8">Nossos Parceiros</h2>
      {/* Contêiner com largura máxima */}
      <div className="overflow-hidden max-w-screen-lg mx-auto">
        <div className="flex gap-8 animate-scroll">
          <img src={Madecode} alt="Madecode" className="h-12" />
          <img src={Madecode} alt="QR Cook" className="h-12" />
          <img src={Madecode} alt="Parceiro 3" className="h-12" />
          {/* Duplicando as logos para que o carrossel tenha uma transição contínua */}
          <img src={Madecode} alt="Madecode" className="h-12" />
          <img src={Madecode} alt="QR Cook" className="h-12" />
          <img src={Madecode} alt="Parceiro 3" className="h-12" /><img src={Madecode} alt="Madecode" className="h-12" />
          <img src={Madecode} alt="QR Cook" className="h-12" />
          <img src={Madecode} alt="Parceiro 3" className="h-12" /><img src={Madecode} alt="Madecode" className="h-12" />
          <img src={Madecode} alt="QR Cook" className="h-12" />
          <img src={Madecode} alt="Parceiro 3" className="h-12" />
        </div>
      </div>
    </section>
  );
};

export default SponsorCarousel;
