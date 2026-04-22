import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/button';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      color="ghost"
      sizeBtn="small"
      onClick={toggleLanguage}
      aria-label="Switch language"
    >
      {i18n.language === 'en' ? 'RU' : 'EN'}
    </Button>
  );
}
