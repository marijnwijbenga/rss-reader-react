const randomPastelColor = () => {
    /*
    Random pastel color generator that uses oklch,
    a fancy new css color system that finally works
    with actual perceivable light spectrum
    no more handpicking color palettes, yay!

    Requirements:
    have fixed hues (1st value in oklch)
    have fixed chroma (2nd value in oklch
    have random degrees of hues.

    The hues are still handpicked, but you can choose any starting point
    on the 360 deg axis, and increment them with whichever amount you prefer.
    These are based on my own design systems colors (plush design).
    */
    const hues = [10, 35, 50, 135, 165, 195, 230, 290, 345];
    const chroma = 0.15;

    const lightnessBg: number = 85;
    const lightnessText: number = 45;

    const randomIndex = Math.floor(Math.random() * hues.length);

    return {
        textColor: `oklch(${lightnessText}% ${chroma} ${hues[randomIndex]})`,
        bgColor: `oklch(${lightnessBg}% ${chroma} ${hues[randomIndex]})`,
    }

}

export default randomPastelColor;