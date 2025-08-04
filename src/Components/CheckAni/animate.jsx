import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
                background: "#444",
                padding: "3rem",
                margin: "2rem",
                color: "#fff",
                borderRadius: "10px",
            }}
        >
            Scroll to Reveal Me!
        </motion.div>
    );
};

export default FadeInSection;
