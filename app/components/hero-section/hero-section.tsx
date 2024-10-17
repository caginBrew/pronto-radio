import { useTypewriter, Cursor } from "react-simple-typewriter";
export interface IHeroSection {
  title: string[]; //bu prop
}

const HeroSection: React.FC<IHeroSection> = ({ title }) => {
  const [text] = useTypewriter({
    words: title, // title prop'undaki kelimeleri kullan
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 30,
  });

  return (
    <div>
      <h1 className="text-primary sm:text-black text-[32px] font-bold">
        Listen to
        {text}
        <Cursor />
      </h1>
    </div>
  );
};

export default HeroSection;
