export enum PeopleTag {
  特种干员 = '特种干员',
  狙击干员 = '狙击干员',
  先锋干员 = '先锋干员',
  术士干员 = '术士干员',
  近卫干员 = '近卫干员',
  重装干员 = '重装干员',
  医疗干员 = '医疗干员',
  辅助干员 = '辅助干员',
  快速复活 = '快速复活',
  费用回复 = '费用回复',
  近战位 = '近战位',
  远程位 = '远程位',
  支援 = '支援',
  削弱 = '削弱',
  位移 = '位移',
  召唤 = '召唤',
  爆发 = '爆发',
  控场 = '控场',
  治疗 = '治疗',
  输出 = '输出',
  防护 = '防护',
  生存 = '生存',
  减速 = '减速',
  群攻 = '群攻',
  新手 = '新手',
}

export const PeopleTagTextMap: Record<PeopleTag, string> = {
  [PeopleTag.特种干员]: '特种干员',
  [PeopleTag.狙击干员]: '狙击干员',
  [PeopleTag.先锋干员]: '先锋干员',
  [PeopleTag.术士干员]: '术士干员',
  [PeopleTag.近卫干员]: '近卫干员',
  [PeopleTag.特种干员]: '特种干员',
  [PeopleTag.辅助干员]: '辅助干员',
  [PeopleTag.重装干员]: '重装干员',
  [PeopleTag.医疗干员]: '医疗干员',
  [PeopleTag.支援]: '支援',
  [PeopleTag.快速复活]: '快速复活',
  [PeopleTag.削弱]: '削弱',
  [PeopleTag.位移]: '位移',
  [PeopleTag.召唤]: '召唤',
  [PeopleTag.爆发]: '爆发',
  [PeopleTag.控场]: '控场',
  [PeopleTag.治疗]: '治疗',
  [PeopleTag.输出]: '输出',
  [PeopleTag.防护]: '防护',
  [PeopleTag.生存]: '生存',
  [PeopleTag.减速]: '减速',
  [PeopleTag.费用回复]: '费用回复',
  [PeopleTag.群攻]: '群攻',
  [PeopleTag.近战位]: '近战位',
  [PeopleTag.远程位]: '远程位',
  [PeopleTag.新手]: '新手',
};

export interface ArknightDataItem {
  tag: PeopleTag[];
  peopleIds: number[];
}

export interface PeopleItem {
  name: string;
  tag: PeopleTag[][];
  star: 4 | 5 | 6;
}

export const database: Record<string, PeopleItem> = {
  // 4星干员
  // 艾丝黛尔:{},
  // 远山:{}
  清流: {
    name: '清流',
    tag: [[PeopleTag.支援], [PeopleTag.远程位, PeopleTag.支援]],
    star: 4,
  },
  夜烟: {
    name: '夜烟',
    tag: [
      [PeopleTag.削弱],
      [PeopleTag.远程位, PeopleTag.削弱],
      [PeopleTag.术士干员, PeopleTag.削弱],
    ],
    star: 4,
  },
  杰西卡: {
    name: '杰西卡',
    tag: [
      [PeopleTag.远程位, PeopleTag.生存],
      [PeopleTag.狙击干员, PeopleTag.生存],
    ],
    star: 4,
  },
  流星: {
    name: '流星',
    tag: [
      [PeopleTag.削弱],
      [PeopleTag.远程位, PeopleTag.削弱],
      [PeopleTag.狙击干员, PeopleTag.削弱],
    ],
    star: 4,
  },
  白雪: {
    name: '白雪',
    tag: [
      [PeopleTag.群攻, PeopleTag.减速],
      [PeopleTag.狙击干员, PeopleTag.减速],
    ],
    star: 4,
  },
  // 清道夫
  // 红豆
  杜宾: {
    name: '杜宾',
    tag: [
      [PeopleTag.支援],
      [PeopleTag.输出, PeopleTag.支援],
      [PeopleTag.近战位, PeopleTag.支援],
      [PeopleTag.近卫干员, PeopleTag.支援],
    ],
    star: 4,
  },
  // 缠丸
  霜叶: {
    name: '霜叶',
    tag: [
      [PeopleTag.输出, PeopleTag.减速],
      [PeopleTag.近战位, PeopleTag.减速],
      [PeopleTag.近卫干员, PeopleTag.减速],
    ],
    star: 4,
  },
  // 慕斯
  砾: {
    name: '砾',
    tag: [
      [PeopleTag.特种干员],
      [PeopleTag.快速复活],
      [PeopleTag.特种干员, PeopleTag.防护],
    ],
    star: 4,
  },
  暗索: {
    name: '暗索',
    tag: [
      [PeopleTag.特种干员],
      [PeopleTag.位移],
      [PeopleTag.特种干员, PeopleTag.位移],
    ],
    star: 4,
  },
  // 末药
  // 调香师
  // 角峰
  // 蛇屠箱
  // 古米
  // 地灵
  阿消: {
    name: '阿消',
    tag: [
      [PeopleTag.特种干员],
      [PeopleTag.位移],
      [PeopleTag.特种干员, PeopleTag.位移],
    ],
    star: 4,
  },
  // 猎蜂
  格雷伊: {
    name: '格雷伊',
    tag: [
      [PeopleTag.群攻, PeopleTag.减速],
      [PeopleTag.术士干员, PeopleTag.减速],
    ],
    star: 4,
  },
  // 苏苏洛
  桃金娘: {
    name: '桃金娘',
    tag: [
      [PeopleTag.治疗, PeopleTag.费用回复],
      [PeopleTag.治疗, PeopleTag.先锋干员],
    ],
    star: 4,
  },
  // 红云
  梅: {
    name: '梅',
    tag: [
      [PeopleTag.输出, PeopleTag.减速],
      [PeopleTag.狙击干员, PeopleTag.减速],
    ],
    star: 4,
  },
  安比尔: {
    name: '安比尔',
    tag: [
      [PeopleTag.输出, PeopleTag.减速],
      [PeopleTag.狙击干员, PeopleTag.减速],
    ],
    star: 4,
  },
  // 宴
  刻刀: {
    name: '刻刀',
    tag: [
      [PeopleTag.爆发],
      [PeopleTag.爆发, PeopleTag.近战位],
      [PeopleTag.爆发, PeopleTag.近卫干员],
      [PeopleTag.爆发, PeopleTag.输出],
    ],
    star: 4,
  },

  // 5星
  // 因陀罗
  火神: {
    name: '火神',
    tag: [
      [PeopleTag.输出, PeopleTag.防护],
      [PeopleTag.生存, PeopleTag.防护],
      [PeopleTag.重装干员, PeopleTag.输出],
      [PeopleTag.重装干员, PeopleTag.生存],
    ],
    star: 5,
  },
  白面鸮: {
    name: '白面鸮',
    tag: [
      [PeopleTag.支援],
      [PeopleTag.远程位, PeopleTag.支援],
      [PeopleTag.支援, PeopleTag.医疗干员],
      [PeopleTag.支援, PeopleTag.治疗],
    ],
    star: 5,
  },
  凛冬: {
    name: '凛冬',
    tag: [
      [PeopleTag.支援],
      [PeopleTag.费用回复, PeopleTag.支援],
      [PeopleTag.近战位, PeopleTag.支援],
      [PeopleTag.支援, PeopleTag.先锋干员],
    ],
    star: 5,
  },
  德克萨斯: {
    name: '德克萨斯',
    tag: [
      [PeopleTag.控场],
      [PeopleTag.费用回复, PeopleTag.控场],
      [PeopleTag.近战位, PeopleTag.控场],
      [PeopleTag.控场, PeopleTag.先锋干员],
    ],
    star: 5,
  },
  // 幽灵鲨
  // 蓝毒
  // 白金
  陨星: {
    name: '陨星',
    tag: [
      [PeopleTag.削弱],
      [PeopleTag.群攻, PeopleTag.削弱],
      [PeopleTag.远程位, PeopleTag.削弱],
      [PeopleTag.狙击干员, PeopleTag.削弱],
    ],
    star: 5,
  },
  梅尔: {
    name: '梅尔',
    tag: [
      [PeopleTag.召唤],
      [PeopleTag.控场],
      [PeopleTag.远程位, PeopleTag.控场],
      [PeopleTag.辅助干员, PeopleTag.控场],
    ],
    star: 5,
  },
  // 赫默
  华法琳: {
    name: '华法琳',
    tag: [
      [PeopleTag.支援],
      [PeopleTag.远程位, PeopleTag.支援],
      [PeopleTag.支援, PeopleTag.医疗干员],
      [PeopleTag.支援, PeopleTag.治疗],
    ],
    star: 5,
  },
  // 临光
  红: {
    name: '红',
    tag: [
      [PeopleTag.特种干员],
      [PeopleTag.快速复活],
      [PeopleTag.控场],
      [PeopleTag.快速复活, PeopleTag.控场],
      [PeopleTag.近战位, PeopleTag.控场],
      [PeopleTag.特种干员, PeopleTag.控场],
    ],
    star: 5,
  },
  雷蛇: {
    name: '雷蛇',
    tag: [
      [PeopleTag.输出, PeopleTag.防护],
      [PeopleTag.重装干员, PeopleTag.输出],
    ],
    star: 5,
  },
  可颂: {
    name: '可颂',
    tag: [
      [PeopleTag.位移],
      [PeopleTag.位移, PeopleTag.防护],
      [PeopleTag.重装干员, PeopleTag.位移],
    ],
    star: 5,
  },
  // 普罗旺斯
  守林人: {
    name: '守林人',
    tag: [
      [PeopleTag.爆发, PeopleTag.远程位],
      [PeopleTag.爆发, PeopleTag.狙击干员],
    ],
    star: 5,
  },
  崖心: {
    name: '崖心',
    tag: [
      [PeopleTag.特种干员],
      [PeopleTag.位移],
      [PeopleTag.输出, PeopleTag.位移],
      [PeopleTag.特种干员, PeopleTag.输出],
      [PeopleTag.特种干员, PeopleTag.位移],
    ],
    star: 5,
  },
  初雪: {
    name: '初雪',
    tag: [
      [PeopleTag.削弱],
      [PeopleTag.远程位, PeopleTag.削弱],
      [PeopleTag.辅助干员, PeopleTag.削弱],
    ],
    star: 5,
  },
  真理: {
    name: '真理',
    tag: [
      [PeopleTag.输出, PeopleTag.减速],
      [PeopleTag.辅助干员, PeopleTag.输出],
      [PeopleTag.远程位, PeopleTag.减速, PeopleTag.输出],
    ],
    star: 5,
  },
  狮蝎: {
    name: '狮蝎',
    tag: [
      [PeopleTag.特种干员],
      [PeopleTag.特种干员, PeopleTag.输出],
      [PeopleTag.特种干员, PeopleTag.生存],
    ],
    star: 5,
  },
  食铁兽: {
    name: '食铁兽',
    tag: [
      [PeopleTag.特种干员],
      [PeopleTag.位移],
      [PeopleTag.位移, PeopleTag.减速],
      [PeopleTag.近战位, PeopleTag.减速],
      [PeopleTag.特种干员, PeopleTag.减速],
      [PeopleTag.特种干员, PeopleTag.位移],
    ],
    star: 5,
  },
  夜魔: {
    name: '夜魔',
    tag: [
      [PeopleTag.输出, PeopleTag.治疗],
      [PeopleTag.输出, PeopleTag.减速],
      [PeopleTag.治疗, PeopleTag.减速],
      [PeopleTag.术士干员, PeopleTag.治疗],
      [PeopleTag.术士干员, PeopleTag.减速],
      [PeopleTag.术士干员, PeopleTag.减速, PeopleTag.输出],
      [PeopleTag.远程位, PeopleTag.减速, PeopleTag.输出],
    ],
    star: 5,
  },
  诗怀雅: {
    name: '诗怀雅',
    tag: [
      [PeopleTag.支援],
      [PeopleTag.近战位, PeopleTag.支援],
      [PeopleTag.近卫干员, PeopleTag.支援],
    ],
    star: 5,
  },
  格劳克斯: {
    name: '格劳克斯',
    tag: [
      [PeopleTag.控场],
      [PeopleTag.远程位, PeopleTag.控场],
      [PeopleTag.辅助干员, PeopleTag.控场],
    ],
    star: 5,
  },
  星极: {
    name: '星极',
    tag: [
      [PeopleTag.输出, PeopleTag.防护],
      [PeopleTag.近卫干员, PeopleTag.防护],
    ],
    star: 5,
  },
  // 送葬人
  槐琥: {
    name: '槐琥',
    tag: [
      [PeopleTag.特种干员],
      [PeopleTag.快速复活],
      [PeopleTag.削弱],
      [PeopleTag.快速复活, PeopleTag.削弱],
      [PeopleTag.近战位, PeopleTag.削弱],
      [PeopleTag.特种干员, PeopleTag.削弱],
    ],
    star: 5,
  },
  // 灰喉
  // 苇草
  // 布洛卡
  // 吽
  // 惊蛰
  慑砂: {
    name: '慑砂',
    tag: [
      [PeopleTag.削弱],
      [PeopleTag.群攻, PeopleTag.削弱],
      [PeopleTag.远程位, PeopleTag.削弱],
      [PeopleTag.狙击干员, PeopleTag.削弱],
    ],
    star: 5,
  },
  // 巫恋
};

export const all_people = Object.values(database);

const isSameTagSelect = (a: PeopleTag[], b: PeopleTag[]) => {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (!a.includes(b[i])) {
      return false;
    }
  }
  return true;
};

const getStarFiveRate = (pIds: number[]) => {
  if (pIds.length === 0) {
    return 0;
  }
  const peoples = pIds.map(id => all_people[id - 1]);
  const five_star_people = peoples.filter(p => p.star > 4);
  return five_star_people.length / pIds.length;
};

export const calcResult = (tags: PeopleTag[]): ArknightDataItem[] => {
  if (tags.length < 5) {
    return [];
  }
  const allSelect = [
    [0],
    [1],
    [2],
    [3],
    [4],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4],
    [0, 1, 2],
    [0, 1, 3],
    [0, 1, 4],
    [0, 2, 3],
    [0, 2, 4],
    [0, 3, 4],
    [1, 2, 3],
    [1, 2, 4],
    [1, 3, 4],
    [2, 3, 4],
    [0, 1, 2, 3],
    [0, 1, 2, 4],
    [0, 1, 3, 4],
    [0, 2, 3, 4],
    [1, 2, 3, 4],
    [0, 1, 2, 3, 4],
  ];

  const all_tag_select = allSelect.map(item => item.map(tId => tags[tId]));
  const result: ArknightDataItem[] = [];

  const addResult = (tagSelect: PeopleTag[], pId: number) => {
    const index = result.findIndex(rItem =>
      isSameTagSelect(rItem.tag, tagSelect)
    );
    if (index < 0) {
      result.push({
        tag: tagSelect,
        peopleIds: [pId],
      });
    } else {
      if (!result[index].peopleIds.includes(pId)) {
        result[index].peopleIds.push(pId);
      }
    }
  };

  all_tag_select.forEach(tagCase => {
    all_people.forEach((people, id) => {
      people.tag.forEach(tagTarget => {
        if (isSameTagSelect(tagCase, tagTarget)) {
          addResult(tagCase, id + 1);
        }
      });
    });
  });

  result
    .sort((a, b) => {
      return getStarFiveRate(a.peopleIds) - getStarFiveRate(b.peopleIds);
    })
    .reverse();

  return result;
};
