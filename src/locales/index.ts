import { createI18n } from "vue-i18n";

import en from "./en";
import fa from "./fa";
import { getInitialLocale } from "./languages";
import ru from "./ru";
import zh from "./zh";

const i18n = createI18n({
  locale: getInitialLocale(),
  messages: {
    en,
    fa,
    zh,
    ru,
  },
});

export default i18n;