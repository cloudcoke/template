import { Routes, Route } from "react-router-dom";
import { BoardList, BoardWrite, BoardView, BoardModify, BoardDelete } from "../../pages";

export const BoardRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<BoardList />} />
        <Route path="write" element={<BoardWrite />} />
        <Route path="view/:id" element={<BoardView />} />
        <Route path="modify/:id" element={<BoardModify />} />
        <Route path="delete/:id" element={<BoardDelete />} />
      </Routes>
    </>
  );
};
