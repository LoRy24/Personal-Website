export default function Footer() {
    return (
        <footer id={"footer"} className={"min-h-16 w-full bg-[#101010]"}>
            <div
                id={"footer-copyright-notice"}
                className={"flex min-h-24 w-full flex-col items-center justify-center border-t border-t-[#252525]"}
            >
                <h1 className={"text-[16px] text-[#b0b0b0]"}>
                    Copyright (C) 2026 <a href={"https://github.lory24.dev"} className={"text-[#d0d0d0] font-medium hover:text-[#ffffff] duration-150"}>Lorenzo Rocca</a>
                </h1>
                <h1 className={"text-[10px] text-[#b0b0b0]"}>All rights are under the CC BY-NC-ND license.</h1>
            </div>
        </footer>
    )
}