import { social, home, about, blog,} from './content';
import { createI18nContent } from './content-i18n';
import { i18n } from './config';

const renderContent = (t) => {
  const data = createI18nContent(t);
  return {
    home,
    about,
    social,
    blog,
  };
};

export { renderContent };
