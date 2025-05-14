"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, CalendarDays, GraduationCap, FileText, Settings } from "lucide-react"

export default function PerfilPage() {
  const [userData] = useState({
    name: "Carlos Rodríguez",
    id: "CB29-2023-0142",
    grade: "5° Semestre",
    specialty: "Programación",
    email: "carlos.rodriguez@estudiante.cbtis29.edu.mx",
    avatar: "/images/avatars/estudiante.jpg",
  })

  const [schedule] = useState([
    {
      day: "Lunes",
      classes: [
        { time: "7:00 - 8:40", subject: "Matemáticas", teacher: "Mtro. García", room: "A-12" },
        { time: "8:40 - 10:20", subject: "Programación", teacher: "Ing. Martínez", room: "Lab-3" },
        { time: "10:40 - 12:20", subject: "Inglés", teacher: "Lic. Sánchez", room: "B-5" },
      ],
    },
    {
      day: "Martes",
      classes: [
        { time: "7:00 - 8:40", subject: "Física", teacher: "Dr. Ramírez", room: "C-8" },
        { time: "8:40 - 10:20", subject: "Bases de Datos", teacher: "Ing. López", room: "Lab-2" },
        { time: "10:40 - 12:20", subject: "Educación Física", teacher: "Prof. Torres", room: "Cancha" },
      ],
    },
    {
      day: "Miércoles",
      classes: [
        { time: "7:00 - 8:40", subject: "Matemáticas", teacher: "Mtro. García", room: "A-12" },
        { time: "8:40 - 10:20", subject: "Desarrollo Web", teacher: "Ing. Martínez", room: "Lab-3" },
        { time: "10:40 - 12:20", subject: "Historia", teacher: "Lic. Flores", room: "B-7" },
      ],
    },
    {
      day: "Jueves",
      classes: [
        { time: "7:00 - 8:40", subject: "Química", teacher: "Dra. Gutiérrez", room: "Lab-1" },
        { time: "8:40 - 10:20", subject: "Programación", teacher: "Ing. Martínez", room: "Lab-3" },
        { time: "10:40 - 12:20", subject: "Inglés", teacher: "Lic. Sánchez", room: "B-5" },
      ],
    },
    {
      day: "Viernes",
      classes: [
        { time: "7:00 - 8:40", subject: "Matemáticas", teacher: "Mtro. García", room: "A-12" },
        { time: "8:40 - 10:20", subject: "Proyecto Integrador", teacher: "Ing. López", room: "Lab-4" },
        { time: "10:40 - 12:20", subject: "Orientación", teacher: "Lic. Morales", room: "A-5" },
      ],
    },
  ])

  const [grades] = useState([
    {
      semester: "4° Semestre",
      subjects: [
        { name: "Matemáticas IV", grade: 9.2 },
        { name: "Física II", grade: 8.7 },
        { name: "Programación Orientada a Objetos", grade: 9.8 },
        { name: "Bases de Datos", grade: 9.5 },
        { name: "Inglés IV", grade: 8.9 },
        { name: "Historia de México", grade: 8.5 },
      ],
    },
    {
      semester: "3° Semestre",
      subjects: [
        { name: "Matemáticas III", grade: 8.9 },
        { name: "Física I", grade: 8.5 },
        { name: "Programación Estructurada", grade: 9.7 },
        { name: "Redes", grade: 9.0 },
        { name: "Inglés III", grade: 8.8 },
        { name: "Ética", grade: 9.2 },
      ],
    },
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-8 mb-8"
      >
        <Card className="w-full md:w-1/3">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
              <AvatarFallback>{userData.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold mb-1">{userData.name}</h2>
            <p className="text-gray-500 mb-4">{userData.id}</p>
            <div className="grid grid-cols-2 gap-4 w-full mb-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Grado</p>
                <p className="font-semibold">{userData.grade}</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Especialidad</p>
                <p className="font-semibold">{userData.specialty}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6">{userData.email}</p>
            <div className="flex gap-2 w-full">
              <Button variant="outline" className="flex-1">
                <FileText className="mr-2 h-4 w-4" /> Documentos
              </Button>
              <Button variant="outline" className="flex-1">
                <Settings className="mr-2 h-4 w-4" /> Ajustes
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="w-full md:w-2/3">
          <Tabs defaultValue="horario" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="horario" className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" /> Horario
              </TabsTrigger>
              <TabsTrigger value="calificaciones" className="flex items-center gap-2">
                <BarChart className="h-4 w-4" /> Calificaciones
              </TabsTrigger>
              <TabsTrigger value="profesores" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> Profesores
              </TabsTrigger>
            </TabsList>

            <TabsContent value="horario">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Mi Horario</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="lunes" className="w-full">
                      <TabsList className="grid w-full grid-cols-5 mb-4">
                        {schedule.map((day) => (
                          <TabsTrigger key={day.day} value={day.day.toLowerCase()}>
                            {day.day}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {schedule.map((day) => (
                        <TabsContent key={day.day} value={day.day.toLowerCase()}>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Horario</TableHead>
                                <TableHead>Materia</TableHead>
                                <TableHead>Profesor</TableHead>
                                <TableHead>Aula</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {day.classes.map((cls, idx) => (
                                <TableRow key={idx}>
                                  <TableCell className="font-medium">{cls.time}</TableCell>
                                  <TableCell>{cls.subject}</TableCell>
                                  <TableCell>{cls.teacher}</TableCell>
                                  <TableCell>{cls.room}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="calificaciones">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Mis Calificaciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="semestre4" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-4">
                        {grades.map((grade, idx) => (
                          <TabsTrigger key={idx} value={`semestre${4 - idx}`}>
                            {grade.semester}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {grades.map((grade, idx) => (
                        <TabsContent key={idx} value={`semestre${4 - idx}`}>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Materia</TableHead>
                                <TableHead className="text-right">Calificación</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {grade.subjects.map((subject, sidx) => (
                                <TableRow key={sidx}>
                                  <TableCell className="font-medium">{subject.name}</TableCell>
                                  <TableCell className="text-right">
                                    <span
                                      className={`px-2 py-1 rounded ${
                                        subject.grade >= 9
                                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                          : subject.grade >= 8
                                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                            : subject.grade >= 7
                                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                      }`}
                                    >
                                      {subject.grade}
                                    </span>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                            <TableRow className="bg-gray-50 dark:bg-gray-800">
                              <TableCell className="font-bold">Promedio</TableCell>
                              <TableCell className="text-right font-bold">
                                {(
                                  grade.subjects.reduce((acc, subj) => acc + subj.grade, 0) / grade.subjects.length
                                ).toFixed(1)}
                              </TableCell>
                            </TableRow>
                          </Table>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="profesores">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardHeader>
                    <CardTitle>Mis Profesores</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          name: "Mtro. García",
                          subject: "Matemáticas",
                          email: "garcia@cbtis29.edu.mx",
                          office: "Edificio A, Oficina 5",
                        },
                        {
                          name: "Ing. Martínez",
                          subject: "Programación",
                          email: "martinez@cbtis29.edu.mx",
                          office: "Edificio B, Oficina 12",
                        },
                        {
                          name: "Lic. Sánchez",
                          subject: "Inglés",
                          email: "sanchez@cbtis29.edu.mx",
                          office: "Edificio A, Oficina 8",
                        },
                        {
                          name: "Dr. Ramírez",
                          subject: "Física",
                          email: "ramirez@cbtis29.edu.mx",
                          office: "Edificio C, Oficina 3",
                        },
                        {
                          name: "Ing. López",
                          subject: "Bases de Datos",
                          email: "lopez@cbtis29.edu.mx",
                          office: "Edificio B, Oficina 7",
                        },
                        {
                          name: "Lic. Flores",
                          subject: "Historia",
                          email: "flores@cbtis29.edu.mx",
                          office: "Edificio A, Oficina 10",
                        },
                      ].map((teacher, idx) => (
                        <Card key={idx} className="overflow-hidden">
                          <CardContent className="p-4 flex items-center gap-4">
                            <Avatar>
                              <AvatarFallback className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                {teacher.name.substring(teacher.name.indexOf(" ") + 1, teacher.name.indexOf(" ") + 3)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{teacher.name}</h3>
                              <p className="text-sm text-gray-500">{teacher.subject}</p>
                              <p className="text-sm">{teacher.email}</p>
                              <p className="text-sm text-gray-500">{teacher.office}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </div>
  )
}
