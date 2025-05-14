"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Menu,
  User,
  LogIn,
  LogOut,
  Settings,
  BookOpen,
  Home,
  Users,
  Info,
  Calendar,
  Bell,
  Search,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [showNotifications, setShowNotifications] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Inicio", href: "/", icon: <Home className="h-5 w-5" /> },
    { name: "Comunidad", href: "/comunidad", icon: <Users className="h-5 w-5" /> },
    { name: "Información", href: "/informacion", icon: <Info className="h-5 w-5" /> },
    { name: "Perfil", href: "/perfil", icon: <User className="h-5 w-5" /> },
  ]

  const notifications = [
    {
      id: 1,
      title: "Nuevo mensaje",
      description: "Tienes un nuevo mensaje de Profesor García",
      time: "Hace 5 minutos",
      read: false,
    },
    {
      id: 2,
      title: "Recordatorio",
      description: "Entrega de proyecto final mañana",
      time: "Hace 1 hora",
      read: false,
    },
    {
      id: 3,
      title: "Calificación publicada",
      description: "Se ha publicado tu calificación de Matemáticas",
      time: "Hace 3 horas",
      read: true,
    },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-white dark:bg-gray-900"
      }`}
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="container mx-auto px-4"
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                className="relative h-10 w-10"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                  alt="CBTIS 29 Logo"
                  fill
                  className="object-cover rounded-full border-2 border-vibrant-orange"
                />
              </motion.div>
              <motion.span
                className="font-bold text-xl hidden sm:inline-block group-hover:text-vibrant-orange transition-colors duration-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                CBTIS 29
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`relative ${isActive ? "text-vibrant-orange dark:text-vibrant-yellow" : ""}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-vibrant-orange dark:bg-vibrant-yellow"
                        layoutId="navbar-indicator"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                  </Button>
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-vibrant-red rounded-full"></span>
              </Button>

              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50"
                  >
                    <div className="p-4 border-b dark:border-gray-700">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">Notificaciones</h3>
                        <Button variant="ghost" size="sm" className="text-xs">
                          Marcar todas como leídas
                        </Button>
                      </div>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto">
                      {notifications.map((notification) => (
                        <motion.div
                          key={notification.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: notification.id * 0.1 }}
                          className={`p-3 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                            !notification.read ? "bg-vibrant-yellow/10 dark:bg-vibrant-yellow/20" : ""
                          }`}
                        >
                          <div className="flex justify-between">
                            <h4 className="font-medium">{notification.title}</h4>
                            {!notification.read && <span className="h-2 w-2 bg-vibrant-orange rounded-full"></span>}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{notification.description}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="p-3 text-center border-t dark:border-gray-700">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-vibrant-orange dark:text-vibrant-yellow text-sm"
                      >
                        Ver todas las notificaciones
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>

            <ModeToggle />

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar>
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
                        alt="Usuario"
                      />
                      <AvatarFallback>CR</AvatarFallback>
                    </Avatar>
                    <span className="absolute bottom-0 right-0 h-3 w-3 bg-vibrant-green rounded-full border-2 border-white dark:border-gray-900"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center p-2">
                    <div className="flex-shrink-0 mr-2">
                      <Avatar className="h-9 w-9">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
                          alt="Usuario"
                        />
                        <AvatarFallback>CR</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <p className="font-medium">Carlos Rodríguez</p>
                      <p className="text-xs text-gray-500">carlos.rodriguez@estudiante.cbtis29.edu.mx</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Horario</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Calificaciones</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    <span>Mensajes</span>
                    <Badge className="ml-auto bg-vibrant-orange text-xs">3</Badge>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configuración</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar Sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button size="sm" className="gap-2 bg-vibrant-orange hover:bg-vibrant-yellow text-white">
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline-block">Iniciar Sesión</span>
              </Button>
            )}

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8">
                      <div className="relative h-10 w-10">
                        <Image
                          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                          alt="CBTIS 29 Logo"
                          fill
                          className="object-cover rounded-full border-2 border-vibrant-orange"
                        />
                      </div>
                      <span className="font-bold text-xl">CBTIS 29</span>
                    </div>
                    <nav className="flex flex-col space-y-4">
                      {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                          <Link key={link.href} href={link.href}>
                            <Button
                              variant="ghost"
                              className={`w-full justify-start ${
                                isActive
                                  ? "bg-vibrant-orange/10 text-vibrant-orange dark:bg-vibrant-yellow/20 dark:text-vibrant-yellow"
                                  : ""
                              }`}
                            >
                              {link.icon}
                              <span className="ml-2">{link.name}</span>
                            </Button>
                          </Link>
                        )
                      })}
                    </nav>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <ModeToggle />
                        <Button variant="outline" size="sm" className="gap-2">
                          <Bell className="h-4 w-4" />
                          <span>Notificaciones</span>
                        </Button>
                      </div>
                      {isLoggedIn ? (
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                          <Avatar>
                            <AvatarImage
                              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
                              alt="Usuario"
                            />
                            <AvatarFallback>CR</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium">Carlos Rodríguez</p>
                            <p className="text-sm text-gray-500">Estudiante</p>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => setIsLoggedIn(false)}>
                            <LogOut className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <Button className="w-full gap-2 bg-vibrant-orange hover:bg-vibrant-yellow text-white">
                          <LogIn className="h-4 w-4" />
                          <span>Iniciar Sesión</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
