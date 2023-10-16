export const THEME_DEFAULTS = {
    colors: {
        primary: "rgb(242, 242, 242)",
        secondary: "rgb(120, 120, 120)",
        positive: "rgba(26, 92, 255, 0.1)",
        neutral: "rgba(109, 109, 109, 0.1)",
        negative: "red"
    },
    shapes: {
        bigShape: 20,
        boxShape: 4
    },
    shadows: {
        smallBorderShadow: '0 0 3px 0 #0000005c'
    }
}

export enum THEME_IMPORTANCES {
    neutral,
    positive,
    negative,
}

export enum THEME_SIZES {
    xs = 12,
    sm = 14,
    md = 18,
    lg = 24,
    xl = 32
}
