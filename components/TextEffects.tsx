import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
    sequence={[
      'React & TypeScript developer',
      1500,
      'Problem solver with a design mindset',
      1500,
      'Engineer with a passion for clean UX',
      1500,
      'Detail-oriented & data-driven',
      1500,
      'Always learning something new',
      1500
    ]}
      speed={50}
      className = "text-[2rem] md:text-[1.5rem] text-gray-600 font-mono"
      repeat={Infinity}
    />
  );
};

export default TextEffect;