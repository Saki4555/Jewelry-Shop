import { useEffect, useState } from "react";
import MyContainer from "../components/shared/MyContainer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./fakeBlogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  });
  return (
    <MyContainer>
      {" "}
      <div className="pt-28 pb-10">
        {blogs.map((blog, idx) => (
          <div key={idx} className="card lg:card-side shadow-lg bg-[#C29958] text-white mb-10">
            <img
                src={blog.image}
                alt="Blog"
                className="object-cover object-center lg:w-[250px] w-full"
              />
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p>{blog.content}......</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MyContainer>
  );
};

export default Blogs;
