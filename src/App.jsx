import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Search from './pages/Search'
import SearchResults from './pages/SearchResults'
import RecipeResult from './pages/RecipeResult'
import Recipe from "./pages/Recipe";
import FilterButton from './components/FilterButton'
import Profiles from "./pages/Profiles";
import RecHome from "./pages/RecHome";

function App(){
  
  return ( 
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/results/:query" element={<SearchResults />} />
          <Route path="/results/:query/:filter1" element={<FilterButton />} />
          <Route path="/results/recipe/:name" element={<RecipeResult />} />
          <Route path="/recipe/:name" element={<Recipe />} />
          <Route path="/profiles/:profile/home" element={<RecHome />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </BrowserRouter>
    </div>
    )
}

export default App;