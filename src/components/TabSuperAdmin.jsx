import { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Table, Thead, Tr, Th } from "react-super-responsive-table";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import { FaCalendarCheck, FaHospitalUser, FaUserMd, FaBookmark, FaTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import TableDataClient from "../components/TableDataClient";
import TableDataService from "./TableDataService";
import TableDataSpecialist from "./TableDataSpecialist";
import TableDataAppointment from "./TableDataAppointment";
import ModalAddWithForm from "./Modal/ModalAddWithForm";
import FormAddService from "./Modal/Forms/FormAddService";
import FormAddSpecialist from "./Modal/Forms/FormAddSpecialist";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "../styles/TabSuperAdmin.css";
import "../styles/DashboardTables.css";

function TabSuperAdmin() {
  const { store, actions } = useContext(Context);

  const [activeTab, setActiveTab] = useState("0");

  const cambiarTab = (numeroTab) => {
    if (activeTab !== numeroTab) {
      setActiveTab(numeroTab);
    }
  };

  useEffect(() => {
    actions.getAllAppointments();
    actions.getClients();
    actions.getAdmins();
  }, []);

  return (
    <LazyLoadComponent>
      <div className="TabSuperAdmin">
        <br />
        <Nav tabs id="tabs">
          <NavItem>
            <NavLink
              className={activeTab == "1" ? "activeTab baseTab" : "baseTab"}
              onClick={() => cambiarTab("1")}
            >
              <FaCalendarCheck size="1.5rem" style={{ color: "#8dc2fe" }} className="p-1" />
              Citas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab == "2" ? "activeTab baseTab" : "baseTab"}
              onClick={() => cambiarTab("2")}
            >
              <FaHospitalUser size="1.75rem" style={{ color: "#8dc2fe" }} className="p-1" />
              Pacientes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab == "3" ? "activeTab baseTab" : "baseTab"}
              onClick={() => cambiarTab("3")}
            >
              <FaUserMd size="1.5rem" style={{ color: "#8dc2fe" }} className="p-1" />
              Especialistas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab == "4" ? "activeTab baseTab" : "baseTab"}
              onClick={() => cambiarTab("4")}
            >
              <FaBookmark size="1.5rem" style={{ color: "#8dc2fe" }} className="p-1" />
              Servicios
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          {/* !!!!!!!!!!!!!!!!!! TABLA DE CITAS !!!!!!!!!!!!!!!!!!!!!!!*/}
          <TabPane tabId="1">
            <div className="container">
              <br />

              <Table className="table table-borderer table-sm shadow">
                <Thead>
                  <Tr style={{ backgroundColor: "#E8FFEB" }}>
                    <Th scope="col" className="th p-2">
                      #
                    </Th>
                    <Th scope="col" className="th p-2">
                      Fecha
                    </Th>
                    <Th scope="col" className="th p-2">
                      Paciente
                    </Th>
                    <Th scope="col" className="th p-2">
                      Doctor
                    </Th>
                    <Th scope="col" className="th p-2">
                      Servicio
                    </Th>
                    <Th scope="col" className="th p-2">
                      Factura
                    </Th>
                    <Th scope="col" className="th p-2">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="btn-dashboard">
                          <FaTrashAlt size="1rem" />
                        </div>
                      </div>
                    </Th>
                  </Tr>
                </Thead>
                {!!store.appointments &&
                  store.appointments.length > 0 &&
                  store.appointments.map((appointment, i) => (
                    <TableDataAppointment {...appointment} key={i} index={appointment.id} />
                  ))}
              </Table>
            </div>
          </TabPane>

          {/* !!!!!!!!!!!!!!!!!! TABLA DE CLIENTES !!!!!!!!!!!!!!!!!!!!!!!*/}
          <TabPane tabId="2">
            <div className="container">
              <br />
              <Table className="table table-borderer table-sm shadow">
                <Thead>
                  <Tr style={{ backgroundColor: "#6495ED" }}>
                    <Th scope="col" className="th p-2">
                      ID
                    </Th>
                    <Th scope="col" className="th p-2">
                      Paciente
                    </Th>
                    <Th scope="col" className="th p-2">
                      Email
                    </Th>
                    <Th scope="col" className="th p-2">
                      Teléfono
                    </Th>
                    <Th scope="col" className="th p-2">
                      Historial de citas
                    </Th>
                    <Th scope="col" className="th p-2">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="btn-dashboard">
                          <BsPencilSquare size="1rem" />
                        </div>
                        <div className="btn-dashboard">
                          <FaTrashAlt size="1rem" />
                        </div>
                      </div>
                    </Th>
                  </Tr>
                </Thead>
                {!!store.clients &&
                  store.clients.length > 0 &&
                  store.clients.map((client, i) => (
                    <TableDataClient {...client} key={i} index={client.id} />
                  ))}
              </Table>
            </div>
          </TabPane>

          {/* !!!!!!!!!!!!!!!!!! TABLA DE ESPECIALISTAS !!!!!!!!!!!!!!!!!!!!!!!*/}
          <TabPane tabId="3">
            <div className="container">
              <div className="add-specialist-button mt-3">
                {/* <ModalAddSpecialist /> */}
                <ModalAddWithForm
                  addWord="Agregar"
                  connector="un"
                  addWhat="especialista"
                  backgroundColor="#BCBBF8"
                  color="black"
                >
                  <FormAddSpecialist />
                </ModalAddWithForm>
              </div>

              <br />
              <Table className="table table-borderer table-sm shadow">
                <Thead>
                  <Tr style={{ backgroundColor: "#BCBBF8" }}>
                    <Th scope="col" className="th p-2">
                      ID
                    </Th>
                    <Th scope="col" className="th p-2">
                      Especialista
                    </Th>
                    <Th scope="col" className="th p-2">
                      Email
                    </Th>
                    <Th scope="col" className="th p-2">
                      Formación académica
                    </Th>
                    <Th scope="col" className="th p-2">
                      Experiencia laboral
                    </Th>
                    <Th scope="col" className="th p-2">
                      Especialización
                    </Th>
                    <Th scope="col" className="th p-2" id="botoness">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="btn-dashboard">
                          <BsPencilSquare size="1rem" />
                        </div>
                        <div className="btn-dashboard">
                          <FaTrashAlt size="1rem" />
                        </div>
                      </div>
                    </Th>
                  </Tr>
                </Thead>
                {!!store.doctors &&
                  store.doctors.length > 0 &&
                  store.doctors.map((doctor, i) => (
                    <TableDataSpecialist {...doctor} key={i} index={doctor.id} />
                  ))}
              </Table>
            </div>
          </TabPane>
          {/* !!!!!!!!!!!!!!!!!! TABLA DE SERVICIOS !!!!!!!!!!!!!!!!!!!!!!!*/}
          <TabPane tabId="4">
            <div className="container">
              {/* <ModalAddService /> */}

              <div className="add-service-button mt-3">
                <ModalAddWithForm
                  addWord="Añadir"
                  connector="un"
                  addWhat="servicio"
                  addButtonColor="primary"
                >
                  <FormAddService />
                </ModalAddWithForm>
              </div>
              <br />
              <Table className="table table-borderer table-sm shadow">
                <Thead>
                  <Tr style={{ backgroundColor: "#939794", color: "white" }}>
                    <Th scope="col" className="th p-2" style={{ width: "5%" }}>
                      ID
                    </Th>
                    <Th scope="col" className="th p-2" style={{ width: "25%" }}>
                      Servicio
                    </Th>
                    <Th scope="col" className="th p-2" style={{ width: "35%" }}>
                      Descripción
                    </Th>
                    <Th scope="col" className="th p-2" style={{ width: "10%" }}>
                      Tarifa
                    </Th>
                    <Th scope="col" className="th p-2" style={{ width: "10%" }}>
                      Duración
                    </Th>

                    <Th scope="col" className="th p-2">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="btn-dashboard">
                          <BsPencilSquare size="1rem" />
                        </div>
                        <div className="btn-dashboard">
                          <FaTrashAlt size="1rem" />
                        </div>
                      </div>
                    </Th>
                  </Tr>
                </Thead>
                {!!store.services &&
                  store.services.length > 0 &&
                  store.services.map((service, i) => (
                    <TableDataService {...service} key={i} index={service.id} />
                  ))}
              </Table>
            </div>
          </TabPane>
          {/*fin tabla servicios*/}
        </TabContent>
      </div>
    </LazyLoadComponent>
  );
}

export default TabSuperAdmin;
