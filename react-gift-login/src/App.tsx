// /** @jsxImportSource @emotion/react */
// import React from 'react';
// import { GlobalStyles } from '@/styles/GlobalStyles';
// import { NavBar } from '@/components/NavBar';
// import { CategorySection } from '@/sections/CategorySection';
// import { RankingSection } from '@/sections/RankingSection';
// import { FriendSelectionSection } from '@/components/FriendSelectionSection';

// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <NavBar />     
//       <FriendSelectionSection />
//       <CategorySection />
//       <RankingSection />
//     </>
//   );
// }

// export default App;
/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { NavBar } from '@/components/NavBar';
import { FriendSelectionSection } from '@/components/FriendSelectionSection';
import { CategorySection } from '@/sections/CategorySection';
import { RankingSection } from '@/sections/RankingSection';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FriendSelectionSection />
              <CategorySection />
              <RankingSection />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// main.tsx 혹은 index.tsx에서
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
export default App;
