import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
    sequence={[
      'React Developer',
      1500,
      'TypeScript Enthusiast',
      1500,
      'Clean UX Advocate',
      1500,
      'Creative Engineer',
      1500,
      'Problem Solver',
      1500,
      'Tech Explorer',
      1500,
      'Detail Lover',
      1500
    ]}
      speed={50}
      className = "text-[1rem] pt-5 md:text-[1.5rem] text-gray-600 font-mono"
      repeat={Infinity}
    />
  );
};

export default TextEffect;