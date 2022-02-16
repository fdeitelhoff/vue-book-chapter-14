import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import de from './locales/de.json';

import messages from '@intlify/vite-plugin-vue-i18n/messages';

export default createI18n({
  locale: import.meta.env.VUE_APP_I18N_LOCALE || 'de',
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages,
});
