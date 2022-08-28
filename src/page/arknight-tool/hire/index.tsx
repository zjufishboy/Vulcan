import { PageContainer } from '@/biz-components/page-container';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { all_people, calcResult, PeopleTag, PeopleTagTextMap } from './data';

import './index.less';

const tagList = Object.values<PeopleTag>(PeopleTag);

export const HireTool: FC = () => {
  const [tags, setTags] = useState<PeopleTag[]>([]);

  const handleSelectTag = (tag: PeopleTag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter(t => t !== tag));
    } else {
      if (tags.length === 5) {
        return;
      }
      setTags([...tags, tag]);
    }
  };

  const handleClearSelect = () => {
    setTags([]);
  };

  const dataResult = calcResult(tags);

  return (
    <PageContainer>
      <div className="hire-tool">
        <div className="big-title">明日方舟公招计算器</div>
        <div className="title">请选出五个TAG</div>
        <div className="tag-list">
          {tagList.map((tag, index) => (
            <div
              key={index}
              className={classNames('tag', {
                'tag-selected': tags.includes(tag),
              })}
              onClick={() => {
                handleSelectTag(tag);
              }}
            >
              {PeopleTagTextMap[tag]}
            </div>
          ))}
          <div className="clear-button">
            <div
              className={classNames('tag')}
              onClick={() => {
                handleClearSelect();
              }}
            >
              清空选择
            </div>
          </div>
        </div>
        <div className="title">推荐方案</div>
        <div className="result">
          <div
            className={classNames('result-content', {
              'result-empty': dataResult.length === 0,
            })}
          >
            {dataResult.length === 0 && <span>建议重选,没有方案</span>}
            {dataResult.length !== 0 &&
              dataResult.map((r, index) => (
                <div key={index} className="result-item">
                  <div className="result-tags">
                    {r.tag.map((t, index) => (
                      <div key={index} className="tag">
                        {PeopleTagTextMap[t]}
                      </div>
                    ))}
                  </div>
                  <div className="result-people">
                    {r.peopleIds.map((pId, index) => (
                      <div
                        key={index}
                        className={classNames(
                          'people-item',
                          'people-level-' + all_people[pId - 1].star
                        )}
                      >
                        {`${all_people[pId - 1].name}[${
                          all_people[pId - 1].star
                        }]`}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
