import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div id="about" className="px-16 flex w-full py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">

        {/* <motion.div
          initial={{ opacity: 0, y: -20, scale:1.1}}
          whileInView={{ opacity: 1, y: 0, scale:1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={crystallized} alt="Crystallized" className="w-[500px] cursor-pointer rounded-2xl shadow-xl shadow-teal-900 transition-all duration-300 hover:-translate-y-5 hover:scale-110 hover:shadow-teal-600 "/>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}

          className="flex max-w-[800px] flex-col items-left justify-left gap-3 text-left backdrop-blur-xs backdrop-brightness-80 rounded-3xl p-6">
          <br />
          <h1 className="text-6xl text-orange-200 opacity-80 transition-all duration-300 hover:opacity-100">Over.</h1>

          <div className="text-md text-orange-200">Nutrilever is al 75 jaar koploper op de internationale melkmarkt. Dankzij onze voedsters voorzien wij heel Nederland dagelijks van 2.4 miljoen liters borstvoeding, waarvan meer dan 95% fair-trade.
            <br /> <br />
            Op onze weg naar 100% fairtrade, zoeken wij naar nieuwe lacteerbare mensen die zich verbonden voelen met onze missie. Wij bij Nutrilever geloven in het product van onze voedsters en zien hen als kloppend hart van ons bedrijf. Dit is jouw kans om onmisbaar onderdeel van onze samenleving te worden!Geïnteresseerd? Schrijf u nu in.https://forms.gle/DCmdjg6nqrF3qzCs6De deadline van de open-call is 21 november.</div>

          <div className="flex w-full flex-row gap-4">

            <a href="#projects" className="basis-0 grow rounded-full border border-transparent bg-taupe-600/80 px-4 py-2.5 text-center text-sm font-medium leading-5 text-white shadow-xs transition-all duration-300 hover:grow-[2] hover:bg-taupe-500 hover:text-lg focus:outline-none">Projects</a>
            <a href="#skills" className="basis-0 grow rounded-full border border-transparent bg-taupe-600/80 px-4 py-2.5 text-center text-sm font-medium leading-5 text-white shadow-xs transition-all duration-300 hover:grow-[2] hover:bg-taupe-500 hover:text-lg focus:outline-none">Skills</a>
            <a href="#contact" className="basis-0 grow rounded-full border border-transparent bg-taupe-600/80 px-4 py-2.5 text-center text-sm font-medium leading-5 text-white shadow-xs transition-all duration-300 hover:grow-[2] hover:bg-taupe-500 hover:text-lg focus:outline-none">Contact</a>
          </div>
          <br />

        </motion.div>



      </div>
    </div>
  )
}

export default Hero