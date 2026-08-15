import React, { useRef, useCallback, useState, useEffect } from 'react';
import gsap from 'gsap';
import { Button } from './ui/button';

export default function GsapButton({ children, variant = 'outline', className, href, fillColor, darkFillColor }) {
    const fillRef = useRef(null);
    const btnRef = useRef(null);
    const [isDark, setIsDark] = useState(() =>
        document.documentElement.classList.contains('dark')
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const activeFillColor = isDark && darkFillColor ? darkFillColor : fillColor;

    const handleMouseEnter = useCallback((e) => {
        const rect = btnRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.set(fillRef.current, {
            x: x,
            y: y,
            scale: 0,
            opacity: 1
        });

        gsap.to(fillRef.current, {
            scale: 4,
            duration: 0.8,
            ease: "power2.out"
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        gsap.to(fillRef.current, {
            opacity: 1,
            scale: 0,
            duration: 0.6,
            ease: "power2.inOut"
        });
    }, []);

    const content = (
        <Button
            variant={variant}
            ref={btnRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`gsap-btn relative overflow-hidden h-10 sm:h-12 px-4 sm:px-6 rounded-xl text-sm sm:text-base ${className || ''}`}
        >
            <span 
                ref={fillRef} 
                className="btn-fill"
                style={{ 
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    willChange: 'transform, opacity',
                    backgroundColor: activeFillColor,
                    opacity: 0,
                }}
            />
            <span className="btn-content relative z-10">{children}</span>
        </Button>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return content;
}
