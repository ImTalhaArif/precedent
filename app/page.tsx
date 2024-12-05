import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";

export default async function Home() {
  // Fetch GitHub stars
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      next: { revalidate: 86400 },
    }
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      {/* Header Section */}
      <div className="z-10 w-full max-w-xl px-5 xl:px-0" style={{backgroundColor: '#121212', borderRadius: '10px', padding: '20px'}}>
        {/* Twitter Announcement */}
        <a
          href="https://twitter.com/steventey/status/1613928948915920896"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-900 px-7 py-2 transition-colors hover:bg-blue-800"
        >
          <Twitter className="h-5 w-5 text-blue-400" />
          <p className="text-sm font-semibold text-blue-400">
            Connect with us
          </p>
        </a>

        {/* Main Heading */}
        <h1
          className="animate-fade-up bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Pioneering tomorrow, Today!
        </h1>

        {/* Subheading */}
        <p
          className="mt-6 animate-fade-up text-center text-gray-400 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          WE'LL MAKE YOU AN OFFER YOU CANNOT REFUSE! EvoDynamics can redefine success for you, it's the AI-driven innovation.
        </p>

        {/* Call-to-Action Buttons */}
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-white bg-black px-5 py-2 text-sm text-white transition hover:bg-white hover:text-black"
            href= ''
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-4 w-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>See for Yourself</p>
          </a>
          
        </div>
      </div>

      {/* Features Section */}
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0 nextstop" id="nextstop">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={title === "Beautiful, reusable components" ? <ComponentGrid /> : demo}
            large={large}
          />
        ))}
      </div>
    </>
  );
}

// Features Data
const features = [
  {
    title: "Beautiful, reusable components",
    description:
      "Pre-built, beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com), and [Framer Motion](https://framer.com/motion). Used in production on [Dub.co](https://dub.co).",
    large: true,
  },
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <WebVitals />,
  },
  {
    title: "One-click Deploy",
    description:
      "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Built-in Auth",
    description:
      "Precedent comes with authentication via [Clerk](https://clerk.com).",
    demo: (
      <div className="flex items-center justify-center space-x-10">
        <Image alt="Clerk logo" src="/clerk.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Hooks, utilities, and more",
    description:
      "Precedent offers a collection of hooks, utilities, and `@vercel/og`.",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold text-white">useIntersectionObserver</span>
        <span className="font-mono font-semibold text-white">useLocalStorage</span>
        <span className="font-mono font-semibold text-white">useScroll</span>
        <span className="font-mono font-semibold text-white">nFormatter</span>
        <span className="font-mono font-semibold text-white">capitalize</span>
        <span className="font-mono font-semibold text-white">truncate</span>
      </div>
    ),    
  },
];
