import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'typescript developer',
        1500,
        'engineer with a creative eye',
        1500,
        'lifelong learner',
        1500
      ]}
      speed={50}
      className = "text-[2rem] md:text-[3rem] text-gray-600 font-mono"
      repeat={Infinity}
    />
  );
};

export default TextEffect;