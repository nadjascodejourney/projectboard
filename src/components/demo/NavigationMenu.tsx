import * as React from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const workItems: {
  id: string;
  title: string;
  href: string;
  description: string;
}[] = [
  {
    id: "webdev",
    title: "Webdevelopment",
    href: "/webdevprojects",
    description: "Current and past Projects.",
  },
  {
    id: "webdesign",
    title: "Webdesign",
    href: "/webdesignprojects",
    description: "Designs, I´ve created for websites.",
  },
  {
    id: "otherProjects",
    title: "Other Projects",
    href: "/otherprojects",
    description: "Other projects, I´ve done in the past.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/about" className={navigationMenuTriggerStyle()}>
            About
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Work</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 sm:w-[200px] md:w-[500px] lg:w-[600px] md:grid-cols-2">
              {workItems.map((workItem) => (
                <ListItem
                  key={workItem.id}
                  title={workItem.title}
                  href={workItem.href}
                >
                  {workItem.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/contact" className={navigationMenuTriggerStyle()}>
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={props.href || "#"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
