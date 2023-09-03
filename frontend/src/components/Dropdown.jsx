import "../components/css/dropdown.css";

const Dropdown = () => {
  return (
    <div className="category">
        <div className="category-heading">
          <span >Men</span>
          <div className="dropdown">
          <div className="dropdown-content">a</div>
          <div className="dropdown-content">b</div>
          <div className="dropdown-content">c</div>
          </div>
        </div>
        <div className="category-heading">
        <span>Women</span>
        <div className="dropdown">
          <div className="dropdown-content">a</div>
          <div className="dropdown-content">b</div>
          <div className="dropdown-content">c</div>
          </div>
        </div>
        <div className="category-heading">
        <span>Kids</span>
        <div className="dropdown">
          <div className="dropdown-content">a</div>
          <div className="dropdown-content">b</div>
          <div className="dropdown-content">c</div>
          </div>
        </div>
        <div className="category-heading">
        <span>Beauty</span>
        <div className="dropdown">
          <div className="dropdown-content">a</div>
          <div className="dropdown-content">b</div>
          <div className="dropdown-content">c</div>
          </div>
        </div>
        <div className="category-heading">
        <span>Electronics</span>
        <div className="dropdown">
          <div className="dropdown-content">a</div>
          <div className="dropdown-content">b</div>
          <div className="dropdown-content">c</div>
          </div>
        </div>
        <div className="category-heading">
        <span>Home & Kitchen</span>
        <div className="dropdown">
          <div className="dropdown-content">a</div>
          <div className="dropdown-content">b</div>
          <div className="dropdown-content">c</div>
          </div>
        </div>

     
    </div>
  );
};

export default Dropdown;
