// src/components/Selo.tsx
import { motion } from 'framer-motion';

export default function Selo({ onClick }: { onClick: () => void }) {
  return (
    // Container flex para manter perfeitamente centralizado
    <div className="relative flex items-center justify-center">
      
      {/* O SELO FOTORREALISTA LIMPO E MINIMALISTA */}
      <motion.button
        whileHover={{ scale: 1.05 }} // Efeito sutil de flutuar ao passar o mouse
        whileTap={{ scale: 0.95 }}   // Efeito de 'afundar' ao clicar
        onClick={onClick}            // Ação que dispara a abertura da porta dupla
        className="relative flex items-center justify-center z-30 group cursor-pointer"
        aria-label="Abrir convite"
      >
        {/* A imagem do selo com a letra A */}
        <div className="w-32 h-32 relative pointer-events-none">
          <img 
            src="/selo-a.png"  // O arquivo que você salvou na pasta public
            alt="Selo de Cera" 
            // mix-blend-multiply para apagar o fundo branco
            // drop-shadow para dar aquele efeito 3D chique
            className="w-full h-full object-contain mix-blend-multiply drop-shadow-[0_15px_35px_rgba(153,26,61,0.5)] opacity-95 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </motion.button>
      
    </div>
  );
}