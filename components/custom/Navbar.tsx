"use client"

import ScrambledText from "@/components/ScrambledText"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className={"fixed z-100 flex h-16 w-full items-center justify-center px-16"}>
            <div id={"navbar-content"} className={"flex h-full w-full max-w-375 flex-row items-center justify-center"}>
                <div id={"navbar-left-content"} className={"flex h-full w-1/6 flex-row items-center justify-center"}>
                    <ScrambledText
                        className="scrambled-text-demo w-full cursor-default text-start text-[20px] font-bold select-none"
                        radius={20}
                        duration={0.5}
                        speed={0.6}
                        scrambleChars=".:"
                    >
                        LORY24
                    </ScrambledText>
                </div>
                <div
                    id={"navbar-center-content"}
                    className={"flex h-full w-4/6 flex-row items-center justify-center gap-x-7"}
                >
                    <NavbarButton href={"/"}>Home</NavbarButton>
                    <NavbarButton href={"/infos"}>Infos</NavbarButton>
                    <NavbarButton href={"/portfolio"}>Portfolio</NavbarButton>
                    <NavbarButton href={"/services"}>Services</NavbarButton>
                </div>
                <div
                    id={"navbar-right-content"}
                    className={"flex h-full w-1/6 flex-row items-center justify-end gap-x-4"}
                >
                    <div id={"discord-button"} className={"h-5 w-5 bg-white"}></div>
                    <div id={"telegram-button"} className={"h-5 w-5 bg-white"}></div>
                </div>
            </div>
        </nav>
    )
}

type NavbarButtonProps = {
    href: string
    children: string
}

export function NavbarButton({ href, children }: NavbarButtonProps) {
    const letters = children.split("")

    return (
        <Link href={href} className="group relative inline-block overflow-hidden text-[16px] font-medium select-none">
            <span className="relative flex">
                {letters.map((letter, i) => (
                    <span key={i} className="relative inline-block overflow-hidden">
                        <span
                            className="block transition-transform duration-300 group-hover:-translate-y-full"
                            style={{ transitionDelay: `${i * 40}ms` }}
                        >
                            {letter}
                        </span>

                        <span
                            className="absolute top-full left-0 block text-white transition-transform duration-300 group-hover:-translate-y-full"
                            style={{ transitionDelay: `${i * 40}ms` }}
                        >
                            {letter}
                        </span>
                    </span>
                ))}
            </span>
        </Link>
    )
}