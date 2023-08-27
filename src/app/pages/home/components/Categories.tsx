import React from "react";

const Categories = () => {
  return (
    <section className="section section-categories">
      <div className="container">
        <ul className="category-list row">
          <li className="category-item col col-6 col-sm-12 relative">
            <div className="category relative">
              <h4 className="category-desc absolute">
                New arrival sale now in!
              </h4>
              <a className="btn btn-category absolute" href="@#"> SHOW COLLECTION </a>
            </div>
          </li>
          <li className="category-item col col-3 col-sm-6 relative">
            <div className="category relative">
              <h4 className="category-desc side-item-category absolute">
                <a className="product-link"href="@#" >
                  Basic t-shirts $29,99
                </a>
              </h4>
              <a className="btn btn-category absolute" href="@#"> MORE DETAILS </a>
            </div>
          </li>
          <li className="category-item col col-3 col-sm-6 relative">
            <div className="category relative">
              <span className="badge absolute badge-danger category-discount">
                -50%
              </span>
              <h4 className="category-desc side-item-category absolute">
                <a className="category-link" href="@#">
                  Sale this summer
                </a>
              </h4>
              <a className="btn btn-category absolute " href="@#">
                VIEW ALL
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories;
