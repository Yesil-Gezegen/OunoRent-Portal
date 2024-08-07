import React from "react";
import Layout from "../../layout/Layout";

function CartEmty() {
  return (
    <Layout childrenClasses="pt-0">
      <div className="container mx-auto flex flex-col items-center gap-2 py-20 mt-4">
        <h2 className="text-qblack text-xl font-semibold">Sepetim</h2>
        <p className="mb-4">Sepetinizde ürün bulunmuyor.</p>
        <button
          type="button"
          className="bg-colorred rounded text-qwhite px-4 py-2 hover:bg-gray-900 transition duration-300"
        >
          Alışverişe başla
        </button>
      </div>
    </Layout>
  );
}

export default CartEmty;
