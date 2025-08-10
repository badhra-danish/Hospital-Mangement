import React from "react";
import PageHead from "../../components/client/utils/PageHead";
import WhatWeAre from "../../components/client/About/WhatWeAre";
function About() {
  return (
    <>
      <PageHead
        pagename={"ABOUT US"}
        pageheadline={"Trusted Care, Modern Medicine"}
        pageinfo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      />
      <WhatWeAre />
    </>
  );
}

export default About;
