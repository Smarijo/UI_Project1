import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Search from './pages/Search'
import SearchResults from './pages/SearchResults'
import Recipe from './pages/Recipe'


function App(){
  
  return ( 
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/results/:query" element={<SearchResults />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
    )
}

export default App;