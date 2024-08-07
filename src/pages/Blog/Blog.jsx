import React, { useEffect } from "react";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useBlog } from "../../context/BlogContext";
import PageTitle from "../../components/Helpers/PageTitle";

function Blog() {
  const { blog, getBlogData } = useBlog();

  useEffect(() => {
    getBlogData();
  }, []);

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
              <Link
                to={`/blog/${item.blogId}`}
                key={item.blogId}
                className="border border-gray-100 rounded-md"
              >
                <img
                  className="object-cover object-center w-full h-64 rounded-ss-md rounded-se-md lg:h-96"
                  src={`http://10.10.3.181:5244/${item.smallImageUrl}`}
                  alt=""
                />
                <div className="my-8 px-4">
                  <span className="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                    {item.tags}
                  </span>
                  <h1 className="mt-4 text-xl font-semibold text-gray-800">
                    {item.title}
                  </h1>
                  <p className="mt-2 text-gray-500">{item.date}</p>
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
