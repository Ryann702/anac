'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Envelope from '../components/Envelope';
import ConviteAberto from '../components/ConviteAberto';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-start overflow-x-hidden relative">
      
      <AnimatePresence>
        {!isOpen && <Envelope key="envelope-component" onOpen={() => setIsOpen(true)} />}
      </AnimatePresence>

      {isOpen && <ConviteAberto />}
    </main>
  );
}