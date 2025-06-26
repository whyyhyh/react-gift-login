/** @jsxImportSource @emotion/react */
import React from 'react';
import { categories } from '@/data/categoryData';
import { CategoryItem } from '@/components/CategoryItem';
import { css } from '@emotion/react';
import { theme } from '@/styles/theme';

export const CategorySection = () => (
  <section css={css`padding:16px;`}>
    {/* 1) 섹션 제목 추가 */}
    <h2 css={css`
      ${theme.typography.h1};
      margin-bottom: 12px;
    `}>
      선물 테마
    </h2>
    <div css={css`display:grid; grid-template-columns: repeat(4,1fr); gap:12px;`}>
      {categories.map(cat => (
        <CategoryItem key={cat.themeId} {...cat} />
      ))}
    </div>
  </section>
);