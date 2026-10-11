import type { NextConfig } from "next";

// Vedlejší domény vedou na hlavní red-sea.cz: úvodní stránka na tematickou sekci,
// ostatní cesty beze změny (morska-sul.cz/x → red-sea.cz/x).
const SATELLITE_DOMAINS = [
  { host: "(www\\.)?morska-sul\\.cz", landing: "/salt" },
  { host: "(www\\.)?redsea-akvaria\\.cz", landing: "/aquariums" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return SATELLITE_DOMAINS.flatMap(({ host, landing }) => [
      {
        source: "/",
        has: [{ type: "host" as const, value: host }],
        destination: `https://red-sea.cz${landing}`,
        permanent: true,
      },
      {
        source: "/:path+",
        has: [{ type: "host" as const, value: host }],
        destination: "https://red-sea.cz/:path+",
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
