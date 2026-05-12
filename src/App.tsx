import { motion } from 'motion/react';
import { 
  AudioLines, 
  TrendingUp, 
  Youtube, 
  Smartphone, 
  Radio, 
  Globe, 
  Star, 
  CheckCircle,
  Gem,
  Instagram,
  ChevronRight,
  Play,
  Heart,
  Users,
  MessageSquare,
  Mail
} from 'lucide-react';

// --- Components ---

function NavBar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-bg-base/80 backdrop-blur-md border-b border-line-base pt-4 pb-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-metallic-gold flex items-center justify-center">
            <AudioLines className="w-4 h-4 text-black" />
          </div>
          <span className="font-bold text-xl tracking-[-1px] text-white">
            <span className="metallic-silver-text">UP</span><span className="metallic-gold-text">MUSIC</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-[0.75rem] font-semibold uppercase tracking-[1px] text-gray-300">
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#planos" className="hover:text-white transition-colors">Planos</a>
          <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
        </div>
        <button className="px-6 py-3 rounded-full border-none bg-metallic-gold text-black text-[0.75rem] font-semibold uppercase tracking-[1px] hover:opacity-90 transition-opacity hidden md:block">
          Falar com equipe
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-bg-base">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-black to-black opacity-60"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
          <span className="text-[0.65rem] uppercase tracking-[2px] text-gold-base font-semibold">Marketing de Alto Impacto</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-[-2px] mb-8 leading-[0.95]"
        >
          Transformamos <br/> músicas em <span className="metallic-gold-text">tendência.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg opacity-70 max-w-2xl mx-auto font-normal leading-relaxed mb-12"
        >
          Estratégias de marketing musical para artistas que querem alcance, posicionamento e crescimento real.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => {
              const message = "Quero solicitar uma campanha personalizada";
              window.open(`https://wa.me/5537991614113?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-metallic-gold text-black font-semibold text-[0.75rem] uppercase tracking-[1px] hover:scale-105 transition-transform"
          >
            Solicitar campanha
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('servicos');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-white bg-transparent text-white font-semibold text-[0.75rem] uppercase tracking-[1px] hover:bg-white border-opacity-100 hover:text-black transition-colors"
          >
            Conheça nossos serviços
          </button>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[10%] hidden lg:flex items-center justify-center w-24 h-24 rounded-2xl theme-card backdrop-blur-md"
      >
        <TrendingUp className="w-8 h-8 text-gold-base" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-[15%] hidden lg:flex items-center justify-center w-20 h-20 rounded-full theme-card backdrop-blur-md pb-4 pt-4 pr-4 pl-4"
      >
        <Play className="w-6 h-6 text-white ml-1" />
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 bg-bg-base relative border-t border-line-base">
       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-[0.9rem] uppercase tracking-[1px] mb-3 opacity-70">Sobre a Agência</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-[-1px]">Elevando sua <br/><span className="metallic-silver-text">Arte ao Topo.</span></h2>
            <div className="w-12 h-1 bg-metallic-gold mb-8 rounded-full"></div>
            <p className="opacity-70 text-[0.9rem] leading-[1.6] mb-6">
              A UP Music Agency é uma agência especializada em marketing e divulgação musical, criada para conectar artistas ao público através de estratégias digitais modernas, orgânicas e inteligentes.
            </p>
            <p className="opacity-70 text-[0.9rem] leading-[1.6] mb-10">
              Nosso objetivo é impulsionar lançamentos, fortalecer a imagem artística e gerar alcance real nas principais plataformas digitais.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Smartphone, text: "TikTok & Reels" },
                { icon: Youtube, text: "YouTube" },
                { icon: Radio, text: "Pré-Save & Lançamentos" },
                { icon: Globe, text: "Viralização Orgânica" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 theme-card hover:-translate-y-1">
                  <item.icon className="w-5 h-5 text-gray-300" />
                  <span className="text-[0.85rem] font-bold metallic-silver-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-[12px] overflow-hidden theme-card relative group p-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent z-10" />
              {/* Note: Placeholder image representing an artist or concert */}
              <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-black relative overflow-hidden group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                
                {/* Grid 3D de fundo */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-50 z-0"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-metallic-gold/10 via-transparent to-transparent z-0"></div>

                {/* Singles / Capas flutuantes */}
                <motion.div 
                  className="absolute z-20 w-24 sm:w-32 h-24 sm:h-32 rounded-lg bg-gradient-to-br from-purple-800/80 to-blue-900/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-white/20 flex flex-col items-center justify-center backdrop-blur-md"
                  animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ top: '15%', left: '15%' }}
                >
                  <AudioLines className="w-8 h-8 sm:w-10 sm:h-10 text-white/70 mb-2" />
                  <div className="w-1/2 h-1 bg-white/20 rounded-full"></div>
                </motion.div>
                
                <motion.div 
                  className="absolute z-10 w-20 sm:w-28 h-20 sm:h-28 rounded-lg bg-gradient-to-tr from-amber-600/80 to-orange-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-white/20 flex flex-col items-center justify-center backdrop-blur-md"
                  animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  style={{ top: '25%', right: '15%' }}
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white/80 mb-2" />
                  <div className="w-1/2 h-1 bg-white/20 rounded-full"></div>
                </motion.div>

                <motion.div 
                  className="absolute z-15 w-24 sm:w-32 h-24 sm:h-32 rounded-lg bg-gradient-to-bl from-zinc-700/80 to-zinc-900/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-white/20 flex flex-col items-center justify-center backdrop-blur-md"
                  animate={{ y: [-15, 15, -15], rotate: [-8, 8, -8] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  style={{ top: '45%', left: '45%' }}
                >
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white/70 mb-2" />
                  <div className="w-1/2 h-1 bg-white/20 rounded-full"></div>
                </motion.div>

                {/* Gráfico de crescimento 3D */}
                <div className="absolute bottom-6 left-0 w-full h-[40%] flex items-end px-8 gap-2 sm:gap-3 z-0 pb-16">
                  {[30, 45, 40, 60, 50, 80, 65, 95].map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-metallic-gold/80 to-yellow-300/40 rounded-t-sm shadow-[0_0_15px_rgba(255,215,0,0.2)] border-t border-x border-white/10"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    />
                  ))}
                </div>

                {/* Linha brilhante simulando tendência */}
                <svg className="absolute bottom-[20%] left-0 w-full h-[30%] z-10 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <motion.path
                    d="M 5,80 Q 25,60 45,70 T 80,30 T 95,10"
                    fill="none"
                    stroke="url(#gradient-line)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffff" />
                      <stop offset="100%" stopColor="#d4af37" />
                    </linearGradient>
                  </defs>
                </svg>

              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 theme-card flex items-center gap-4 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-full bg-card-base border border-line-base flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[0.65rem] opacity-70 uppercase tracking-[1px] mb-1">Crescimento Médio</p>
                  <p className="text-xl font-bold metallic-gold-text">+400% Streams</p>
                </div>
              </div>
            </div>
          </div>
       </div>
    </section>
  );
}

const services = [
  { icon: Smartphone, title: "Campanhas de Reels", desc: "Algoritmo focado no engajamento visual do Instagram." },
  { icon: Radio, title: "Divulgação no TikTok", desc: "Posicionamento para viralização na principal plataforma musical." },
  { icon: Youtube, title: "Estratégias para YouTube", desc: "Otimização e alcance direcionado para clipes e faixas." },
  { icon: Instagram, title: "Divulgação em Stories", desc: "Conexão direta e conversão com o público-alvo." },
  { icon: CheckCircle, title: "Campanhas de Pré-save", desc: "Garantia de impacto no primeiro dia de lançamento." },
  { icon: AudioLines, title: "Marketing para Lançamentos", desc: "Estratégia completa de pré, durante e pós-lançamento." },
  { icon: Users, title: "Ativação com Criadores", desc: "Parcerias estratégicas com influenciadores focados em música." },
  { icon: TrendingUp, title: "Estratégias de trend", desc: "Mapeamento de tendências e áudios em alta." },
  { icon: Globe, title: "Fortalecimento de presença digital", desc: "Consolidação e autoridade da sua marca na cena musical." },
  { icon: Heart, title: "Engajamento orgânico", desc: "Criação de comunidades e fãs reais e engajados." }
];

function Services() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-bg-base border-t border-line-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-[-1px]">Nossos <span className="metallic-silver-text">Serviços</span></h2>
          <p className="text-[1rem] opacity-70 max-w-2xl mx-auto">
            Estratégias validadas para colocar sua música nos ouvidos certos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="theme-card hover:-translate-y-1 flex flex-col items-start gap-3"
            >
              <div className="text-[1.5rem] mb-1">
                <service.icon className="w-6 h-6 opacity-80" />
              </div>
              <h3 className="text-[0.85rem] font-bold metallic-silver-text">{service.title}</h3>
              <p className="text-[0.7rem] opacity-60 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Serviço Básico",
    desc: "Ideal para artistas que desejam iniciar sua divulgação digital.",
    features: ["Divulgação orgânica", "Reels estratégicos", "Stories", "Ativação inicial da música"],
    premium: false
  },
  {
    name: "Serviço Intermediário",
    desc: "Estratégia ampliada para aumentar alcance e movimentação.",
    features: ["Reels + TikTok", "Campanha com criadores", "Divulgação em múltiplas plataformas", "Estratégia de engajamento"],
    premium: false
  },
  {
    name: "Serviço Avançado",
    desc: "Campanha profissional focada em crescimento e posicionamento.",
    features: ["Estratégia personalizada", "Campanhas de viralização", "Ativação em massa", "Planejamento de conteúdo", "Acompanhamento estratégico"],
    premium: false
  },
  {
    name: "Serviço Premium",
    desc: "Experiência completa para artistas que buscam posicionamento forte no mercado.",
    features: ["Estratégia completa de lançamento", "Gestão de campanha", "Fortalecimento de marca artística", "Planejamento de alcance", "Campanhas de grande escala", "Acompanhamento exclusivo"],
    premium: true
  }
];

function Plans() {
  return (
    <section id="planos" className="py-24 bg-bg-base border-t border-line-base relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-base/5 via-bg-base to-bg-base opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-[-1px]">Escolha sua <span className="metallic-gold-text">Trajetória</span></h2>
          <p className="text-[1rem] opacity-70 max-w-2xl mx-auto">
            Soluções desenhadas para cada etapa da sua carreira artística.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`theme-card flex flex-col ${
                plan.premium 
                  ? 'theme-card-premium scale-100 lg:scale-105 z-10' 
                  : ''
              }`}
            >
              <h4 className={`text-[0.7rem] uppercase tracking-[1px] mb-2 ${plan.premium ? 'text-gold-base' : 'opacity-50'}`}>
                {plan.name.split(" ")[1] || plan.name}
              </h4>
              <div className={`font-bold text-[0.9rem] mb-1 ${plan.premium ? 'metallic-gold-text' : 'text-white'}`}>
                {plan.premium ? 'PREMIUM VIP' : plan.name.split(" ")[1]}
              </div>
              <p className="text-[0.65rem] opacity-60 mb-6 flex-grow leading-relaxed">
                {plan.desc}
              </p>
              
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 opacity-50" />
                    <span className="text-[0.75rem] opacity-80">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => {
                  const message = `Quero mais informações do ${plan.name.replace('Serviço', 'Plano')}`;
                  window.open(`https://wa.me/5537991614113?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className={`w-full py-3 rounded-full font-semibold text-[0.75rem] uppercase tracking-[1px] transition-all ${
                plan.premium 
                  ? 'bg-metallic-gold text-black border-none hover:opacity-90' 
                  : 'bg-transparent border border-white text-white hover:bg-white hover:text-black'
              }`}>
                Selecionar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const differentials = [
  "Pessoas reais conectadas",
  "Estratégias 100% orgânicas",
  "Atendimento personalizado",
  "Conteúdo humanizado",
  "Marketing sempre atualizado",
  "Foco em resultados reais"
];

function Differentiators() {
  return (
    <section id="diferenciais" className="py-24 relative bg-bg-base">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
           <div className="relative aspect-[9/16] max-w-[320px] mx-auto rounded-[24px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black">
              <video 
                src="/depoimento.mp4" 
                controls 
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1520182205149-1e5e4e7329b4?q=80&w=800&auto=format&fit=crop"
              >
                Seu navegador não suporta a tag de vídeo.
              </video>
              
              <div className="absolute bottom-0 top-[60%] left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none flex flex-col justify-end transition-opacity duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-metallic-gold flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-black fill-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-wide">Case de Sucesso</h4>
                    <p className="text-gray-300 text-xs">Artista Exclusivo</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed italic border-l-2 border-gold-base pl-3">
                  "A UP Music Agency foi essencial pra minha carreira. Os resultados superaram todas expectativas!"
                </p>
              </div>
           </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-[-1px]">Por que somos <br/> <span className="metallic-gold-text">Diferentes?</span></h2>
          <div className="space-y-6">
            {differentials.map((diff, index) => (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index} 
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-metallic-gold flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-black" />
                </div>
                <p className="text-[0.85rem] font-bold metallic-silver-text tracking-[1px] uppercase">{diff}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-line-base">
      <div className="absolute inset-0 bg-bg-base">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-base/10 via-bg-base to-bg-base opacity-80 pointer-events-none"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center justify-center gap-8 text-center">
        <h2 className="text-xl md:text-3xl font-light text-white tracking-[0px]">
          Seu próximo lançamento merece mais alcance.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
          <a
            href="https://wa.me/5537991614113"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 sm:py-3 rounded-full bg-metallic-gold text-black font-semibold text-[0.75rem] uppercase tracking-[1px] hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
          >
            <Smartphone className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="mailto:upagencymusic@outlook.com"
            className="w-full sm:w-auto px-6 py-4 sm:py-3 rounded-full border border-white bg-transparent text-white font-semibold text-[0.75rem] uppercase tracking-[1px] hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            E-mail
          </a>
          <a
            href="https://instagram.com/upm.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 sm:py-3 rounded-full border border-white bg-transparent text-white font-semibold text-[0.75rem] uppercase tracking-[1px] hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center gap-2"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-bg-base pt-16 pb-10 border-t border-line-base">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-12">
        
        {/* Placeholder para o vídeo enviado */}
        <div className="w-full max-w-lg mx-auto overflow-hidden rounded-xl bg-black border border-white/5 shadow-2xl relative">
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>

        <div className="w-full border-t border-line-base pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-metallic-silver flex items-center justify-center mb-4">
              <AudioLines className="w-5 h-5 text-black" />
            </div>
            <h3 className="font-bold text-[1.2rem] tracking-[-1px] text-white">
              <span className="metallic-silver-text">UP</span><span className="metallic-gold-text">MUSIC</span>
            </h3>
          </div>
          
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <a 
              href="https://instagram.com/upm.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 font-bold text-[0.7rem] uppercase tracking-[1px] hover:text-white transition-colors mb-2"
            >
              <Instagram className="w-4 h-4" />
              @UPM.AGENCY
            </a>
            <div className="text-[0.6rem] opacity-50 uppercase tracking-[1px]">
              Transformando músicas em tendência.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base text-[#EAEAEA]">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Plans />
      <Differentiators />
      <CTA />
      <Footer />
    </div>
  );
}
