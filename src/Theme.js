import { css } from 'styled-components';

const palette = Object.freeze({
  get primary() {
    return this.primitives.blue[300];
  },
  get negative() {
    return this.primitives.red[300];
  },
  get warning() {
    return this.primitives.orange[200];
  },
  get positive() {
    return this.primitives.green[300];
  },

  black: '#000000',
  white: '#FFFFFF',

  primitives: {
    orange: {
      100: '#FFF2DE',
      200: '#FFB624',
      300: '#F59300',
      400: '#A66300',
    },
    yellow: {
      100: '#FFFCD9',
      200: '#FFEE00',
      300: '#F2CA00',
      400: '#997A00',
    },
    red: {
      100: '#FFE6E6',
      200: '#F7685B',
      300: '#DE0000',
      400: '#B70000',
    },
    pink: {
      100: '#FFE6F3',
      200: '#FE6EAA',
      300: '#F43FAA',
      400: '#B50061',
    },
    purple: {
      100: '#F7E6FF',
      200: '#B45EEE',
      300: '#A63CEE',
      400: '#8600C9',
    },
    violet: {
      100: '#F1E6FF',
      200: '#864DFF',
      300: '#7747DD',
      400: '#6A00E2',
    },
    indigo: {
      100: '#E9E6FF',
      200: '#6D59FF',
      300: '#5946EA',
      400: '#4331D0',
    },
    lime: {
      100: '#F5FFDE',
      200: '#B0F555',
      300: '#5EE82D',
      400: '#4BB88A',
    },
    green: {
      100: '#E6FFF0',
      200: '#6ADB97',
      300: '#00CA72',
      400: '#30A55F',
    },
    teal: {
      100: '#E6FFF7',
      200: '#10DEB9',
      300: '#12C5A7',
      400: '#009970',
    },
    sky: {
      100: '#E6FDFF',
      200: '#45E1EE',
      300: '#00CDDB',
      400: '#008F99',
    },
    blue: {
      100: '#E6F7FF',
      200: '#3BC1FF',
      300: '#00A4F0',
      400: '#007AB3',
    },
    navy: {
      100: '#E6EFFF',
      200: '#4D8BFF',
      300: '#0F63FF',
      400: '#004AD3',
    },
  },
  grey: {
    100: '#222222',
    200: '#333333',
    300: '#444444',
    400: '#777777',
    500: '#999999',
    600: '#CCCCCC',
  },
  background: {
    100: '#FBFBFB',
    200: '#F6F8FA',
    300: '#EDF3F5',
  },
  text: {
    dark: '#192A3E',
    grey: '#818D9B',
    inactive: '#CFD8E0',
  },
  border: {
    100: '#E3E6EF',
    200: '#DADADA',
  },

  brand: {
    deep_blue: '#122EC0',
    algorima_blue: '#2C75FF',
    easy_blue: '#AED4F5',
    easydeep_grey: '#F0F0F0',
    easydeep_yellow: '#F5C745',
  },
  service: {
    easydeep_blue: '#00B8FF',
    easydeep_teal: '#10DEB9',
    easydeep_green: '#6ADB97',
  },
});
const typography = Object.freeze({
  h1: css`
    font-size: 56px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: -2px;
  `,
  h2: css`
    font-size: 40px;
    font-weight: 400;
    line-height: 51px;
    letter-spacing: -2px;
  `,
  h3: css`
    font-size: 35px;
    font-weight: 400;
    line-height: 46px;
    letter-spacing: -2px;
  `,
  h4: css`
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: -2px;
  `,
  subtitle1: css`
    font-size: 25px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: -1px;
  `,
  subtitle2: css`
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -1px;
  `,
  subtitle3: css`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -1px;
  `,
  b1: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.5px;
  `,
  b2: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: -0.5px;
  `,
  caption: css`
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.5px;
  `,
});

export const theme = {
  palette,
  typography,
};

export const paletteMapper = ({ color, theme }) => {
  const curColor = color
    ?.split('.')
    .reduce((acc, cur) => acc?.[cur], theme?.palette);

  if (curColor && typeof curColor !== 'string') {
    return curColor.main;
  }
  return curColor;
};

export const spacingMapper = (_, props) => {
  const top = props[`${_}Top`] || props[`${_}Y`] || props[_] || 0;
  const bottom = props[`${_}Bottom`] || props[`${_}Y`] || props[_] || 0;
  const left = props[`${_}Left`] || props[`${_}X`] || props[_] || 0;
  const right = props[`${_}Right`] || props[`${_}X`] || props[_] || 0;

  return `${top}px ${right}px ${bottom}px ${left}px`;
};
