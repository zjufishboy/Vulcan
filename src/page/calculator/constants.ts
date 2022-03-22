export interface IOperator {
  symbol: string;
  highlight: 'BACK' | 'CHAR' | 'NORMAL' | 'LIGHT';
}

export const operators: IOperator[] = [
  {
    symbol: '2nd',
    highlight: 'LIGHT',
  },
  {
    symbol: 'deg',
    highlight: 'LIGHT',
  },
  {
    symbol: 'sin',
    highlight: 'LIGHT',
  },
  {
    symbol: 'cos',
    highlight: 'LIGHT',
  },
  {
    symbol: 'tan',
    highlight: 'LIGHT',
  },
  {
    symbol: 'x^y',
    highlight: 'LIGHT',
  },
  {
    symbol: 'lg',
    highlight: 'LIGHT',
  },
  {
    symbol: 'ln',
    highlight: 'LIGHT',
  },
  {
    symbol: '(',
    highlight: 'LIGHT',
  },
  {
    symbol: ')',
    highlight: 'LIGHT',
  },
  //
  {
    symbol: '√x',
    highlight: 'LIGHT',
  },
  {
    symbol: 'C',
    highlight: 'CHAR',
  },
  {
    symbol: '[x]',
    highlight: 'CHAR',
  },
  {
    symbol: '%',
    highlight: 'CHAR',
  },
  {
    symbol: '/',
    highlight: 'CHAR',
  },
  {
    symbol: 'x!',
    highlight: 'LIGHT',
  },
  {
    symbol: '7',
    highlight: 'NORMAL',
  },
  {
    symbol: '8',
    highlight: 'NORMAL',
  },
  {
    symbol: '9',
    highlight: 'NORMAL',
  },
  {
    symbol: 'x',
    highlight: 'CHAR',
  },

  {
    symbol: '1/x',
    highlight: 'LIGHT',
  },
  {
    symbol: '4',
    highlight: 'NORMAL',
  },
  {
    symbol: '5',
    highlight: 'NORMAL',
  },
  {
    symbol: '6',
    highlight: 'NORMAL',
  },
  {
    symbol: '-',
    highlight: 'CHAR',
  },

  {
    symbol: 'PI',
    highlight: 'LIGHT',
  },
  {
    symbol: '1',
    highlight: 'NORMAL',
  },
  {
    symbol: '2',
    highlight: 'NORMAL',
  },
  {
    symbol: '3',
    highlight: 'NORMAL',
  },
  {
    symbol: '+',
    highlight: 'CHAR',
  },

  {
    symbol: '翻',
    highlight: 'CHAR',
  },
  {
    symbol: 'e',
    highlight: 'NORMAL',
  },
  {
    symbol: '0',
    highlight: 'NORMAL',
  },
  {
    symbol: '.',
    highlight: 'NORMAL',
  },
  {
    symbol: '=',
    highlight: 'BACK',
  },
];
