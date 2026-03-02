import { motion } from 'framer-motion';
import Selo from './Selo';

const FLORAL_IMG = '/flores.png';

export default function Envelope({ onOpen }: { onOpen: () => void }) {
  const flowerWidth = '420px';
  const flowerHeight = '420px';

  return (
    <motion.div
      key="envelope-layer"
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
      exit={{ pointerEvents: 'none', backgroundColor: 'transparent' }}
      transition={{ duration: 0.1 }}
    >
      <div className="relative w-full max-w-md h-full flex overflow-hidden pointer-events-auto shadow-2xl bg-[#FDFBF7]">
        
        {/* =========================================================
            ABA ESQUERDA 
            ========================================================= */}
        <motion.div
          initial={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-1/2 h-full bg-[#FDFBF7] border-r border-[#eedad3] relative z-10 shadow-[2px_0_10px_rgba(0,0,0,0.05)] overflow-hidden"
        >
          <div 
            className="absolute top-1/2 right-0 pointer-events-none mix-blend-multiply opacity-90 drop-shadow-xl"
            style={{ 
              width: flowerWidth, 
              height: flowerHeight,
              backgroundImage: `url(${FLORAL_IMG})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              // AQUI: Adicionado rotate(-90deg) para girar a flor
              transform: 'translate(50%, -50%) rotate(-80deg)' 
            }}
          />

          <div className="absolute inset-0 bg-white/40 pointer-events-none" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/natural-paper.png)', opacity: 0.15 }} />
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#dcb9b9] to-transparent opacity-50 absolute right-0"></div>
        </motion.div>
        
        {/* =========================================================
            ABA DIREITA 
            ========================================================= */}
        <motion.div
          initial={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-1/2 h-full bg-[#FDFBF7] relative z-10 flex items-center overflow-hidden"
        >
          <div 
            className="absolute top-1/2 left-0 pointer-events-none mix-blend-multiply opacity-90 drop-shadow-xl"
            style={{ 
              width: flowerWidth, 
              height: flowerHeight,
              backgroundImage: `url(${FLORAL_IMG})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              // AQUI: Adicionado rotate(-90deg) na aba espelhada também
              transform: 'translate(-50%, -50%) scaleX(-1) rotate(-80deg)' 
            }}
          />

          <div className="absolute inset-0 bg-white/40 pointer-events-none" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/natural-paper.png)', opacity: 0.15 }} />
        </motion.div>
        
        {/* =========================================================
            SELO CENTRALIZADO 
            ========================================================= */}
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "backIn" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-48 h-48"
        >
          <Selo onClick={onOpen} />
        </motion.div>

      </div>
    </motion.div>
  );
}