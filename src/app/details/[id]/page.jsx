import "./page.css";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { newss } from "../../data/newss";
import Link from "next/link";
import Image from "next/image";


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
        loading="eager"
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
            {/* <p>{post.desc}</p>
                  <p>{post.desc}</p>
                        <p>{post.desc}</p> */}



      </div>
      
    </div>
    <div className="bar-bottom">

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
        loading="eager"
  priority
      quality={75}
    />
    )}
<br />
            <h2>{post.title}</h2>
<br />
      <p>{post.desc.substring(0, 150)}...</p>
                        


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
