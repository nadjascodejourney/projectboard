import AboutCard from "../components/customcomponents/AboutCard.tsx";

export default function AboutPage() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold mb-8 text-center">About me</h2>
      <AboutCard
        name="Nadja Probst"
        profession="Webdeveloper & UX/UI Designer"
        introduction={`
          Hello! I'm a web developer with more than 1 year experience in creating web applications and 6 years of former experience in museum education. Before that, I graduated in Fine Arts and aesthetic education at the University of Regensburg. 
          
          


          I really like to work with React and recently I discoverd the advantages of TypeScript. My approach to development is centered around creating clean, maintainable code that scales well and provides an excellent user experience. 
          I'm curious and therefore, I like to learn new technologies and methodologies. I'm committed to using my skills to create meaningful solutions. 
          
          


          When I'm not coding, you can find me reading, drawing or playing with my cats. `}
        profileImageUrl="/src/assets/icons/Nadja_Probst-black.jpg"
      />
    </div>
  );
}
