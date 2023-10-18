import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import Link from "next/link";
import items from "../../../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? items.slice(60, 68)
      : items.slice(60, 68).filter((item) => item.category.includes(filter));

  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="title-style-five text-center text-lg-start md-mb-20">
              <h2 className="main-title font-recoleta fw-500 tx-dark">
                My
                <span className="d-inline-block position-relative">
                  Recent
                  <span
                    className="mark-bg"
                    style={{ backgroundColor: "#D9F5F8" }}
                  />
                </span>
                Work.
              </h2>
            </div>
            {/* /.title-style-five */}
          </div>
          {/* End .col-lg-4 */}

          <div className="col-lg-8">
            <ul className="style-none text-center text-lg-end isotop-menu-wrapper g-control-nav-one">
              <li
                className={filter === "*" ? "is-checked" : ""}
                onClick={() => setFilter("*")}
              >
                All
              </li>

              <li
                className={filter === "react" ? "is-checked" : ""}
                onClick={() => setFilter("react")}
              >
                React
              </li>
              <li
                className={filter === "nextjs" ? "is-checked" : ""}
                onClick={() => setFilter("nextjs")}
              >
                Next.js
              </li>
              <li
                className={filter === "vuejs" ? "is-checked" : ""}
                onClick={() => setFilter("vuejs")}
              >
                Vue.js
              </li>
              <li
                className={filter === "angular" ? "is-checked" : ""}
                onClick={() => setFilter("angular")}
              >
                Angular
              </li>
              <li
                className={filter === "wordpress" ? "is-checked" : ""}
                onClick={() => setFilter("wordpress")}
              >
                WordPress
              </li>
              <li
                className={filter === "laravel" ? "is-checked" : ""}
                onClick={() => setFilter("laravel")}
              >
                Laravel
              </li>
            </ul>
          </div>
          {/* End .col-8 */}
        </div>
        {/* End .row */}

        <div className="grid-2column pt-50 lg-pt-20 row">
          <Gallery>
            {filteredItems.map((item, index) => (
              <div
                className={`isotop-item ${item.category} col-lg-6 col-md-6`}
                key={index}
              >
                <div className="portfolio-block-one mt-40 xs-mt-30">
                  <div className="img-meta border-top shadow-sm">
                    <Image
                      width={640}
                      height={666}
                      src={item.image}
                      alt={item.name}
                      className="w-100"
                    />
                  </div>
                  <Link
                    href={`/portfolio/${item.id}`}
                    className="title tran3s d-flex flex-column justify-content-center align-items-center"
                  >
                    <span className="tag">{item.tag}</span>

                    <span className="pj-name tran3s fw-500">{item.name}</span>
                  </Link>
                  <div className="hover-state tran3s">
                    <Item
                      original={item.image}
                      thumbnail={item.image}
                      width={800}
                      height={833}
                    >
                      {({ ref, open }) => (
                        <span
                          role="button"
                          title="Click for large view"
                          className="fancybox tran3s"
                          ref={ref}
                          onClick={open}
                        >
                          <i className="bi bi-plus" />
                        </span>
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
