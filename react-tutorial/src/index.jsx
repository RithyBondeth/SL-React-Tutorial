import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseStatePage from './react_hooks/useState_page';
import Navbar from './components/Nvabar';
import UseEffectPage from './react_hooks/useEffect_page';
import UseRefPage from './react_hooks/useRef_page';
import UseMemoPage from './react_hooks/useMemo_page'
import UseCallbackPage from './react_hooks/useCallback/useCallback_page';
import UseContextPage from './react_hooks/useContext/useContext_page';
import ContextProvider from './react_hooks/useContext/AppContext';
import UseReducerPage from './react_hooks/useReducer_page';
import UseLayoutEffectPage from './react_hooks/useLayoutEffect_page';
import CustomHookPage from './react_hooks/customHook/customhook_page';
import UserPage from './react_datafetching/fetch_method/user_page';
import PostPage from './react_datafetching/swr_library/post_page';
import TodoPage from './react_datafetching/fetch_method/todo_page';
import UsersPage from './react_datafetching/swr_library/users/users_page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ContextProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<UseStatePage/>}/>
        <Route path="/use_effect" element={<UseEffectPage/>}/>
        <Route path="/use_ref" element={<UseRefPage/>}/>
        <Route path="/use_memo" element={<UseMemoPage/>}/>
        <Route path="/use_callback" element={<UseCallbackPage/>}/>
        <Route path="/use_context" element={<UseContextPage/>}/>
        <Route path="/use_reducer" element={<UseReducerPage/>}/>
        <Route path="/use_layouteffect" element={<UseLayoutEffectPage/>}/>
        <Route path="/customhook" element={<CustomHookPage/>}/>
        <Route path="/datafetching/fetch_method/user_page" element={<UserPage/>}/>
        <Route path="/datafetching/fetch_method/todo_page" element={<TodoPage/>}/>
        <Route path="/datafetching/swr_library/post_page" element={<PostPage/>}/>
        <Route path="/datafetching/swr_library/users/users_page" element={<UsersPage/>}/>
      </Routes>
    </BrowserRouter>
  </ContextProvider>
  </React.StrictMode>
)