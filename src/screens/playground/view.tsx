import PokemonDex from 'component/PokemonDex';
import NavHeader from 'component/nav';
import { Ref, forwardRef } from 'react';
import { Card, CardContent, CardHeader } from 'style/design/common';
import styles from 'style/style.module.scss';
import { TPokemonData } from 'utils/types';
import './style.scss';

interface ViewProps {
  selected: any;
  handleSelected: (selection: any) => void;
  posts: Array<TPokemonData>;
  loadMoreRef: Ref<HTMLDivElement>;
  isLoading: boolean;
}

//Main Page
const View = forwardRef(function (
  { selected, handleSelected, posts, loadMoreRef, isLoading}: ViewProps,
  ref: Ref<HTMLDivElement> | undefined
) {
  console.log('> [VIEW] playground ', posts?.length);

  return (
    <main className={styles.container}>
      <NavHeader selected={selected} handleSelected={handleSelected} />
      <div ref={ref} className={styles.body}>
        <div className={styles.contents}>
          <div className={styles.contentsBlock}>
            <div className="container">
              {posts &&
                posts.map(post => (
                  <div className="item">
                    {isLoading ? <span> Loading ... </span> : <Card>
                      <CardHeader>{post?.name}</CardHeader>
                      <CardContent>
                        <PokemonDex name={post?.name?.toString()} url={post?.url?.toString()} />
                      </CardContent>
                    </Card>}
                  </div>
                ))}
              <div ref={loadMoreRef} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
});

export default View;
