/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { products } from '@/data/productData';
import { RankingItem } from '@/components/RankingItem';
import { css } from '@emotion/react';
import { theme } from '@/styles/theme';

export const RankingSection = () => {
    
  const [list, setList] = useState(products);
  useEffect(() => {
    const id = setInterval(() => {
      setList(prev => {
        const next = [...prev];
        next.push(next.shift());
        return next;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section css={css`padding:16px;`}>
      {/* 1) 섹션 제목 추가 */}
      <h2 css={css`
        ${theme.typography.h1};
        margin-bottom: 12px;
      `}>
        실시간 급상승 선물랭킹
      </h2>
      {list.slice(0, 5).map((prod, idx) => (
        <RankingItem key={prod.id} rank={idx + 1} product={prod} />
      ))}
    </section>
  );
};