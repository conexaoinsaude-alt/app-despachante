import React from 'react';
import { Shield, Award, FileText, CheckCircle2, Phone, ExternalLink, ArrowRight, Clock, Building, User, CheckCircle } from 'lucide-react';

interface LandingPageProps {
  onEnterApp: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnterApp }) => {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900 font-sans">
      {/* Topo / Header Institucional */}
      <header className="bg-[#0b1b3d] text-white px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-12 bg-gradient-to-b from-amber-400 to-amber-600 rounded-b-md flex items-center justify-center text-slate-900 shadow">
            <Shield size={24} className="fill-slate-900 text-amber-400" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-wide">JCR Consultoria</h1>
            <p className="text-xs text-amber-300 tracking-wider">Despachante Aduaneiro e Regulatório</p>
          </div>
        </div>

        <nav className="flex items-center gap-6 mt-4 md:mt-0 text-sm font-medium">
          <a href="#inicio" className="text-white hover:text-amber-300 transition-colors flex items-center gap-1 border-b-2 border-amber-400 pb-0.5">Início</a>
          <a href="#servicos" className="text-slate-300 hover:text-white transition-colors">Serviços</a>
          <a href="#sobre" className="text-slate-300 hover:text-white transition-colors">Sobre</a>
          <a href="https://drmb2b.wixsite.com/jcrconsultoria" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Contato</a>
        </nav>
      </header>

      {/* Banner Hero / Imagem de Fundo */}
      <section className="relative bg-gradient-to-r from-[#0b1b3d] via-[#163063] to-[#0b1b3d] text-white overflow-hidden border-b-4 border-amber-500">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-amber-400 text-sm font-bold tracking-widest uppercase bg-amber-400/10 px-3 py-1 rounded border border-amber-400/30 inline-block">
              50 Anos de Tradição e Excelência
            </span>
            
            <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
              JCR Consultoria
            </h2>
            
            <div className="flex items-center gap-2 text-slate-200 text-lg font-medium">
              <User size={20} className="text-amber-400" />
              <span>Despachante Documentalista e Aduaneiro</span>
            </div>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl font-light">
              Profissional autônomo com <strong className="text-white">meio século de atuação dedicada</strong>. Especialista em trâmites complexos junto à ANVISA, MAPA, INMETRO, Licitações, Pregão Eletrônico, Desembaraços Aduaneiros, Registro de Produtos e Autorização de Funcionamento de Empresas (AFE).
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="https://wa.me/5521999011957" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0f294a] hover:bg-[#15355e] text-white px-5 py-3 rounded-lg font-bold flex items-center gap-2 border border-blue-400/30 shadow-lg transition-all"
              >
                <Phone size={18} className="text-emerald-400" /> Fale Direto via WhatsApp
              </a>
              <span className="text-lg font-bold text-amber-300">(21) 99901-1957</span>
              
              <button 
                onClick={onEnterApp}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center gap-2 ml-auto"
              >
                Entrar no Painel de Gestão <ArrowRight size={18} />
              </button>
            </div>

            <div className="text-xs text-slate-400 pt-2">
              Responsável Técnico: José Carlos Rodrigues
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block text-right">
            <div className="bg-gradient-to-br from-blue-900/60 to-slate-900/80 p-6 rounded-2xl border border-blue-400/20 shadow-2xl backdrop-blur-sm">
              <p className="font-serif italic text-amber-300 text-lg mb-2">"Sua documentação em boas mãos, com segurança e agilidade."</p>
              <div className="w-16 h-1 bg-amber-400 mx-auto my-3"></div>
              <p className="text-xs text-slate-300">Consultoria técnica de alto nível para empresas de todos os portes em âmbito nacional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Central de Conteúdo */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Coluna Esquerda: Perfil do Responsável */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
            <div className="text-center pb-6 border-b border-slate-100">
              <div className="w-20 h-20 bg-blue-50 text-[#0b1b3d] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-amber-400 shadow-inner">
                <User size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0b1b3d]">José Carlos Rodrigues</h3>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Despachante Documentalista Sênior</p>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-blue-700 shrink-0 mt-0.5" />
                <span>Atendimento 100% Home Office especializado</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-blue-700 shrink-0 mt-0.5" />
                <span>Escritório próprio estruturado e operante</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-blue-700 shrink-0 mt-0.5" />
                <span>Atuação de alto nível em âmbito nacional</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-blue-700 shrink-0 mt-0.5" />
                <span>Contato Oficial Direto: (21) 99901-1957</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Grid de Especialidades Regulatórias */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6" id="servicos">
            {[
              {
                title: "ANVISA / MS",
                desc: "Autorização de Funcionamento (AFE), Autorização Especial (AE), regularização e registro de produtos correlatos, cosméticos e saneantes."
              },
              {
                title: "MAPA / INMETRO",
                desc: "Registro e fiscalização de produtos agropecuários, alimentos e conformidade técnica."
              },
              {
                title: "Licitações / Pregão Eletrônico",
                desc: "Assessoria completa em processos licitatórios e pregões eletrônicos."
              },
              {
                title: "Desembaraços Aduaneiros",
                desc: "Importação, exportação e trâmites aduaneiros."
              },
              {
                title: "Registro de Produtos",
                desc: "Produtos correlatos, cosméticos, saneantes e demais registros."
              },
              {
                title: "AFE e Empresas",
                desc: "Autorização de Funcionamento e regularização de empresas."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-800 mb-4 font-bold">
                    <Shield size={20} />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#0b1b3d] mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faixa de Citação */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center font-serif font-bold text-xl shrink-0">
              <Award size={24} />
            </div>
            <p className="font-serif italic text-slate-800 text-base md:text-lg">
              “Trabalho com seriedade, responsabilidade e foco em resultados.” <span className="not-italic text-xs text-slate-500 block">Sua demanda, nosso compromisso.</span>
            </p>
          </div>
          <div className="text-right border-l pl-6 border-slate-200 hidden md:block">
            <span className="font-serif font-bold text-[#0b1b3d] block text-sm">JCR Consultoria</span>
            <span className="text-xs text-amber-600 font-semibold">Excelência Comprovada</span>
          </div>
        </div>
      </main>

      {/* Rodapé Executivo */}
      <footer className="bg-[#071328] text-slate-400 py-6 px-6 md:px-12 mt-16 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 JCR Consultoria - Despachante Aduaneiro e Regulatório. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6 text-slate-300 font-medium">
          <span>Agilidade</span>
          <span>•</span>
          <span>Segurança</span>
          <span>•</span>
          <span>Confiabilidade</span>
        </div>
      </footer>
    </div>
  );
};