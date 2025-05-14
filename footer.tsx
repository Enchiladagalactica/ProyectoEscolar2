"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <footer className="gradient-purple-pink text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div variants={item} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                  alt="CBTIS 29 Logo"
                  fill
                  className="object-cover rounded-full border-2 border-vibrant-yellow"
                />
              </div>
              <h3 className="text-2xl font-bold neon-text text-vibrant-yellow">CBTIS 29</h3>
            </div>
            <p className="text-pink-100">Centro de Bachillerato Tecnológico Industrial y de Servicios No. 29</p>
            <div className="flex space-x-2">
              <motion.div whileHover={{ y: -5 }}>
                <Link href="#" aria-label="Facebook">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-vibrant-yellow/20 hover:bg-vibrant-yellow/40 text-vibrant-yellow"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5 }}>
                <Link href="#" aria-label="Twitter">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-vibrant-cyan/20 hover:bg-vibrant-cyan/40 text-vibrant-cyan"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5 }}>
                <Link href="#" aria-label="Instagram">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-vibrant-orange/20 hover:bg-vibrant-orange/40 text-vibrant-orange"
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5 }}>
                <Link href="#" aria-label="YouTube">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-vibrant-red/20 hover:bg-vibrant-red/40 text-vibrant-red"
                  >
                    <Youtube className="h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-bold mb-4 border-b border-pink-500 pb-2 text-vibrant-yellow">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Inicio", href: "/" },
                { name: "Comunidad", href: "/comunidad" },
                { name: "Información", href: "/informacion" },
                { name: "Perfil", href: "/perfil" },
                { name: "Calendario Escolar", href: "#" },
                { name: "Servicios Escolares", href: "#" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link href={link.href} className="text-pink-100 hover:text-vibrant-yellow flex items-center">
                    <ArrowRight className="h-3 w-3 mr-2 text-vibrant-yellow" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-bold mb-4 border-b border-pink-500 pb-2 text-vibrant-yellow">Contacto</h3>
            <ul className="space-y-3">
              <motion.li className="flex items-start gap-3" whileHover={{ x: 5 }}>
                <MapPin className="h-5 w-5 text-vibrant-cyan mt-0.5" />
                <span className="text-pink-100">Av. Ejemplo #123, Col. Centro, Ciudad de México, CP 12345</span>
              </motion.li>
              <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                <Phone className="h-5 w-5 text-vibrant-cyan" />
                <span className="text-pink-100">(123) 456-7890</span>
              </motion.li>
              <motion.li className="flex items-center gap-3" whileHover={{ x: 5 }}>
                <Mail className="h-5 w-5 text-vibrant-cyan" />
                <span className="text-pink-100">contacto@cbtis29.edu.mx</span>
              </motion.li>
            </ul>

            <div className="mt-6 bg-white/10 p-4 rounded-lg">
              <h4 className="font-medium mb-2 flex items-center text-vibrant-yellow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-vibrant-yellow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Información Importante
              </h4>
              <p className="text-pink-100 text-sm">
                Las inscripciones para el próximo ciclo escolar inician el 1 de junio de 2025.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-vibrant-orange/20 border border-vibrant-orange">
              <p className="text-center font-bold text-vibrant-yellow animate-pulse-slow">
                Página creada por Jesus y Noel
              </p>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-bold mb-4 border-b border-pink-500 pb-2 text-vibrant-yellow">
              Boletín Informativo
            </h3>
            <p className="text-pink-100 mb-4">Suscríbete para recibir noticias y actualizaciones del plantel.</p>
            <div className="space-y-2">
              <Input
                placeholder="Tu correo electrónico"
                type="email"
                className="bg-white/10 border-white/20 text-white placeholder:text-pink-200"
              />
              <Button className="w-full bg-vibrant-yellow hover:bg-vibrant-orange text-black font-bold">
                Suscribir
              </Button>
            </div>

            <div className="mt-6 bg-vibrant-purple/50 p-4 rounded-lg border border-vibrant-pink">
              <h4 className="font-medium mb-2 flex items-center text-vibrant-yellow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-vibrant-yellow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Síguenos en redes sociales
              </h4>
              <p className="text-pink-100 text-sm">
                Mantente al día con todas nuestras actividades y eventos siguiéndonos en nuestras redes sociales.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-pink-500 mt-8 pt-8 text-center text-pink-200"
        >
          <p>© {new Date().getFullYear()} CBTIS 29. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4 mt-2 text-sm">
            <Link href="#" className="hover:text-vibrant-yellow">
              Política de Privacidad
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-vibrant-yellow">
              Términos de Uso
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-vibrant-yellow">
              Mapa del Sitio
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
