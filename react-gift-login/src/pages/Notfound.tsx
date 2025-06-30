/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { theme } from '@/styles/theme';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        padding: 16px;
        background: ${theme.colors.background};
        text-align: center;
      `}
    >
      <h1 css={css`
        ${theme.typography.h1};
        margin-bottom: 16px;
      `}>404 - 페이지를 찾을 수 없습니다</h1>
      <button
        css={css`
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          background: ${theme.colors.primary};
          color: white;
          cursor: pointer;
        `}
        onClick={() => navigate('/')}
      >
        홈으로 돌아가기
      </button>
    </div>
  );
}
