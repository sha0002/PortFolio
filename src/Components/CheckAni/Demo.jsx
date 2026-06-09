import { LocationCard } from "./CardUI";

const locations = [
  {
    city: "India",
    address: "Hawa Mahal, Pink City, Jaipur, Rajasthan India",
    imageUrl:
      "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=964&auto=format&fit=crop",
    directionsUrl: "https://maps.app.goo.gl/TWAmMefs3B22wU5LA",
  },
  {
    city: "Sydney",
    address: "456 Ocean View Road, Bondi Beach, NSW 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1540448051910-09cfadd5df61?w=900&auto=format&fit=crop&q=60",
    directionsUrl: "https://maps.app.goo.gl/3qXzH4fSjK6rB7yP8",
  },
  {
    city: "Sydney",
    address: "456 Ocean View Road, Bondi Beach, NSW 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1540448051910-09cfadd5df61?w=900&auto=format&fit=crop&q=60",
    directionsUrl: "https://maps.app.goo.gl/3qXzH4fSjK6rB7yP8",
  },
];

export default function App() {
  return (
    <div className="min-h-screen! bg-[#000000] text-foreground antialiased border-y-4 border-[#ebf4f5]">
      <div className="mx-auto! max-w-6xl! px-6! py-20! lg:px-8!">
        {/* Header */}
        <div className="mb-16!">
          <p className="text-sm! font-semibold! uppercase! tracking-widest! text-muted-foreground! mb-3!">
            Locations
          </p>
          <h1 className="text-5xl! font-bold! tracking-tight! text-foreground!">
            Our Offices
          </h1>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Find us at our offices around the world. Visit any location or get
            directions to come say hello.
          </p>
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
