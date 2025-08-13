import React from "react";
import PageHead from "../../components/client/utils/PageHead";
import Blogs from "../../components/client/Blogs/Blogs";
function BlogPage() {
  return (
    <>
      <PageHead
        pagename={"Health Tips & Articles"}
        pageheadline={"Latest News from Sehat"}
        pageinfo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      />
      <Blogs />
    </>
  );
}

export default BlogPage;
