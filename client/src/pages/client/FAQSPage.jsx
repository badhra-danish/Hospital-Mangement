import React from "react";
import PageHead from "../../components/client/utils/PageHead";
import Faqs from "../../components/client/FAQs/Faqs";
function FAQSPage() {
  return (
    <>
      <PageHead
        pagename={"FAQs"}
        pageheadline={"How Can We Help You Today?"}
        pageinfo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      />
      <Faqs />
    </>
  );
}

export default FAQSPage;
