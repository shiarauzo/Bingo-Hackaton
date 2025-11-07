"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const bingoQuestions = [
  "Usa más de 7 IAs en su día a día",
  "Usa notion para organizarse",
  "Está haciendo una startup",
  "Ha dormido menos de 4 horas anoche",
  "Cumple años en noviembre",
  "Ya está pensando en subir su proyecto a Product Hunt",
  "Es su primera hackaton",
  "Ha viajado a la selva",
  "Tiene un plugin de Figma favorito",
  "Casi llega tarde por el tráfico de Lima",
  "Sigue usando Stack Overflow",
  "Usa IA para documentar PRs",
  "ESPACIO LIBRE",
  "Se sabe un baile completo de Axe bahía",
  "Dijo “tenemos que testear con usuarios” y lo testeó con su amigo del costado",
  "Usa palabras como causa, manx, bro en su día a día",
  "Se sabe una dieta de Susy Diaz",
  "Es fan de anticuchos studio",
  "Escucha cumbia mientras diseña/programa",
  "Ha probado suri",
  "Come panetón con mantequilla",
  "Ha usado Canva para diseñar pantallas",
  "Hace los mejores pitch para demos",
  "Es pixel-perfect",
  "Ha tomado inka cola la moradita",
]

const tabs = ["B", "I", "N", "G", "O"]

export default function BingoPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [activeTab, setActiveTab] = useState(0)

  const handleInputChange = (index: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [index]: value }))
  }

  const handleSubmit = () => {
    console.log("Bingo cartilla submitted:", answers)
    alert("¡Cartilla de Bingo enviada con éxito!")
  }

  const getColumnQuestions = (columnIndex: number) => {
    return Array.from({ length: 5 }, (_, rowIndex) => {
      const index = rowIndex * 5 + columnIndex
      return { question: bingoQuestions[index], index }
    })
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-balance">Cartilla de Bingo</h1>

        <div className="md:hidden mb-6">
          <div className="flex gap-2 border-b border-white/20">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-3 text-2xl font-bold transition-colors ${
                  activeTab === index ? "text-white border-b-2 border-white" : "text-white/40 hover:text-white/60"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden space-y-3 mb-8">
          {getColumnQuestions(activeTab).map(({ question, index }) => (
            <div key={index} className="border-2 border-white/20 rounded-lg p-4 bg-zinc-900">
              <p className="text-base font-medium text-center mb-3">{question}</p>
              {index === 12 ? (
                <div className="flex items-center justify-center text-3xl font-bold text-yellow-400 py-2">★</div>
              ) : (
                <Input
                  type="text"
                  placeholder="Respuesta..."
                  value={answers[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="bg-black/50 border-white/30 text-white placeholder:text-white/40"
                />
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-5 gap-3 mb-8">
          {bingoQuestions.map((question, index) => (
            <div
              key={index}
              className="aspect-square border-2 border-white/20 rounded-lg p-2 flex flex-col justify-between bg-zinc-900 hover:bg-zinc-800 transition-colors"
            >
              <p className="text-sm font-medium text-center text-balance leading-tight mb-2">{question}</p>
              {index === 12 ? (
                <div className="flex items-center justify-center text-2xl font-bold text-yellow-400">★</div>
              ) : (
                <Input
                  type="text"
                  placeholder="Respuesta..."
                  value={answers[index] || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="bg-black/50 border-white/30 text-white placeholder:text-white/40 text-sm h-8"
                />
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button onClick={handleSubmit} size="lg" className="bg-white text-black hover:bg-white/90 font-bold px-12">
            Enviar Cartilla
          </Button>
        </div>
      </div>
    </div>
  )
}
