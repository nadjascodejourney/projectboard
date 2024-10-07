import { AvatarDemo } from "@/components/demo/Avatar";
import { NavigationMenuDemo } from "@/components/demo/NavigationMenu";

const Header = () => {
  return (
    <header className="flex flex-row p-4 gap-6">
      <AvatarDemo />
      <NavigationMenuDemo />
    </header>
  );
};

export default Header;
