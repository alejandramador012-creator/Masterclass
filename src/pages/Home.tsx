import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, ChevronRight, Users, Sparkles, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { IMAGES } from '@/assets/images';
import { handleRegister, fadeInUp, staggerContainer, springPresets } from '@/lib/index';
export default function Home() {
  return <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-[15%] left-[5%] w-4 h-4 bg-primary/30 rotate-45 animate-bounce" style={{
      animationDelay: '0s',
      animationDuration: '3s'
    }} />
      <div className="absolute top-[60%] right-[8%] w-6 h-6 bg-accent/40 rotate-45 animate-bounce" style={{
      animationDelay: '1s',
      animationDuration: '4s'
    }} />
      <div className="absolute bottom-[30%] left-[10%] w-3 h-3 bg-primary/50 rotate-45 animate-bounce" style={{
      animationDelay: '2s',
      animationDuration: '5s'
    }} />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed08_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed08_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-pulse" />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        {/* Floating Tech Elements */}
        <div className="absolute top-[20%] left-[15%] w-20 h-20 border border-primary/20 rotate-45 animate-spin" style={{
        animationDuration: '20s'
      }} />
        <div className="absolute top-[40%] right-[20%] w-16 h-16 border border-accent/30 rotate-12 animate-pulse" />
        <div className="absolute bottom-[30%] left-[25%] w-12 h-12 bg-primary/10 backdrop-blur-sm rotate-45 animate-bounce" style={{
        animationDelay: '1s',
        animationDuration: '6s'
      }} />
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30 font-mono text-sm tracking-wider uppercase backdrop-blur-sm shadow-[0_0_20px_rgba(124,58,237,0.3)] animate-pulse" variant="outline">
                🚀 MASTERCLASS GRATUITA - 2 DE MARZO DE 2026
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 bg-gradient-to-b from-white via-primary/90 to-accent/80 bg-clip-text drop-shadow-[0_0_30px_rgba(124,58,237,0.5)] text-[rgb(59,34,162)]">
              El Camino Hacia Tu <br className="hidden md:block" /> Libertad Total
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              El sistema te da reglas; la Web 3.0 te da el control. Descubre cómo la Inteligencia Artificial, la Blockchain y los Activos Reales pueden multiplicar y proteger tu patrimonio.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button size="lg" onClick={handleRegister} className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 group relative px-10 py-8 font-black rounded-2xl bg-gradient-to-r from-primary via-primary to-accent hover:from-primary/90 hover:via-primary/90 hover:to-accent/90 transition-all duration-500 shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95 border border-primary/30 backdrop-blur-sm text-sm">
                <Sparkles className="mr-2 w-5 h-5 animate-pulse" />
                Asegurar Mi Cupo Ahora
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section: Problema */}
      <section id="problema" className="py-24 px-4 border-y border-primary/20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
        {/* Floating Tech Squares */}
        <div className="absolute top-[10%] left-[5%] w-8 h-8 border-2 border-primary/30 rotate-45 animate-spin" style={{
        animationDuration: '15s'
      }} />
        <div className="absolute top-[70%] right-[8%] w-6 h-6 border-2 border-accent/40 rotate-12 animate-pulse" />
        <div className="absolute bottom-[20%] left-[15%] w-10 h-10 bg-primary/10 backdrop-blur-sm rotate-45 animate-bounce" style={{
        animationDelay: '2s',
        animationDuration: '8s'
      }} />
        
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1)_0%,transparent_50%)] animate-pulse" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">¿Tu dinero trabaja para ti o pierde valor?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">Queremos educarte sobre como crear ecosistemas de inversiones seguras y reales. Te mostraremos cómo armar tu "Portafolio Perfecto" dividiendo tu capital en tres energías:</p>
          </motion.div>
        </div>
      </section>

      {/* Section: Valor (3 Energías) */}
      <section id="valor" className="py-24 px-4 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute top-[20%] left-[10%] w-32 h-32 border border-primary/20 rotate-45 animate-spin" style={{
        animationDuration: '25s'
      }} />
        <div className="absolute bottom-[30%] right-[15%] w-24 h-24 border border-accent/30 rotate-12 animate-pulse" />
        <div className="absolute top-[60%] left-[5%] w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rotate-45 animate-bounce" style={{
        animationDelay: '3s',
        animationDuration: '10s'
      }} />
        
        <div className="container mx-auto relative z-10">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={staggerContainer}>
            {/* Card 1: Energía Intensa */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-card/60 via-primary/5 to-card/40 border-primary/30 backdrop-blur-sm group hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:scale-105 relative overflow-hidden">
                {/* Floating squares inside card */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary/30 rotate-45 animate-pulse" />
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-primary/40 rotate-45 animate-bounce" style={{
                animationDelay: '1s',
                animationDuration: '4s'
              }} />
                
                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_20px_rgba(124,58,237,0.2)]">
                    <Zap className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Energía Intensa <span className="block text-sm font-mono text-primary/80 mt-1">(El Cohete)</span></h3>
                  <p className="text-muted-foreground flex-grow">
                    Multiplicación agresiva usando IA y bots para saltos exponenciales. Aprovecha la volatilidad a tu favor con algoritmos de alta precisión.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2: Energía Activa */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-card/60 via-accent/5 to-card/40 border-accent/30 backdrop-blur-sm group hover:border-accent/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 relative overflow-hidden">
                {/* Floating squares inside card */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-accent/30 rotate-45 animate-pulse" style={{
                animationDelay: '0.5s'
              }} />
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-accent/40 rotate-45 animate-bounce" style={{
                animationDelay: '2s',
                animationDuration: '5s'
              }} />
                
                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                    <TrendingUp className="w-8 h-8 text-accent animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Energía Activa <span className="block text-sm font-mono text-accent/80 mt-1">(El Motor)</span></h3>
                  <p className="text-muted-foreground flex-grow">
                    Generación de flujo de caja diario (Cashflow) mediante Yield Farming descentralizado. Pon tus activos a trabajar en protocolos Web 3.0.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3: Energía Calma */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full bg-gradient-to-br from-card/60 via-white/5 to-card/40 border-white/30 backdrop-blur-sm group hover:border-white/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 relative overflow-hidden">
                {/* Floating squares inside card */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rotate-45 animate-pulse" style={{
                animationDelay: '1s'
              }} />
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/40 rotate-45 animate-bounce" style={{
                animationDelay: '3s',
                animationDuration: '6s'
              }} />
                
                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <Shield className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Energía Calma <span className="block text-sm font-mono text-white/80 mt-1">(El Refugio)</span></h3>
                  <p className="text-muted-foreground flex-grow">
                    El pilar de la riqueza a largo plazo mediante la tokenización de Activos Reales (RWA) y Oro Digital. Estabilidad absoluta en la blockchain.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section: Ponentes */}
      <section id="ponentes" className="py-32 px-4 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" />
        <div className="absolute top-[20%] left-[5%] w-20 h-20 border-2 border-primary/20 rotate-45 animate-spin" style={{
        animationDuration: '30s'
      }} />
        <div className="absolute bottom-[25%] right-[10%] w-16 h-16 border-2 border-accent/30 rotate-12 animate-pulse" />
        <div className="absolute top-[70%] left-[15%] w-12 h-12 bg-gradient-to-r from-primary/20 to-accent/20 rotate-45 animate-bounce" style={{
        animationDelay: '4s',
        animationDuration: '12s'
      }} />
        
        {/* Floating Particles */}
        <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-primary/60 rounded-full animate-ping" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute bottom-[40%] left-[25%] w-3 h-3 bg-accent/50 rounded-full animate-ping" style={{
        animationDelay: '3s'
      }} />
        <div className="absolute top-[50%] right-[30%] w-1 h-1 bg-white/80 rounded-full animate-ping" style={{
        animationDelay: '5s'
      }} />
        
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Conoce a tus anfitriones</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Host: Nicolás */}
            <motion.div className="flex flex-col items-center md:items-start text-center md:text-left" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={springPresets.smooth} viewport={{
            once: true
          }}>
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <img src={IMAGES.NICOLAS_MORENO_2} alt="Nicolás Moreno" className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border-2 border-border/50 group-hover:border-primary/50 relative z-10 shadow-2xl" />
              </div>
              <h3 className="text-3xl font-bold mb-2 tracking-tight">NICOLÁS MORENO</h3>
              <p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">Experto en Inversiones DeFi y Expansión</p>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                Nicolás es experto en apalancarse de ecosistemas web 3.0, utilizando la Blockchain para transformarlos en oportunidades accesibles. Su dominio de las nuevas tecnologías lo convierte en el puente perfecto entre la innovación digital y la riqueza real.
              </p>
            </motion.div>

            {/* Host: Sofía */}
            <motion.div className="flex flex-col items-center md:items-start text-center md:text-left" initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={springPresets.smooth} viewport={{
            once: true
          }}>
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <img src={IMAGES.SOFIA_OSORIO_JPG_1} alt="Sofía Osorio" className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border-2 border-border/50 group-hover:border-accent/50 relative z-10 shadow-2xl" />
              </div>
              <h3 className="text-3xl font-bold mb-2 tracking-tight">SOFÍA OSORIO</h3>
              <p className="text-accent font-mono text-sm uppercase tracking-widest mb-4">Experta en Negocios Digitales y Marcas Personales</p>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                Especialista en enseñar cómo el dinero y la tecnología pueden trabajar a tu favor. Combina una mentalidad inversionista aguda con estrategias prácticas para construir un ecosistema de riqueza seguro.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Cierre */}
      <section id="cierre" className="py-32 px-4 relative overflow-hidden">
        {/* Enhanced Futuristic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(124,58,237,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-pulse" />
        
        {/* Floating Tech Elements */}
        <div className="absolute top-[15%] left-[8%] w-16 h-16 border-2 border-primary/30 rotate-45 animate-spin" style={{
        animationDuration: '20s'
      }} />
        <div className="absolute top-[25%] right-[12%] w-12 h-12 border-2 border-accent/40 rotate-12 animate-pulse" />
        <div className="absolute bottom-[20%] left-[20%] w-8 h-8 bg-gradient-to-r from-primary/30 to-accent/30 rotate-45 animate-bounce" style={{
        animationDelay: '2s',
        animationDuration: '8s'
      }} />
        <div className="absolute bottom-[35%] right-[25%] w-6 h-6 bg-white/20 rotate-45 animate-ping" style={{
        animationDelay: '4s'
      }} />
        
        {/* Glowing Orbs */}
        <div className="absolute top-[40%] left-[5%] w-4 h-4 bg-primary/50 rounded-full blur-sm animate-pulse" />
        <div className="absolute bottom-[50%] right-[8%] w-3 h-3 bg-accent/60 rounded-full blur-sm animate-pulse" style={{
        animationDelay: '2s'
      }} />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeInUp}>
            <Users className="w-12 h-12 text-primary mx-auto mb-8 opacity-50" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Es momento de elegir de qué lado de la historia quieres estar.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Los cupos son limitados. Transforma tu visión financiera y toma el control total de tus activos antes de que el futuro te deje atrás.
            </p>
            
            {/* Horarios Internacionales */}
            <div className="mb-12 p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-bold text-primary">Lunes, 2 de Marzo de 2026</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
                <div className="flex flex-col items-center p-3 bg-card/50 rounded-lg border border-border/30">
                  <span className="text-2xl mb-1">🇨🇴</span>
                  <span className="font-mono text-primary">1:00 PM</span>
                  <span className="text-muted-foreground">Colombia</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-card/50 rounded-lg border border-border/30">
                  <span className="text-2xl mb-1">🇺🇸</span>
                  <span className="font-mono text-primary">1:00 PM</span>
                  <span className="text-muted-foreground">Miami</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-card/50 rounded-lg border border-border/30">
                  <span className="text-2xl mb-1">🇪🇸</span>
                  <span className="font-mono text-primary">7:00 PM</span>
                  <span className="text-muted-foreground">España</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-card/50 rounded-lg border border-border/30">
                  <span className="text-2xl mb-1">🇲🇽</span>
                  <span className="font-mono text-primary">12:00 PM</span>
                  <span className="text-muted-foreground">México</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-card/50 rounded-lg border border-border/30">
                  <span className="text-2xl mb-1">🇸🇻</span>
                  <span className="font-mono text-primary">1:00 PM</span>
                  <span className="text-muted-foreground">El Salvador</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-card/50 rounded-lg border border-border/30">
                  <span className="text-2xl mb-1">🇦🇪</span>
                  <span className="font-mono text-primary">10:00 PM</span>
                  <span className="text-muted-foreground">Dubai</span>
                </div>
              </div>
            </div>

            <Button size="lg" onClick={handleRegister} className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 group relative px-12 py-8 font-black rounded-2xl bg-gradient-to-r from-white via-white to-primary/20 text-black hover:from-white/90 hover:via-white/90 hover:to-primary/30 transition-all duration-500 shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 border border-white/30 text-sm">
              <Sparkles className="mr-3 w-6 h-6 animate-pulse" />
              Registrarme a la Masterclass
            </Button>

            <p className="mt-8 text-sm font-mono text-muted-foreground uppercase tracking-[0.2em] opacity-50">
              © 2026 EL CÓDIGO DEL FUTURO FINANCIERO
            </p>
          </motion.div>
        </div>
      </section>
    </div>;
}