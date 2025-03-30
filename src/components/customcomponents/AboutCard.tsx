import { Card, CardContent } from "@/components/ui/card";

interface ProfileCardProps {
  name?: string;
  profession?: string;
  introduction?: string;
  profileImageUrl?: string;
}

export default function AboutCard({
  name,
  profession,
  introduction,
  profileImageUrl,
}: ProfileCardProps) {
  return (
    <Card className="w-full mb-7 pt-10 bg-transparent shadow-none">
      <CardContent>
        <img
          src={profileImageUrl}
          alt={`Profile of ${name}`}
          className=" w-full object-cover shadow-lg rounded-md"
        />
        <section className="text-center">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-xl text-muted-foreground mt-2">{profession}</p>
        </section>
        <section className="max-w-none text-lg ">
          {introduction?.split("\n\n").map(
            (
              paragraph,
              index // Split paragraphs by double line breaks, which means that there are two newlines between paragraphs
            ) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            )
          )}
        </section>
      </CardContent>
    </Card>
  );
}
