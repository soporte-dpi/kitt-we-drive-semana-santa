/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Car, Tag, Star, Phone, AlertTriangle, MapPin, Calendar, Instagram, Facebook } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const CTA_LINK = "https://kitt-wedrive.es/reservas/";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-red-600 selection:text-white">
      
      {/* Navbar (Optional but good for structure) */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-black text-white">
        <div className="flex items-center gap-4">
          <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="KITT We Drive Logo" className="h-12 w-auto rounded-lg" />
        </div>
        <a 
          href={CTA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-colors"
        >
          Reservar ahora
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-black">
                KITT <span className="text-red-600">We Drive</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-600 font-medium">
                Servicio de conductores privados
              </p>
            </div>
            
            <p className="text-lg text-zinc-700 leading-relaxed">
              En colaboración con <strong>Wake Up Festival, Modo Perreo y One Dance</strong>, apostamos por la seguridad vial en esta serie de eventos del 1 al 4 de abril.
            </p>

            <div className="pt-4">
              <a 
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-red-600/30 transition-all hover:scale-105"
              >
                Haz tu reserva
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Hero Image */}
            <img 
              src={`${import.meta.env.BASE_URL}foto-inicial.jpeg`} 
              alt="Servicio KITT We Drive" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
              <p className="text-white text-xl font-bold italic">Nosotros conducimos, ¡Tú disfruta!</p>
            </div>
          </motion.div>
        </div>

        {/* Hero 3 Points */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-xl text-red-600 shrink-0">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Tu propio vehículo</h3>
              <p className="text-zinc-600 text-sm">Reserva a tu conductor KITT por tan solo <strong className="text-black">49,90€/vehículo</strong>.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-xl text-red-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Vehículo colaborador</h3>
              <p className="text-zinc-600 text-sm">Deja el coche en casa y reserva a KITT por <strong className="text-black">15,90€/persona</strong>.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-xl text-red-600 shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Eventos Especiales</h3>
              <p className="text-zinc-600 text-sm">Disponibles del 1 al 4 de abril. Transporte alternativo cómodo y seguro.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Authority Section */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-8 h-8 text-yellow-300 shrink-0" />
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider">Solo bajo reserva</h2>
            </div>
            <div className="hidden md:block w-px h-12 bg-red-400"></div>
            <div className="flex items-center space-x-3">
              <Tag className="w-6 h-6 text-red-200 shrink-0" />
              <p className="text-lg font-medium">Plazas muy limitadas</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-red-400"></div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-red-200 shrink-0" />
              <p className="text-lg font-medium text-left">Precio válido para traslados<br/><span className="text-sm text-red-200">dentro del ayuntamiento de Vigo*</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Covered Events Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Eventos que cubrimos</h2>
          <p className="text-xl text-zinc-600">
            Del 1 al 4 de abril estaremos presentes en los mejores eventos para garantizar tu seguridad y comodidad. Disfruta de la fiesta, nosotros nos encargamos del volante.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-4 group">
            <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-md bg-zinc-200">
              <img src={`${import.meta.env.BASE_URL}festival1.jpeg`} alt="Wake Up Festival" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold text-center">Wake Up Festival</h3>
          </div>
          <div className="space-y-4 group">
            <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-md bg-zinc-200">
              <img src={`${import.meta.env.BASE_URL}festival2.jpeg`} alt="Modo Perreo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold text-center">Modo Perreo</h3>
          </div>
          <div className="space-y-4 group">
            <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-md bg-zinc-200">
              <img src={`${import.meta.env.BASE_URL}festival3.jpeg`} alt="One Dance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl font-bold text-center">One Dance</h3>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white rounded-[3rem] shadow-sm border border-zinc-100 my-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">¿Por qué elegir KITT We Drive?</h2>
          <p className="text-xl text-zinc-600">Os presentamos opciones de transporte alternativo para que os desplacéis de manera cómoda y segura.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-black">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Seguridad Vial</h3>
            <p className="text-zinc-600">Apostamos por la seguridad vial. Tu bienestar es nuestra prioridad para que disfrutes sin riesgos.</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-black">
              <Car className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Máxima Comodidad</h3>
            <p className="text-zinc-600">Nosotros conducimos, tú disfrutas. Llegarás a tu destino de forma relajada y puntual.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 text-center hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">PROMO</div>
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-600">
              <Tag className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">10% de Descuento</h3>
            <p className="text-zinc-600">Utiliza el Hashtag <strong className="text-black">#KITTVENABUSCARME</strong> en tu reserva y te aplicamos un 10% de descuento 💸</p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-black hover:bg-zinc-800 text-white px-8 py-4 rounded-full text-lg font-bold transition-all"
          >
            Haz tu reserva ahora
          </a>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-zinc-100 py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16">Lo que dicen nuestros clientes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg text-zinc-700 mb-6 italic flex-grow">"La experiencia fue muy buena. El servicio es estupendo para que puedas salir de fiesta, beber unas copas y no tengas problemas después ni tener que dejar el coche aparcado por ahí."</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100">
                <div>
                  <h4 className="font-bold text-black">Tania Correa</h4>
                  <p className="text-sm text-zinc-500">4 reseñas · Hace un año</p>
                </div>
                <div className="text-sm text-zinc-500 flex items-center">
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg text-zinc-700 mb-6 italic flex-grow">"Puntualidad y trato excelentes..<br/>Repetiría sin duda."</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100">
                <div>
                  <h4 className="font-bold text-black">Yazmina Carrera Romero</h4>
                  <p className="text-sm text-zinc-500">4 reseñas · Hace un año</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Call Section */}
      <section className="bg-black text-white py-24 px-6 md:px-12 text-center flex flex-col items-center">
        <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="KITT We Drive Logo" className="h-24 w-auto rounded-2xl mb-8 shadow-2xl shadow-red-600/20" />
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Date prisa y no te quedes sin <span className="text-red-600">KITT</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400">
            Tu conductor alternativo para que puedas disfrutar del evento de principio a fin 🥳
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a 
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
            >
              Haz tu reserva
            </a>
            <a 
              href="tel:+34648444484"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              648 444 484
            </a>
          </div>
          <p className="text-sm text-zinc-500 pt-8">
            *Consultar otros destinos fuera del ayuntamiento de Vigo.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-6 pt-12 border-t border-zinc-800 w-full mt-12">
            <a 
              href="https://www.instagram.com/kitt_wedrive/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a 
              href="https://www.tiktok.com/@kitt.we.drive" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-8 h-8" />
            </a>
            <a 
              href="https://www.facebook.com/p/KITT_WeDrive-61551678879725/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
