import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="container mx-auto font-raleway mt-7 py-7 text-backgroundSecondary dark:text-textPrimary sm:px-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold cursor-pointer">
          <Link href="/">
            <a>Supermind</a>
          </Link>
        </h1>
        <div className="flex gap-7 text-lg items-center">
          <h1 className="sm:hidden cursor-pointer hover:text-textSecondary transition">
            <Link href="/">
              <a>About</a>
            </Link>
          </h1>
          <h1 className="sm:hidden cursor-pointer hover:text-textSecondary transition">
            <Link href="/">
              <a>Contact</a>
            </Link>
          </h1>
          {mounted && (
            <>
              {theme === "dark" ? (
                <div className="text-xl">
                  <SunIcon
                    className="p-1.5 w-9 h-9 rounded transition ring-textList	 hover:ring cursor-pointer"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  />
                </div>
              ) : (
                <MoonIcon
                  className="p-1.5 w-9 h-9 rounded transition ring-textList hover:ring cursor-pointer"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
