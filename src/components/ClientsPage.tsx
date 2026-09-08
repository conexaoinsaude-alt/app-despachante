import React, { useState } from 'react';
import { Users, UserPlus, Search, Trash2, Phone, Mail, Building } from 'lucide-react';

export interface Client {
  id: string;
  name: string;
  document: string;
  email: string;
  phone: string;
  serviceType: string;
}

interface ClientsPageProps {
  clients: Client[];
  onAddClient: (client: Client) => void;
  onDeleteClient: (id: string) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ clients, onAddClient, onDeleteClient }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('ANVISA');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    onAddClient({
      id: Date.now().toString(),
      name,
      document,
      email,
      phone,
      serviceType
    });
    setName('');
    setDocument('');
    setEmail('');
    setPhone('');
  };

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.document.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="border-b-2 border-zinc-900 pb-4 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-serif font-bold">Gestão de Clientes</h2>
          <p className="text-zinc-600">Cadastro de empresas e tomadores de serviços.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formulário de Cadastro */}
        <div className="bg-white border-2 border-zinc-900 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-serif font-bold text-lg mb-4 flex items-center gap-2">
            <UserPlus size={20} className="text-red-800" /> Novo Cliente
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Nome / Razão Social</label>
              <input 
                type="text" 
                value={name} 
                onChange={e => setName(e.target.value)}
                required
                className="w-full border-2 border-zinc-900 p-2 text-sm focus:outline-none focus:bg-zinc-50"
                placeholder="Ex: Comercial Farmacêutica Ltda"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">CPF / CNPJ</label>
              <input 
                type="text" 
                value={document} 
                onChange={e => setDocument(e.target.value)}
                className="w-full border-2 border-zinc-900 p-2 text-sm focus:outline-none focus:bg-zinc-50"
                placeholder="00.000.000/0001-00"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">E-mail de Contato</label>
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                className="w-full border-2 border-zinc-900 p-2 text-sm focus:outline-none focus:bg-zinc-50"
                placeholder="contato@empresa.com.br"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Telefone / WhatsApp</label>
              <input 
                type="text" 
                value={phone} 
                onChange={e => setPhone(e.target.value)}
                className="w-full border-2 border-zinc-900 p-2 text-sm focus:outline-none focus:bg-zinc-50"
                placeholder="(21) 99999-9999"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Área Principal</label>
              <select 
                value={serviceType} 
                onChange={e => setServiceType(e.target.value)}
                className="w-full border-2 border-zinc-900 p-2 text-sm bg-white focus:outline-none"
              >
                <option value="ANVISA">ANVISA / MS</option>
                <option value="MAPA">MAPA</option>
                <option value="INMETRO">INMETRO</option>
                <option value="Licitações">Licitações / Pregão</option>
                <option value="Aduaneiro">Desembaraço Aduaneiro</option>
              </select>
            </div>
            <button 
              type="submit"
              className="w-full bg-red-800 text-white font-bold py-2 border border-zinc-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-red-900 transition-all"
            >
              Salvar Cliente
            </button>
          </form>
        </div>

        {/* Listagem de Clientes */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white border-2 border-zinc-900 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
            <Search size={20} className="text-zinc-500" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Pesquisar por nome ou CNPJ..."
              className="w-full text-sm focus:outline-none"
            />
          </div>

          <div className="space-y-3">
            {filteredClients.length === 0 ? (
              <div className="bg-white border-2 border-zinc-900 p-8 text-center text-zinc-500">
                Nenhum cliente cadastrado até o momento.
              </div>
            ) : (
              filteredClients.map(client => (
                <div key={client.id} className="bg-white border-2 border-zinc-900 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif font-bold text-lg">{client.name}</h4>
                      <span className="text-xs bg-zinc-100 border border-zinc-300 px-2 py-0.5 font-bold">{client.serviceType}</span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">CNPJ/CPF: {client.document || 'Não informado'}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-zinc-600 mt-2">
                      {client.phone && <span className="flex items-center gap-1"><Phone size={12}/> {client.phone}</span>}
                      {client.email && <span className="flex items-center gap-1"><Mail size={12}/> {client.email}</span>}
                    </div>
                  </div>
                  <button 
                    onClick={() => onDeleteClient(client.id)}
                    className="text-red-700 hover:text-red-900 p-2 border border-zinc-300 hover:border-red-800 transition-all"
                    title="Excluir cliente"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};