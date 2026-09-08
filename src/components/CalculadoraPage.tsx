import React, { useState } from 'react';
import { Calculator, Copy, Check } from 'lucide-react';

export const CalculadoraPage: React.FC = () => {
  const [baseFee, setBaseFee] = useState<number>(1500);
  const [complexity, setComplexity] = useState<number>(1.2);
  const [expenses, setExpenses] = useState<number>(250);
  const [copied, setCopied] = useState(false);

  const total = (baseFee * complexity) + expenses;

  const handleCopy = () => {
    const summary = `*Orçamento Técnico - JCR Consultoria*\nDespachante Documentalista e Aduaneiro\n\n- Honorários Base: R$ ${baseFee}\n- Fator de Complexidade:${complexity}x\n- Taxas / Despesas Operacionais: R$ ${expenses}\n\n*Total Estimado: R$ ${total.toFixed(2)}*\n\nWhatsApp: (21) 99901-1957`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="border-b-2 border-zinc-900 pb-4">
        <h2 className="text-3xl font-serif font-bold">Calculadora de Honorários</h2>
        <p className="text-zinc-600">Simulação de custos para petições e assessoria regulatória.</p>
      </div>

      <div className="bg-white border-2 border-zinc-900 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase mb-1">Honorários Base (R$)</label>
          <input 
            type="number" 
            value={baseFee} 
            onChange={e => setBaseFee(Number(e.target.value))}
            className="w-full border-2 border-zinc-900 p-2 text-sm focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase mb-1">Multiplicador de Complexidade (Órgão / Risco)</label>
          <select 
            value={complexity} 
            onChange={e => setComplexity(Number(e.target.value))}
            className="w-full border-2 border-zinc-900 p-2 text-sm bg-white focus:outline-none"
          >
            <option value="1.0">Baixa Complexidade (1.0x)</option>
            <option value="1.2">Média Complexidade - ANVISA/MAPA (1.2x)</option>
            <option value="1.5">Alta Complexidade / Licitações (1.5x)</option>
            <option value="2.0">Urgência / Aduaneiro Crítico (2.0x)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase mb-1">Despesas Operacionais / Taxas (R$)</label>
          <input 
            type="number" 
            value={expenses} 
            onChange={e => setExpenses(Number(e.target.value))}
            className="w-full border-2 border-zinc-900 p-2 text-sm focus:outline-none"
          />
        </div>

        <div className="border-t-2 border-zinc-900 pt-4 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-zinc-50 p-4 border">
          <div>
            <span className="text-xs uppercase font-bold text-zinc-500">Valor Total Calculado</span>
            <div className="text-3xl font-serif font-bold text-red-800">R$ {total.toFixed(2)}</div>
          </div>
          <button 
            onClick={handleCopy}
            className="bg-zinc-900 text-white font-bold px-4 py-2 border border-zinc-900 shadow-[3px_3px_0px_0px_#991b1b] flex items-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copiado!' : 'Copiar Resumo PT-BR'}
          </button>
        </div>
      </div>
    </div>
  );
};