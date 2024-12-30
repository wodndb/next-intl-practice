import { useTranslations } from "next-intl";
import PetCard from "../components/PetCard";
import dogImageUrl from "@/../public/dog.png";
import catImageUrl from "@/../public/cat.png";
import parrotImageUrl from "@/../public/parrot.png";
import LocaleDropdown from "../components/LocaleDropdown";

export default function MainPage() {
  const t = useTranslations("MainPage");
  return (
    <div className="h-dvh flex flex-col items-center justify-between">
      <header className="w-full border-b p-4 flex justify-between">
        <p className="font-bold text-2xl">My Pet Blog</p>
        <LocaleDropdown />
      </header>
      <main>
        <section className="w-full text-center p-4">
          <h1 className="text-3xl font-bold">{t("pageTitle")}</h1>
          <p>{t("description")}</p>
        </section>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PetCard
            name={t("pets.dog.name")}
            description={t("pets.dog.description")}
            imageUrl={dogImageUrl}
          />
          <PetCard
            name={t("pets.cat.name")}
            description={t("pets.cat.description")}
            imageUrl={catImageUrl}
          />
          <PetCard
            name={t("pets.parrot.name")}
            description={t("pets.parrot.description")}
            imageUrl={parrotImageUrl}
          />
        </section>
      </main>
      <footer className="w-full border-t text-center py-2">Nya Nya Inc.</footer>
    </div>
  );
}
