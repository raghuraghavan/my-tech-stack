import Layout from '../components/Layout';
import Content from '../components/Content';


const Blog = () => {
  const titleTag='Tech Blog 📓'
  // eventually make an api call with these ids
  const listOfBlogs = [
    'hello-next', 'chrome-tricks', 'css-bugs', 'deploying-with-digital-ocean'
  ].map(blogId => <Content id={blogId} key={blogId} />)

  return (
    <Layout title={titleTag}>
      <h1>My Blog</h1>
      <ul>
        {listOfBlogs}
      </ul>
    </Layout>
  )
} 

export default Blog;