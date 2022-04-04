import Image from "next/image";
import Link from "next/link";
import BlogIcon from "./BlogIcon";

const BlogRoll = ({ posts }) => {
  return (
    <>
      <a name="stories"></a>
      <div className="container px-4 py-5 mt-5 mb-3">
        <h2 className="pb-2">Stories</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {posts.map((post, index) => (
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-light-gy text-dark flex-shrink-0 me-3">
                <BlogIcon />
              </div>
              <div>
                <h3>{post.frontMatter.title}</h3>
                <p>{post.frontMatter.description}</p>
                <Link href={"/blog/" + post.slug} passHref key={index}>
                  <a href="#" className="btn btn-dark-navy">
                    Read on...
                  </a>
                </Link>
              {/* <Link href={"/blog/" + post.slug} passHref key={index}>
                <div className="card mb-3 pointer" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{post.frontMatter.title}</h5>
                        <p className="card-text">
                          {post.frontMatter.description}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            {post.frontMatter.date}
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 m-auto">
                      <Image
                        src={post.frontMatter.thumbnailUrl}
                        className="img-fluid mt-1 rounded-start"
                        alt="thumbnail"
                        width={500}
                        height={400}
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              </Link> */}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-light-gy text-dark flex-shrink-0 me-3">
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"></path>
                  <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"></path>
                  <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
                </svg>
              </div>
              <div>
                <h3>Featured title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" className="btn btn-dark-navy">
                  Read on...
                </a>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-light-gy text-dark flex-shrink-0 me-3">
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
                  <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z"></path>
                </svg>
              </div>
              <div>
                <h3>Featured title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" className="btn btn-dark-navy">
                Read on...
                </a>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square bg-light-gy text-dark flex-shrink-0 me-3">
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"></path>
                </svg>
              </div>
              <div>
                <h3>Featured title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" className="btn btn-dark-navy">
                Read on...
                </a>
              </div>
            </div>
          </div> */}
        <p>
          <a href="#">Read All</a>
        </p>
      </div>
      <style jsx>
        {`
          .icon-square {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            height: 3rem;
            font-size: 1.5rem;
            border-radius: 0.75rem;
          }
          .bg-light-gy {
            background-color: rgba(238, 232, 213, 0.5);
          }
          .btn-dark-navy {
            background-color: #121432;
            color: rgba(238, 232, 213, 0.75);
          }
          .btn-dark-navy:hover {
            background-color: #4a4a6c;
          }
        `}
      </style>
    </>
  );
};

export default BlogRoll;
