"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function LocaleDropdown() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push({ pathname }, { locale });
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="border rounded p-1"
    >
      <option value="ko">한국어</option>
      <option value="en">English</option>
      <option value="jp">日本語</option>
    </select>
  );
}
