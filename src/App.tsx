import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { ClientsPage, Client } from './components/ClientsPage';
import { ProcessesPage, ProcessItem } from './components/ProcessesPage';
import { CalculadoraPage } from './components/CalculadoraPage';
import { AgendaPage } from './components/AgendaPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'dashboard' | 'clients' | 'processes' | 'calculator' | 'agenda'>('landing');

  const [clients, setClients] = useState<Client[]>([
    { id: '1', name: 'Empresa Exemplo Ltda', document: '00.000.000/0001-00', phone: '(21) 99999-9999', email: 'contato@exemplo.com', serviceType: 'Licenciamento Sanitário' }
  ]);

  const [processes, setProcesses] = useState<ProcessItem[]>([
    { id: '1', clientName: 'Empresa Exemplo Ltda', status: 'Em Andamento', deadline: '2026-03-30' }
  ]);

  const handleAddClient = (clientData: Omit<Client, 'id'>) => {
    const newClient: Client = { ...clientData, id: String(Date.now()) };
    setClients([...clients, newClient]);
  };

  const handleDeleteClient = (id: string) => {
    setClients(clients.filter(c => c.id !== id));
  };

  const handleAddProcess = (processData: Omit<ProcessItem, 'id'>) => {
    const newProcess: ProcessItem = { ...processData, id: String(Date.now()) };
    setProcesses([...processes, newProcess]);
  };

  const handleDeleteProcess = (id: string) => {
    setProcesses(processes.filter(p => p.id !== id));
  };

  const activeProcessesCount = processes.filter(p => p.status === 'Em Andamento').length;

  if (currentPage === 'landing') {
    return <LandingPage onEnterApp={() => setCurrentPage('dashboard')} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-navy-900 text-white shadow-md border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('dashboard')}>
            <div className="w-10 h-10 rounded bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-navy-950 text-xl shadow">
              JCR
            </div>
            <div>
              <h1 className="text-lg font-serif font-bold text-amber-400 tracking-wide">JCR CONSULTORIA</h1>
              <p className="text-xs text-slate-300">Tradição e Excelência em Despachante</p>
            </div>
          </div>
          <nav className="flex space-x-1 sm:space-x-4">
            <button 
              onClick={() => setCurrentPage('dashboard')}
              className={`px-3 py-2 rounded text-sm font-medium transition ${currentPage === 'dashboard' ? 'bg-amber-500 text-navy-950 font-bold' : 'text-slate-200 hover:bg-navy-800'}`}
            >
              Painel
            </button>
            <button 
              onClick={() => setCurrentPage('clients')}
              className={`px-3 py-2 rounded text-sm font-medium transition ${currentPage === 'clients' ? 'bg-amber-500 text-navy-950 font-bold' : 'text-slate-200 hover:bg-navy-800'}`}
            >
              Clientes
            </button>
            <button 
              onClick={() => setCurrentPage('processes')}
              className={`px-3 py-2 rounded text-sm font-medium transition ${currentPage === 'processes' ? 'bg-amber-500 text-navy-950 font-bold' : 'text-slate-200 hover:bg-navy-800'}`}
            >
              Processos
            </button>
            <button 
              onClick={() => setCurrentPage('calculator')}
              className={`px-3 py-2 rounded text-sm font-medium transition ${currentPage === 'calculator' ? 'bg-amber-500 text-navy-950 font-bold' : 'text-slate-200 hover:bg-navy-800'}`}
            >
              Calculadora
            </button>
            <button 
              onClick={() => setCurrentPage('agenda')}
              className={`px-3 py-2 rounded text-sm font-medium transition ${currentPage === 'agenda' ? 'bg-amber-500 text-navy-950 font-bold' : 'text-slate-200 hover:bg-navy-800'}`}
            >
              Agenda
            </button>
            <button 
              onClick={() => setCurrentPage('landing')}
              className="px-3 py-2 rounded text-sm font-medium text-amber-400 hover:bg-navy-800 ml-4 border border-amber-500/30"
            >
              Sair
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        {currentPage === 'dashboard' && (
          <Dashboard 
            clientsCount={clients.length} 
            processesCount={processes.length} 
            activeProcessesCount={activeProcessesCount} 
            onNavigate={(page) => setCurrentPage(page as any)} 
          />
        )}
        {currentPage === 'clients' && (
          <ClientsPage 
            clients={clients} 
            onAddClient={handleAddClient} 
            onDeleteClient={handleDeleteClient} 
          />
        )}
        {currentPage === 'processes' && (
          <ProcessesPage 
            processes={processes} 
            onAddProcess={handleAddProcess} 
            onDeleteProcess={handleDeleteProcess} 
          />
        )}
        {currentPage === 'calculator' && <CalculadoraPage />}
        {currentPage === 'agenda' && <AgendaPage processes={processes} />}
      </main>

      <footer className="bg-navy-950 text-slate-400 py-6 border-t border-slate-800 text-center text-sm">
        <p>© {new Date().getFullYear()} JCR Consultoria - 50 Anos de Tradição e Confiança. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;