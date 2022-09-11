import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Services from "./Services";
import BookingDoctor from "./BookingDoctor";
import StepWizard from "react-step-wizard";
import "../styles/Appointment.css";

const Appointment = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  // If user is not signed in, redirect to login
  useEffect(() => {
    if (store.currentUser === null) navigate("/login");
  }, [store.currentUser]);

  // Reset states when appointment page loads
  useEffect(() => {
    store.service = null;
    store.doctor = null;
    store.dateTime = null;
    store.patient = null;
  }, []);

  return (
    <>
      <LazyLoadComponent>
        <div className="bg-primary">
          <div className="appointment-container py-4" style={{ minHeight: "505px" }}>
            <StepWizard>
              <Services />
              <BookingDoctor />
            </StepWizard>
          </div>
        </div>
      </LazyLoadComponent>
    </>
  );
};

export default Appointment;
