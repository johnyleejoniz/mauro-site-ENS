import React from 'react';
import { motion } from 'motion/react';
import { 
  Car, 
  CreditCard, 
  ShieldCheck, 
  Building, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  ArrowRight,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  FileText,
  Lock
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#1E2326] text-white font-sans selection:bg-[#51B5B1] selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1E2326]/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/ojeHcNm.png" 
              alt="S-MOVE Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="hidden md:flex px-6 py-2.5 bg-[#51B5B1] hover:bg-[#3E9B97] text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(81,181,177,0.3)]">
            Quero minha licença
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#51B5B1]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#2A3035] border border-gray-700 text-[#51B5B1] text-sm font-semibold mb-8 tracking-wide uppercase"
          >
            Lançamento Exclusivo
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
          >
            Tenha seu próprio <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#51B5B1] to-[#70C5C2]">
              Espaço de Negócios
            </span>
            <br className="hidden md:block" /> com múltiplas fontes de renda
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#A0AAB2] mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Ganhe com Mobilidade Urbana, Reabilitação de Crédito, Proteção Veicular e Consórcios em um único modelo estruturado.
          </motion.p>
          
          {/* Video Container 9:16 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full max-w-[340px] mx-auto mb-12 relative group"
          >
            {/* Animated Glow Behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#51B5B1] to-[#3E9B97] rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Phone-like Frame */}
            <div className="relative p-2 rounded-[2.5rem] bg-gradient-to-br from-[#2A3035] to-[#1A1D20] border border-[#51B5B1]/50 shadow-2xl">
              {/* Inner Video Area */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[9/16] bg-[#000] shadow-[inset_0_0_20px_rgba(0,0,0,1)]">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  poster="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop"
                >
                  <source src="https://fvshysxuamdatyugdipx.supabase.co/storage/v1/object/public/video%20teste/smove-reabilitacao_wHTyvbHd.mp4" type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-[#51B5B1] hover:bg-[#3E9B97] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(81,181,177,0.4)] flex items-center justify-center gap-2 text-lg">
              Quero minha licença <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#2A3035] hover:bg-[#353C42] text-white font-semibold rounded-full transition-colors border border-gray-700 flex items-center justify-center gap-2 text-lg">
              Falar com especialista <MessageCircle className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* O que é a S-MOVE ENS */}
      <section className="py-24 bg-[#1A1D20] relative border-y border-gray-800/50">
        <div className="container mx-auto px-6">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">O que é a Licença S-MOVE ENS?</h2>
            <p className="text-xl text-[#A0AAB2] mb-6 leading-relaxed">
              A <strong className="text-white font-semibold">S-MOVE ENS</strong> (Espaço de Negócios S-MOVE) é um modelo de negócio que permite operar um ecossistema completo de serviços com alta demanda no mercado.
            </p>
            <p className="text-xl text-[#A0AAB2] leading-relaxed">
              Você terá acesso a uma estrutura pronta para faturar, com suporte, tecnologia e múltiplas fontes de receita.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pilares do Negócio */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">4 Fontes de Renda em um único negócio</h2>
            <p className="text-[#A0AAB2] text-lg">Diversifique seus ganhos com serviços essenciais.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Car className="w-10 h-10 text-[#51B5B1]" />,
                title: "Mobilidade Urbana",
                items: ["Aplicativo estilo Uber/99", "Ganhos sobre corridas", "Receita recorrente escalável"]
              },
              {
                icon: <CreditCard className="w-10 h-10 text-[#51B5B1]" />,
                title: "Reabilitação de Crédito",
                items: ["Limpeza de nome", "Aumento de score", "Lucro de até 50% por cliente"]
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-[#51B5B1]" />,
                title: "Proteção Veicular",
                items: ["100% da adesão para o licenciado", "+6% de recorrência mensal", "Produto de alta demanda"]
              },
              {
                icon: <Building className="w-10 h-10 text-[#51B5B1]" />,
                title: "Consórcios",
                items: ["Imóveis, veículos e serviços", "Comissão de 1,9%", "Pagamento em 5 parcelas"]
              }
            ].map((pilar, index) => (
              <FadeIn key={index} delay={index * 0.1} className="bg-[#2A3035] rounded-2xl p-8 border border-gray-800 hover:border-[#51B5B1]/50 transition-colors group">
                <div className="w-16 h-16 bg-[#1E2326] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {pilar.icon}
                </div>
                <h3 className="text-xl font-bold mb-6">{pilar.title}</h3>
                <ul className="space-y-4">
                  {pilar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#A0AAB2]">
                      <CheckCircle2 className="w-5 h-5 text-[#51B5B1] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Como você ganha */}
      <section className="py-24 bg-[#1A1D20] border-y border-gray-800/50">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Entenda seus ganhos</h2>
            <p className="text-[#A0AAB2] text-lg">Transparência total na sua lucratividade.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Proteção Veicular",
                items: ["100% da adesão", "6% recorrente mensal"]
              },
              {
                title: "Consórcios",
                items: ["1,9% de comissão", "Pagamento parcelado", "Produto de alto ticket"]
              },
              {
                title: "Reabilitação de Crédito",
                items: ["Até 50% de lucro", "Alta procura"]
              },
              {
                title: "Mobilidade Urbana",
                items: ["Receita contínua", "Escalável conforme crescimento"]
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1} className="flex items-center gap-6 bg-[#2A3035] p-6 rounded-2xl border border-gray-800">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4 text-[#51B5B1]">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-center gap-2 text-[#E2E8F0]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#51B5B1]" />
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais & Oportunidade */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#51B5B1]/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Por que escolher a S-MOVE ENS?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Múltiplas fontes de renda",
                  "Receita recorrente mensal",
                  "Baixo custo operacional",
                  "Modelo escalável",
                  "Produtos com alta demanda",
                  "Estrutura pronta para operar"
                ].map((diff, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#2A3035] p-4 rounded-xl border border-gray-800">
                    <CheckCircle2 className="w-5 h-5 text-[#51B5B1] shrink-0" />
                    <span className="font-medium">{diff}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-[#2A3035] p-10 rounded-3xl border border-gray-800 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#51B5B1]/10 rounded-full blur-2xl" />
              <TrendingUp className="w-12 h-12 text-[#51B5B1] mb-6" />
              <h2 className="text-3xl font-bold mb-6">Um mercado em constante crescimento</h2>
              <p className="text-[#A0AAB2] text-lg mb-6 leading-relaxed">
                Milhares de pessoas precisam diariamente de soluções como:
              </p>
              <ul className="space-y-3 mb-8">
                {["Transporte acessível", "Reabilitação de crédito", "Proteção veicular", "Planejamento financeiro"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <div className="w-2 h-2 rounded-full bg-[#51B5B1]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-[#51B5B1]">
                A S-MOVE ENS conecta todas essas demandas em um único negócio.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-24 bg-[#1A1D20] border-y border-gray-800/50">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <Users className="w-16 h-16 text-[#51B5B1] mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Esse negócio é para você que:</h2>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Quer empreender",
              "Busca renda recorrente",
              "Deseja escalar ganhos",
              "Procura um modelo estruturado",
              "Quer independência financeira"
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="px-6 py-4 bg-[#2A3035] rounded-full border border-gray-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#51B5B1]" />
                <span className="font-medium text-lg">{item}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#51B5B1]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#51B5B1]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Comece agora seu Espaço de Negócios</h2>
            <p className="text-xl text-[#A0AAB2] mb-12 max-w-2xl mx-auto leading-relaxed">
              Entre para um modelo de negócio completo, com múltiplas fontes de receita e alto potencial de crescimento.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-[#51B5B1] hover:bg-[#3E9B97] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(81,181,177,0.4)] flex items-center justify-center gap-3 text-lg">
                Quero minha licença agora <ArrowRight className="w-6 h-6" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)] flex items-center justify-center gap-3 text-lg">
                Falar no WhatsApp <MessageCircle className="w-6 h-6" />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1D20] border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src="https://i.imgur.com/ojeHcNm.png" 
                  alt="S-MOVE Logo" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[#A0AAB2] text-sm leading-relaxed">
                Seu espaço de negócios com múltiplas fontes de renda. Inovação, tecnologia e rentabilidade em um só lugar.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#A0AAB2] text-sm">
                  <MapPin className="w-4 h-4 text-[#51B5B1]" /> S-MOVE Mobilidade
                </li>
                <li className="flex items-center gap-3 text-[#A0AAB2] text-sm">
                  <Phone className="w-4 h-4 text-[#51B5B1]" /> Contato / WhatsApp
                </li>
                <li className="flex items-center gap-3 text-[#A0AAB2] text-sm">
                  <Mail className="w-4 h-4 text-[#51B5B1]" /> Email
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center gap-3 text-[#A0AAB2] hover:text-[#51B5B1] transition-colors text-sm">
                    <FileText className="w-4 h-4" /> Termos e condições
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-[#A0AAB2] hover:text-[#51B5B1] transition-colors text-sm">
                    <Lock className="w-4 h-4" /> Política de privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-[#A0AAB2] text-sm">
            <p>&copy; {new Date().getFullYear()} S-MOVE ENS. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
