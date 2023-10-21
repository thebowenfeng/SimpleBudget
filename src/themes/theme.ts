import { lightModeConfig } from './lightMode.ts'

interface ButtonPalette {
  backgroundColor: string,
  hoverColor: string,
  fontColor: string,
}

interface Palette {
  backgroundColor: string,
  fontColor: string,
  buttonTheme: ButtonPalette,
  hoverColor: string,
}

export interface Theme {
  dark: Palette,
  light: Palette,
  header: Palette
}

let currentTheme: Theme = lightModeConfig;

export function setTheme(id: number) {
  switch (id) {
    case 0:
      currentTheme = lightModeConfig;
      break;
  }
}

export function getTheme() {
  return currentTheme;
}