"use client";
import { Playfair_Display, Great_Vibes, Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'] });
const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const FLORAL_IMG = "/cima.png";

export default function LocalPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-md bg-[#FFF5F5] min-h-screen flex flex-col shadow-xl border-x border-[#eedad3]/30 relative overflow-hidden mx-auto"
      >
        
        {/* FLORAL DO TOPO - Ajustado para as extremidades para não cobrir o botão */}
        <div className="absolute top-[-70px] right-[-40px] w-[110%] max-w-[480px] pointer-events-none z-0">
          <img 
            src={FLORAL_IMG} 
            alt="" 
            className="w-full h-auto object-contain mix-blend-multiply opacity-90" 
          />
        </div>

        {/* Botão Voltar - Com fundo e z-index alto para total visibilidade */}
        <div className="w-full p-6 pt-12 z-30">
          <Link href="/" className="inline-flex items-center gap-2 text-[#991A3D] hover:opacity-70 transition-opacity bg-white/70 px-4 py-2 rounded-full backdrop-blur-md shadow-sm border border-[#eedad3]/50">
            <ArrowLeft className="w-5 h-5" />
            <span className={`${montserrat.className} text-[10px] font-bold tracking-[0.2em] uppercase`}>Voltar</span>
          </Link>
        </div>

        {/* Conteúdo Central */}
        <section className="w-full px-8 pt-6 flex flex-col items-center text-center z-10 flex-grow">
          
          <div className="relative flex items-center justify-center p-10 mb-8 w-full">
            <div className="absolute inset-0 bg-white rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#eedad3]"></div>
            <h3 className={`${greatVibes.className} text-5xl text-[#991A3D] z-10`}>
              Local da Festa
            </h3>
          </div>

          <div className="mb-8">
            <p className={`${playfair.className} text-xl text-[#991A3D] font-bold mb-2`}>
              Fascynios Recepções
            </p>
            <p className={`${playfair.className} italic text-[#b56b7c] text-sm leading-relaxed max-w-[250px] mx-auto`}>
              R. Pastor Misael Jácome Cavalcante, 814<br/>
              Lot. Ideal, João Pessoa - PB
            </p>
          </div>

          {/* MAPA COM SYNTAX CORRIGIDA PARA NEXT.JS */}
          <div className="w-full aspect-square max-h-[400px] rounded-[30px] overflow-hidden border border-[#eedad3] shadow-sm bg-white mb-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.5775127870456!2d-34.86935508982491!3d-7.174736992800232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace9de937df6ed%3A0xd08f6b4cd9aee835!2zRmFzY3luaW9zIFJlY2Vww6fDtWVz!5e0!3m2!1spt-BR!2sbr!4v1772419362103!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[5%] contrast-[105%]"
            ></iframe>
          </div>

        </section>

        {/* FLORAL DO RODAPÉ INVERTIDO - Afastado para o limite inferior */}
        <div className="absolute bottom-[-110px] left-[-50px] w-[120%] max-w-[500px] pointer-events-none z-0 scale-[-1] opacity-90">
          <img 
            src={FLORAL_IMG} 
            alt="" 
            className="w-full h-auto object-contain mix-blend-multiply" 
          />
        </div>

      </motion.div>
    </main>
  );
}