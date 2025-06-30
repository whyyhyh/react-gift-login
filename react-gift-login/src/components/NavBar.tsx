// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
// import { theme } from '@/styles/theme';

// // Router context 없이도 동작하는 앵커 태그 사용
// export const NavBar = () => (
//   <nav
//     css={css`
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       padding: 16px;
//       background: white;
//       max-width: 720px;
//       margin: 0 auto;
//     `}
//   >
//     <h1
//       css={css`
//         ${theme.typography.h1};
//         margin: 0;
//       `}
//     >
//       선물하기
//     </h1>
//     <a
//       href="/login"
//       css={css`
//         font-size: 24px;
//         cursor: pointer;
//       `}
//       aria-label="로그인"
//     >
//       👤
//     </a>
//   </nav>
// );
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { theme } from '@/styles/theme';
import { useNavigate, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <nav
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        background: white;
        max-width: 720px;
        margin: 0 auto;
      `}
    >
      {isLoginPage ? (
        <>
          <span
            css={css`font-size: 24px; cursor: pointer;`}
            onClick={() => navigate('/')}
            aria-label="뒤로가기"
          >
            ←
          </span>
          <h1
            css={css`
              ${theme.typography.h1};
              margin: 0;
            `}
          >
            로그인
          </h1>
          {/* 균형을 위한 빈 요소 */}
          <span css={css`width: 24px;`} />
        </>
      ) : (
        <>
          <h1
            css={css`
              ${theme.typography.h1};
              margin: 0;
            `}
          >
            선물하기
          </h1>
          <a
            href="/login"
            css={css`font-size: 24px; cursor: pointer;`}
            aria-label="로그인"
          >
            👤
          </a>
        </>
      )}
    </nav>
  );
};
