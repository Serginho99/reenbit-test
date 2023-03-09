import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import UserInfoPage from "../../pages/UserInfoPage/UserInfoPage";

export default function RoutesPages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="userInfo" element={<UserInfoPage />} />
      </Routes>
    </>
  );
}
