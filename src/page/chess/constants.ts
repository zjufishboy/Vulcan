export enum ChessIdentity {
  Solider = 'solider',
  Artillery = 'artillery',
  Car = 'car',
  Horse = 'horse',
  Minister = 'minister',
  Advisor = 'advisor',
  General = 'general',
}

export interface ChessPieceInfo {
  identity: ChessIdentity;
  site: {
    x: number;
    y: number;
  };
}

export interface UserInfo {
  owner: {
    name: string;
  };
  chess: {
    isRed: boolean;
    pieces: ChessPieceInfo[];
  };
}

export interface TempDataBase {
  curUser: UserInfo;
  enemy: UserInfo;
}

export const mockDataBase: TempDataBase = {
  curUser: {
    owner: {
      name: '游鱼星',
    },
    chess: {
      isRed: true,
      pieces: [
        {
          identity: ChessIdentity.Solider,
          site: {
            x: 0,
            y: 6,
          },
        },
        {
          identity: ChessIdentity.Solider,
          site: {
            x: 2,
            y: 6,
          },
        },
        {
          identity: ChessIdentity.Solider,
          site: {
            x: 4,
            y: 6,
          },
        },
        {
          identity: ChessIdentity.Solider,
          site: {
            x: 6,
            y: 6,
          },
        },
        {
          identity: ChessIdentity.Solider,
          site: {
            x: 8,
            y: 6,
          },
        },

        {
          identity: ChessIdentity.Artillery,
          site: {
            x: 1,
            y: 7,
          },
        },
        {
          identity: ChessIdentity.Artillery,
          site: {
            x: 7,
            y: 7,
          },
        },
        {
          identity: ChessIdentity.Car,
          site: {
            x: 0,
            y: 9,
          },
        },
        {
          identity: ChessIdentity.Car,
          site: {
            x: 8,
            y: 9,
          },
        },
        {
          identity: ChessIdentity.Horse,
          site: {
            x: 1,
            y: 9,
          },
        },
        {
          identity: ChessIdentity.Horse,
          site: {
            x: 7,
            y: 9,
          },
        },
        {
          identity: ChessIdentity.Minister,
          site: {
            x: 2,
            y: 9,
          },
        },
        {
          identity: ChessIdentity.Minister,
          site: {
            x: 6,
            y: 9,
          },
        },
        {
          identity: ChessIdentity.Advisor,
          site: {
            x: 3,
            y: 9,
          },
        },
        {
          identity: ChessIdentity.Advisor,
          site: {
            x: 5,
            y: 9,
          },
        },
        {
          identity: ChessIdentity.General,
          site: {
            x: 4,
            y: 9,
          },
        },
      ],
    },
  },
  enemy: {
    owner: {
      name: 'enemy',
    },
    chess: {
      isRed: false,
      pieces: [
        {
          identity: ChessIdentity.Solider,
          site: {
            x: 0,
            y: 3,
          },
        },
        {
          identity: ChessIdentity.Solider,
          site: {
            x: 2,
            y: 3,
          },
        },
        {
          identity: ChessIdentity.Solider,
          site: {
            x: 4,
            y: 3,
          },
        },
        {
          identity: ChessIdentity.Solider,
          site: {
            x: 6,
            y: 3,
          },
        },
        {
          identity: ChessIdentity.Solider,
          site: {
            x: 8,
            y: 3,
          },
        },
        {
          identity: ChessIdentity.Artillery,
          site: {
            x: 1,
            y: 2,
          },
        },
        {
          identity: ChessIdentity.Artillery,
          site: {
            x: 7,
            y: 2,
          },
        },
        {
          identity: ChessIdentity.Car,
          site: {
            x: 0,
            y: 0,
          },
        },
        {
          identity: ChessIdentity.Car,
          site: {
            x: 8,
            y: 0,
          },
        },
        {
          identity: ChessIdentity.Horse,
          site: {
            x: 1,
            y: 0,
          },
        },
        {
          identity: ChessIdentity.Horse,
          site: {
            x: 7,
            y: 0,
          },
        },
        {
          identity: ChessIdentity.Minister,
          site: {
            x: 2,
            y: 0,
          },
        },
        {
          identity: ChessIdentity.Minister,
          site: {
            x: 6,
            y: 0,
          },
        },
        {
          identity: ChessIdentity.Advisor,
          site: {
            x: 3,
            y: 0,
          },
        },
        {
          identity: ChessIdentity.Advisor,
          site: {
            x: 5,
            y: 0,
          },
        },
        {
          identity: ChessIdentity.General,
          site: {
            x: 4,
            y: 0,
          },
        },
      ],
    },
  },
};
