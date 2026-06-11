import React from "react";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
// import ContactButton from "./ContactButton";

const About = () => {
    const paragraphText =
        "Hello! I'm Shashank 24 Years Old, a Frontend Developer based in India. I'm very passionate about the work that i do. i'm very much intrested in coding and Front-end Development, also love to learn new programming skills and Technology, My Dream is to become a successful Web Developer.";

    return (
        <section
            id="About"
            className="relative! About min-h-screen! flex! flex-col! items-center! justify-center! bg-[#010103]! overflow-hidden! px-5! sm:px-8! md:px-10! py-20!"
            style={{ contentVisibility: "auto" }}
        >
            {/* Absolute Decorative 3D Images on Corners */}

            {/* 1. Top-left: Moon icon */}
            <div className="absolute! top-[4%]! left-[1%]! sm:left-[2%]! md:left-[4%]! z-10! select-none! pointer-events-none!">
                <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
                    <img
                        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
                        alt="Decorative Moon"
                        referrerPolicy="no-referrer"
                        className="w-[120px]! sm:w-[160px]! md:w-[210px]! h-auto! object-contain! drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]! animate-pulse!"
                        style={{ animationDuration: "6s" }}
                    />
                </FadeIn>
            </div>

            {/* 2. Bottom-left: 3D Object */}
            <div className="absolute! bottom-[8%]! left-[3%]! sm:left-[6%]! md:left-[10%]! z-10! select-none! pointer-events-none!">
                <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
                    <img
                        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
                        alt="Decorative Spiky Shape"
                        referrerPolicy="no-referrer"
                        className="w-[100px]! sm:w-[140px]! md:w-[180px]! h-auto! object-contain! drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] animate-bounce!"
                        style={{ animationDuration: "8s" }}
                    />
                </FadeIn>
            </div>

            {/* 3. Top-right: Lego Icon */}
            <div className="absolute! top-[4%]! right-[1%]! sm:right-[2%]! md:right-[4%]! z-10! select-none! pointer-events-none!">
                <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
                    <img
                        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
                        alt="Decorative Lego block"
                        referrerPolicy="no-referrer"
                        className="w-[120px]! sm:w-[160px]! md:w-[210px]! h-auto! object-contain! drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] animate-bounce!"
                        style={{ animationDuration: "7s" }}
                    />
                </FadeIn>
            </div>

            {/* 4. Bottom-right: 3D Group */}
            <div className="absolute! bottom-[8%]! right-[3%]! sm:right-[6%]! md:right-[10%]! z-10! select-none! pointer-events-none!">
                <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
                    <img
                        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
                        alt="Decorative Group Elements"
                        referrerPolicy="no-referrer"
                        className="w-[130px]! sm:w-[170px]! md:w-[220px]! h-auto! object-contain! drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] animate-pulse!"
                        style={{ animationDuration: "9s" }}
                    />
                </FadeIn>
            </div>

            {/* Main Centered Content Stack */}
            <div className="flex! flex-col! items-center! justify-center! text-center! max-w-[800px]! z-20! relative! w-full!">
                {/* Heading: "About me" */}
                <FadeIn delay={0} y={40}>
                    <h2 className="hero-heading1 font-black! uppercase! leading-none! tracking-tight! text-center! text-[clamp(2.5rem,10vw,140px)]! mb-10! sm:mb-14! md:mb-16!">
                        About me
                    </h2>
                </FadeIn>

                {/* Scroll-revealing Animated paragraph */}
                <div className="w-full! max-w-[560px]! text-center! mb-16! sm:mb-20! md:mb-24!">
                    <AnimatedText
                        text={paragraphText}
                        className="text-[#D7E2EA]! font-medium! leading-relaxed! text-center! text-[clamp(0.95rem,1.8vw,1.35rem)]!"
                    />
                </div>

                {/* Contact button below the text block */}
                <FadeIn delay={0.1} y={20}>
                    {/* <ContactButton
                        onClick={onContactClick}
                        label="Contact Me"
                    /> */}
                    <a href={`/pdf/SHA1.pdf`} target='_black'>
                        <button
                            className="px-6! py-2! bg-black text-white font-bold text-lg rounded-xl! border-2 border-white 
                                shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] 
                                transition-all duration-200 
                                hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]
                                active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                        >
                            Resume
                        </button>
                    </a>
                </FadeIn>
            </div>
        </section>
    );
}

export default About