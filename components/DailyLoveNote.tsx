"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const loveMessages = [
  "Ik hou van je tot de maan en terug 💫",
  "Jouw dag maak mijn dag 😍",
  "Door jou voelt thuis als thuis 🏠",
  "Je bent mijn favoriete persoon op deze planeet 🌍",
  "Samen met jou is alles beter 💕",
  "Je bent het eerste waar ik aan denk als ik wakker word ☀️",
  "Jij maakt mijn hart sneller kloppen 💓",
  "Met jou voelt elke dag als een avontuur 🌟",
  "Je bent mijn geluk in mensenvorm 😊",
  "Ik ben zo dankbaar dat ik jou heb gevonden 🙏",
  "Je bent mijn veilige haven in deze wereld ⚓",
  "Met jou is alles mogelijk 🚀",
  "Je bent mijn favoriete droom die uitkwam ✨",
  "Ik hou meer van je dan woorden kunnen zeggen 💝",
  "Je bent mijn zonnetje op een bewolkte dag ☀️",
  "Met jou wil ik oud worden 👴👵",
  "Je bent het mooiste wat me ooit is overkomen 🌹",
  "Ik ben verliefd op wie je bent 💘",
  "Je bent mijn thuis, waar je ook bent 🏡",
  "Met jou lach ik het hardst 😂",
  "Je bent mijn favoriete verhaal om te vertellen 📖",
  "Ik kies elke dag opnieuw voor jou 💍",
  "Je bent mijn grootste geluk 🍀",
  "Met jou is het leven een feest 🎉",
  "Je bent mijn hartslag 💗",
  "Ik ben trots dat ik jouw persoon mag zijn 👑",
  "Je bent mijn favoriete plek om te zijn 🗺️",
  "Met jou voelt alles goed 🤗",
  "Je bent mijn eeuwige liefde 💞",
  "Je blik zegt meer dan duizend woorden 👀",
  "Met jou dans ik door het leven 💃🕺",
  "Jij bent het antwoord op al mijn vragen 🧩",
  "Als ik bij jou ben, is alles compleet 🫶",
  "Je bent het begin en einde van mijn dag 🌅🌃",
  "Ik zou duizend keer opnieuw voor jou vallen 🔁❤️",
  "Je liefde voelt als thuiskomen 🏠💖",
  "Je stem is mijn favoriete melodie 🎶",
  "Elke seconde zonder jou duurt te lang ⏳",
  "Jij bent de reden dat ik glimlach zonder reden 😊",
  "Met jou wil ik elke zonsondergang delen 🌇",
  "Ik zou voor altijd in jouw armen willen blijven 🤗",
  "Je aanwezigheid maakt alles lichter ✨",
  "Jij bent mijn rust in de storm 🌪️➡️🌤️",
  "Jij maakt gewone dagen bijzonder 🌼",
  "Als liefde een taal is, ben jij mijn moedertaal 🗣️❤️",
  "Je bent het mooiste hoofdstuk in mijn leven 📚",
  "Als ik aan geluk denk, denk ik aan jou 🌟",
  "Jij vult mijn hart met licht 💡💓",
  "Met jou voel ik me écht gezien 👁️👁️",
  "Je liefde voelt als een warme deken 🛌",
  "Jij bent mijn kompas als ik de weg kwijt ben 🧭",
  "Je bent mijn zon én maan — dag en nacht 🌞🌜",
  "Met jou vergeet ik de tijd ⏰❤️",
  "Je liefde is mijn favoriete verslaving 💘",
  "Jij laat mijn wereld draaien 🌍🔁",
  "Je hebt mijn hart zachtjes gestolen 💞🔒",
  "Ik blijf elke dag opnieuw voor je vallen 🪂❤️",
  "Met jou zijn stiltes nooit ongemakkelijk 🤫💖",
  "Jij bent het mooiste wat ik ooit voelde 💗",
  "Jij bent mijn zonnestraal na regen 🌦️☀️",
  "Mijn hart herkent jou als thuis 🏡💓",
  "Elke knuffel van jou is magie ✨🤗",
  "Je liefde maakt me elke dag sterker 💪❤️",
  "Jij bent mijn beste toevlucht, altijd 🌤️",
  "Als jij lacht, smelt mijn hart 🧊➡️❤️",
  "Je hebt een plekje in mijn hart, voor altijd 🪄💘"
]

export default function DailyLoveNote() {
  const [isOpen, setIsOpen] = useState(false)

  const now = new Date();
  const uniqueDay = now.getFullYear() * 1000 + now.getMonth() * 100 + now.getDate();
  const todayIndex = uniqueDay % loveMessages.length;
  const todayMessage = loveMessages[todayIndex];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 right-4 z-[9999] max-w-xs bg-white rounded-2xl shadow-lg p-4 border border-pink-100"
          >
            <div className="text-center space-y-3">
              <p className="text-sm font-medium text-pink-700 leading-relaxed">{todayMessage}</p>
              <div className="text-xs text-pink-400">Dagelijks liefdesbriefje 💌</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-2 right-4 z-[9999] sm:top-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg flex items-center justify-center text-lg transition-colors duration-200"
          aria-label="Toon dagelijks liefdesbriefje"
        >
          💌
        </motion.button>
      </div>
    </>
  )
}
