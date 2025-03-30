import { ThemeToggle } from "@/components/customcomponents/ThemeToggle";
import { AvatarDemo } from "@/components/demo/Avatar";
import { NavigationMenuDemo } from "@/components/demo/NavigationMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex flex-row p-6 justify-between bg-background shadow-lg">
      <AvatarDemo />
      <NavigationMenuDemo />
      <ThemeToggle />
    </header>
  );
};

export default Header;
