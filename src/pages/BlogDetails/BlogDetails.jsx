import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import png from "../../assets/image.png";
import png1 from "../../assets/png.png";
import PageTitle from "../../components/Helpers/PageTitle";
import { PiCalendarDotsFill } from "react-icons/pi";
import { useBlog } from "../../context/BlogContext";

function BlogDetails() {
  const { blogId } = useParams();
  const { getBlogById } = useBlog();
  const [blogDetails, setBlogDetails] = useState([]);

  useEffect(() => {
    const getBlogDetails = async () => {
      try {
        const data = await getBlogById(blogId);
        console.log(data);
        setBlogDetails(data);
      } catch (error) {
        console.error("Failed to fetch blog details:", error);
      }
    };
    getBlogDetails();
  }, [blogId, getBlogById]);

  return (
    <Layout childrenClasses="py-0">
      <div className="hidden md:block">
        <PageTitle
          title={blogDetails.title}
          breadcrumb={[
            { name: "Anasayfa", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: blogDetails.title, path: `/blog/${blogDetails.blogId}` },
          ]}
        />
      </div>
      <div className="container mx-auto px-3 py-6 flex md:flex-row flex-col">
        <div className="w-full flex flex-col lg:w-full md:w-3/5 pr-0 md:pr-6 space-y-4">
          <img
            src={`http://10.10.3.181:5244/${blogDetails.largeImageUrl}`}
            alt="mini"
            className="w-full max-h-[600px] object-cover object-center"
          />
          <div className="flex justify-start items-center gap-2">
            <PiCalendarDotsFill className="text-gray-500" size={16} />
            <p className="text-gray-500 text-sm">{blogDetails.date}</p>
          </div>

          <h3 className="font-semibold text-xl">
            En İyi ve En Çok Tercih Edilen Akıllı Saatler 2024
          </h3>
          <div className="w-full overflow-hidden text-ellipsis break-words ">
            <div className="prose max-w-screen-md">
              <div dangerouslySetInnerHTML={{ __html: blogDetails.body }} />
            </div>
          </div>

          <h4 className="font-semibold">
            Akıllı Saatlerde Hayat Kolaylaştırıcı 10 Temel Özellik
          </h4>
          <ul className="list-disc list-inside mb-8">
            <li>
              Müzik ruhun gıdasıdır diyorsanız akıllı saatler ile oldukça mutlu
              olacaksınız. Akıllı saatler istediğiniz her yerde müzik
              dinleyebilirsiniz.
            </li>
            <li>
              Sesli asistan kullanımıyla gerek olan her bilgiyi öğrenebilir,
              arama yapabilir ve cevaplayabilirsiniz. Kısacası akıllı
              telefonlarla zaman kaybetmek yerine dileğiniz her şeye sesli
              asistan uygulamasıyla ulaşabilirsiniz.
            </li>
            <li>
              Adımsayar özelliği tam anlamıyla sağlık yaşam dostudur.
              Programladığınız adımsayar uygulaması ile gün içerisinde
              hedeflediğiniz adım sayısına kolayca ulaşmanıza yardımcı olur.
              Akıllı saatler size öreceğiniz hedefe ulaşıl yapası tam anlamıyla
              tatmin edici olacaktır!
            </li>
          </ul>
          <div className="w-full flex-col flex md:flex-row gap-4">
            <img
              src={png}
              alt=""
              className="object-cover w-full md:w-1/2 max-h-64"
            />
            <img
              src={png}
              alt=""
              className="object-cover w-full md:w-1/2 max-h-64"
            />
          </div>
          <div className="w-full flex flex-wrap gap-2 pt-10">
            <h4 className="font-semibold">Etiketler:</h4>
            <a
              href="#"
              className="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
            >
              iOS
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
            >
              Akıllı Saat
            </a>
            <a className="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              Koşu
            </a>
            <a className="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              Sağlık
            </a>
            <a className="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              Apple
            </a>
            <a className="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              Spor
            </a>
            <a className="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              Aktivite
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/5 items-start text-start px-0 md:px-4 space-y-6 pt-6 md:py-0">
          <div className="w-full bg-colorgray flex flex-col p-6 gap-2">
            <label
              htmlFor="Ara"
              className="border-b border-solid border-gray-200 pb-2 mb-2"
            >
              Ara
            </label>
            <input type="text" placeholder="Ara" className="ps-2 p-3" />
          </div>
          <div className="w-full p-6 bg-colorgray">
            <h2 className="border-b border-solid border-gray-200 pb-4">
              Diğer Yazılar
            </h2>
            <div className="w-full flex flex-row gap-4 mt-6">
              <img
                src={png1}
                alt="blog"
                className="object-cover object-center max-h-28 max-w-28"
              />
              <div className="flex flex-col justify-between">
                <h4 className="line-clamp-2 overflow-hidden">
                  Gözlük alırken nelere dikkat edilmeli? Neler göz önünde
                  bulundurulmalı
                </h4>
                <p className="">31 Mayıs 2024</p>
              </div>
            </div>
            <div className="w-full flex flex-row gap-4 mt-6">
              <img
                src={png1}
                alt="blog"
                className="object-cover object-center max-h-28 max-w-28"
              />
              <div className="flex flex-col justify-between">
                <h4 className="line-clamp-2 overflow-hidden">
                  Gözlük alırken nelere dikkat edilmeli?
                </h4>
                <p className="">31 Mayıs 2024</p>
              </div>
            </div>
            <div className="w-full flex flex-row gap-4 mt-6">
              <img
                src={png1}
                alt="blog"
                className="object-cover object-center max-h-28 max-w-28"
              />
              <div className="flex flex-col justify-between">
                <h4 className="line-clamp-2 overflow-hidden">
                  Gözlük alırken nelere dikkat edilmeli?
                </h4>
                <p className="">31 Mayıs 2024</p>
              </div>
            </div>
            <div className="w-full flex flex-row gap-4 mt-6">
              <img
                src={png1}
                alt="blog"
                className="object-cover object-center max-h-28 max-w-28"
              />
              <div className="flex flex-col justify-between">
                <h4 className="line-clamp-2 overflow-hidden">
                  Gözlük alırken nelere dikkat edilmeli?
                </h4>
                <p className="">31 Mayıs 2024</p>
              </div>
            </div>
          </div>
          <div className="w-full bg-colorgray flex flex-col p-6 gap-2">
            <h2 className="border-b border-solid border-gray-200 pb-4 mb-4">
              Popüler Etiketler
            </h2>
            <div className="flex flex-wrap gap-2">
              <p className="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                iOS
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
              >
                Akıllı Saat
              </a>
              <a className="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                Koşu
              </a>
              <a className="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                Sağlık
              </a>
              <a className="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                Apple
              </a>
              <a className="inline-flex items-center rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                Spor
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetails;
