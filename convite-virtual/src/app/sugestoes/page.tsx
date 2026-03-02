"use client";
import { Playfair_Display, Great_Vibes, Montserrat } from 'next/font/google';
import { motion } from 'framer-motion';
import { ArrowLeft, Laptop, Smartphone, CreditCard, Heart } from 'lucide-react';
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'] });
const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const FLORAL_IMG = "/cima.png";
const QR_PIX = "/qr-pix.png"; 

export default function SugestoesPresente() {
  // Configurado com o número fornecido: 55 (Brasil) + 83 (DDD) + 988634057
  const WHATSAPP_NUMBER = "5583988634057"; 
  const message = encodeURIComponent("Olá! Gostaria de contribuir para o presente da Ana Karolyne (Notebook) através do cartão de crédito. Como podemos fazer?");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div className="w-full bg-[#FDFBF7] min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-[#FFF5F5] min-h-screen flex flex-col items-center shadow-2xl border-x border-[#eedad3]/30 relative overflow-hidden mx-auto"
      >
        
        {/* FLORAL DO TOPO */}
        <div className="absolute top-[-40px] right-[-20px] w-[110%] max-w-[480px] pointer-events-none z-0">
          <img 
            src={FLORAL_IMG} 
            alt="" 
            className="w-full h-auto object-contain mix-blend-multiply opacity-90 transform-gpu" 
          />
        </div>

        {/* BOTÃO VOLTAR */}
        <div className="w-full p-6 pt-12 z-30">
          <Link href="/?open=true" className="inline-flex items-center gap-2 text-[#991A3D] bg-white/60 px-4 py-2 rounded-full backdrop-blur-md shadow-sm border border-[#eedad3]/50 active:scale-95 transition-transform">
            <ArrowLeft className="w-5 h-5" />
            <span className={`${montserrat.className} text-[10px] font-bold tracking-[0.2em] uppercase`}>Voltar</span>
          </Link>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <section className="relative w-full flex flex-col items-center pt-8 pb-32 px-8 z-10 flex-grow">
          <div className="text-center mb-8">
            <h2 className={`${montserrat.className} text-xs tracking-[0.3em] mb-4 text-[#991A3D] uppercase font-bold`}>Mimos</h2>
            <h1 className={`${greatVibes.className} text-6xl text-[#991A3D]`}>Sugestão de Presente</h1>
          </div>

          {/* TEXTO DO SONHO (NOTEBOOK) */}
          <div className="bg-white/50 backdrop-blur-sm border border-[#eedad3] rounded-[32px] p-6 text-center shadow-sm mb-8">
             <Laptop className="w-8 h-8 text-[#991A3D] mx-auto mb-4 opacity-80" />
             <p className={`${playfair.className} text-lg italic leading-relaxed text-[#b56b7c]`}>
                "Sua presença é o meu maior presente! No entanto, se desejar me presentear com algo especial, o meu grande sonho atual é a aquisição de um <strong>notebook</strong> para me auxiliar nos estudos e projetos."
             </p>
          </div>

          {/* ÁREA DO PIX (QR CODE) */}
          <div className="w-full flex flex-col items-center gap-6">
            <div className="text-center">
                <p className={`${montserrat.className} text-[10px] tracking-[0.2em] text-[#991A3D] font-bold uppercase mb-4`}>Contribua via PIX:</p>
                
                <div className="bg-white p-4 rounded-[30px] shadow-md border border-[#eedad3] mb-3 inline-block">
                    <img 
                        src={QR_PIX} 
                        alt="QR Code PIX Analine Gomes" 
                        className="w-48 h-48 object-contain"
                    />
                </div>
                
                {/* INFORMAÇÕES DO BENEFICIÁRIO */}
                <div className="mb-2">
                  <p className={`${montserrat.className} text-[11px] font-bold text-[#991A3D] uppercase tracking-wider`}>Analine Gomes</p>
                  <p className={`${playfair.className} text-[11px] font-bold text-[#991A3D] uppercase tracking-wider`}>Celular: (83) 98863-4057</p>
                </div>
                <p className={`${playfair.className} text-[10px] italic text-[#b56b7c] opacity-70 mt-2`}>Escaneie o código acima para presentear</p>
            </div>

            {/* DIVISOR */}
            <div className="flex items-center gap-3 w-full max-w-[200px] opacity-30">
                <div className="h-[1px] bg-[#991A3D] flex-grow"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#991A3D]"></div>
                <div className="h-[1px] bg-[#991A3D] flex-grow"></div>
            </div>

            {/* BOTÃO CARTÃO DE CRÉDITO / WHATSAPP */}
            <Link href={whatsappUrl} target="_blank" className="w-full">
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 bg-[#8B2C47] text-white p-5 rounded-[25px] shadow-[0_10px_20px_rgba(139,44,71,0.2)] transition-all border border-white/10"
                >
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full shrink-0">
                        <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                        <p className={`${montserrat.className} text-[11px] font-bold uppercase tracking-wider`}>Deseja usar cartão?</p>
                        <p className={`${playfair.className} text-xs italic opacity-90`}>Fale com Analine Gomes no link</p>
                    </div>
                    <Smartphone className="w-5 h-5 ml-auto opacity-40" />
                </motion.div>
            </Link>

            <div className="flex items-center gap-2 mt-4 opacity-40">
                <Heart className="w-4 h-4 text-[#991A3D] fill-[#991A3D]" />
                <span className={`${montserrat.className} text-[9px] uppercase tracking-widest text-[#991A3D]`}>Com amor, Ana.</span>
            </div>
          </div>

        </section>

        {/* FLORAL DO RODAPÉ */}
        <div className="absolute bottom-[-60px] left-[-30px] w-[120%] max-w-[500px] pointer-events-none z-0 scale-[-1] opacity-90">
          <img 
            src={FLORAL_IMG} 
            alt="" 
            className="w-full h-auto object-contain mix-blend-multiply opacity-90 transform-gpu" 
          />
        </div>
      </motion.div>
    </div>
  );
}