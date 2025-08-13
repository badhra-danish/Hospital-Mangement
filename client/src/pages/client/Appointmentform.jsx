import React from "react";
import PageHead from "../../components/client/utils/PageHead";
import AppointmentForm from "../../components/client/Appointment/AppointmentForm";
import HowItWorks from "../../components/client/Home/HowIisWork";
function Appointmentform() {
  return (
    <>
      <PageHead
        pagename={"APPOINTMENT"}
        pageheadline={"Make an Appointment"}
        pageinfo={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        }
      />
      <AppointmentForm />
      <HowItWorks />
    </>
  );
}

export default Appointmentform;
