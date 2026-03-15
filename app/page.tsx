import DarkVeil from "@/components/DarkVeil"
import { HomeHeadTexts } from "@/components/custom/HomeHead"

export default function Page() {
    return (
        <div id={"home-page"}>
            <div id={"head"}>
                <div id="head-background" className={"absolute z-0 h-screen w-full"}>
                    <DarkVeil
                        hueShift={0}
                        noiseIntensity={0}
                        scanlineIntensity={0}
                        speed={0.5}
                        scanlineFrequency={0}
                        warpAmount={0}
                    />
                </div>
                <div
                    id={"head-content"}
                    className={"relative z-1 flex h-screen w-full flex-col items-center justify-center px-16"}
                >
                    <div
                        id={"head-content-limiter"}
                        className={"flex w-full max-w-350 flex-col items-center justify-center"}
                    >
                        <HomeHeadTexts />
                    </div>
                </div>
            </div>
            <div id={"biography"} className={"flex w-full flex-col items-center justify-center px-16 mb-32"}>
                <div
                    id={"biography-limiter"}
                    className={"flex min-h-screen w-full max-w-375 flex-row items-center justify-center"}
                >
                    <div
                        id={"biography-left-box"}
                        className={"flex min-h-screen w-2/3 flex-col items-start justify-center bg-purple-200"}
                    >

                    </div>
                    <div
                        id={"biography-right-box"}
                        className={"flex min-h-screen w-1/3 flex-col items-end justify-center bg-blue-300"}
                    >

                    </div>
                </div>
            </div>
            <div id={"languages"} className={"min-h-24 w-full bg-gray-200 my-16"}></div>
            <div id={"abilities"} className={"flex w-full flex-col items-center justify-center px-16 my-32"}>
                <div
                    id={"abilities-limiter"}
                    className={"flex min-h-screen w-full max-w-375 flex-row items-center justify-center"}
                >
                    <div
                        id={"abilities-left-box"}
                        className={"flex min-h-screen w-1/3 flex-col items-start justify-center bg-green-200"}
                    >

                    </div>
                    <div
                        id={"abilities-right-box"}
                        className={"flex min-h-screen w-2/3 flex-col items-end justify-center bg-yellow-200"}
                    >
                        Ciao
                    </div>
                </div>
            </div>
            <div id={"contact-area"} className={"flex w-full flex-col items-center justify-center px-16"}>
                <div
                    id={"contact-area-limiter"}
                    className={"mb-32 flex w-full max-w-375 flex-row items-center justify-center"}
                >
                    <div
                        id={"contact-area-socials"}
                        className={"flex min-h-87.5 w-2/3 flex-col items-start justify-center bg-red-400"}
                    ></div>
                    <div
                        id={"contact-area-request-info"}
                        className={"flex min-h-87.5 w-1/3 flex-col items-start justify-center bg-blue-400"}
                    ></div>
                </div>
            </div>
        </div>
    )
}
