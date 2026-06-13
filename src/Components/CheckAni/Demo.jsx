import { LocationCard } from "./CardUI";
import FadeIn from '../About/FadeIn';

const locations = [
  {
    city: "AIRISH TECH",
    address: "Created and designed the AirishTech website using HTML, CSS, JavaScript, and Bootstrap.",
    imageUrl:
      "/project/airish-tech.png",
    directionsUrl: "https://airishtech.com",
  },
  {
    city: "The Vitality Now",
    address: "Designed and developed a modern, responsive wellness website featuring health-focused content, engaging UI/UX, smooth animations, and mobile-friendly layouts to enhance user engagement and accessibility.",
    imageUrl:
      "/project/thevatalitynow.png",
    directionsUrl: "https://thevitalitynow.netlify.app",
  },
  {
    city: "MyArtFoundation",
    address: "Developed a responsive educational website focused on art learning, creative development, and student engagement. Implemented modern UI/UX, intuitive navigation, and mobile-friendly layouts to provide an accessible and interactive learning experience.",
    imageUrl:
      "/project/myart.png",
    directionsUrl: "https://myartfoundation.com/",
  },
];

export default function App() {
  return (
    <div className="min-h-screen! Project bg-[#000000] text-foreground antialiased border-y-4 border-[#ebf4f5]">
      <div className="mx-auto! max-w-6xl! px-6! py-20! lg:px-8!">
        {/* Header */}
        <div className="mb-16!">
          <FadeIn delay={0.1} y={20}>
            <p className="text-sm! font-semibold! uppercase! tracking-widest! text-muted-foreground! mb-3!">
              Quality Work
            </p>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <h1 className="text-5xl! font-bold! tracking-tight! text-foreground!">
              Our Projects
            </h1>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Transforming ideas into responsive and engaging digital experiences.
            </p>
          </FadeIn>
        </div>

        {/* Card grid */}
        <div
          className="grid grid-cols-1 gap-10 md:grid-cols-2"
          style={{ perspective: "1200px" }}
        >
          {locations.map((location, index) => (
            <LocationCard
              key={location.city}
              city={location.city}
              address={location.address}
              imageUrl={location.imageUrl}
              directionsUrl={location.directionsUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
