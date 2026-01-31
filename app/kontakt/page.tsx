import React from "react";
import ContactForm from "@/components/ContactForm";
import { Phone, Clock, MapPin, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Slep Služba Kobra Beograd | 062 814 2131",
  description: "Kontaktirajte slep službu Kobra u Beogradu. Dostupni 24/7 na telefon 062 814 2131. Brza intervencija na svim lokacijama: Zemun, Surčin, Novi Beograd, Dušanovac, Žarkovo.",
  keywords: ["kontakt slep služba", "slep služba telefon Beograd", "hitna pomoć vozila", "slep služba non-stop"],
};

const KontaktPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Kontaktirajte Slep Službu Kobra
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Dostupni smo 24 sata dnevno, 7 dana u nedelji. Pozovite nas u bilo koje doba dana ili noći kada vam je potrebna pomoć.
            </p>
          </div>

          {/* Kontakt Informacije */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-200">
              <Phone className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="font-bold text-xl mb-2 text-gray-900">Telefon</h3>
              <a
                href="tel:0628142131"
                className="text-blue-600 font-bold text-lg hover:text-blue-800"
              >
                062 814 2131
              </a>
              <p className="text-sm text-gray-600 mt-2">Pozovite odmah</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-200">
              <Clock className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="font-bold text-xl mb-2 text-gray-900">Radno Vreme</h3>
              <p className="text-gray-700 font-semibold">24/7</p>
              <p className="text-sm text-gray-600 mt-2">Non-stop dostupni</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-200">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="font-bold text-xl mb-2 text-gray-900">Lokacije</h3>
              <p className="text-gray-700">Ceo Beograd</p>
              <p className="text-sm text-gray-600 mt-2">Brza intervencija</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-200">
              <Mail className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="font-bold text-xl mb-2 text-gray-900">Email</h3>
              <a
                href="mailto:info@slepsluzba-kobra.rs"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                info@slepsluzba-kobra.rs
              </a>
              <p className="text-sm text-gray-600 mt-2">Pošaljite upit</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kontakt Forma */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Pošaljite Nam Poruku
              </h2>
              <p className="text-gray-600 mb-6">
                Popunite formular i kontaktiraćemo vas u najkraćem roku.
              </p>
              <ContactForm />
            </div>

            {/* Dodatne Informacije */}
            <div>
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-xl shadow-lg mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Hitna Intervencija?
                </h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Za hitne slučajeve odmah nas pozovite na telefon. Naš tim će stići kod vas u najkraćem mogućem roku.
                </p>
                <a
                  href="tel:0628142131"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center px-6 py-4 rounded-lg font-bold text-xl transition-colors"
                >
                  <Phone className="inline w-6 h-6 mr-2" />
                  062 814 2131
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Pokrivene Oblasti
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    Slep Služba Zemun
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    Slep Služba Surčin
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    Slep Služba Novi Beograd
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    Slep Služba Dušanovac
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    Slep Služba Žarkovo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktPage;
