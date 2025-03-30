import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Footer = () => {
  return (
    <footer className="mt-auto py-4 flex flex-col items-center">
      <NavigationMenu className="flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/imprint" className={navigationMenuTriggerStyle()}>
                Imprint
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p> © Nadja Probst 2025</p>
    </footer>
  );
};

export default Footer;
