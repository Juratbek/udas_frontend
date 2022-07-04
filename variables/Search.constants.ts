import { ArticlesTab, BlogsTab } from 'frontends/home';
import { ITabBody, ITabHeader } from 'types';

const TAB_IDS = {
  articles: 'articles',
  blogs: 'blogs',
};

export const SEARCH_TAB_MENUS: ITabHeader[] = [
  {
    name: 'Maqolalar',
    id: TAB_IDS.articles,
  },
  {
    name: 'Bloglar',
    id: TAB_IDS.blogs,
  },
];

export const SEARCH_TABS: ITabBody = {
  [TAB_IDS.articles]: ArticlesTab,
  [TAB_IDS.blogs]: BlogsTab,
};