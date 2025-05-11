import { motion } from 'framer-motion';
import { styles } from '../styles';
import { yves, heroBg } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={heroBg}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-r from-[#1e1b4b]/50 to-[#7f30e8]/30 backdrop-blur-xs pointer-events-none" />

        <div className="hidden sm:block absolute top-0 left-0 z-10 w-1/2 h-full bg-black/10 pointer-events-none" />

        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3 z-20 `}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1
              className={`${styles.heroHeadText} text-white/90 font-orbitron uppercase`}>
              Hi, I'm{' '}
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="sm:text-primary sm:text-[90px] 
  text-primary text-[50px] font-mova font-extrabold uppercase drop-shadow-[0_2px_6px_rgba(127,48,232,0.8)]"
              >
                Yves Gonzaga
              </motion.span>
            </h1>
            <motion.p initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className={`${styles.heroSubText} mt-2 text-white/90`}>
              A Full Stack Developer crafting high-performance web experiences.
              <br className="sm:block hidden" />
              Passionate about turning groundbreaking ideas into scalable digital solutions.
            </motion.p>
          </motion.div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute z-20 xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 right-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh] z-20 drop-shadow-[0_10px_20px_rgba(127,48,232,0.4)]"
            src={yves}
            alt="Yves Gonzaga"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
