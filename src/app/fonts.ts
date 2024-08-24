import localFont from "next/font/local";

export const sfProDisplayFont = localFont({
    src: [
        {
            path: "../../public/assets/fonts/sf-pro-display/SFProDisplay-ThinItalic.woff2",
            weight: "100",
            style: "italic"
        },
        {
            path: "../../public/assets/fonts/sf-pro-display/SFProDisplay-UltraLightItalic.woff2",
            weight: "200",
            style: "italic"
        },
        {
            path: "../../public/assets/fonts/sf-pro-display/SFProDisplay-LightItalic.woff2",
            weight: "300",
            style: "italic"
        },
        {
            path: "../../public/assets/fonts/sf-pro-display/SFProDisplay-Regular.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "../../public/assets/fonts/sf-pro-display/SFProDisplay-Medium.woff2",
            weight: "500",
            style: "normal"
        },
        {
            path: "../../public/assets/fonts/sf-pro-display/SFProDisplay-SemiboldItalic.woff2",
            weight: "600",
            style: "italic"
        },
        {
            path: "../../public/assets/fonts/sf-pro-display/SFProDisplay-Bold.woff2",
            weight: "700",
            style: "normal"
        },
        {
            path: "../../public/assets/fonts/sf-pro-display/SFProDisplay-HeavyItalic.woff2",
            weight: "800",
            style: "italic",
        },
        {
            path: "../../public/assets/fonts/sf-pro-display/SFProDisplay-BlackItalic.woff2",
            weight: "900",
            style: "italic",
        },
    ],
    variable: "--font-sf-pro-display"
});