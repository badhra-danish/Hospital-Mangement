import React from "react";
import PageHead from "../../components/client/utils/PageHead";
import ContactUs from "../../components/client/ConatctUs/ConatctUs";
import Maps from "../../components/client/ConatctUs/Maps";
function ConatactPage() {
  return (
    <>
      <PageHead
        pagename={"Contact Us"}
        pageheadline={"We’re Here to Help You"}
        pageinfo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      />
      <ContactUs />
      <Maps />
    </>
  );
}

export default ConatactPage;
