
import { useRef, useEffect, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from 'react-scroll';
import { motion, useInView } from 'motion/react'
import FadeIn from '../About/FadeIn';


gsap.registerPlugin(InertiaPlugin);

const throttle = (func, limit) => {
    let lastCall = 0;
    return function (...args) {
        const now = performance.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func.apply(this, args);
        }
    };
};

function hexToRgb(hex) {
    const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!m) return { r: 0, g: 0, b: 0 };
    return {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16)
    };
}

const DotGrid = ({
    dotSize = 16,
    gap = 32,
    baseColor = '#5227FF',
    activeColor = '#5227FF',
    proximity = 150,
    speedTrigger = 100,
    shockRadius = 250,
    shockStrength = 5,
    maxSpeed = 5000,
    resistance = 750,
    returnDuration = 1.5,
    className = '',
    style
}) => {
    const wrapperRef = useRef(null);
    const canvasRef = useRef(null);
    const dotsRef = useRef([]);
    const pointerRef = useRef({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        speed: 0,
        lastTime: 0,
        lastX: 0,
        lastY: 0
    });

    const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
    const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

    const circlePath = useMemo(() => {
        if (typeof window === 'undefined' || !window.Path2D) return null;

        const p = new Path2D();
        p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
        return p;
    }, [dotSize]);

    const buildGrid = useCallback(() => {
        const wrap = wrapperRef.current;
        const canvas = canvasRef.current;
        if (!wrap || !canvas) return;

        const { width, height } = wrap.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);

        const cols = Math.floor((width + gap) / (dotSize + gap));
        const rows = Math.floor((height + gap) / (dotSize + gap));
        const cell = dotSize + gap;

        const gridW = cell * cols - gap;
        const gridH = cell * rows - gap;

        const extraX = width - gridW;
        const extraY = height - gridH;

        const startX = extraX / 2 + dotSize / 2;
        const startY = extraY / 2 + dotSize / 2;

        const dots = [];
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const cx = startX + x * cell;
                const cy = startY + y * cell;
                dots.push({ cx, cy, xOffset: 0, yOffset: 0, _inertiaApplied: false });
            }
        }
        dotsRef.current = dots;
    }, [dotSize, gap]);

    useEffect(() => {
        if (!circlePath) return;

        let rafId;
        const proxSq = proximity * proximity;

        const draw = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const { x: px, y: py } = pointerRef.current;

            for (const dot of dotsRef.current) {
                const ox = dot.cx + dot.xOffset;
                const oy = dot.cy + dot.yOffset;
                const dx = dot.cx - px;
                const dy = dot.cy - py;
                const dsq = dx * dx + dy * dy;

                let style = baseColor;
                if (dsq <= proxSq) {
                    const dist = Math.sqrt(dsq);
                    const t = 1 - dist / proximity;
                    const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
                    const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
                    const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
                    style = `rgb(${r},${g},${b})`;
                }

                ctx.save();
                ctx.translate(ox, oy);
                ctx.fillStyle = style;
                ctx.fill(circlePath);
                ctx.restore();
            }

            rafId = requestAnimationFrame(draw);
        };

        draw();
        return () => cancelAnimationFrame(rafId);
    }, [proximity, baseColor, activeRgb, baseRgb, circlePath]);

    useEffect(() => {
        buildGrid();
        let ro = null;
        if ('ResizeObserver' in window) {
            ro = new ResizeObserver(buildGrid);
            wrapperRef.current && ro.observe(wrapperRef.current);
        } else {
            window.addEventListener('resize', buildGrid);
        }
        return () => {
            if (ro) ro.disconnect();
            else window.removeEventListener('resize', buildGrid);
        };
    }, [buildGrid]);

    useEffect(() => {
        const onMove = e => {
            const now = performance.now();
            const pr = pointerRef.current;
            const dt = pr.lastTime ? now - pr.lastTime : 16;
            const dx = e.clientX - pr.lastX;
            const dy = e.clientY - pr.lastY;
            let vx = (dx / dt) * 1000;
            let vy = (dy / dt) * 1000;
            let speed = Math.hypot(vx, vy);
            if (speed > maxSpeed) {
                const scale = maxSpeed / speed;
                vx *= scale;
                vy *= scale;
                speed = maxSpeed;
            }
            pr.lastTime = now;
            pr.lastX = e.clientX;
            pr.lastY = e.clientY;
            pr.vx = vx;
            pr.vy = vy;
            pr.speed = speed;

            const rect = canvasRef.current.getBoundingClientRect();
            pr.x = e.clientX - rect.left;
            pr.y = e.clientY - rect.top;

            for (const dot of dotsRef.current) {
                const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
                if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
                    dot._inertiaApplied = true;
                    gsap.killTweensOf(dot);
                    const pushX = dot.cx - pr.x + vx * 0.005;
                    const pushY = dot.cy - pr.y + vy * 0.005;
                    gsap.to(dot, {
                        inertia: { xOffset: pushX, yOffset: pushY, resistance },
                        onComplete: () => {
                            gsap.to(dot, {
                                xOffset: 0,
                                yOffset: 0,
                                duration: returnDuration,
                                ease: 'elastic.out(1,0.75)'
                            });
                            dot._inertiaApplied = false;
                        }
                    });
                }
            }
        };

        const onClick = e => {
            const rect = canvasRef.current.getBoundingClientRect();
            const cx = e.clientX - rect.left;
            const cy = e.clientY - rect.top;
            for (const dot of dotsRef.current) {
                const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
                if (dist < shockRadius && !dot._inertiaApplied) {
                    dot._inertiaApplied = true;
                    gsap.killTweensOf(dot);
                    const falloff = Math.max(0, 1 - dist / shockRadius);
                    const pushX = (dot.cx - cx) * shockStrength * falloff;
                    const pushY = (dot.cy - cy) * shockStrength * falloff;
                    gsap.to(dot, {
                        inertia: { xOffset: pushX, yOffset: pushY, resistance },
                        onComplete: () => {
                            gsap.to(dot, {
                                xOffset: 0,
                                yOffset: 0,
                                duration: returnDuration,
                                ease: 'elastic.out(1,0.75)'
                            });
                            dot._inertiaApplied = false;
                        }
                    });
                }
            }
        };

        const throttledMove = throttle(onMove, 50);
        window.addEventListener('mousemove', throttledMove, { passive: true });
        window.addEventListener('click', onClick);

        return () => {
            window.removeEventListener('mousemove', throttledMove);
            window.removeEventListener('click', onClick);
        };
    }, [maxSpeed, speedTrigger, proximity, resistance, returnDuration, shockRadius, shockStrength]);

    return (
        <>

            <section
                id='Home'
                className={`p-4 flex items-center Home bg-black justify-center h-full w-full relative ${className}`}
                style={style}
            >
                <div ref={wrapperRef} className="w-full h-full relative flex flex-col items-center justify-center">
                    {/* Grid Background */}
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 w-full h-full pointer-events-none"
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4">
                        {/* Gradient Title */}
                        <FadeIn delay={0.1} y={20}>

                            <h1
                                className="text-4xl! md:text-8xl! font-extrabold! mb-4! tracking-tight"
                                style={{
                                    background: 'linear-gradient(90deg, #a855f7, #8b5cf6, #06b6d4, #10b981)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                I am Shashank
                            </h1>
                        </FadeIn>

                        {/* Subtitle */}
                        <FadeIn delay={0.3} y={20}>

                            <h2
                                className="text-[18px]! my-2 md:text-4xl! font-bold! uppercase text-white mb-6! tracking-wide"
                                style={{
                                    textShadow: '0 1px #fff, 2px 0 blue, -1px 0 #fff, 0 -1px #fff',
                                }}
                            >
                                I am Front-end Developer
                            </h2>
                        </FadeIn>

                        {/* Description */}
                        {/* <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
                            Hi, I am Harshit. Experienced full-stack developer from India, with 3 years of expertise
                            in ReactJs, NextJs, Node.js, and No SQL. Ready to create innovative web solutions!
                        </p> */}

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3! md:gap-6! justify-center mb-8!">
                            {/* Explore More Button (Black with White Shadow) */}
                            <FadeIn delay={0.5} y={20}>
                                
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

                            {/* Contact Me Button (White with White Shadow) */}
                            <FadeIn delay={0.5} y={20}>
                                <Link to="Contact">
                                    <button
                                        className="px-6! py-2! bg-white text-black font-bold text-lg rounded-xl! border-2 border-black 
                                    shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] 
                                    transition-all duration-200 
                                    hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]
                                    active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                                    >
                                        Contact Me
                                    </button>
                                </Link>
                            </FadeIn>
                        </div>

                        {/* Social Icons */}

                        <div>
                            <div className="d-flex gap-4 social-icons">
                                <FadeIn delay={0.7} y={20}>

                                    {[
                                        // { icon: 'bxl-instagram', link: 'https://instagram.com' },
                                        // { icon: 'bxl-twitter', link: 'https://twitter.com' },
                                        { icon: 'bxl-linkedin', link: 'https://www.linkedin.com/in/shashank-kumar-687376303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                                        { icon: 'bxl-github', link: 'https://github.com/sha0002' },
                                        { icon: 'bxl-whatsapp', link: 'https://wa.me/+918527015266' },
                                    ].map((social, i) => (
                                        <motion.a
                                            key={i}
                                            href={social.link}
                                            target="_blank"
                                            className="text-light fs-2 social-icon"
                                            whileHover={{ scale: 1.3, rotate: 8, color: "#0d6efd" }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <i className={`bx ${social.icon}`}></i>
                                        </motion.a>
                                    ))}
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default DotGrid;
