import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Test from './Test';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
