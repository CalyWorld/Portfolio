import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";

export default function HomePage() {
  return (
    <div className="flex flex-col w-[60%] gap-10 items-center">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}
