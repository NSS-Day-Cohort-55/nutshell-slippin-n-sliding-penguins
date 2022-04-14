import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { EventList } from "./events/EventList";
import { EventForm } from "./events/EventForm";
import { Dashboard } from "./dashboard/Dashboard";
import { MessageList } from "./forum/MessageList";

export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
  const PrivateOutlet = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route exact path="/" element={< Dashboard/>}/>
          <Route path="friends" element={""} />
          <Route path="messages" element={<MessageList />} />
          <Route path="tasks" element={""} />

          <Route path="events" element={<EventList />} />
          <Route path="/events/create" element={<EventForm/>} /> 
        </Route>

        
        <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
