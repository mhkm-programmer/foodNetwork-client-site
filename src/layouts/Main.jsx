import React, { useEffect, useState } from "react";

import Category from "../pages/Home/category/Category";
import ChefCard from "../pages/Home/chefCard/ChefCard";
import Footer from "../pages/share/footer/Footer";
import Header from "../pages/share/header/Header";
import HeroSlider from "../pages/Home/heroBanner.jsx/HeroSlider";
import NewsLetter from "../pages/Home/newsLetter/NewsLetter";

const Main = () => {
    
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    fetch(
      "https://assignment10-chef-recipe-hunter-server-sid-mhkmabraham-gmailcom.vercel.app/recipe"
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
     
      <Header></Header>
      <HeroSlider></HeroSlider>
      <div>
      <h3 className='text-center text-black-500 h2 pb-16' >Our Greatest Chef</h3>
      <div className="container mx-auto px-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <ChefCard key={recipe.id} recipe={recipe}></ChefCard>
        ))}
      </div>
      </div>
      

      <Category></Category>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Main;
