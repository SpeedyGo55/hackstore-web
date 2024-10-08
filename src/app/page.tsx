import AppItemCard from "@/components/AppItemCard";
import AppList from "@/components/AppList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-12">
        <AppList title="Featured Apps">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <AppItemCard
                key={i}
                src="/placeholder.svg"
                name="My Cool App"
                ratings={4.5}
                href="/package/com.mycoolapp"
              />
            ))}
        </AppList>
        <AppList title="Utilities & Tools">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <AppItemCard
                key={i}
                src="/placeholder.svg"
                name="My Cool App"
                ratings={4.5}
                href="/package/com.mycoolapp"
              />
            ))}
        </AppList>
      </main>
      <Footer />
    </>
  );
}
