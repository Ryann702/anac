"use client";
import { Playfair_Display, Great_Vibes, Montserrat } from 'next/font/google';
import { Laptop, Copy, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const playfair = Playfair_Display({ subsets: ['latin'] });
const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function SugestoesPage() {
  const [copied, setCopied] = useState(false);
  const pixKey = "(83) 98863-4057";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] flex flex-col items-center">
      <div className="w-full max-w-md bg-[#FFF5F5] min-h-screen flex flex-col shadow-xl border-x relative overflow-hidden">
        
        {/* Botão Voltar */}
        <div className="w-full p-6 pt-12 z-30">
          <Link href="/" className="inline-flex items-center gap-2 text-[#991A3D] hover:opacity-70 transition-opacity bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
            <ArrowLeft className="w-5 h-5" />
            <span className={`${montserrat.className} text-[10px] font-bold tracking-[0.2em] uppercase`}>Voltar</span>
          </Link>
        </div>

        {/* Conteúdo */}
        <section className="w-full py-6 px-8 flex flex-col items-center">
          
          <div className="relative flex items-center justify-center p-12 mb-10 w-full">
            <div className="absolute inset-0 bg-white rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#eedad3]"></div>
            <h3 className={`${greatVibes.className} text-5xl text-[#991A3D] z-10 leading-none text-center`}>
              Minha Sugestão
            </h3>
          </div>

          {/* ÍCONE DO COMPUTADOR (Restaurado) */}
          <div className="mb-8 relative">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#eedad3]">
              <Laptop className="w-10 h-10 text-[#991A3D] opacity-80" />
            </div>
            <span className="absolute -top-1 -right-1 text-xl">✨</span>
          </div>

          <div className={`${playfair.className} text-center space-y-5 text-[#b56b7c] leading-relaxed italic text-base mb-8`}>
            <p className="text-lg font-bold not-italic text-[#991A3D]">Um Sonho que Está Começando…</p>
            <p>Meus 15 anos marcam o início de uma nova fase na minha vida, cheia de sonhos, metas e muito estudo.</p>
            <p>Mas, se você desejar me presentear, estou juntando recursos para comprar um <span className="font-bold text-[#991A3D] not-italic">notebook para meus estudos</span>. ✨</p>
          </div>

          {/* ÁREA DO QR CODE PERSONALIZADO */}
          <div className="w-full bg-white p-6 rounded-[35px] border border-[#eedad3] shadow-sm flex flex-col items-center mb-10">
            <img 
              src="/qr-pix.png" 
              alt="QR Code Pix Analine" 
              className="w-48 h-48 mb-6 object-contain"
            />
            
            <div className="text-center mb-6">
              <p className={`${playfair.className} text-[#8B2C47] font-bold text-sm`}>
                ANALINE SILVA DE PONTES GOMES
              </p>
            </div>

            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 bg-[#8B2C47] text-white px-8 py-3 rounded-full text-xs font-bold active:scale-95 transition-all shadow-md"
            >
              {copied ? "COPIADO!" : <><Copy className="w-4 h-4" /> COPIAR CHAVE PIX</>}
            </button>
          </div>

          <footer className={`${playfair.className} text-center text-[#b56b7c] italic pb-12`}>
            <p className="text-sm italic">Com amor, Ana Karolyne</p>
          </footer>

        </section>
      </div>
    </main>
  );
}