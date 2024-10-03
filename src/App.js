import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/Homepage/HomePage";
import AppLayout from "./layout/AppLayout";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

{/* <Route path=":id" element={} /> // 파라미터 받아오기 */}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>

          <Route index element={<HomePage />} /> {/* index : 위 path를 그대로 path로 쓰겠다*/}
          <Route path="searchResult" element={<SearchResultPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          



        </Route>

        <Route path="*" element={<NotFoundPage/>} /> {/* 오류 화면 */}
      </Routes>
    </div>
  );
}

export default App;
