import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="my-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.h3
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-eerieBlack font-bold text-[24px] max-w-3xl leading-[30px]">
        A Passionate Full Stack Developer — Bringing Ideas to Life
      </motion.h3>
      <motion.p
        variants={fadeIn('', '', 0.4, 1)}
        className="mt-4 text-white text-[18px] max-w-3xl leading-[30px]">
        I’m a dedicated Full Stack Developer with a passion for turning ideas into functional, high-performance web applications. I thrive on learning new technologies and refining my skills every day.
        With extensive experience in both frontend and backend development, I specialize in building scalable and maintainable solutions for startups and growing businesses.
      </motion.p>
      <motion.h3
        variants={fadeIn('', '', 0.8, 1)}
        className="mt-4 text-eerieBlack font-bold text-[24px] max-w-3xl leading-[30px]">
        What I Do Best:
      </motion.h3>
      <motion.div
        variants={fadeIn('', '', 1.6, 1)}
        className="mt-4 text-white text-[18px] max-w-3xl leading-[30px]">
        <strong>- Frontend Development</strong>
        <motion.br />
        <p className="px-3">I thrive on learning new technologies and refining my skills every day.
          With extensive experience in both frontend and backend development, I specialize in building scalable and maintainable solutions for startups and growing businesses.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('', '', 2.0, 1)}
        className="mt-4 text-white text-[18px] max-w-3xl leading-[30px]">
        <strong>- Backend Development</strong>
        <motion.br />
        <p className="px-3">Proficient in Node.js (Express, NestJS), Java Core, and PHP frameworks such as Laravel and WordPress — building robust and secure APIs and systems.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('', '', 2.4, 1)}
        className="mt-4 text-white text-[18px] max-w-3xl leading-[30px]">
        <strong>- Cloud & Serverless Architecture</strong>
        <motion.br />
        <p className="px-3">Skilled in deploying cost-efficient, scalable solutions using AWS CDK, AWS Lambda, and Firebase.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('', '', 2.8, 1)}
        className="mt-4 text-white text-[18px] max-w-3xl leading-[30px]">
        <strong>- AI Integrations</strong>
        <motion.br />
        <p className="px-3">Experienced in integrating AI features using OpenAI, LangChain, Ollama, and cloud-based LLM APIs, building smart features like chatbots, content generation, recommendation engines, and more.
        </p>
      </motion.div>

    </div>
  );
};

export default SectionWrapper(About, 'about');
