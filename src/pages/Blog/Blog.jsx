import React from "react";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useBlog } from "../../context/BlogContext";
import PageTitle from "../../components/Helpers/PageTitle";

function Blog() {
  const { blog } = useBlog();
  return (
    <Layout childrenClasses="pt-0">
      <div className="hidden md:block">
        <PageTitle
          title="Blog"
          breadcrumb={[
            { name: "Anasayfa", path: "/" },
            { name: "Blog", path: "/blog" },
          ]}
        />
      </div>
      <section className="bg-qwhite">
        <div className="container px-5 md:px-0 py-10 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {blog.map((item) => (
              <div>{item.title}</div>
            ))}
            {Array.from({ length: 4 }, (_, i) => (
              <Link
                to="/blogdetails"
                key={i}
                className="border border-gray-100 rounded-md"
              >
                <img
                  className="object-cover object-center w-full h-64 rounded-ss-md rounded-se-md lg:h-96"
                  src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div className="my-8 px-4">
                  <span class="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                    Tags
                  </span>
                  <h1 className="mt-4 text-xl font-semibold text-gray-800">
                    What do you want to know about UI
                  </h1>
                  <p className="mt-2 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    est asperiores vel, ab animi recusandae nulla veritatis id
                    tempore sapiente
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center justify-center space-x-2 hover:text-red-600 hover:translate-x-2 hover:transition-all hover:duration-300 duration-300 ">
                      <p>Daha fazla göster</p>
                      <BsArrowRight size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">February 1, 2022</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Blog;
