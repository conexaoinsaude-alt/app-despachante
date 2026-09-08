import React from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { ProcessItem } from './ProcessesPage';

interface AgendaPageProps {
  processes: ProcessItem[];
}

export const AgendaPage: React.FC<AgendaPageProps> = ({ processes }) => {
  const withDeadline = processes.filter(p => p.deadline);

  return (
    <div className="space-y-6">
      <div className="border-b-2 border-zinc-900 pb-4">
        <h2 className="text-3xl font-serif font-bold">Agenda & Prazos Regulatórios</h2>
        <p className="text-zinc-600">Calendário de vencimentos vinculados aos processos cadastrados.</p>
      </div>

      <div className="space-y-4">
        {withDeadline.length === 0 ? (
          <div className="bg-white border-2 border-zinc-900 p-8 text-center text-zinc-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Nenhum prazo limite cadastrado nos processos ativos.
          </div>
        ) : (
          withDeadline.map(proc => (
            <div key={proc.id} className="bg-white border-2 border-zinc-900 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-lg">{proc.clientName}</span>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 font-bold">{proc.agency}</span>
                </div>
                <p className="text-xs text-zinc-500 mt-1 font-mono">Processo: {proc.processNumber}</p>
              </div>
              <div className="text-right bg-zinc-50 border border-zinc-300 p-2">
                <span className="text-xs text-zinc-500 block uppercase font-bold">Vencimento</span>
                <span className="font-bold text-red-800 flex items-center gap-1"><Clock size={14}/> {proc.deadline}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};