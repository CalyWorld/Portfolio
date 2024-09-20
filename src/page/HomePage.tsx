import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <main className="flex-grow">
        {" "}
        <Header />
        <Section />
      </main>
      <Footer />
    </div>
  );
}
