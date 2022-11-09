import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
