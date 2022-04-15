import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Dashboard } from "./dashboard/Dashboard";
import { MessageList } from "./forum/MessageList";
import { FriendsList } from "./friends/FriendsList";
import { CreateArticleForm } from "./dashboard/articles/CreateArticleForm";
import { EditArticleForm } from "./dashboard/articles/EditArticleForm";

export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
  const PrivateOutlet = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="friends" element={<FriendsList />} />
          <Route path="messages" element={<MessageList />} />
          <Route path="tasks" element={""} />
          <Route path="events" element={""} />
          <Route path="createArticle" element={<CreateArticleForm />} />
          <Route path="/editArticle/:articleId" element={<EditArticleForm />} />
        </Route>

        <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
