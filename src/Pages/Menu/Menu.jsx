import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subheading="Don't miss"
        heading="TODAY'S OFFER"></SectionTitle>
      {/* offered items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert items */}
      <MenuCategory
        items={dessert}
        coverImg={dessertImg}
        title="Desserts"></MenuCategory>
      {/* pizza items */}
      <MenuCategory
        items={pizza}
        coverImg={pizzaImg}
        title="Pizza"></MenuCategory>
      {/* salad items */}
      <MenuCategory
        items={salad}
        coverImg={saladImg}
        title="salad"></MenuCategory>
      {/* soap items */}
      <MenuCategory items={soup} coverImg={soupImg} title="soup"></MenuCategory>
    </div>
  );
};

export default Menu;
