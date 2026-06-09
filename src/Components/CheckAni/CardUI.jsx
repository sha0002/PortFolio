import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "./Button";
import { cn } from "../../lib/utils";

const LocationCard = ({
  city,
  address,
  imageUrl,
  directionsUrl,
  className,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative w-full rounded-2xl bg-[#18181b] p-3",
        "shadow-xl shadow-black/40",
        className
      )}
    >
      {/* Inner image card */}
      <div
        style={{
          transform: "translateZ(40px)",
          transformStyle: "preserve-3d",
          backgroundImage: `url(${imageUrl})`,
        }}
        className="relative! h-[340px]! w-full! rounded-xl! bg-cover! bg-center! shadow-lg! overflow-hidden!"
      >
        {/* Gradient overlay */}
        <div className="absolute! inset-0! bg-gradient-to-t from-black/80! via-black/20! to-transparent!" />

        {/* Content */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="absolute! inset-x-0! bottom-0! p-6! text-white"
        >
          <div className="flex! flex-col! sm:flex-row! sm:items-end! sm:justify-between! gap-4!">
            <div className="min-w-0! flex-1!">
              <h3 className="text-2xl! font-bold! tracking-tight! drop-shadow-lg!">
                {city}
              </h3>
              <p className="mt-1! text-sm! leading-snug! text-white/70! line-clamp-2!">
                {address}
              </p>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Button
                variant="secondary"
                className="bg-white/90! text-[#101013]! hover:bg-white! shadow-md! backdrop-blur-sm!"
                aria-label={`Get directions to our ${city} office`}
              >
                Live Preview
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { LocationCard };
