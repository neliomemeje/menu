import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);
  const [activeBtn, setActiveBtn] = useState("");

  const filterItems = (category) => {
    setActiveBtn(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <div className="bg-image"></div>
      <section className="menu section">
        <div className="title">
          <h2>menu for today</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeBtn={activeBtn}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </>
  );
}

export default App;
