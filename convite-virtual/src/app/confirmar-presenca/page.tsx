"use client";
import { useState } from 'react';
import { Playfair_Display, Great_Vibes, Montserrat } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, CheckCircle, ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';

import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const playfair = Playfair_Display({ subsets: ['latin'] });
const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const FLORAL_IMG = "/cima.png";

export default function ConfirmarPresenca() {
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('');
  const [errors, setErrors] = useState<{ nome?: string; celular?: string }>({});
  const [loading, setLoading] = useState(false);

  const formatarCelular = (value: string) => {
    const raw = value.replace(/\D/g, "");
    if (raw.length <= 11) {
      return raw
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    return value.slice(0, 15);
  };

  const handleCelularChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCelular(formatarCelular(e.target.value));
  };

  const validarFormulario = () => {
    const novosErros: { nome?: string; celular?: string } = {};
    if (nome.trim().length < 3) novosErros.nome = "Por favor, digite seu nome completo.";
    const celularLimpo = celular.replace(/\D/g, "");
    if (celularLimpo.length < 11) novosErros.celular = "O número deve conter o DDD e 9 dígitos.";
    setErrors(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validarFormulario()) {
      setLoading(true);
      try {
        await addDoc(collection(db, "confirmados"), {
          nome: nome,
          celular: celular,
          dataConfirmacao: serverTimestamp()
        });
        alert("🎉 Presença confirmada, " + nome.split(' ')[0] + "!");
        setNome('');
        setCelular('');
      } catch (error) {
        console.error("Erro ao salvar:", error);
        alert("Ops! Ocorreu um erro ao confirmar.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    // O segredo está aqui: overflow-hidden no container principal para segurar as imagens absolutas
    // e permitir que o body lide com o scroll vertical
    <div className="w-full bg-[#FDFBF7] min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-md bg-[#FFF5F5] min-h-screen flex flex-col items-center shadow-2xl border-x border-[#eedad3]/30 relative overflow-hidden mx-auto"
      >
        
        {/* FLORAL DO TOPO */}
        <div className="absolute top-[-30px] right-[-20px] w-[110%] max-w-[480px] pointer-events-none z-0">
          <img 
            src={FLORAL_IMG} 
            alt="" 
            className="w-full h-auto object-contain mix-blend-multiply opacity-90" 
          />
        </div>

        {/* BOTÃO VOLTAR */}
        <div className="w-full p-6 pt-12 z-30">
          <Link href="/?open=true" className="inline-flex items-center gap-2 text-[#991A3D] bg-white/60 px-4 py-2 rounded-full backdrop-blur-md shadow-sm border border-[#eedad3]/50 active:scale-95 transition-transform">
            <ArrowLeft className="w-5 h-5" />
            <span className={`${montserrat.className} text-[10px] font-bold tracking-[0.2em] uppercase`}>Voltar</span>
          </Link>
        </div>

        {/* CONTEÚDO */}
        <section className="relative w-full flex flex-col items-center pt-10 pb-40 px-8 z-10">
          <div className="text-center mb-14">
            <h2 className={`${montserrat.className} text-xs tracking-[0.3em] mb-4 text-[#991A3D] uppercase font-bold`}>R.S.V.P</h2>
            <h1 className={`${greatVibes.className} text-6xl text-[#991A3D]`}>Confirmar Presença</h1>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
            <div className="relative">
              <label className={`${montserrat.className} block text-[10px] tracking-[0.2em] uppercase text-[#991A3D] mb-3 ml-4 font-bold`}>
                Nome Completo
              </label>
              <div className="relative group">
                <User className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.nome ? 'text-red-400' : 'text-[#b56b7c] group-focus-within:text-[#991A3D]'}`} />
                <input 
                  type="text"
                  value={nome}
                  disabled={loading}
                  onChange={(e) => { setNome(e.target.value); if(errors.nome) setErrors({...errors, nome: undefined}); }}
                  placeholder="Seu nome aqui"
                  className={`w-full bg-white border ${errors.nome ? 'border-red-300' : 'border-[#eedad3]'} rounded-[22px] py-4 pl-14 pr-6 text-[#8B2C47] text-sm focus:outline-none focus:border-[#991A3D] shadow-sm`}
                />
              </div>
              <AnimatePresence>
                {errors.nome && (
                  <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-[10px] text-red-500 mt-2 ml-4 flex items-center gap-1 font-bold">
                    <AlertCircle className="w-3 h-3" /> {errors.nome}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <label className={`${montserrat.className} block text-[10px] tracking-[0.2em] uppercase text-[#991A3D] mb-3 ml-4 font-bold`}>
                Número de Celular
              </label>
              <div className="relative group">
                <Phone className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.celular ? 'text-red-400' : 'text-[#b56b7c] group-focus-within:text-[#991A3D]'}`} />
                <input 
                  type="tel"
                  value={celular}
                  disabled={loading}
                  onChange={handleCelularChange}
                  placeholder="(00) 00000-0000"
                  className={`w-full bg-white border ${errors.celular ? 'border-red-300' : 'border-[#eedad3]'} rounded-[22px] py-4 pl-14 pr-6 text-[#8B2C47] text-sm focus:outline-none focus:border-[#991A3D] shadow-sm`}
                />
              </div>
              <AnimatePresence>
                {errors.celular && (
                  <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-[10px] text-red-500 mt-2 ml-4 flex items-center gap-1 font-bold">
                    <AlertCircle className="w-3 h-3" /> {errors.celular}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button 
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-4 bg-[#8B2C47] text-white p-5 rounded-full shadow-lg w-full mt-8 ${loading ? 'opacity-70' : ''}`}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full">
                  <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <span className={`${playfair.className} text-lg font-bold uppercase`}>
                {loading ? "Enviando..." : "Confirmar Agora"}
              </span>
            </motion.button>
          </form>
        </section>

        {/* FLORAL DO RODAPÉ */}
        <div className="absolute bottom-[-60px] left-[-30px] w-[120%] max-w-[500px] pointer-events-none z-0 scale-[-1] opacity-90">
          <img 
            src={FLORAL_IMG} 
            alt="" 
            className="w-full h-auto object-contain mix-blend-multiply" 
          />
        </div>
      </motion.div>
    </div>
  );
}