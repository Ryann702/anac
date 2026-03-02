'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // Importe isso
import { AnimatePresence } from 'framer-motion';
import Envelope from '../components/Envelope';
import ConviteAberto from '../components/ConviteAberto';

export default function Home() {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  // Verifica se a URL tem o parâmetro "open=true" ao carregar
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