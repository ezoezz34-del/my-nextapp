import "./page.css";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { newss } from "../../data/newss";
import Link from "next/link";
import Image from "next/image";
export async function generateMetadata({ params }) {
  const { id } = await params;

  const post = newss.find((item) => item.id == id);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.desc,
    keywords: [
      post.title,
      "Football",
      "Sports News",
      "Premier League",
      "Champions League",
      "Egypt News",
      "Latest News",
    ],
    openGraph: {
      title: post.title,
      description: post.desc,
      images: post.image ? [post.image] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.desc,
      images: post.image ? [post.image] : [],
    },
  };
}


async function PostPage({ params }) {

  const { id } = await params;

  const post = newss.find(
    (item) => item.id == id
  );

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
    <div className="page">
    <Navbar/>
    <br />
    <div  className="content">

      <aside className="sidbar">

          <h1 className="ti"> المقالات المقترحه</h1>

      {newss.map((post) => (

        <Link
          key={post.id}
href={`/details/${post.id}`}             >

          <div className="divv">
            {post.image && (

  <Image
      src={post.image}
      alt={post.title}
      width={600}
      height={338}
      sizes="(max-width: 768px) 100vw, 600px"
        // loading="eager"
  priority
      quality={75}
    />
    )}
<br />
            <h2>{post.title}</h2>
<br />
            <p>{post.desc}</p>

          </div>

        </Link>

      ))}



        
      </aside>
      <div className="detal">
        
         {post.image && (

  <Image
      src={post.image}
      alt={post.title}
      width={600}
      height={338}
      sizes="(max-width: 768px) 100vw, 600px"
        loading="eager"
  priority
      quality={75}
    />
    )}
    <br />
<h1>{post.title}</h1>
<br />
      <p>{post.desc}</p>
         
      </div>
      
    </div>
    <h1 className="titlebar"> المقالات ذات صله</h1>
    <div className="bar-bottom">

      {newss.map((post) => (

        <Link
          key={post.id}
href={`/detailss/${post.slug}`}             >

          <div className="divv">
            {post.image && (

  <Image
      src={post.image}
      alt={post.title}
      width={600}
      height={338}
      sizes="(max-width: 768px) 100vw, 600px"
        // loading="eager"
  priority
      quality={75}
    />
    )}
<br />
            <h2>{post.title}</h2>
<br />
      <p>{post.desc.substring(0, 70)}...</p>
                        


          </div>

        </Link>

      ))}

    </div>
    <br />
    <Footer/>
    </div>
    </>
  );
}

export default PostPage;
