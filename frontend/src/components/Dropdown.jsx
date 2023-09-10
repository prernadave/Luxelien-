import { useEffect, useState } from "react";
import "../components/css/dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [parentData, setParentData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [subcategoryData, setSubCategoryData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/apis/parent/category/list")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setParentData(data);
        // getCategoryData()
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getCategoryData = (parentCategoryId) => {
    console.log("parent", parentCategoryId);
    fetch(`http://localhost:3000/apis/category/list/${parentCategoryId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategoryData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getSubCategoryData = (category_id) => {
    fetch(`http://localhost:3000/apis/subcategory/list/${category_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubCategoryData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <header>
      <div className="nav-collapse">
        <nav role="navigation">
          <ul className="nav-list" id="collapse">
            {parentData.map((item) => (
              <li
                className="nav-list__item submenu--trigger"
                key={item.parent_category_id}
              >
                <a
                  className="nav-link"
                  onMouseEnter={() => getCategoryData(item.parent_category_id)}
                 
                >
                  {item.parent_category_name}
                  <i className="caret-down-icon"></i>
                </a>
                <ul className="submenu">
                  {categoryData.map((category) => (
                    <li
                      className="nav-list__item third-submenu--trigger"
                      key={category.category_id}
                    >
                      <a
                        className="nav-link"
                        onMouseEnter={() =>
                          getSubCategoryData(category.category_id)
                        }
                      >
                        {category.category_name}
                      </a>
                      <ul className="third-submenu">
                        {subcategoryData.map((subitem) => (
                          <li
                            className="nav-list__item"
                            key={subitem.subcategory_id}>
                            <Link to={`/subcategory/${subitem.subcategory_name}`} className="nav-link">
                              {subitem.subcategory_name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="nav-toggle">
        <a className="btn--toggle nav-link"  data-target="#collapse">
          <i className="fa fa-bars fa-fw"></i>
        </a>
      </div>
    </header>
  );
};

export default Dropdown;
