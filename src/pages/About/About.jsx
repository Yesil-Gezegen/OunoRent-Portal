import React from "react";
import Layout from "../../layout/Layout";
import PageTitle from "../../components/Helpers/PageTitle";

function About() {
  return (
    <Layout childrenClasses="py-0">
      <div className="hidden md:block">
        <PageTitle
          title="Hakkımızda"
          breadcrumb={[
            { name: "Anasayfa", path: "/" },
            { name: "Hakkımızda", path: "/about" },
          ]}
        />
      </div>
    </Layout>
  );
}

export default About;
