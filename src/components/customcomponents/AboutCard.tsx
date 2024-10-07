import { Card, CardContent } from "@/components/ui/card";

interface ProfileCardProps {
  name: string;
  profession: string;
  introduction: string;
  profileImageUrl: string;
}

export default function AboutCard({
  name,
  profession,
  introduction,
  profileImageUrl,
}: ProfileCardProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto pt-10">
      <CardContent className="space-y-8">
        <div className="flex justify-center">
          <img
            src={profileImageUrl}
            alt={`Profile of ${name}`}
            className=" w-full  object-cover shadow-lg"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-xl text-muted-foreground mt-2">{profession}</p>
        </div>
        <div className="max-w-none text-lg ">
          {introduction.split("\n\n").map(
            (
              paragraph,
              index // Split paragraphs by double line breaks, which means that there are two newlines between paragraphs
            ) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}
