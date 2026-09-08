import React, { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { ClientsPage, Client } from './components/ClientsPage';
import { ProcessesPage, ProcessItem } from './components/ProcessesPage';
import { CalculadoraPage } from './components/CalculadoraPage';
import { AgendaPage } from './components/AgendaPage';
import { Shield, Users, FileText, Calculator, Calendar, LogOut } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'clients' | 'processes' | 'calculator' | 'agenda'>('landing');

  // Estados com persistência local (localStorage)
  const [clients, setClients] = useState<Client[]>(() => {
    const saved = localStorage.getItem('jcr_clients');
    return saved ? JSON.parse(saved) : [
      { id: '1', name: 'Pharma Distribuidora Ltda', document: '12.345.678/0001-90', email: 'contato@pharmadist.com.br', phone: '(21) 98888-7777', serviceType: 'ANVISA' }
    ];
  });

  const [processes, setProcesses] = useState<ProcessItem[]>(() => {
    const saved = localStorage.getItem('jcr_processes');
    return saved ? JSON.parse(saved) : [
      { id: '1', clientName: 'Pharma Distribuidora Ltda', processNumber: '25351.123456/2026-11', agency: 'ANVISA', status: 'Em Andamento', deadline: '2026-04-15' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('jcr_clients', JSON.stringify(clients));
  }, [clients]);

  useEffect(() => {
    localStorage.setItem('jcr_processes', JSON.stringify(processes));
  }, [processes]);

  if (currentView === 'landing') {
    return <LandingPage onEnterApp={() => setCurrentView('dashboard')} />;
  }

  const activeProcessesCount = processes.filter(p => p.status !== 'Concluído').length;

  return (
    <div className="min-h-screen bg-[#fcf8f2] text-zinc-950 flex flex-col md:flex-row">
      {/* Menu Lateral / Sidebar */}
      <aside className="w-full md:w-64 bg-white border-b-2 md:border-b-0 md:border-r-2 border-zinc-900 p-6 flex flex-col justify-between">
        <div>
          <div className="pb-6 border-b border-zinc-200 mb-6">
            <span className="text-xs font-bold text-red-800 uppercase tracking-widest">Painel Administrativo</span>
            <h1 className="font-serif font-bold text-xl mt-1">JCR Consultoria</h1>
            <p className="text-xs text-zinc-500">José Carlos Rodrigues</p>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: Shield },
              { id: 'clients', label: 'Clientes', icon: Users },
              { id: 'processes', label: 'Processos', icon: FileText },
              { id: 'calculator', label: 'Calculadora', icon: Calculator },
              { id: 'agenda', label: 'Agenda & Prazos', icon: Calendar },
            ].map(item => {
              const Icon = item.icon;
              const active = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 font-bold text-sm border transition-all ${
                    active 
                      ? 'bg-zinc-900 text-white border-zinc-950 shadow-[2px_2px_0px_0px_#991b1b]' 
                      : 'bg-white text-zinc-800 border-zinc-200 hover:border-zinc-900'
                  }`}
                >
                  <Icon size={18} /> {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-zinc-200 mt-6">
          <button
            onClick={() => setCurrentView('landing')}
            className="w-full flex items-center justify-center gap-2 text-xs font-bold uppercase text-red-800 border border-red-800 p-2 hover:bg-red-50 transition-all"
          >
            <LogOut size={14} /> Ver Página Pública
          </button>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {currentView === 'dashboard' && (
          <Dashboard 
            clientsCount={clients.length} 
            processesCount={processes.length} 
            activeProcessesCount={activeProcessesCount}
            onNavigate={(tab) => setCurrentView(tab as any)}
          />
        )}
        {currentView === 'clients' && (
          <ClientsPage 
            clients={clients} 
            onAddClient={c => setClients([...clients, c])} 
            onDeleteClient={id => setClients(clients.filter(c => c.id !== id))}
          />
        )}
        {currentView === 'processes' && (
          <ProcessesPage 
            processes={processes} 
            onAddProcess={p => setProcesses([...processes, p])}
            onDeleteProcess={id => setProcesses(processes.filter(p => p.id !== id))}
          />
        )}
        {currentView === 'calculator' && <CalculadoraPage />}
        {currentView === 'agenda' && <AgendaPage processes={processes} />}
      </main>
    </div>
  );
}