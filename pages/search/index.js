import Layout from "../../components/layout/Layout";
import SearchResultsFilter from "../../components/misc/SearchResultsFilter";
import SearchResultsRecipient from "../../components/misc/SearchResultsRecipient";
import VerticalProductCard from "../../components/misc/VerticalProductCard";

export default function SearchResultsSection() {
  return (
    <Layout>
      <main className="is-flex">
        <SearchResultsFilter />
        <SearchResultsRecipient>
          <VerticalProductCard />
          <VerticalProductCard />
          <VerticalProductCard />
          <VerticalProductCard />
          <VerticalProductCard />
          <VerticalProductCard />
        </SearchResultsRecipient>
      </main>
    </Layout>
  );
}
