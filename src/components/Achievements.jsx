import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { papers } from "../constants";

const PaperCard = ({
  index,
  title,
  venue,
  year,
  pages,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <a href={link} target="_blank" rel="noopener noreferrer">
      <h3 className='text-white font-bold text-[20px] hover:underline'>
        {title}
      </h3>
    </a>
    <hr className='my-4 border-t border-gray-600' />
    <p className='mt-2 text-secondary text-[14px]'>{venue}</p>
    <p className='text-secondary text-[14px]'>
      {year} — {pages}
    </p>
  </motion.div>
);


const Publications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Achievements</p>
          <h2 className={styles.sectionHeadText}>Published and Accepted Papers</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {papers.map((paper, index) => (
          <PaperCard key={paper.title} index={index} {...paper} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Publications, "");
