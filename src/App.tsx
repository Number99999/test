import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddNewsPage from "./components/AddNewsPage";
import Home from "./components/HomePage";
import NewsList from "./components/NewsList";
import AdminPage from "./components/AdminPage";
import EditNewsPage from "./components/EditNewPage";
import NewsContent from "./components/NewsContent";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/bg.jpg')` }}
    >
      <Router>
        <Header />
        <main className="container mx-auto p-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-lg">
          <Routes>
            <Route path="/" element={<Home />} /> {/*// client*/}
            <Route path="/news/type/:typeNews" element={<NewsList />} />{" "}
            {/*  client */}
            <Route path="/news/id/:id" element={<NewsContent />} />{" "}
            {/*  client */}
            <Route path="/add-news" element={<AddNewsPage />} /> {/* admin */}
            <Route path="/admin" element={<AdminPage />} /> {/*  admin */}
            <Route path="/news/edit/:id" element={<EditNewsPage />} />{" "}
            {/*  admin */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
