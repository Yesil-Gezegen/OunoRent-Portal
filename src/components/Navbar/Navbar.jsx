import React, { useState, useMemo } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoMdClose, IoIosArrowDown, IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxPerson } from "react-icons/rx";
import png from "../../assets/png.png";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LogoIcon from "../svg/LogoIcon";
import { useHeader } from "../../context/HeaderContext";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/Input";

export default function Navbar() {
  const { isLoggedIn, handleLogout } = useAuth();
  const { menuItem, categories } = useHeader();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const sortedCategories = useMemo(() => {
    return categories
      .map((category) => ({
        ...category,
        subCategories: category.subCategories.sort(
          (a, b) => a.orderNumber - b.orderNumber
        ),
      }))
      .sort((a, b) => a.orderNumber - b.orderNumber);
  }, [categories]);

  return (
    <nav className="shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-3 xl:px-0 py-0 md:py-2">
        <Link to="/" className="hidden md:block text-4xl w-24 h-1/2">
          <LogoIcon width={150} height={80} />
        </Link>
        <form className="hidden md:flex justify-center items-center px-5 py-5 w-2/5">
          <div className="flex w-full relative">
            <CustomInput
              label={""}
              name={"search"}
              type={"search"}
              placeholder={"Ürün Ara"}
              inputClasses={"rounded-none"}
            />
          </div>
          <div className="w-24">
            <CustomButton
              type="submit"
              children={<CiSearch color="white" size={22} />}
              color="search"
            />
          </div>
        </form>

        <div className="hidden md:flex justify-between items-center gap-4">
          {isLoggedIn ? <IoMdHeartEmpty size={22} /> : null}
          <Link to="/cartempty">
            <HiOutlineShoppingBag size={22} />
          </Link>
          {isLoggedIn ? <RxPerson size={22} /> : null}
          {!isLoggedIn ? (
            <div className="flex justify-center items-center gap-1">
              <Link to="/login">
                <button className="px-3 h-10 font-medium w-auto rounded-md bg-white text-base text-black transition-colors duration-200 transform hover:text-red-700 whitespace-nowrap capitalize">
                  giriş yap{" "}
                </button>
              </Link>
              <Link to="/register">
                <CustomButton type="submit" children={"üye ol"} color="black" />
              </Link>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-1">
              <button
                className="px-3 h-12 font-medium tracking-wide text-black capitalize transition-colors duration-500 transform border border-red-600 whitespace-nowrap rounded-none focus:outline-none shadow"
                onClick={handleLogout}
              >
                Çıkış Yap
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-colorred text-white">
        <div className="container mx-auto px-3 xl:px-0">
          <div className="flex relative items-center justify-start">
            <div className="inline-block text-left group mr-4">
              <button className="hidden md:flex items-center h-[49px] w-[264px] mt-2 gap-3 bg-white p-2 rounded-ss-lg rounded-se-lg text-black border-b-[0.5px] border-red-600 hover:text-red-600">
                <CgMenuLeftAlt size={20} className="flex-0" />
                <span className="flex-2 text-md font-medium">
                  Tüm Kategoriler
                </span>
                <IoIosArrowDown className="ml-auto" />
              </button>
              <div className="group">
                <div className="absolute hidden md:block left-0 w-full bg-white text-black p-4 rounded-none shadow transition-all duration-500 ease-in-out transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 invisible group-hover:visible z-50 flex-grow">
                  <div className="flex justify-between">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left flex-grow">
                      {sortedCategories.map((item, index) => (
                        <div key={index}>
                          <h3 className="font-bold">{item.name}</h3>

                          <ul>
                            <li>
                              {item.subCategories?.map((sub, index) => (
                                <div key={index}>{sub.name}</div>
                              ))}
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>

                    <img src={png} alt="png" className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
            {/* web nasıl çalışır vs */}
            <div className="hidden md:flex space-x-4 mt-0 md:mt-2">
              <Link
                to="/nasilcalisir"
                className="relative inline cursor-pointer text-md font-medium"
              >
                Nasıl Çalışır?
              </Link>
              <Link
                to="/kurumsal"
                className="relative inline cursor-pointer text-md font-medium"
              >
                Kurumsal
              </Link>
              <Link
                to="/campaigns"
                className="relative inline cursor-pointer text-md font-medium"
              >
                Kampanyalar
              </Link>
            </div>
            {/* mobile navbar */}
            <div className="flex justify-between items-center md:hidden flex-grow">
              <div className="flex-1 flex justify-start">
                <button className="py-2 -ml-2 my-2" onClick={toggleDrawer}>
                  <CgMenuLeftAlt size={24} />
                </button>
              </div>

              <Link to="/" className="flex-1 flex justify-center">
                <LogoIcon color="#FFFFFF" />
              </Link>
              <div className="flex-1 flex items-center justify-end space-x-2">
                {isLoggedIn ? <IoMdHeartEmpty size={22} /> : null}
                <Link to="/cartempty">
                  <HiOutlineShoppingBag size={22} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 "
            onClick={toggleDrawer}
          >
            <div
              className="fixed top-0 left-0 h-full bg-white p-4 overflow-y-auto w-full"
              // onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <Link to="/login" className="flex items-center space-x-2">
                  <RxPerson size={22} color="black" />
                  {isLoggedIn ? (
                    <p className="font-medium text-xl text-slate-800">
                      kullanıcı adı
                    </p>
                  ) : (
                    <p className="font-medium text-xl text-slate-800">
                      Giriş Yap
                    </p>
                  )}
                </Link>

                <button onClick={toggleDrawer}>
                  <IoMdClose size={24} color="red" />
                </button>
              </div>

              {/* mobile arama barı */}
              <div className="flex items-center space-x-2 mb-2">
                <div>
                  <CiSearch color="black" size={22} />
                </div>
                <input
                  type="text"
                  placeholder="Ürün Ara"
                  className="text-sm h-6 text-slate-900 ps-1 placeholder-gray-600 dark:placeholder-gray-300 border border-gray-1 focus:outline-none"
                />
              </div>
              {/* Mobil tüm kategoriler menüsü */}
              <ul className="space-y-2 text-left">
                <li>
                  <Link to="/nasilcalisir" className="block text-black">
                    Nasıl Çalışır?
                  </Link>
                  <Link to="/kurumsal" className="block text-black">
                    Kurumsal
                  </Link>
                  <Link to="/campaigns" className="block text-black">
                    Kampanyalar
                  </Link>
                </li>
                <li>
                  <a href="#" className="block text-black">
                    Telefon
                  </a>
                  <ul className="pl-4 space-y-1 text-gray-500">
                    <li>Akıllı Telefonlar</li>
                    <li>Klasik Telefonlar</li>
                    <li>Aksesuarlar</li>
                    <li>Şarj Cihazları</li>
                    <li>Kılıflar</li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="block text-black">
                    Spor
                  </a>
                  <ul className="pl-4 space-y-1 text-gray-500">
                    <li>Koşu</li>
                    <li>Futbol</li>
                    <li>Basketbol</li>
                    <li>Yüzme</li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="block text-black">
                    Bilgisayar & Tablet
                  </a>
                  <ul className="pl-4 space-y-1 text-gray-500">
                    <li>Dizüstü Bilgisayarlar</li>
                    <li>Masaüstü Bilgisayarlar</li>
                    <li>Tabletler</li>
                    <li>Monitörler</li>
                    <li>Klavye & Mouse</li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="block text-black">
                    Ev & Ofis
                  </a>
                  <ul className="pl-4 space-y-1 text-gray-500">
                    <li>Mobilya</li>
                    <li>Ofis Malzemeleri</li>
                    <li>Temizlik Ürünleri</li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="block text-black">
                    Ses & Müzik
                  </a>
                  <ul className="pl-4 space-y-1 text-gray-500">
                    <li>Hoparlörler</li>
                    <li>Kulaklıklar</li>
                    <li>Ses Sistemleri</li>
                    <li>Mikrofonlar</li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="block text-black">
                    Elektrikli Ev Aletleri
                  </a>
                  <ul className="pl-4 space-y-1 text-gray-500">
                    <li>Buzdolapları</li>
                    <li>Çamaşır Makineleri</li>
                    <li>Bulaşık Makineleri</li>
                    <li>Elektrikli Süpürgeler</li>
                    <li>Mikrodalga Fırınlar</li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="block text-black">
                    Saat
                  </a>
                  <ul className="pl-4 space-y-1 text-gray-500">
                    <li>Akıllı Saatler</li>
                    <li>Klasik Saatler</li>
                    <li>Spor Saatleri</li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="block text-black">
                    Kameralar
                  </a>
                  <ul className="pl-4 space-y-1 text-gray-500">
                    <li>Dijital Kameralar</li>
                    <li>Aksiyon Kameraları</li>
                    <li>Güvenlik Kameraları</li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="block text-black">
                    Oyun Konsolu & VR
                  </a>
                  <ul className="pl-4 space-y-1 text-gray-500">
                    <li>Oyun Konsolları</li>
                    <li>VR Gözlükler</li>
                    <li>Aksesuarlar</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* kategori slider */}
      <div className="container mx-auto px-3 xl:px-0">
        <div className="-mx-3 overflow-y-auto whitespace-nowrap scroll-hidden flex justify-evenly items-center">
          {menuItem.map((item, index) => (
            <a
              key={index}
              className="mx-4 h-14 text-sm leading-5 text-slate-950 transition-colors duration-300 transform md:my-0 flex items-center relative group"
              href="#"
            >
              <span className="flex justify-start items-center gap-1 font-medium">
                <IoPhonePortraitOutline />
                {item.label}
              </span>
              <span className="absolute bottom-0 left-0 block w-full h-0.5 bg-qred transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
