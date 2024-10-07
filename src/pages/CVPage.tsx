import CVTemplate from "@/components/customcomponents/CVTemplate";

const CVPage = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center">CV</h2>
      <CVTemplate />
    </main>
  );
};

export default CVPage;
