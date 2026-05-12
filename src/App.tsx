import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Mail,
  Quote,
  Music,
  Video,
  Share2,
  Volume2,
  VolumeX
} from 'lucide-react';

// --- Components ---

function NavBar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-bg-base/80 backdrop-blur-md border-b border-line-base pt-4 pb-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-[-1px] text-white hidden sm:block">
            <span className="metallic-silver-text">UP</span><span className="metallic-gold-text">MUSIC</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-[0.75rem] font-semibold uppercase tracking-[1px] text-gray-300">
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#planos" className="hover:text-white transition-colors">Planos</a>
          <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
        </div>
        <button 
          onClick={() => {
            const message = "Gostaria de um plano personalizado";
            window.open(`https://wa.me/5537991614113?text=${encodeURIComponent(message)}`, '_blank');
          }}
          className="px-6 py-3 rounded-full border-none bg-metallic-gold text-black text-[0.75rem] font-semibold uppercase tracking-[1px] hover:opacity-90 transition-opacity hidden md:block"
        >
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

const ABOUT_VIDEOS = [
  "https://www.youtube.com/watch?v=FpkX2VdXZJs", // Show
  "https://www.youtube.com/watch?v=Z8fZWcOXmgs", // Estúdio / Gravando
  "https://www.youtube.com/watch?v=7uPzZjxHKvs", // Plateia
];

function About() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prev) => (prev + 1) % ABOUT_VIDEOS.length);
    }, 6000); // Trocando a cada 6 segundos para dar tempo de ver o vídeo
    return () => clearInterval(interval);
  }, []);

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
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent z-10" />
              
              <div className="w-full h-full relative overflow-hidden group-hover:scale-105 transition-transform duration-700 flex items-center justify-center bg-black">
                {ABOUT_VIDEOS.map((video, index) => (
                  <div
                    key={video}
                    className="absolute inset-0 w-full h-full transition-opacity duration-[1500ms] pointer-events-none"
                    style={{
                      opacity: currentMediaIndex === index ? 1 : 0,
                      zIndex: currentMediaIndex === index ? 1 : 0,
                      transform: 'scale(2)', // Escalar para cobrir black bars
                    }}
                  >
                    <iframe
                      src={`${video.replace('watch?v=', 'embed/')}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${video.split('v=')[1]}`}
                      className="w-full h-full pointer-events-none"
                      style={{ objectFit: 'cover' }}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
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
        <div className="order-2 lg:order-1 relative space-y-4">
          <div className="absolute -inset-4 bg-gradient-to-tr from-metallic-gold/10 to-transparent blur-2xl -z-10 rounded-full" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 border border-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg relative flex items-center gap-5"
          >
            <div className="w-14 h-14 rounded-full bg-metallic-gold/10 border border-metallic-gold/30 flex items-center justify-center shrink-0">
              <Play className="w-6 h-6 text-metallic-gold fill-metallic-gold" />
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white tracking-tight mb-1">1.5M+</h4>
              <p className="text-metallic-silver text-sm leading-snug">
                Visualizações orgânicas em Reels na semana de estreia do single.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-black/40 border border-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg relative flex items-center gap-5 sm:ml-8"
          >
            <div className="w-14 h-14 rounded-full bg-metallic-silver/10 border border-metallic-silver/30 flex items-center justify-center shrink-0">
              <Music className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white tracking-tight mb-1">12.5K</h4>
              <p className="text-metallic-silver text-sm leading-snug">
                Pré-saves convertidos no Spotify, garantindo entrada no radar.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-black/40 border border-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg relative flex items-center gap-5"
          >
            <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center shrink-0">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white tracking-tight mb-1">8.2K</h4>
              <p className="text-metallic-silver text-sm leading-snug">
                Vídeos criados com o áudio oficial no TikTok e republicações diárias.
              </p>
            </div>
          </motion.div>
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

const PHRASES = ["Mais Alcance", "Mais Fãs", "Mais Streams", "Mais Presença"];

function DynamicShowcase() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto h-[300px] md:h-[400px] overflow-hidden rounded-[24px] bg-neutral-900 border border-line-base relative flex items-center justify-center p-6 group">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-base/10 via-black to-black opacity-80 z-0"></div>

      {/* Animated Mockups Background */}

      {/* Spotify-like Mockup */}
      <motion.div 
        animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-2 top-[5%] sm:left-[5%] sm:top-[10%] w-[120px] sm:w-[150px] md:w-[180px] bg-black/60 backdrop-blur-md rounded-2xl p-3 border border-white/10 shadow-2xl z-10"
      >
        <div className="w-full aspect-square bg-zinc-800 rounded-lg mb-3 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="Album" />
        </div>
        <div className="h-3 w-3/4 bg-white/20 rounded-full mb-2"></div>
        <div className="h-2 w-1/2 bg-white/10 rounded-full mb-3"></div>
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="h-full bg-[#1DB954]"
          ></motion.div>
        </div>
      </motion.div>

      {/* Stories Mockup */}
      <motion.div
         animate={{ y: [-15, 15, -15], rotate: [3, -3, 3] }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         className="absolute right-2 top-[2%] sm:right-[5%] md:right-[30%] md:top-[5%] w-[80px] sm:w-[100px] md:w-[120px] aspect-[9/16] bg-black border border-white/20 rounded-xl overflow-hidden shadow-2xl z-10"
      >
        <img src="https://images.unsplash.com/photo-1540039155733-56f1c3ce8cb7?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Story" />
        <div className="absolute top-2 left-2 right-2 flex gap-1">
          <div className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white w-full"></div>
          </div>
          <div className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="h-full bg-white"
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {/* Instagram-like Follower Growth */}
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [2, -2, 2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute right-4 bottom-[5%] sm:bottom-[10%] sm:right-[15%] w-[140px] sm:w-[160px] md:w-[200px] bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-2xl z-10 flex flex-col items-center"
      >
         <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] mb-2 shadow-lg">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden border-2 border-black">
              <img src="https://images.unsplash.com/photo-1516280440502-5c058ea822cd?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" alt="Profile" />
            </div>
         </div>
         <div className="text-[0.5rem] sm:text-[0.6rem] text-gray-400 uppercase tracking-[1px] mb-1">Followers</div>
         <motion.div 
           className="text-xl sm:text-2xl md:text-3xl font-bold metallic-silver-text mb-3 flex items-center gap-1"
         >
           100K <TrendingUp className="w-3 h-3 text-green-400" />
         </motion.div>
         <div className="flex gap-2 w-full justify-center">
            <div className="w-full h-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-[0.6rem] font-bold text-white shadow-md">Follow</div>
         </div>
      </motion.div>

      {/* Dynamic Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none drop-shadow-2xl bg-black/20">
        <h3 className="text-[0.7rem] sm:text-[0.9rem] uppercase tracking-[4px] text-gray-200 mb-2 font-bold opacity-80">Resultados Reais</h3>
        <div className="h-[60px] md:h-[80px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2
              key={phraseIndex}
              initial={{ y: 20, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold m-0 metallic-gold-text text-center tracking-[-1px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
            >
              {PHRASES[phraseIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-bg-base pt-16 pb-10 border-t border-line-base">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-12">
        <DynamicShowcase />

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
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlayingMusic) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlayingMusic(!isPlayingMusic);
    }
  };

  return (
    <div className="min-h-screen bg-bg-base text-[#EAEAEA]">
      <audio
        ref={audioRef}
        src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/13/1f/f0/131ff0ec-09d2-cc44-043f-698e60713641/mzaf_1497246005369579066.plus.aac.p.m4a"
        loop
      />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-metallic-gold rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:scale-110 transition-transform duration-300"
        aria-label="Toggle background music"
      >
        {isPlayingMusic ? <Volume2 className="text-black w-6 h-6" /> : <VolumeX className="text-black w-6 h-6" />}
      </button>

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
