import Breadcrumb from "../BreadCrumb/Breadcrumb";

export default function PageTitle({ title, breadcrumb = [] }) {
  return (
    <div className="bg-[#FFF7F6] w-full h-[173px] py-5">
      <div className="container mx-auto">
        <Breadcrumb paths={breadcrumb} />
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold text-black">{title}</h1>
        </div>
      </div>
    </div>
  );
}
