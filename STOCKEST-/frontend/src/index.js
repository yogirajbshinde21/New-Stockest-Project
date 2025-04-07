import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/features/ProductPage";
import BlogPage from "./landing_page/blog/BlogPage";
import SupportPage from "./landing_page/support/SupportPage";
import ChatbotPage from "./landing_page/chatbot/ChatbotPage";

import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/features" element={<ProductPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);