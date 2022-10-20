import { bgRgb24 } from "https://deno.land/std@0.160.0/fmt/colors.ts";

export const coloredResponse = (colorCode, message) => {
    console.log(bgRgb24(message, colorCode))
}
