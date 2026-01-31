"use client";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* O Nama */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Šlep Služba Kobra</h3>
            <p className="text-gray-400 mb-4">
              Profesionalna šlep služba u Beogradu dostupna 24/7. Brza intervencija, pouzdana usluga, transparentne cene.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5 text-orange-500" />
              <a href="tel:0628142131" className="text-white font-bold hover:text-orange-500 transition-colors">
                062 814 2131
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <span className="text-gray-400">Dostupni 24/7</span>
            </div>
          </div>

          {/* Lokacije */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Naše Lokacije</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#lokacije" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Šlep Služba Zemun
                </Link>
              </li>
              <li>
                <Link href="#lokacije" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Šlep Služba Surčin
                </Link>
              </li>
              <li>
                <Link href="#lokacije" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Šlep Služba Novi Beograd
                </Link>
              </li>
              <li>
                <Link href="#lokacije" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Šlep Služba Obrenovac
                </Link>
              </li>
              <li>
                <Link href="#lokacije" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Šlep Služba Zvezdara
                </Link>
              </li>
              <li>
                <Link href="#lokacije" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Šlep Služba Žarkovo
                </Link>
              </li>
            </ul>
          </div>

          {/* Usluge */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Naše Usluge</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Šlepanje Putničkih Vozila</li>
              <li>Šlep Kombija</li>
              <li>Šlepanje i Prevoz Motora</li>
              <li>Izvlačenje Sajlom van Puta</li>
              <li>Šlep Radnih Mašina</li>
              <li>Transport Traktora</li>
              <li>Pomoć na Putu 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Šlep Služba Kobra. Sva prava zadržana.
            </p>
            <a href="https://www.manikamwebsolutions.com/" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors">
              Izrada sajta:{" "}
              <span className="font-bold text-orange-500">ManikamWebSolutions</span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
