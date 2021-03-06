import { TabBody, TabsHeader } from 'components';
import { ARTICLES_TAB_MENUS, ARTICLES_TABS } from 'variables';

export default function ArticlesPage(): JSX.Element {
  return (
    <main className='container'>
      <h1 className='mb-1'>Maqolalar</h1>
      <TabsHeader tabs={ARTICLES_TAB_MENUS} />
      <TabBody tabs={ARTICLES_TABS} />
    </main>
  );
}
