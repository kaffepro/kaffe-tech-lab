"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { locales } from "@/i18n/config";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as any });
  };

  return (
    <div className="flex gap-4 items-center h-6">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => handleLocaleChange(l)}
          className={`text-[9px] font-bold uppercase tracking-[0.25em] transition-all duration-500 relative group ${
            locale === l
              ? "text-stone-800"
              : "text-stone-300 hover:text-stone-500"
          }`}
        >
          {l === "en" ? "ENG" : "ZHO"}
          {locale === l && (
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent-blue" />
          )}
          {locale !== l && (
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-stone-200 group-hover:w-full transition-all duration-300" />
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
