"use client";
import { Playfair_Display, Great_Vibes, Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';
import { MapPin, Check, Search } from 'lucide-react';
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'] });
const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const FLORAL_IMG = "/cima.png";

export default function ConviteAberto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      // AJUSTE: min-h-[100dvh] para Safari e remoção de scroll-smooth que às vezes trava no iOS
      className="w-full max-w-md bg-[#FFF5F5] min-h-[100dvh] flex flex-col items-center shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-x relative overflow-x-hidden mx-auto"
    >
      
      {/* SEÇÃO 1: O CONVITE PRINCIPAL */}
      {/* AJUSTE: overflow-hidden na seção impede que as flores criem a barra de rolagem fantasma */}
      <section className="relative w-full flex flex-col items-center justify-start text-center py-10 px-8 z-10 overflow-hidden">
        
        {/* FLORAL DO TOPO */}
        <div className="absolute top-[-30px] right-0 w-[110%] max-w-[480px] pointer-events-none -z-10">
          <img 
            src={FLORAL_IMG} 
            alt="Arranjo Floral Topo" 
            // AJUSTE: transform-gpu para scroll liso no iPhone
            className="w-full h-auto object-contain mix-blend-multiply opacity-90 transform-gpu" 
          />
        </div>

        <div className="mt-16"></div>

        <h2 className={`${montserrat.className} text-xl tracking-[0.2em] mb-3 text-[#991A3D]`}>15 ANOS</h2>
        <div className="flex items-center gap-2 mb-10">
          <span className="w-12 h-[1px] bg-[#991A3D]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#991A3D]"></span>
          <span className="w-12 h-[1px] bg-[#991A3D]"></span>
        </div>

        <h1 className={`${greatVibes.className} text-[84px] mb-12 text-[#991A3D] leading-[0.8]`}>
          Ana<br/>Karolyne
        </h1>
        
        <p className={`${playfair.className} max-w-[280px] text-lg italic leading-relaxed text-[#b56b7c] mb-16`}>
          Venha celebrar comigo a chegada dos meus tão esperados 15 anos!
        </p>

        <div className={`${playfair.className} relative flex flex-col items-center py-6 w-full max-w-[280px] font-serif border-y border-[#eedad3] mb-16`}>
          <p className="tracking-[0.25em] text-[#991A3D] mb-4 text-sm font-semibold uppercase">ABRIL</p>
          <div className="flex items-center justify-between w-full px-2">
            <div className="flex flex-col items-center w-12">
              <span className="text-sm tracking-widest text-[#991A3D] font-semibold mb-1">SÁB</span>
              <span className="w-full h-[1px] bg-[#991A3D]"></span>
            </div>
            <span className="text-7xl font-light text-[#991A3D] mx-2 -mt-2">11</span>
            <div className="flex flex-col items-center w-12">
              <span className="text-sm tracking-widest text-[#991A3D] font-semibold mb-1">20:30H</span>
              <span className="w-full h-[1px] bg-[#991A3D]"></span>
            </div>
          </div>
          <p className="tracking-[0.25em] text-[#991A3D] mt-4 text-sm font-semibold uppercase">2025</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-[#b56b7c]">
            <p className={`${montserrat.className} text-xs tracking-[0.2em] uppercase`}>Role para baixo</p>
            <div className="w-1 h-6 bg-gradient-to-b from-[#b56b7c] to-transparent rounded-full opacity-50"></div>
        </div>
      </section>

      {/* SEÇÃO 2: MENU DE AÇÕES */}
      <section id="menu" className="w-full flex flex-col items-center justify-start text-center py-20 px-10 relative bg-[#FFF5F5]">
        <p className={`${playfair.className} text-lg italic text-[#b56b7c] mb-12 max-w-[260px]`}>
            Clique nos botões abaixo para interagir
        </p>

        <div className="flex flex-col gap-8 w-full z-20">
          <ActionButton Icon={MapPin} label="LOCAL DA FESTA" href="/local" />
          <ActionButton Icon={Check} label="CONFIRMAR PRESENÇA" href="/confirmar-presenca" />
          <ActionButton Icon={Search} label="SUGESTÃO DE PRESENTE" href="/sugestoes" />
        </div>
      </section>

      {/* SEÇÃO 3: MANUAL E DRESS CODE */}
      <section id="manual" className="w-full bg-[#FFF5F5] pt-10 pb-40 px-8 flex flex-col items-center relative overflow-hidden">
        <div className="relative flex items-center justify-center p-12 mb-16">
            <div className="absolute inset-0 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#eedad3]"></div>
            <h3 className={`${greatVibes.className} text-6xl text-[#991A3D] z-10 leading-none text-center`}>
                Manual do Convidado
            </h3>
        </div>

        <div className={`${playfair.className} w-full flex flex-col items-center text-center italic z-10`}>
            <h4 className="text-3xl font-bold text-[#991A3D] mb-4 uppercase">Traje e Paleta</h4>
            <p className="text-sm font-sans font-bold uppercase tracking-widest text-[#991A3D] mb-6">Dress Code:</p>
            <p className="max-w-[280px] text-[#b56b7c] leading-relaxed mb-10">
                Traje Esporte Fino / Passeio Completo. Fiquem à vontade para escolherem seus looks, mas pedimos gentilmente que <strong className="text-[#991A3D]">NÃO UTILIZEM</strong> as cores da paleta abaixo:
            </p>
            
            <div className="flex items-center gap-4 mb-20">
                {["#8B2C47", "#5D0F1F", "#F28B9F", "#A58B8D"].map(color => (
                    <div key={color} className="w-10 h-10 rounded-full border border-[#eedad3] shadow-md" style={{ backgroundColor: color }}></div>
                ))}
            </div>
        </div>

        {/* FLORAL DO RODAPÉ INVERTIDO */}
        <div className="absolute bottom-[-50px] left-[-20px] w-[120%] max-w-[500px] pointer-events-none z-0 scale-[-1]">
          <img 
            src={FLORAL_IMG} 
            alt="Arranjo Floral Rodapé" 
            className="w-full h-auto object-contain mix-blend-multiply opacity-90 transform-gpu" 
          />
        </div>
      </section>

    </motion.div>
  );
}

function ActionButton({ Icon, label, href }: { Icon: any; label: string; href?: string }) {
    const buttonContent = (
        <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 bg-[#8B2C47] text-white p-6 rounded-full shadow-[0_10px_30px_rgba(139,44,71,0.4)] w-full active:bg-[#991A3D]"
        >
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full shrink-0">
                <Icon className="w-6 h-6 text-white" />
            </div>
            <span className={`${playfair.className} text-lg font-bold tracking-wide italic text-left leading-tight`}>{label}</span>
        </motion.button>
    );

    if (href) {
        // AJUSTE: Adicionei o ?open=true para quando o usuário voltar, o convite continuar aberto
        return <Link href={`${href}?open=true`} className="w-full">{buttonContent}</Link>;
    }

    return buttonContent;
}