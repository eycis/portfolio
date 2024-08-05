import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Placeholder',
        1500,
        'Placeholder 02 ',
        1500,
        'Placeholder 03 ',
        1500,
        'Placeholder 04',
        1500
      ]}
      speed={50}
      className = "text-[2rem] md:text-[3rem] text-violet-400 font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;