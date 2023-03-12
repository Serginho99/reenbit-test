import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import CharacterPage from "../../pages/CharacterPage/CharacterPage";

export default function RoutesPages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characterInfo/:id" element={<CharacterPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
