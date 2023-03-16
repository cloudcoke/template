import { Routes, Route } from "react-router-dom";
import { BoardRouter } from "./board/BoardRouter";
import { Main, Login } from "../pages";

export const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/board/*" element={<BoardRouter />} />
      </Routes>
    </>
  );
};
