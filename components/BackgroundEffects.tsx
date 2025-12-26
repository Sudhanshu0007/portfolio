import React, { useState, useEffect } from 'react';

const BackgroundEffects: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        const updateScrollProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = scrollHeight > 0 ? scrolled / scrollHeight : 0;
            setScrollProgress(progress);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress(); // Initial call

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    // Smoothly interpolate between blue → purple → crimson based on scroll progress
    const getSpotlightColor = (progress: number): string => {
        // Blue (0-0.35) → Purple (0.35-0.65) → Crimson (0.65-1.0)
        if (progress < 0.35) {
            // Blend from blue to lighter purple
            const t = progress / 0.35; // 0 to 1
            const r = Math.round(59 + (147 - 59) * t);    // 59 to 147
            const g = Math.round(130 + (51 - 130) * t);   // 130 to 51
            const b = Math.round(246 + (234 - 246) * t);  // 246 to 234
            return `rgba(${r}, ${g}, ${b}, 0.08)`;
        } else if (progress < 0.65) {
            // Blend from lighter purple to crimson
            const t = (progress - 0.35) / 0.3; // 0 to 1
            const r = Math.round(147 + (220 - 147) * t);  // 147 to 220
            const g = Math.round(51 + (20 - 51) * t);     // 51 to 20
            const b = Math.round(234 + (60 - 234) * t);   // 234 to 60
            return `rgba(${r}, ${g}, ${b}, 0.08)`;
        } else {
            // Stay at crimson
            return `rgba(220, 20, 60, 0.08)`;
        }
    };

    return (
        <>
            {/* Background Motion Blobs */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-zinc-800/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            {/* Spotlight Effect - follows cursor with color transition */}
            <div
                className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${getSpotlightColor(scrollProgress)}, transparent 80%)`,
                }}
            />

            {/* Background Noise Texture */}
            <div
                className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
        </>
    );
};

export default BackgroundEffects;
