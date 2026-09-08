import React from 'react';
import { FileText, Users, Clock, AlertCircle, CheckCircle2, Calculator } from 'lucide-react';

interface DashboardProps {
  clientsCount: number;
  processesCount: number;
  activeProcessesCount: number;
  onNavigate: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ clientsCount, processesCount, activeProcessesCount, onNavigate }) => {
  return (
    <div className="space-y-6">
      <div className="border-b-2 border-zinc-900 pb-4">
        <h2 className="text-3xl font-serif font-bold">Painel de Controle Principal</h2>
        <p className="text-zinc-600">Resumo operacional de despachos e consultoria regulatória.</p>
      </div>

      {/* Métricas / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          onClick={() => onNavigate('processes')}
          className="bg-white border-2 border-zinc-900 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:bg-zinc-50 transition-all"
        >
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold uppercase text-zinc-500">Processos Ativos</span>
              <h3 className="text-3xl font-serif font-bold mt-1 text-red-800">{activeProcessesCount}</h3>
            </div>
            <Clock className="text-red-800" size={28} />
          </div>
          <p className="text-xs text-zinc-500 mt-4">Clique para gerenciar andamentos &rarr;</p>
        </div>

        <div 
          onClick={() => onNavigate('clients')}
          className="bg-white border-2 border-zinc-900 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:bg-zinc-50 transition-all"
        >
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold uppercase text-zinc-500">Clientes Cadastrados</span>
              <h3 className="text-3xl font-serif font-bold mt-1">{clientsCount}</h3>
            </div>
            <Users className="text-zinc-800" size={28} />
          </div>
          <p className="text-xs text-zinc-500 mt-4">Ver base de empresas e CPFs/CNPJs &rarr;</p>
        </div>

        <div 
          onClick={() => onNavigate('calculator')}
          className="bg-white border-2 border-zinc-900 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:bg-zinc-50 transition-all"
        >
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold uppercase text-zinc-500">Ferramentas</span>
              <h3 className="text-3xl font-serif font-bold mt-1">Honorários</h3>
            </div>
            <Calculator className="text-zinc-800" size={28} />
          </div>
          <p className="text-xs text-zinc-500 mt-4">Calcular custos e orçamentos &rarr;</p>
        </div>
      </div>

      {/* Atalhos e Avisos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
        <div className="bg-white border-2 border-zinc-900 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-serif font-bold text-xl mb-4 border-b border-zinc-200 pb-2">Órgãos Reguladores Principais</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between items-center p-2 bg-zinc-50 border border-zinc-200">
              <span className="font-semibold">ANVISA / Ministério da Saúde</span>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 font-bold">AFE / Licenciamento</span>
            </li>
            <li className="flex justify-between items-center p-2 bg-zinc-50 border border-zinc-200">
              <span className="font-semibold">MAPA (Ministério da Agricultura)</span>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 font-bold">Registro Industrial</span>
            </li>
            <li className="flex justify-between items-center p-2 bg-zinc-50 border border-zinc-200">
              <span className="font-semibold">INMETRO</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 font-bold">Certificação de Produtos</span>
            </li>
            <li className="flex justify-between items-center p-2 bg-zinc-50 border border-zinc-200">
              <span className="font-semibold">Pregão Eletrônico / Licitações</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 font-bold">Habilitação</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-zinc-900 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-serif font-bold text-xl mb-4 border-b border-zinc-200 pb-2">Notas Rápidas do Operacional</h3>
          <p className="text-sm text-zinc-700 leading-relaxed mb-4">
            Painel configurado exclusivamente para <strong>José Carlos Rodrigues</strong>. Todos os dados inseridos de clientes e processos ficam salvos com segurança diretamente na memória do seu navegador.
          </p>
          <div className="bg-red-50 border-l-4 border-red-800 p-3 text-xs text-red-900">
            <strong>Atenção aos prazos:</strong> Verifique diariamente a aba de Agenda para acompanhar vencimentos de petições e despachos aduaneiros.
          </div>
        </div>
      </div>
    </div>
  );
};