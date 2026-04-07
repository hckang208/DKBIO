import { useState, useEffect, type ReactNode } from 'react';
import { 
  Menu, 
  X, 
  Globe, 
  Package, 
  Warehouse, 
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white/70 backdrop-blur-sm py-5'}`}>
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-tighter text-[#00193c] font-headline">DK BIO</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#" label="Home" />
            <NavLink href="#" label="About Us" active />
            <NavLink href="#" label="Technology" />
            <NavLink href="#" label="Solutions" />
            <NavLink href="#" label="Contact" />
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-sm font-bold text-[#00193c] hover:bg-slate-100 px-3 py-1 rounded transition-colors">
              KR/EN
            </button>
            <button 
              className="md:hidden text-[#00193c]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-slate-100 p-6 space-y-4 shadow-xl"
          >
            <MobileNavLink href="#" label="Home" />
            <MobileNavLink href="#" label="About Us" active />
            <MobileNavLink href="#" label="Technology" />
            <MobileNavLink href="#" label="Solutions" />
            <MobileNavLink href="#" label="Contact" />
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[700px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00193c] to-[#00193c]/80 z-10" />
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0ALzoQ1G3zHm4fykScZm2t19Fo9pFM_WsYu04Pi_Okuk10J7dtM93npsGMYtbxCrUdhz3b4gA2xwnf8TQAqrJzK6Q_6ctLV6rmvPukBmQKyfbDQGQJmuXN0Mxab3EOTWqWRpY85L5_cFomlt1fyFoPco-lxSuVmuVTOwLQfmdDPy0X73oQPBu1BQ9Yuzv3kDRw9mFZ_w2lV4bZxG90cofoq15EWOuTf1mAExbvA_D2CYtO5Q-lwm1JhItPn-O0QPMjksWxlabW8c" 
            alt="Bio-mechanic science"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="text-[#9ff4c9] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                Pioneering Bio-Mechanic Frontiers
              </span>
              <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                The Science of <br/>
                <span className="text-[#9ff4c9]">Sustainable Beauty</span>
              </h1>
              <p className="text-[#7796d1] text-lg md:text-xl leading-relaxed max-w-lg">
                DK BIO is redefining the chemical landscape through bio-mechanic technology, bridging the gap between raw nature and clinical precision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="md:col-span-7 bg-white p-12 rounded-2xl flex flex-col justify-center shadow-sm border border-slate-50"
            >
              <span className="text-[#096c4b] font-bold tracking-widest text-xs mb-6 block">OUR VISION</span>
              <h2 className="font-headline text-4xl font-bold text-[#00193c] mb-6 leading-tight">
                To be Global No.1 functional ingredient company.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We aim to lead the global market by providing superior functional ingredients that meet the highest standards of safety and efficacy.
              </p>
            </motion.div>
            
            <motion.div 
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              className="md:col-span-5 rounded-2xl overflow-hidden h-[400px]"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChJQK0pcI2wbsy2V7XmP_OqBXjzR5OZueFNwDpTKT9jC9ap7qLfaoYI2gHIRc2kbd_i0uDPMButLmifklGnHI15jDJlysULjHf2pO9Lwn7UJKv4WKWN8fQfgOLXZpv0xkSODfqrwN1KU9U3qaLalCcD2i7v8WZjPeb5oOvmnN3zsdLDD9k91_agZ6oPNidVfLC4LJkvipTk1CPoeojnhxQSomdGg7PaVkobf5M42Pci39RUD6YSVPDGL2rRYAclXHunPHl-wRLlrc" 
                alt="Laboratory research"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              className="md:col-span-5 rounded-2xl overflow-hidden h-[400px] order-last md:order-none"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgAYqkCRJx4wt9TdvUBr0bLG1-hLoSYqqB_WdG-jaBQIoV7y0wJoplvw75q55x_2CIaEuexpuwfLs1lyqFbnhSf1fTcmXLKsEVG3FZuqraB1rLh3UijtpaRDrone4NhmQ6jQRJWG6jOOk7o86N7qvuYyH9nX5AoGMjgWMUXCY7eeBu-a9p6SU_PtjhEBIoBIhYbH6mQfF4xpVdD3ItDvf1HEiSmGvgT6AoWG89V4pG53tG-FXCk7QRPulpN7hOt6A3vchvtQ46fGU" 
                alt="Molecular model"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="md:col-span-7 bg-[#00193c] text-white p-12 rounded-2xl flex flex-col justify-center"
            >
              <span className="text-[#9ff4c9] font-bold tracking-widest text-xs mb-6 block">OUR MISSION</span>
              <h2 className="font-headline text-4xl font-bold mb-6 leading-tight">
                Bio-mechanic based technology.
              </h2>
              <p className="text-[#7796d1] text-lg leading-relaxed">
                Our mission is rooted in deep scientific research. By leveraging bio-mechanics, we extract the maximum potential from natural components while ensuring stability and skin compatibility.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Legacy & Trust */}
        <section className="bg-slate-100 py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 border-l-4 border-[#096c4b] pl-8">
                <span className="text-[#096c4b] font-bold tracking-widest text-xs mb-4 block">LEGACY & TRUST</span>
                <h2 className="font-headline text-4xl font-bold text-[#00193c] mb-8">
                  Established 2016, Built on 35 Years of DAMY Excellence.
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  While DK BIO was established in 2016 to focus specifically on biotechnology, our roots run deep within the <strong>DAMY Chemical Group</strong>.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We carry forward 35 years of industrial trust and manufacturing expertise, ensuring that every solution we provide is backed by a legacy of reliability and innovation.
                </p>
              </div>
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
                <StatCard number="2016" label="Founded" color="text-[#096c4b]" />
                <StatCard number="35" label="Years of Heritage" color="text-[#00193c]" delay={0.2} />
              </div>
            </div>
          </div>
        </section>

        {/* Global Logistics */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-bold text-[#00193c] mb-4">A Global Logistics Powerhouse</h2>
            <div className="w-24 h-1 bg-[#096c4b] mx-auto mb-8" />
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Connecting global innovation with local stability through our extensive network and advanced infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Globe className="text-[#096c4b]" size={32} />}
              title="Global Network"
              description="Partnering with 16+ world-class suppliers to bring the finest ingredients to the Korean market."
              stat="16+"
            />
            <FeatureCard 
              icon={<Package className="text-[#096c4b]" size={32} />}
              title="Product Portfolio"
              description="A diverse and specialized catalog of over 1,300 active ingredients for every beauty need."
              stat="1,300+"
              delay={0.1}
            />
            <FeatureCard 
              icon={<Warehouse className="text-[#096c4b]" size={32} />}
              title="Hwaseong Center"
              description="Our dedicated warehouse facility ensuring a stable, localized supply chain for our partners."
              stat="STABLE"
              delay={0.2}
            />
          </div>
        </section>

        {/* Partnerships */}
        <section className="bg-white py-32 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="w-full md:w-1/3">
                <h2 className="font-headline text-3xl font-bold text-[#00193c] leading-tight">
                  Trusted by Industry Leaders.
                </h2>
                <p className="mt-4 text-slate-600">
                  We collaborate with the world's most influential cosmetic and chemical brands.
                </p>
              </div>
              <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <PartnerLogo name="AMOREPACIFIC" />
                <PartnerLogo name="LG" />
                <PartnerLogo name="KOLMAR" />
                <PartnerLogo name="COSMAX" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto bg-[#00193c] rounded-3xl overflow-hidden relative p-16 text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiK0Z46OhqbudF-oJ_TbhtKusyderi_UPghypgvCP74BGiZBu2HUsPbC1u1e9SE780tUy57qdAOQMdBd-p17pqN8kZQ7aDPE_X1zRq4ivp6GmB0cxS8GFN82DdcIo2Lzt0lEywqlHBcaE_7Wcom8cGnVP_qvbkC6SlAYqcLdZ2I0vdzbB1EhTqRetSXiZ9kOvNlsqHtv_idQvsGtz8arWrLnxf8WKp4JLt4PeUGpAGw1O-zj0dzVhmIb99jVGEHtbW78usAO4agpQ" 
                alt="Abstract background"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
                Let's create the future of <br className="hidden md:block" /> bio-chemistry together.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full max-w-xl mx-auto">
                <button className="w-full sm:w-auto bg-[#096c4b] text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform text-lg shadow-lg shadow-[#096c4b]/20">
                  Inquiry Now
                </button>
                <button className="w-full sm:w-auto text-white border border-white/30 px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors text-lg">
                  View Solutions
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1">
              <div className="text-2xl font-black text-[#00193c] mb-6 font-headline">DK BIO</div>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Leading the way in functional ingredients and bio-mechanic research.
              </p>
              <div className="text-slate-400 text-xs space-y-1">
                <p>© 2024 DK BIO. All rights reserved.</p>
                <p>Part of DAMY Chemical Group.</p>
              </div>
            </div>
            
            <FooterColumn title="Company">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Technology</FooterLink>
              <FooterLink href="#">Global Network</FooterLink>
            </FooterColumn>

            <FooterColumn title="Resources">
              <FooterLink href="#">Solutions</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </FooterColumn>

            <FooterColumn title="Group Brands">
              <FooterLink href="#">DAMY Chemical Group</FooterLink>
              <FooterLink href="#">Labio</FooterLink>
            </FooterColumn>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, label, active = false }: { href: string; label: string; active?: boolean }) {
  return (
    <a 
      href={href} 
      className={`text-sm font-semibold transition-all duration-200 ${
        active 
          ? 'text-[#096c4b] border-b-2 border-[#096c4b] pb-1' 
          : 'text-slate-600 hover:text-[#00193c]'
      }`}
    >
      {label}
    </a>
  );
}

function MobileNavLink({ href, label, active = false }: { href: string; label: string; active?: boolean }) {
  return (
    <a 
      href={href} 
      className={`block text-lg font-bold ${
        active ? 'text-[#096c4b]' : 'text-[#00193c]'
      }`}
    >
      {label}
    </a>
  );
}

function StatCard({ number, label, color, delay = 0 }: { number: string; label: string; color: string; delay?: number }) {
  return (
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="bg-white p-10 rounded-2xl shadow-sm text-center border border-slate-50"
    >
      <div className={`text-5xl font-black ${color} mb-3 font-headline tracking-tighter`}>{number}</div>
      <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{label}</div>
    </motion.div>
  );
}

function FeatureCard({ icon, title, description, stat, delay = 0 }: { icon: ReactNode; title: string; description: string; stat: string; delay?: number }) {
  return (
    <motion.div 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="bg-white p-10 rounded-2xl relative overflow-hidden group border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
    >
      <div className="mb-8 p-3 bg-slate-50 w-fit rounded-xl group-hover:bg-[#9ff4c9] transition-colors duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#00193c] mb-4 font-headline">{title}</h3>
      <p className="text-slate-500 leading-relaxed mb-8">{description}</p>
      <div className="text-4xl font-black text-slate-100 absolute bottom-6 right-8 group-hover:text-[#096c4b]/10 transition-colors duration-500">
        {stat}
      </div>
    </motion.div>
  );
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="h-24 flex items-center justify-center font-bold text-xl tracking-tighter text-slate-400 border border-slate-100 rounded-2xl hover:border-[#096c4b] hover:text-[#096c4b] transition-all duration-300">
      {name}
    </div>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="font-bold text-[#00193c] mb-8 font-headline">{title}</h4>
      <ul className="space-y-4">
        {children}
      </ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <a href={href} className="text-slate-500 hover:text-[#096c4b] transition-colors text-sm font-medium flex items-center group">
        <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-1" />
        {children}
      </a>
    </li>
  );
}
