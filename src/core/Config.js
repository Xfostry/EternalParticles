// ======================================================
// Configuración general del motor
// Acá van todos los valores que probablemente cambie después
// ======================================================

export const CONFIG = {

    APP: {

        NOMBRE: "Eternal Particles",

        VERSION: "2.0.0"

    },

    ESCENA: {

        COLOR_FONDO: "#050505",

        ANTI_ALIAS: true

    },

    CAMARA: {

        FOV: 60,

        CERCA: 0.1,

        LEJOS: 1000,

        POSICION: {

            X: 0,

            Y: 5,

            Z: 50

        }

    },

    RENDER: {

        PIXEL_RATIO_MAXIMO: 2

    },

    CONTROLES: {

        SUAVIZADO: true,

        VELOCIDAD_SUAVIZADO: 0.05

    },

    PARTICULAS: {

        CANTIDAD: 35000,

        TAMAÑO: 0.34,

        COLOR: "#00ffcc"

    }

};