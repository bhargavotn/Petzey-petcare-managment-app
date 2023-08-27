import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Department = () => {
  const [data, setData] = useState([]); // State to store department data
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [departmentId, setDepartmentId] = useState(null); // State to store the department ID for deletion
  const [deletionStatus, setDeletionStatus] = useState(null); // State to store the status of department deletion

  useEffect(() => {
    getData(); // Fetch department data on component mount
  }, []);

  const handleDelete = (departmentId) => {
    setDepartmentId(departmentId); // Set the department ID to be deleted
    setShowModal(true); // Show the delete confirmation modal
  };

  const onDelete = () => {
    axios
      .delete(
        `https://departmentservice.dev.skillassure.com/department/petzeydepartment/department/delete/${departmentId}`
      )
      .then(() => {
        getData(); // Fetch updated department data after successful deletion
        setDeletionStatus(true); // Set deletion status to true
      })
      .catch((error) => {
        console.error(error);
        setDeletionStatus(false); // Set deletion status to false in case of error
      })
      .finally(() => {
        setShowModal(false); // Hide the delete confirmation modal
        document.body.classList.remove("modal-open");
        const modalBackdrop = document.getElementsByClassName("modal-backdrop");
        if (modalBackdrop.length > 0) {
          modalBackdrop[0].parentNode.removeChild(modalBackdrop[0]);
        }
      });
  };

  const getData = () => {
    axios
      .get(
        `https://departmentservice.dev.skillassure.com/department/petzeydepartment/department/alldepartments`
      )
      .then((response) => {
        setData(response.data); // Set the department data received from the API
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancelDelete = () => {
    setShowModal(false); // Cancel the deletion and hide the delete confirmation modal
    setDepartmentId(null); // Clear the department ID for deletion
  };

  return (
    <div>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-sm-5 col-5">
                <h4 className="page-title">Departments</h4>
              </div>
              <div className="col-sm-7 col-7 text-right m-b-30">
                <a href="addDepartment" className="btn btn-primary btn-rounded">
                  <i className="fa fa-plus"></i> Add Department
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped custom-table mb-0 datatable">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Department Name</th>
                        <th>Status</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((department, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{department.departmentName}</td>
                          <td>
                            <span
                              className={`custom-badge ${
                                department.status === true ? "status-green" : "status-red"
                              }`}
                            >
                              {department.status ? "Active" : "Inactive"}
                            </span>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  to={`/Editdepartment/${department.departmentId}`}
                                  onClick={() => setDepartmentId(department.departmentId)}
                                >
                                  <a className="dropdown-item" href="Editdepartment">
                                    <i className="fa fa-pencil m-r-5"></i>Edit
                                  </a>
                                </Link>
                                <a
                                  className="dropdown-item"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#delete_department"
                                  onClick={() => handleDelete(department.departmentId)}
                                >
                                  <i className="fa fa-trash-o m-r-5"></i> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="delete_department"
        className={`modal fade delete-modal ${showModal ? "show" : ""}`}
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <img src="assets/img/sent.png" alt="" width="50" height="46" />
              <h3>Are you sure you want to delete this Department?</h3>
              <div className="m-t-20">
                <a href="#" className="btn btn-white" data-dismiss="modal" onClick={handleCancelDelete}>
                  Close
                </a>       
                <button type="submit" className="btn btn-danger" onClick={onDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
