import React from "react";
import Layout from "../../layout/Layout";
import PageTitle from "../../components/Helpers/PageTitle";

function Campaigns() {
  return (
    <Layout childrenClasses="py-0">
      <div className="hidden md:block">
        <PageTitle
          title="Kampanyalar"
          breadcrumb={[
            { name: "Anasayfa", path: "/" },
            { name: "Kampanyalar", path: "/campaigns" },
          ]}
        />
      </div>
    </Layout>
  );
}

export default Campaigns;
