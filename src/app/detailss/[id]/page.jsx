import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { fmnews } from "../../data/fmnews";

async function PostPage({ params }) {

  const { id } = await params;

  const post = fmnews.find(
    (item) => item.id == id
  );

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div className="page">
    <Navbar/>
    <br />
    <div>
      <h1>{post.title}</h1>
      <p>{post.desc}</p>
    </div>
    <Footer/>
    </div>
  );
}

export default PostPage;
