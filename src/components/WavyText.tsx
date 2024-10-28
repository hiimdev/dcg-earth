import { type FC } from 'react';
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

interface Props extends HTMLMotionProps<'div'> {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}

const WavyText: FC<Props> = ({ text, delay = 0.1, duration = 1.5, className, ...props }: Props) => {
  const letters = text.split(' ');

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: duration },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <motion.p
      className={`${className} break-words`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {letters?.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: duration, delay: index * delay }}
          className="mr-2 inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default WavyText;
