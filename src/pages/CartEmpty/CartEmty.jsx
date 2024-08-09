import React from "react";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";

function CartEmty() {
  return (
    <Layout childrenClasses="pt-0">
      <div className="container mx-auto flex flex-col items-center gap-2 py-20 mt-4">
        <h2 className="text-qblack text-xl font-semibold">Sepetim</h2>
        <p className="mb-4">Sepetinizde ürün bulunmuyor.</p>
        <Link to="/" className="">
          <CustomButton
            type="button"
            children={"Alışverişe başla"}
            color="black"
          />
        </Link>
      </div>
    </Layout>
  );
}

export default CartEmty;
