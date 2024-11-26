// src/components/SponsorCarousel.jsx
import React from 'react';
import OticaPopular from '../assets/parceiros2/1.svg';
import MasiEyewear from '../assets/parceiros2/2.svg';
import MasiLentes from '../assets/parceiros2/3.svg';
import QuentinhasDaLu from '../assets/parceiros2/4.svg';
import QrCook from '../assets/parceiros2/5.svg';
import Patrao from '../assets/parceiros2/6.svg';
import PicemaEnergiaSolar from '../assets/parceiros2/7.svg';
import Madecode from '../assets/parceiros/logo.png';

const SponsorCarousel = () => {
  return (
    <section className="bg-white border-b-2 dark:bg-black py-10 mt-10 mb-10">
      <h2 className="text-3xl text-center mb-8 dark:text-white border-b-2 pb-8 font-semibold">Nossos Parceiros</h2>
      {/* Contêiner com largura máxima */}
      <div className="overflow-hidden max-w-screen-lg mx-auto">
        <div className="flex gap-8 animate-scroll">
          <img
            src={OticaPopular}
            alt="Otica Popular"
            className="object-contain"
            style={{ width: '150px', height: '100px' }}
          />
          <img
            src={MasiEyewear}
            alt="Masi Eyewear"
            className="object-contain"
            style={{ width: '150px', height: '100px' }}
          />
          <img
            src={MasiLentes}
            alt="Masi Lentes"
            className="object-contain"
            style={{ width: '150px', height: '100px' }}
          />
          <img
            src={QuentinhasDaLu}
            alt="Quentinhas Da Lu"
            className="object-contain"
            style={{ width: '150px', height: '100px' }}
          />
          <img
            src={QrCook}
            alt="QR Cook"
            className="object-contain"
            style={{ width: '150px', height: '100px' }}
          />
          <img
            src={Patrao}
            alt="Patrão"
            className="object-contain"
            style={{ width: '150px', height: '100px' }}
          />
          <img
            src={PicemaEnergiaSolar}
            alt="Picema Energia Solar"
            className="object-contain"
            style={{ width: '150px', height: '100px' }}
          />
          <img
            src={Madecode}
            alt="Madecode"
            className="object-contain"
            style={{ width: '150px', height: '100px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default SponsorCarousel;
