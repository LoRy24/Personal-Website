"use client";

import { TypeAnimation } from "react-type-animation"
import React, { useRef } from "react"

export function HomeHeadTexts() {
    return (
        <div id={"welcome-text"} className={"flex cursor-default flex-col items-center justify-center select-none"}>
            <h1 className={"mb-3 cursor-default text-center text-7xl font-medium select-none"}>
                I&#39;m{" "}
                <TypeAnimation
                    sequence={["LoRy24", 2000, "Lorenzo Rocca", 2000]}
                    speed={50}
                    repeat={Infinity}
                    className={"font-black"}
                />
            </h1>
            <h2 className={"text-md mb-6 cursor-default text-center select-none"}>
                I&#39;m a young developer building the future, and this is my personal website.
            </h2>
            <HomeHeadScrollButton/>
        </div>
    )
}

export function HomeHeadScrollButton() {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = buttonRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        buttonRef.current?.style.setProperty("--x", `${x}px`);
        buttonRef.current?.style.setProperty("--y", `${y}px`);
    };

    const handleClick = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            className="
                relative overflow-hidden
                px-9 py-2.5
                rounded-4xl
                border border-white/20
                bg-gray-500/30
                backdrop-blur-md
                text-white
                transition
                hover:-translate-y-px
                hover:bg-gray-400/30
                before:pointer-events-none
                before:absolute
                before:inset-0
                before:opacity-0
                before:transition-opacity
                hover:before:opacity-100
                before:bg-[radial-gradient(200px_circle_at_var(--x)_var(--y),rgba(255,255,255,0.25),transparent_40%)]
                cursor-pointer
                select-none
            "
        >
            Esplora
        </button>
    );
}