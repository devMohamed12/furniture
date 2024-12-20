
const BlogPost = ({post}) => {
  return (
    <div className="mb-12  rounded ">
      <img src="https://picsum.photos/600/300" alt="" className="rounded" />
      <h2 className="mt-2 mb-3 text-2xl font-bold text-accent ">{post.title}</h2>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatem
        explicabo placeat quasi laudantium vero suscipit magni obcaecati soluta!
        Itaque soluta, nemo tempora ab doloremque aspernatur id voluptas vitae
        excepturi?
      </p>
    </div>
  );
}

export default BlogPost