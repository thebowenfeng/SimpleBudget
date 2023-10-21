import { Theme } from './theme.ts'

export const lightModeConfig: Theme = {
  dark: {
    backgroundColor: "rgb(44, 57, 106)",
    fontColor: "rgb(255, 255, 255)",
    buttonTheme: {
      backgroundColor: "rgb(55, 77, 155)",
      hoverColor: "rgb(106,130,217)",
      fontColor: "rgb(255, 255, 255)"
    },
    hoverColor: "rgb(55, 77, 155)"
  },
  light: {
    backgroundColor: "rgb(255, 255, 255)",
    fontColor: "rgb(0, 0, 0)",
    buttonTheme: {
      backgroundColor: "rgb(237,241,245)",
      hoverColor: "rgb(225,228,232)",
      fontColor: "rgb(59, 94, 218)"
    },
    hoverColor: "rgb(213,222,253)"
  },
  header: {
    backgroundColor: "rgb(231,232,236)",
    fontColor: "rgb(0, 0, 0)",
    buttonTheme: {
      backgroundColor: "rgb(0, 0, 0)",
      hoverColor: "rgb(0, 0, 0)",
      fontColor: "rgb(255, 255, 255)"
    },
    hoverColor: "rgb(215,216,220)"
  }
}