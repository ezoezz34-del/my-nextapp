import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { fmnews } from "../../data/fmnews";
import { newss } from "../../data/newss";
import { job } from "../../data/job";

import Search from "../../components/search";

import "./page.css";
import Link from "next/link";
import Image from "next/image";
export async function generateMetadata({ params }) {
  const { slug} = await params;

  const post = job.find((item) => item.slug == slug);

  if (!post) {
    return {

      title: "Post Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
      // metadataBase: new URL("https://news-egypt.vercel.app"),

    title: post.title,
    description: post.desc,
    keywords: [
      post.title,
      "showtime",
      "الفن News",
      "كل جديد هنا ",
      "مصر فن و اخبار مهمه",
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


async function offers({ params }) {

  const { slug } = await params;

  const post = job.find(
    (item) => item.slug == slug
  );
 

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
    <div className="page">
    <Navbar/>
    <br />
              <Search />
          <h1 className="ti"> المقالات المقترحه</h1>

    <div  className="content">

      <aside className="sidbar">


      {job.map((post) => (

        <Link
          key={post.slug}
href={`/offers/${post.slug}`}             >

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
              <Link className="kas" href="/sumit">
              <div className="apply">التقديم من هنا</div>
              </Link>
              <br />
                <Link className="kas" href="/sumit">
              <div className="apply">apply From Here</div>
              </Link> 

      </div>
      
    </div>
    <h1 className="titlebar"> المقالات ذات صله</h1>
    <div className="bar-bottom">

      {job.map((post) => (

        <Link
          key={post.slug}
href={`/offers/${post.slug}`}             >

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

export default offers;


