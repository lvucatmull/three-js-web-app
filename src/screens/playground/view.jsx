import NavHeader from 'component/nav';
import { Card, CardContent, CardHeader } from 'style/design/common';
import styles from 'style/style.module.scss';
import './style.scss';
//Main Page
const View = ({ selected, handleSelected, posts=[] }) => {
  console.log('[RENDER] MainPage');

  return (
    // <div className={styles.container}>
    <main className={styles.container}>
      <NavHeader selected={selected} handleSelected={handleSelected} />
      <div className={styles.body}>
        <div className={styles.contents}>
          <div className={styles.contentsBlock}> 
            <div className="container">
            {posts && posts.map(post => {
               return (
                <div key={post?.name} className="item">
                <Card>
                  <CardHeader>{post?.name ? post.name : ''}</CardHeader>
                  <CardContent>
                    {/* <p>{`url : ${post?.url ? post.url : ''}`}</p> */}
                    {/* <a ref={post?.url ? post.url : ''}></a> */}
                    </CardContent>
                </Card>
                </div>
                );
            })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default View;
