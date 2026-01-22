
import React, { useState } from 'react';
import { 
  MessageCircle, 
  ExternalLink, 
  CheckCircle, 
  MapPin, 
  Instagram, 
  Sparkles, 
  Star, 
  Award, 
  Heart,
  Monitor
} from 'lucide-react';
import { DATA } from './constants';
import Lightbox from './components/Lightbox';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpenLightbox = (src: string) => setSelectedImage(src);
  const handleCloseLightbox = () => setSelectedImage(null);

  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={DATA.images.hero1} 
            alt="Juliana Gomes" 
            className="w-full h-full object-cover object-top sm:object-center"
          />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        
        <div className="relative z-10 w-full px-6 pb-12 text-center text-white max-w-lg mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-6 font-semibold flex items-center justify-center gap-2 drop-shadow-md">
             {DATA.profession}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            Eu sou Juliana Gomes, especialista em Fibra de Vidro
          </h1>
          <p className="text-base sm:text-lg mb-10 opacity-90 leading-relaxed font-light drop-shadow-md max-w-[90%] mx-auto">
            Atendo mulheres que buscam unhas impecáveis e ensino profissionais a viverem da manicure.
          </p>
          
          <div className="flex flex-col gap-4">
            <a 
              href={DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#00966d] hover:bg-[#007a58] text-white py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-2xl transition-all active:scale-95"
            >
              <MessageCircle size={24} />
              Agendar avaliação gratuita
            </a>
            
            <a 
              href={DATA.courseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/10 backdrop-blur-lg border border-white/40 hover:bg-white/20 text-white py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              Conhecer o curso de Fibra
              <ExternalLink size={18} />
            </a>
            
            <p className="text-[11px] text-white/80 italic mt-4 tracking-wide font-medium">
              Resposta rápida • Sem compromisso
            </p>
          </div>
        </div>
      </section>

      {/* QUEM SOU EU SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-xl mx-auto flex flex-col gap-12 text-center sm:text-left">
          <div className="relative max-w-[320px] mx-auto sm:mx-0">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={DATA.images.hero2} 
                alt="Sobre Juliana Gomes" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-premium-gold p-6 rounded-2xl shadow-xl text-white hidden sm:block">
              <Star size={32} />
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-slate-800">Cuidado em cada detalhe</h2>
            <p className="text-slate-600 leading-relaxed text-lg italic">
              "Minha missão é elevar a autoestima de cada mulher que senta na minha frente e capacitar novas profissionais para conquistarem sua liberdade financeira."
            </p>
            
            <ul className="space-y-4 mt-4 text-left">
              {[
                "Atendimento exclusivo e personalizado feito por mim",
                "Especialista certificada em Fibra de Vidro",
                "Resultados reais em clientes e alunas",
                "Ensino do zero ao avançado com suporte real"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-slate-700">
                  <div className="bg-emerald-100 p-1 rounded-full text-emerald-600 flex-shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESULTADOS REAIS (GALLERY) */}
      <section className="py-20 bg-[#F3F0EC]">
        <div className="px-6 mb-10">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Resultados Reais</h2>
          <p className="text-center text-slate-500 italic">Beleza, durabilidade e naturalidade.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-2">
          {DATA.images.gallery.map((img, idx) => (
            <div 
              key={idx} 
              className="aspect-square bg-slate-200 overflow-hidden cursor-pointer group"
              onClick={() => handleOpenLightbox(img)}
            >
              <img 
                src={img} 
                alt={`Resultado ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        <p className="text-center text-[10px] text-slate-400 mt-8 uppercase tracking-widest px-6">
          * Resultados podem variar de pessoa para pessoa.
        </p>
      </section>

      {/* POR QUE CONFIAR */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Por que confiar no meu método?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: <Heart className="text-pink-500" />, title: "Avaliação Honesta", text: "Analiso a saúde da sua unha natural antes de qualquer procedimento." },
              { icon: <Award className="text-amber-500" />, title: "Técnica Atualizada", text: "Uso as melhores práticas e materiais do mercado mundial." },
              { icon: <Star className="text-premium-gold" />, title: "Personalização", text: "Cada unha é única. O formato e acabamento são pensados para você." },
              { icon: <CheckCircle className="text-emerald-500" />, title: "Método Validado", text: "Centenas de alunas e clientes satisfeitas em Anápolis e online." }
            ].map((card, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="mb-4 bg-white w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section className="py-16 px-6 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Pronta para transformar seu olhar sobre as unhas?</h2>
          <p className="text-slate-400 mb-10">Agende sua transformação ou comece sua nova profissão hoje mesmo.</p>
          
          <div className="flex flex-col gap-4">
            <a 
              href={DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00966d] py-5 rounded-full font-bold text-lg shadow-lg active:scale-95 transition-transform"
            >
              Avaliação gratuita no WhatsApp
            </a>
            <a 
              href={DATA.courseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white/30 py-4 rounded-full font-medium active:scale-95 transition-all"
            >
              Ver o curso de Fibra de Vidro
            </a>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 px-6 bg-[#FDFBF9]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 italic text-slate-800">Como funciona</h2>
          
          <div className="space-y-16">
            {/* Atendimento */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-pink-100 p-2 rounded-lg text-pink-600">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-bold">Para atendimento presencial</h3>
              </div>
              <div className="space-y-8 pl-4 border-l-2 border-pink-100">
                {[
                  { step: "01", title: "Chama no WhatsApp", desc: "Tire suas dúvidas e nos conheça." },
                  { step: "02", title: "Agenda sua avaliação", desc: "Escolha o melhor horário para você." },
                  { step: "03", title: "Atendimento personalizado", desc: "Sinta a diferença de uma especialista." }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-10 top-0 text-pink-200 font-bold text-2xl">{item.step}</span>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Curso */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Monitor size={24} />
                </div>
                <h3 className="text-xl font-bold">Para o curso online</h3>
              </div>
              <div className="space-y-8 pl-4 border-l-2 border-blue-100">
                {[
                  { step: "01", title: "Acessa o curso online", desc: "Acesso imediato após a confirmação." },
                  { step: "02", title: "Aprenda passo a passo", desc: "Vídeos em alta definição com todos os segredos." },
                  { step: "03", title: "Começa a faturar", desc: "Evolua na profissão e mude sua vida financeira." }
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-10 top-0 text-blue-200 font-bold text-2xl">{item.step}</span>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs bg-blue-50 p-4 rounded-xl text-blue-700 font-medium">
                REFORÇO: Curso 100% online • Acesso vitalício disponível • Suporte direto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIS PROVAS (AUTHORITY) */}
      <section className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Bastidores e Autoridade</h2>
          <div className="grid grid-cols-1 gap-6">
             <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-lg bg-slate-100 relative group cursor-pointer" onClick={() => handleOpenLightbox(DATA.images.gallery[8])}>
               <img src={DATA.images.gallery[8]} className="w-full h-full object-cover" alt="Atendimento" />
               <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-medium">Atendimento personalizado</div>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg bg-slate-100 relative group cursor-pointer" onClick={() => handleOpenLightbox(DATA.images.gallery[12])}>
                  <img src={DATA.images.gallery[12]} className="w-full h-full object-cover" alt="Formação" />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[10px] font-medium">Formando profissionais</div>
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg bg-slate-100 relative group cursor-pointer" onClick={() => handleOpenLightbox(DATA.images.gallery[15])}>
                  <img src={DATA.images.gallery[15]} className="w-full h-full object-cover" alt="Resultado" />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[10px] font-medium">Resultados impecáveis</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Você pode ter unhas perfeitas ou aprender a técnica que muda vidas.</h2>
          <p className="text-lg text-slate-600 mb-12 font-light italic">A decisão está em suas mãos. Qual o seu próximo passo?</p>
          
          <div className="flex flex-col gap-6">
            <a 
              href={DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00966d] hover:bg-[#007a58] text-white py-6 rounded-full font-bold text-xl shadow-2xl transition-transform active:scale-95 flex items-center justify-center gap-3"
            >
              <MessageCircle size={26} />
              Agendar minha avaliação
            </a>
            
            <a 
              href={DATA.courseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-slate-200 hover:border-premium-gold text-slate-800 py-5 rounded-full font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Quero aprender Fibra de Vidro
            </a>
          </div>
          
          <p className="mt-8 text-sm text-slate-400">
            Avaliação gratuita ou acesso imediato ao curso
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 bg-slate-900 text-white/60 text-center text-sm border-t border-white/5">
        <div className="max-w-xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-white font-serif text-2xl font-bold">{DATA.name}</h3>
            <p className="text-[10px] tracking-widest uppercase">{DATA.profession}</p>
          </div>
          
          <div className="flex items-center justify-center gap-6 py-4">
             <a href={DATA.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-premium-gold transition-colors">
               <Instagram size={24} />
             </a>
             <a href={DATA.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
               <MessageCircle size={24} />
             </a>
          </div>
          
          <div className="flex flex-col gap-1 items-center justify-center text-[10px] uppercase tracking-widest">
            <span className="flex items-center gap-1"><MapPin size={12} /> {DATA.city} - GO</span>
            <span>&copy; {new Date().getFullYear()} {DATA.name} • Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>

      <Lightbox 
        isOpen={!!selectedImage} 
        imageSrc={selectedImage || ''} 
        onClose={handleCloseLightbox} 
      />
    </div>
  );
};

export default App;
