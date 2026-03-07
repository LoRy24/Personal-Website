import DarkVeil from "@/components/DarkVeil"

export default function Page() {
    return (
        <div className={"h-screen w-full"}>
            <DarkVeil
                hueShift={0}
                noiseIntensity={0}
                scanlineIntensity={0}
                speed={0.5}
                scanlineFrequency={0}
                warpAmount={0}
            />
        </div>
    )
}
