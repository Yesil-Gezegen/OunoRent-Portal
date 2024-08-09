import React, { useEffect } from "react";
import Layout from "../../layout/Layout";
import Faq from "../../components/FAQ/Faq";
import PageTitle from "../../components/Helpers/PageTitle";
import { useData } from "../../context/ApiContext";

function FaqPage() {
  const { getFaqData, faqData } = useData();
  useEffect(() => {
    getFaqData();
  }, []);
  return (
    <Layout childrenClasses="pt-0">
      <div className="hidden md:block">
        <PageTitle
          breadcrumb={[
            { name: "Anasayfa", path: "/" },
            { name: "SSS", path: "/faq" },
          ]}
        />
      </div>
      <Faq data={faqData} />
    </Layout>
  );
}

export default FaqPage;
