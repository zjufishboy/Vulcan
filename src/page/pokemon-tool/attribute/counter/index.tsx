import { el } from 'date-fns/locale';
import React, { FC, useEffect, useState } from 'react';
import { AttrLabel } from '../attr-label';
import { allAttr, damageRateMap, IAttribute } from '../config';
import './index.less';

const calcSingleAttrToComplexAttrsDamage = (ackAttr: IAttribute, defAttrs: IAttribute[]) => {
  let rate = 1;
  for (const defAttr of defAttrs) {
    const rateCur = damageRateMap[ackAttr][defAttr];
    rate = rate * rateCur;
  }
  return rate;
};

const calcBestAckAttr = (targetAttrs: IAttribute[]): { attrs: IAttribute[]; rate: number } => {
  const results: IAttribute[] = [];

  const attrs = [...allAttr].sort(
    (attrA, attrB) =>
      calcSingleAttrToComplexAttrsDamage(attrB, targetAttrs) - calcSingleAttrToComplexAttrsDamage(attrA, targetAttrs)
  );

  let rate;
  for (const attr of attrs) {
    const rateCur = calcSingleAttrToComplexAttrsDamage(attr, targetAttrs);
    console.log(attr, targetAttrs, rateCur);
    if (rate === undefined) {
      rate = rateCur;
    }
    if (rateCur < rate) {
      break;
    } else {
      results.push(attr);
    }
  }

  if (results.length === 0 || rate === undefined) {
    return {
      attrs: [],
      rate: 0,
    };
  }

  return {
    attrs: results,
    rate,
  };
};

export const DamageCounter: FC = () => {
  const [curAttrs, setCurAttrs] = useState<IAttribute[]>([]);
  const [curTJAttr, setCurTJAttr] = useState<IAttribute>();
  const [result, setResult] = useState<{ attrs: IAttribute[]; rate: number }>();
  const [resultForTJ, setResultForTJ] = useState<{ attrs: IAttribute[]; rate: number }>();

  const updateResult = () => {
    if (curAttrs.length === 0) {
      setResult(undefined);
      return;
    }
    const targetAttrs = curAttrs.slice(0, 2);
    const result = calcBestAckAttr(targetAttrs);
    setResult(result);
  };

  const updateResultForTJ = () => {
    if (curTJAttr === undefined) {
      setResultForTJ(undefined);
      return;
    }

    const resultForTJ = calcBestAckAttr([curTJAttr]);
    setResultForTJ(resultForTJ);
  };

  useEffect(() => {
    updateResult();
    updateResultForTJ();
  }, [curAttrs, curTJAttr]);

  return (
    <div>
      <div style={{ marginBottom: 12 }}>选择目标宝可梦的属性</div>
      <div className="attr-row">
        {allAttr.map(defAttr => (
          <div
            key={defAttr}
            onClick={() => {
              if (curAttrs.includes(defAttr)) {
                setCurAttrs(cur => cur.filter(attr => attr !== defAttr));
              } else {
                setCurAttrs(cur => [...cur, defAttr]);
              }
            }}
          >
            <AttrLabel attr={defAttr} />
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 12, marginTop: 12 }}>选择目标宝可梦的太晶化属性</div>
      <div className="attr-row">
        {allAttr.map(defAttr => (
          <div
            key={defAttr}
            onClick={() => {
              if (curTJAttr === defAttr) {
                setCurTJAttr(undefined);
              } else {
                setCurTJAttr(defAttr);
              }
            }}
          >
            <AttrLabel attr={defAttr} />
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 12, marginTop: 12 }}>
        计算结果
        {(result || resultForTJ) && (
          <span
            style={{ marginLeft: 4 }}
            onClick={() => {
              setCurAttrs([]);
              setCurTJAttr(undefined);
            }}
          >
            清空
          </span>
        )}
      </div>
      <div className="result-table">
        <div className="result-row">
          <div>目标宝可梦属性:</div>
          {curAttrs.map(attr => (
            <div key={attr}>
              <AttrLabel attr={attr} />
            </div>
          ))}
        </div>
        <div className="result-row">
          <div>目标宝可梦太晶化属性:</div>
          <div>
            <AttrLabel attr={curTJAttr} />
          </div>
        </div>
        {result && (
          <>
            {result.rate > 0 && (
              <div className="result-row">
                <div>太晶化前建议使用宝可梦技能属性（{result.rate}）:</div>
                {result.attrs.map(attr => (
                  <div key={attr}>
                    <AttrLabel attr={attr} />
                  </div>
                ))}
              </div>
            )}
            {result.rate === 0 && <div>无最佳属性推荐</div>}
          </>
        )}
        {resultForTJ && (
          <>
            {resultForTJ.rate > 0 && (
              <div className="result-row">
                <div>太晶化后建议使用宝可梦技能属性（{resultForTJ.rate}）:</div>
                {resultForTJ.attrs.map(attr => (
                  <div key={attr}>
                    <AttrLabel attr={attr} />
                  </div>
                ))}
              </div>
            )}
            {resultForTJ.rate === 0 && <div>无最佳属性推荐</div>}
          </>
        )}
      </div>
    </div>
  );
};
