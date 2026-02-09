import { services, locations } from "@/constants";
import { Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen text-white py-8 md:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG-08b71e9e63d32650aee60b4ac0494453-V.jpg"
            alt="Šlep služba Kobra - Profesionalno šlepanje vozila"
            fill
            className="object-cover"
            priority
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z- h-full flex items-end pb-8 md:pb-12">
          <div className="max-w-4xl mx-auto text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
              Šlep Služba Kobra Beograd
            </h1>
            <p className="text-lg md:text-2xl mb-5 md:mb-8 text-muted drop-shadow-md">
              Profesionalno šlepanje vozila u Beogradu 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-12">
              <a
                href="tel:0628142131"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-lg md:text-xl flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                062 814 2131
              </a>
              <a
                href="#lokacije"
                className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-lg md:text-xl transition-colors shadow-lg hover:shadow-xl"
              >
                Pogledajte Lokacije
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-4 text-center">
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-2.5 md:p-3 rounded-lg">
                <Clock className="w-8 h-8 md:w-10 md:h-10 mb-1 md:mb-1.5 text-orange-400" />
                <p className="font-semibold text-xs md:text-sm">
                  Dostupni 24/7
                </p>
              </div>
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-2.5 md:p-3 rounded-lg">
                <MapPin className="w-8 h-8 md:w-10 md:h-10 mb-1 md:mb-1.5 text-orange-400" />
                <p className="font-semibold text-xs md:text-sm">
                  6 Lokacija u Beogradu
                </p>
              </div>
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-2.5 md:p-3 rounded-lg">
                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 mb-1 md:mb-1.5 text-orange-400" />
                <p className="font-semibold text-xs md:text-sm">
                  Brza Intervencija
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Nama Section - SEO Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              Najpouzdanija Šlep Služba u Beogradu
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                <strong>Šlep služba Kobra</strong> pruža profesionalne usluge
                šlepanja vozila 24/7 na celoj teritoriji Beograda. Pokrivamo{" "}
                <strong>
                  Zemun, Surčin, Novi Beograd, Obrenovac, Zvezdaru, Žarkovo
                </strong>{" "}
                i sve ostale opštine sa brzom intervencijom i modernom opremom.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Šlepamo sve tipove vozila - automobile, kombije, teretna vozila,
                motore i radne mašine. Naš tim iskusnih vozača garantuje
                bezbedan transport sa transparentnim cenama i bez skrivenih
                troškova.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Pozovite nas na broj{" "}
                <a
                  href="tel:0628142131"
                  className="text-blue-600 font-bold hover:text-blue-800"
                >
                  062 814 2131
                </a>{" "}
                za brzu pomoć na putu!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cenovnik Section */}
      {/* <section id="cenovnik" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
              Cenovnik
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              Transparentne cene bez skrivenih troškova
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-500 hover:shadow-2xl transition-shadow">
                <div className="text-center">
                  <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
                    <MapPin className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Šlepanje u Beogradu
                  </h3>
                  <div className="mb-6">
                    <p className="text-gray-600 mb-2">Cena po intervenciji</p>
                    <p className="text-4xl md:text-5xl font-bold text-orange-600">
                      2.500 - 6.000
                    </p>
                    <p className="text-xl text-gray-700 mt-2">RSD</p>
                  </div>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Brza intervencija</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Svi delovi Beograda</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Dostupno 24/7</span>
                    </li>
                  </ul>
                </div>
              </div>

            
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-500 hover:shadow-2xl transition-shadow">
                <div className="text-center">
                  <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Šlep van Beograda
                  </h3>
                  <div className="mb-6">
                    <div className="mb-4">
                      <p className="text-gray-600 mb-2">Do 100 km</p>
                      <p className="text-3xl md:text-4xl font-bold text-blue-600">
                        120 RSD/km
                      </p>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600 mb-2">Preko 100 km</p>
                      <p className="text-2xl font-bold text-blue-600">
                        Po dogovoru
                      </p>
                    </div>
                  </div>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Cela Srbija</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Bez dodatnih troškova</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center bg-blue-50 rounded-xl p-6 border border-blue-200">
              <p className="text-gray-700 text-lg mb-4">
                <strong>Napomena:</strong> Finalna cena zavisi od udaljenosti, tipa vozila i specifičnosti intervencije.
              </p>
              <a
                href="tel:0628142131"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-xl transition-colors shadow-lg"
              >
                <Phone className="w-6 h-6" />
                Pozovite za tačnu cenu
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl text-muted font-bold mb-6">
              Potrebna Vam Je Pomoć na Putu?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-orange-50">
              Pozovite nas odmah i naš tim će stići kod vas u najkraćem roku!
            </p>
            <a
              href="tel:0628142131"
              className="inline-flex items-center gap-3 bg-white text-orange-600 hover:bg-orange-50 px-10 py-5 rounded-lg font-bold text-2xl transition-colors shadow-lg"
            >
              <Phone className="w-8 h-8" />
              062 814 2131
            </a>
            <p className="mt-8 text-orange-50 text-lg">
              Dostupni 24 sata dnevno, 7 dana u nedelji
            </p>
          </div>
        </div>
      </section>
      {/* Lokacije Section */}
      <section id="lokacije" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
              Naše Lokacije u Beogradu
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Pokrivamo sve delove Beograda sa brzom intervencijom i
              profesionalnom uslugom
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-lg md:rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow"
                >
                  <div className="relative h-48 sm:h-56 md:h-64 w-full">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                      quality={75}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 md:p-6 lg:p-8">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-blue-900">
                      {location.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                      {location.description}
                    </p>
                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-start gap-2 md:gap-3">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-sm sm:text-base text-gray-700">
                          <strong>Pokrivenost:</strong> {location.coverage}
                        </p>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3">
                        <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <a
                          href={`tel:${location.phone.replace(/\s/g, "")}`}
                          className="text-blue-600 font-bold hover:text-blue-800 text-base md:text-lg"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>
                    <a
                      href={`tel:${location.phone.replace(/\s/g, "")}`}
                      className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-bold text-sm md:text-base transition-colors"
                    >
                      Pozovite Odmah
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Zašto Izabrati Nas Section */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              Zašto Izabrati Šlep Službu Kobra?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Dostupnost 24/7</h3>
                  <p className="text-blue-100">
                    Naša slep služba radi non-stop, svakog dana u godini. Bez
                    obzira da li je reč o radnom danu, vikendu ili praznicima,
                    tu smo za vas.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Brza Intervencija</h3>
                  <p className="text-sm md:text-base text-blue-100">
                    Zahvaljujući strateškom pozicioniranju naših vozila širom
                    Beograda, možemo brzo doći do vas i pomoći vam u najkraćem
                    roku.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Profesionalan Tim</h3>
                  <p className="text-sm md:text-base text-blue-100">
                    Naši vozači su iskusni profesionalci koji znaju kako da se
                    brinu o vašem vozilu i garantuju siguran transport.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparentne Cene</h3>
                  <p className="text-sm md:text-base text-blue-100">
                    Bez skrivenih troškova i neočekivanih naknada. Cena koju
                    dogovorimo je cena koju plaćate.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Moderna Oprema</h3>
                  <p className="text-sm md:text-base text-blue-100">
                    Koristimo savremena slep vozila koja mogu da prevoze sve
                    tipove vozila - od malih automobila do teretnih vozila.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Pouzdanost</h3>
                  <p className="text-sm md:text-base text-blue-100">
                    Sa stotinama zadovoljnih klijenata, izgradili smo reputaciju
                    kao najpouzdanija slep služba u Beogradu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Usluge Section */}
      <section id="usluge" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
              Naše Usluge
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Pružamo kompletne usluge slepanja i pomoći na putu sa pristupom
              24/7
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200"
                >
                  <div className="text-4xl md:text-5xl mb-3 md:mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
