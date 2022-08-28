import classNames from 'classnames';
import React, { FC } from 'react';
import { ChessIdentity } from '../constants';
import './index.less';

interface ChessPieceProps {
  identity: ChessIdentity;
  site: {
    x: number;
    y: number;
  };
  isEnemy: boolean;
  isRed: boolean;
}

const IdToText: Record<ChessIdentity, [string, string]> = {
  [ChessIdentity.Solider]: ['兵', '卒'],
  [ChessIdentity.Artillery]: ['炮', '垉'],
  [ChessIdentity.Car]: ['车', '俥'],
  [ChessIdentity.Horse]: ['马', '马'],
  [ChessIdentity.Minister]: ['相', '象'],
  [ChessIdentity.Advisor]: ['士', '侍'],
  [ChessIdentity.General]: ['帅', '将'],
};

export const ChessPiece: FC<ChessPieceProps> = ({
  identity,
  site,
  isEnemy,
  isRed,
}) => {
  return (
    <div
      className={classNames(
        'chess-piece-container',
        `chess-site-${site.x}-${site.y}`
      )}
    >
      <div className={classNames('chess-piece', { red: isRed, black: !isRed })}>
        {IdToText[identity][isRed ? 0 : 1]}
      </div>
    </div>
  );
};
