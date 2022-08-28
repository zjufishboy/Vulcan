import React, { FC } from 'react';
import { ChessBoard } from './chessboard';
import { ChessPiece } from './chess-piece';
import { mockDataBase } from './constants';
import './index.less';

export const Chess: FC = () => {
  const data = mockDataBase;
  return (
    <div className="page-chess">
      <div className="chess-container">
        <ChessBoard />
        <div className="chess-info-area">
          <div className="chess-info-container">
            {data.curUser.chess.pieces.map((c, idx) => (
              <ChessPiece
                key={idx}
                identity={c.identity}
                site={c.site}
                isEnemy={false}
                isRed={data.curUser.chess.isRed}
              />
            ))}
            {data.enemy.chess.pieces.map((c, idx) => (
              <ChessPiece
                key={idx}
                identity={c.identity}
                site={c.site}
                isEnemy={true}
                isRed={data.enemy.chess.isRed}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
