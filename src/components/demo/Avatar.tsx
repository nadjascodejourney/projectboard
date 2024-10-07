import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="/icons/favicon-32x32.png" alt="Logo" />
      <AvatarFallback>NP</AvatarFallback>
    </Avatar>
  );
}
