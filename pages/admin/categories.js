import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { nanoid } from "nanoid";
import FieldsPreviewer from "../../components/misc/FieldsPreviewer";
import SubCategoryModifierForm from "../../components/forms/SubCategoryModifierForm";

export default function Categories() {
  

  return (
    <>
      <Layout>
        <main>
          <SubCategoryModifierForm/>
        </main>
      </Layout>
    </>
  );
}
