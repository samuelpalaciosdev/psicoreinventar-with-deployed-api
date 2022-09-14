import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { Tbody, Tr, Td } from "react-super-responsive-table";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const TableDataService = ({ index, name, description, price, time }) => {
  const { store, actions } = useContext(Context);

  const [modalDelete, setModalDelete] = useState(false);
  const toggleDelete = () => setModalDelete(!modalDelete);

  const [modalEdit, setModalEdit] = useState(false);
  const toggleEdit = () => setModalEdit(!modalEdit);

  const [serviceId, setServiceId] = useState(null);

  // useEffect(() => {
  //   console.log(serviceId);
  // }, [serviceId]);

  const handleDeleteService = async (e) => {
    // Fetching data from API
    const response = await fetch(`${store.apiURL}/api/delete_service/${serviceId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store.currentUser?.access_token}`,
      },
    });

    const { status, message, data } = await response.json();

    // console.log(data);

    if (status === "failed") {
      toast.error(message);
    }

    if (status === "success") {
      actions.getServices();
      Swal.fire({
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <Tbody className="table-group-divider" id={index} style={{ fontSize: "13px" }}>
      <Tr>
        <Td scope="row" className="td p-2">
          #{index}
        </Td>
        <Td className="td p-2">{name}</Td>
        <Td className="td  p-2">{description}</Td>
        <Td className="td p-2">{price}</Td>
        <Td className="td p-2">{time}</Td>
        <Td className="td p-2">
          <div className="botones">
            <div className="d-flex justify-content-start justify-content-md-center align-items-center">
              {/* Modal Edit  */}
              <div className="edit-service-modal">
                <Link
                  onClick={() => {
                    toggleEdit();
                  }}
                  index={index}
                  to={`/edit/service/${index}`}
                >
                  <Button color="light">
                    <BsPencilSquare size="1rem" />
                  </Button>
                </Link>
              </div>

              {/* Modal Delete */}
              <div className="delete-service-modal">
                <Button
                  color="light"
                  onClick={() => {
                    toggleDelete();
                    setServiceId(index);
                  }}
                  index={index}
                >
                  <FaTrashAlt size="1rem" />
                </Button>
                <Modal centered isOpen={modalDelete} fade={false} toggle={toggleDelete}>
                  <ModalHeader toggle={toggleDelete}>Eliminar servicio</ModalHeader>
                  <ModalBody>Estas seguro de qué quieres Eliminar el servicio?</ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      onClick={(e) => {
                        toggleDelete();
                        handleDeleteService(e);
                      }}
                    >
                      Confirmar
                    </Button>
                    <Button color="secondary" onClick={toggleDelete}>
                      Cancelar
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </div>
        </Td>
      </Tr>
    </Tbody>
  );
};

export default TableDataService;
