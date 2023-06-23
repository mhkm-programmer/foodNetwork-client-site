import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import Footer from "../pages/share/footer/Footer";
import Header from "../pages/share/header/Header";
import { Rating } from "@smastrom/react-rating";
import RecipeDetailsCard from "../pages/recipe/recipeDetailsCard/RecipeDetailsCard";
import { useLoaderData } from "react-router-dom";

const Recipe = () => {
  const recipeItems = useLoaderData();
  // console.log(recipeItems);
  const {
    chefPicture,
    chefName,
    description,
    likes,
    totalRecipes,
    experience,
    recipes,
  } = recipeItems;

  return (
    <div>
      <Header></Header>
      {/* <RecipeBanner></RecipeBanner> */}
      {/* <ChefRecipeCardGroup></ChefRecipeCardGroup> */}
      <div className="container mx-auto text-center">
        <div className="p-4">
          <div className=" p-6 rounded-lg">
            <div className="w-full h-70 relative">
              <img
                className="h-auto w-full mx-auto object-cover object-center mb-6 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                src={chefPicture}
                alt="image description"
              ></img>
            </div>
            {/* <img
              className="h-1/2 max-w-screen-lg rounded w-1/2 mx-auto object-cover object-center mb-6"
              src={chefPicture}
              alt="content"
            /> */}
            <div className="rounded-lg shadow-md p-10 -mt-10 hover:shadow-2xl">
              <h2 className="h1 h1-gradiant">{chefName}</h2>

              <p className="leading-relaxed text-base">{description}</p>
              <h3 className="h5 h4-badge">Total recipe: {totalRecipes}</h3>
              <h3 className="h5 h4-badge">Year of experience: {experience}</h3>
              <h3 className="h5 h4-badge">Likes: {likes}</h3>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <h1 className="text-center h2 py-12">{chefName} Recipe List</h1>
        <div className="container px-5 pt-8 pb-20 mx-auto">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 -m-4">
            {recipes.map((recipeCard) => (
              <RecipeDetailsCard
                key={recipeCard.id}
                recipeCard={recipeCard}
              ></RecipeDetailsCard>
            ))}
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default Recipe;
