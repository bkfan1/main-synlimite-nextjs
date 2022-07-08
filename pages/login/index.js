import AccountForm from "../../components/forms/AccountForm";
import Layout from "../../components/layout/Layout";

export default function LoginSection() {
  return (
    <Layout>
      <main className="is-flex is-align-items-center is-justify-content-center">
        <AccountForm/>
      </main>
    </Layout>
  );
}
