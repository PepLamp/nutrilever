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

          <div className="text-md text-orange-200">Ik ben erachter gekomen wat ik wil doen in mijn leven! <strong className="text-taupe-300 text-lg text-bold">verhalen vertellen.</strong>
            <br /> <br />
            Ik ben een creatieve vormgever die uit techniek, muziek en performance denkt. Ik wil graag betrokken zijn bij creatieve processen waar de termen interactie, avontuur, optimisme en ‘de ander’ centraal staat.
            Ik wil mensen verwonderen. Ik zal mensen op een optimistische en magische avontuur willen laten gaan waar ze meer naar de ander om én opkijken.<br /><br /></div>

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