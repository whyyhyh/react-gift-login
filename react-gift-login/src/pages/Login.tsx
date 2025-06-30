/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { theme } from '@/styles/theme';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || '/';

  const handleLogin = () => {
    // UI 전용, 실제 인증 로직 없음
    navigate(from, { replace: true });
  };

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
      `}
    >
      <h2 css={css`
        ${theme.typography.h1};
        margin-bottom: 24px;
      `}>로그인</h2>
      <input
        css={css`
          width: 100%;
          max-width: 320px;
          padding: 12px;
          margin-bottom: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        `}
        type="text"
        placeholder="아이디"
      />
      <input
        css={css`
          width: 100%;
          max-width: 320px;
          padding: 12px;
          margin-bottom: 24px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        `}
        type="password"
        placeholder="비밀번호"
      />
      <button
        css={css`
          width: 100%;
          max-width: 320px;
          padding: 12px;
          border: none;
          border-radius: 4px;
          background: ${theme.colors.primary};
          color: white;
          font-size: 1rem;
          cursor: pointer;
        `}
        onClick={handleLogin}
      >
        로그인
      </button>
    </div>
  );
}

