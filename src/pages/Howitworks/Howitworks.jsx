import React from "react";
import Layout from "../../layout/Layout";
import PageTitle from "../../components/Helpers/PageTitle";
import png from "../../assets/png.png";
import image from "../../assets/image.png";
import { TbHandFinger } from "react-icons/tb";
import { BsBagCheck, BsCalendar2Check } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import Faq from "../../components/FAQ/Faq";

const steps = [
  {
    icon: TbHandFinger,
    title: "Ürün Seçimi",
    description:
      "VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.",
  },
  {
    icon: BsCalendar2Check,
    title: "Rezervasyon Yap",
    description:
      "Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.",
    bgColor: "bg-indigo-500",
  },
  {
    icon: IoLocationOutline,
    title: "Teslimat Noktası Belirleyin",
    description:
      "Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.",
    bgColor: "bg-indigo-500",
  },
  {
    icon: RxUpdate,
    title: "Kullanın ve İade Edin",
    description:
      "Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.",
    bgColor: "bg-indigo-500",
  },
];

function Howitworks() {
  return (
    <Layout childrenClasses="py-0">
      <div className="hidden md:block">
        <PageTitle
          title="OunoRent Nasıl Çalışır?"
          breadcrumb={[
            { name: "Anasayfa", path: "/" },
            { name: "Nasıl Çalışır?", path: "/nasilcalisir" },
          ]}
        />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
              {steps.map((item, index) => (
                <div key={index} className="flex relative pb-20">
                  <div className="h-full w-14 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-colorred inline-flex items-center justify-center text-white relative z-10">
                    <item.icon size={30} />
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-xl text-gray-900 mb-1 ">
                      {item.title}
                    </h2>
                    <p className="leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}

              <div className="flex relative">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-colorred inline-flex items-center justify-center text-white relative z-10">
                  <BsBagCheck size={30} />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-xl text-gray-900 mb-1">
                    Veya İade etmeden satın alın
                  </h2>
                  <p className="leading-relaxed">
                    Pitchfork ugh tattooed scenester echo park gastropub
                    whatever cold-pressed retro.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="hidden md:block lg:w-2/5 md:w-1/2 w-full object-cover object-center rounded-md md:mt-0 mt-12"
              src={png}
              alt="step"
            />
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-md"
              alt="hero"
              src={image}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              İster süreni uzat, ister satın al
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
        </div>
        <Faq />
      </section>
    </Layout>
  );
}

export default Howitworks;
