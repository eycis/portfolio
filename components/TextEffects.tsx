import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Typescript developer',
        1500,
        'Engineer with a Creative Eye',
        1500,
        'Lifelong Learner',
        1500
      ]}
      speed={50}
      className = "text-[2rem] md:text-[3rem] text-gray-600 font-mono"
      repeat={Infinity}
    />
  );
};

export default TextEffect;