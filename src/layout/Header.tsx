import { ThemeToggle } from "@/components/customcomponents/ThemeToggle";
import { AvatarDemo } from "@/components/demo/Avatar";
import { NavigationMenuDemo } from "@/components/demo/NavigationMenu";

const Header = () => {
  return (
    <header className="flex flex-row p-4 justify-evenly">
      <AvatarDemo />
      <NavigationMenuDemo />
      <ThemeToggle />
    </header>
  );
};

export default Header;
