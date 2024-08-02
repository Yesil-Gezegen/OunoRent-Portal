import React from "react";
import Layout from "../../layout/Layout";
import PageTitle from "../../components/Helpers/PageTitle";

function Institutional() {
  return (
    <Layout childrenClasses="py-0">
      <div className="hidden md:block">
        <PageTitle
          title="Kurumsal"
          breadcrumb={[
            { name: "Anasayfa", path: "/" },
            { name: "Kurumsal", path: "/kurumsal" },
          ]}
        />
      </div>
    </Layout>
  );
}

export default Institutional;
