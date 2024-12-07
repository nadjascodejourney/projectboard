import AboutCard from "../components/customcomponents/AboutCard.tsx";

export default function AboutPage() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold mb-8 text-center">About me</h2>
      <AboutCard
        name="Nadja Probst"
        profession="Webdeveloper & UX/UI Designer"
        introduction={`
          Hello! My name is Nadja and I'm a web developer and UX/UI designer. 
          I love to create websites and applications and challenge myself by learning new tools and technologies to find the best solution for the problem at hand.
          When I'm not coding, you can find me reading, drawing, or watching cat videos. `}
        profileImageUrl="/icons/Nadja_Probst-black.jpg"
      />
    </div>
  );
}
