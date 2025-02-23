import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const playerLinks = [
  { href: "/player/add-player", label: "Add Player" },
  { href: "/player/players-stats", label: "Players Stats" },
  { href: "/player/players-list", label: "Players List" },
];

const matchLinks = [
  { href: "/match/add-match", label: "Add Match" },
  { href: "/match/matches-list", label: "Matches List" },
];

export const metadata: Metadata = {
  title: "Futebolada",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <nav className="bg-black text-blue-400 p-4 flex justify-between font-bold">
          <h1 className="text-xl font-bold">Futebolada</h1>
          <div className="space-x-6 flex items-center">
            <Link href="/" className="hover:underline">Home</Link>
            
            {/* Player Dropdown */}
            <div className="relative group">
              <span className="cursor-pointer hover:underline">Player</span>
              <div className="absolute hidden group-hover:block w-40 right-0 pt-2 z-50">
                <div className="bg-black border border-blue-900 rounded-lg shadow-lg p-2 space-y-2">
                  {playerLinks.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href} 
                      className="block hover:underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Match Dropdown */}
            <div className="inline-block relative group">
              <span className="cursor-pointer hover:underline">Match</span>
              <div className="absolute hidden group-hover:block w-40 right-0 pt-2">
                <div className="bg-black border border-blue-900 rounded-lg shadow-lg p-2 space-y-2">
                  {matchLinks.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href} 
                      className="block hover:underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
