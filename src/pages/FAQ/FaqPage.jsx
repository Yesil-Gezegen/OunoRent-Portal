import React from "react";
import Layout from "../../layout/Layout";
import Faq from "../../components/FAQ/Faq";
import PageTitle from "../../components/Helpers/PageTitle";

function FaqPage() {
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
      <Faq />
    </Layout>
  );
}

export default FaqPage;
