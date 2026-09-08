import React, { useState } from 'react';
import { FileText, Plus, CheckCircle, Clock, AlertTriangle, Trash2 } from 'lucide-react';

export interface ProcessItem {
  id: string;
  clientName: string;
  processNumber: string;
  agency: string;
  status: 'Em Andamento' | 'Pendente' | 'Concluído';
  deadline: string;
}

interface ProcessesPageProps {
  processes: ProcessItem[];
  onAddProcess: (proc: ProcessItem) => void;
  onDeleteProcess: (id: string) => void;
}

export const ProcessesPage: React.FC<ProcessesPageProps> = ({ processes, onAddProcess, onDeleteProcess }) => {
  const [clientName, setClientName] = useState('');
  const [processNumber, setProcessNumber] = useState('');
  const [agency, setAgency] = useState('ANVISA');
  const [status, setStatus] = useState<'Em Andamento' | 'Pendente' | 'Concluído'>('Em Andamento');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !processNumber) return;
    onAddProcess({
      id: Date.now().toString(),
      clientName,
      processNumber,
      agency,
      status,
      deadline
    });
    setClientName('');
    setProcessNumber('');
    setDeadline('');
  };

  return (
    <div className="space-y-6">
      <div className="border-b-2 border-zinc-900 pb-4">
        <h2 className="text-3xl font-serif font-bold">Controle de Processos & Órgãos</h2>
        <p className="text-zinc-600">Acompanhamento regulatório de petições, AFE e desembaraços.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Novo Processo */}
        <div className="bg-white border-2 border-zinc-900 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-serif font-bold text-lg mb-4 flex items-center gap-2">
            <Plus size={20} className="text-red-800" /> Registrar Processo
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Cliente / Empresa</label>
              <input 
                type="text" 
                value={clientName} 
                onChange={e => setClientName(e.target.value)}
                required
                className="w-full border-2 border-zinc-900 p-2 text-sm focus:outline-none"
                placeholder="Nome da empresa"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Número do Processo / Petição</label>
              <input 
                type="text" 
                value={processNumber} 
                onChange={e => setProcessNumber(e.target.value)}
                required
                className="w-full border-2 border-zinc-900 p-2 text-sm focus:outline-none"
                placeholder="Ex: 25351.000000/2026-00"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Órgão Regulador</label>
              <select 
                value={agency} 
                onChange={e => setAgency(e.target.value)}
                className="w-full border-2 border-zinc-900 p-2 text-sm bg-white focus:outline-none"
              >
                <option value="ANVISA">ANVISA</option>
                <option value="MAPA">MAPA</option>
                <option value="INMETRO">INMETRO</option>
                <option value="Licitação">Licitação / Pregão</option>
                <option value="Aduaneiro">Aduaneiro / Alfândega</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Status</label>
              <select 
                value={status} 
                onChange={e => setStatus(e.target.value as any)}
                className="w-full border-2 border-zinc-900 p-2 text-sm bg-white focus:outline-none"
              >
                <option value="Em Andamento">Em Andamento</option>
                <option value="Pendente">Pendente de Documentos</option>
                <option value="Concluído">Concluído</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Prazo / Vencimento</label>
              <input 
                type="date" 
                value={deadline} 
                onChange={e => setDeadline(e.target.value)}
                className="w-full border-2 border-zinc-900 p-2 text-sm focus:outline-none bg-white"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-red-800 text-white font-bold py-2 border border-zinc-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-red-900 transition-all"
            >
              Adicionar Processo
            </button>
          </form>
        </div>

        {/* Listagem de Processos */}
        <div className="lg:col-span-2 space-y-4">
          {processes.length === 0 ? (
            <div className="bg-white border-2 border-zinc-900 p-8 text-center text-zinc-500">
              Nenhum processo registrado no momento.
            </div>
          ) : (
            processes.map(proc => (
              <div key={proc.id} className="bg-white border-2 border-zinc-900 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif font-bold text-lg">{proc.clientName}</h4>
                    <span className="text-xs bg-red-100 text-red-800 border border-red-300 px-2 py-0.5 font-bold">{proc.agency}</span>
                    <span className={`text-xs px-2 py-0.5 font-bold border ${
                      proc.status === 'Concluído' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' :
                      proc.status === 'Pendente' ? 'bg-amber-100 text-amber-800 border-amber-300' :
                      'bg-blue-100 text-blue-800 border-blue-300'
                    }`}>
                      {proc.status}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 mt-1 font-mono">Processo nº: {proc.processNumber}</p>
                  {proc.deadline && <p className="text-xs text-zinc-500 mt-1">Prazo limite: {proc.deadline}</p>}
                </div>
                <button 
                  onClick={() => onDeleteProcess(proc.id)}
                  className="text-red-700 hover:text-red-900 p-2 border border-zinc-300 hover:border-red-800 transition-all"
                  title="Excluir processo"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};