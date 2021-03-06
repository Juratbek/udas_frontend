import { Blog, Button } from 'components';
import { FC } from 'react';
import { IBlog } from 'types';

const blogs: IBlog[] = [
  {
    id: 1,
    name: 'Samandar Boymurodov',
    imgUrl: 'url',
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    articlesCount: 100,
    followersCount: 20,
  },
  {
    id: 2,
    name: 'Blog 2',
    imgUrl: 'url',
    bio: 'Blog bio will be here',
    articlesCount: 100,
    followersCount: 20,
  },
  {
    id: 3,
    name: 'Blog 3',
    imgUrl: 'url',
    bio: 'Blog bio will be here',
    articlesCount: 100,
    followersCount: 20,
  },
  {
    id: 4,
    name: 'Blog 4',
    imgUrl: 'url',
    bio: 'Blog bio will be here',
    articlesCount: 100,
    followersCount: 20,
  },
];

export const BlogsTab: FC = () => {
  return (
    <div className='tab'>
      {blogs.map((blog) => (
        <div className='d-flex align-items-center justify-content-between px-3 py-2' key={blog.id}>
          <Blog {...blog} />
          <Button color='outline-dark'>Follow</Button>
        </div>
      ))}
    </div>
  );
};
