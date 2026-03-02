"use client";
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { Playfair_Display, Montserrat } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function AdminPanel() {
  const [convidados, setConvidados] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "confirmados"), orderBy("dataConfirmacao", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setConvidados(lista);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF5F5] p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white rounded-[30px] shadow-xl border border-[#eedad3] overflow-hidden">
        <div className="bg-[#991A3D] p-8 text-center">
          <h1 className={`${playfair.className} text-3xl text-white italic`}>Confirmados - 15 Anos</h1>
          <p className={`${montserrat.className} text-white/70 text-[10px] uppercase tracking-widest mt-2`}>Total de pessoas: {convidados.length}</p>
        </div>
        
        <div className="p-4">
          <table className="w-full text-left">
            <tbody className={`${montserrat.className} text-sm text-[#8B2C47]`}>
              {convidados.map((c) => (
                <tr key={c.id} className="border-b border-[#eedad3]/50 last:border-0 hover:bg-[#FFF5F5] transition-colors">
                  <td className="p-4 font-bold">{c.nome}</td>
                  <td className="p-4 text-right opacity-70">{c.celular}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}