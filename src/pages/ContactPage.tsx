import ContactForm from "@/components/customcomponents/ContactForm";

const ContactPage = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
      <ContactForm />
    </main>
  );
};

export default ContactPage;
