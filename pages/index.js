
import AddProductForm from "../components/forms/AddProductForm";
import Layout from "../components/layout/Layout";
import CategoryCard from "../components/misc/CategoryCard";
import Image from "next/image";
import VerticalProductoCard from "../components/misc/VerticalProductCard";
import BusinessProfileInfoCard from "../components/misc/BusinessProfileInfoCard";
import Comment from "../components/misc/Comment";
import CommentsRecipient from "../components/productPost/CommentsRecipient";
import Slider from "../components/misc/Slider";
import BusinessDataForm from "../components/forms/BusinessDataForm";
import RequestRefundForm from "../components/forms/RequestRefundForm";

export default function Home() {
  return (
    <>
    <Layout>
      <main>
      <Slider />
      <BusinessDataForm />
      <RequestRefundForm/>
      </main>



    </Layout>
    </>
   
  )
}
