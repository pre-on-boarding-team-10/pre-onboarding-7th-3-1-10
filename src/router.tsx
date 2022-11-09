import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchBar from './page/SearchBar';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
