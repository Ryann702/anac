'use client';


import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Envelope from '../components/Envelope';
import ConviteAberto from '../components/ConviteAberto';


// Componente separado para usar useSearchParams
function ConviteConteudo() {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get('open') === 'true') {
      setIsOpen(true);
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-start overflow-x-hidden relative">
      <AnimatePresence>
        {!isOpen && <Envelope key="envelope-component" onOpen={() => setIsOpen(true)} />}
      </AnimatePresence>
      {isOpen && <ConviteAberto />}
    </main>
  );
}

// Página principal apenas envolve com Suspense
export default function Home() {
  return (
    <Suspense fallback={<div>Carregando convite...</div>}>
      <ConviteConteudo />
    </Suspense>
  );
}