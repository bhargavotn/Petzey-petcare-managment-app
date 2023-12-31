import React from "react";

const AllAppointments = () => {
  return (
    <div class="main-wrapper">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-sm-4 col-3">
              <h4 class="page-title">Appointments</h4>
            </div>
            <div class="col-sm-8 col-9 text-right m-b-20">
              <a
                href="addappointment"
                class="btn btn-primary btn-rounded float-right text-light"
              >
                <i class="fa fa-plus"></i> Add Appointments
              </a>
            </div>
            <div class="col-sm-12 text-right m-b-20">
              <a class="btn btn-secondary btn-rounded float-right text-light">
                List View
              </a>
              <a class="btn btn-secondary btn-rounded float-right text-light">
                Card View
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Appointment ID</th>
                      <th>Pet Owner Name</th>
                      <th>Age</th>
                      <th>Doctor Name</th>
                      <th>Department</th>
                      <th>Appointment Date</th>
                      <th>Appointment Time</th>
                      <th>Status</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>APT0001</td>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src="assets/img/user.jpg"
                          class="rounded-circle m-r-5"
                          alt=""
                        />
                        Denise Stevens
                      </td>
                      <td>35</td>
                      <td>Henry Daniels</td>
                      <td>Cardiology</td>
                      <td>30 Dec 2018</td>
                      <td>10:00am - 11:00am</td>
                      <td>
                        <span class="custom-badge status-red">Inactive</span>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a
                            href="#"
                            class="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="fa fa-ellipsis-v"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a href="editappointment" class="dropdown-item">
                              <i class="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_appointment"
                            >
                              <i class="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>APT0002</td>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src="assets/img/user.jpg"
                          class="rounded-circle m-r-5"
                          alt=""
                        />
                        Denise Stevens
                      </td>
                      <td>35</td>
                      <td>Henry Daniels</td>
                      <td>Cardiology</td>
                      <td>30 Dec 2018</td>
                      <td>10:00am - 11:00am</td>
                      <td>
                        <span class="custom-badge status-green">Active</span>
                      </td>
                      <td class="text-right">
                        <div class="dropdown dropdown-action">
                          <a
                            href="#"
                            class="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="fa fa-ellipsis-v"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a href="editappointment" class="dropdown-item">
                              <i class="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_appointment"
                            >
                              <i class="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="row doctor-grid">
            <div class="col-md-4 col-sm-4 col-lg-3">
              <div class="profile-widget">
                <div class="doctor-img">
                  <a class="avatar">
                    <img alt="" src="assets/img/patient4.jpg" />
                  </a>
                </div>
                <div class="dropdown profile-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="editappointment" class="dropdown-item">
                      <i class="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                    >
                      <i class="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 class="doctor-name text-ellipsis">
                  <a>Cristina Groves</a>
                </h4>

                <div class="user-country">
                  <i class="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-lg-3">
              <div class="profile-widget">
                <div class="doctor-img">
                  <a class="avatar">
                    <img alt="" src="assets/img/patient5.jpg" />
                  </a>
                </div>
                <div class="dropdown profile-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="editappointment" class="dropdown-item">
                      <i class="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                    >
                      <i class="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 class="doctor-name text-ellipsis">
                  <a>Marie Wells</a>
                </h4>

                <div class="user-country">
                  <i class="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-lg-3">
              <div class="profile-widget">
                <div class="doctor-img">
                  <a class="avatar">
                    <img alt="" src="assets/img/patient3.jpg" />
                  </a>
                </div>
                <div class="dropdown profile-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="editappointment" class="dropdown-item">
                      <i class="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                    >
                      <i class="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 class="doctor-name text-ellipsis">
                  <a>Henry Daniels</a>
                </h4>

                <div class="user-country">
                  <i class="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-lg-3">
              <div class="profile-widget">
                <div class="doctor-img">
                  <a class="avatar">
                    <img alt="" src="assets/img/patient6.jpg" />
                  </a>
                </div>
                <div class="dropdown profile-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="editappointment" class="dropdown-item">
                      <i class="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                    >
                      <i class="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 class="doctor-name text-ellipsis">
                  <a>Mark Hunter</a>
                </h4>

                <div class="user-country">
                  <i class="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-lg-3">
              <div class="profile-widget">
                <div class="doctor-img">
                  <a class="avatar" href="#">
                    <img alt="" src="assets/img/patient7.jpg" />
                  </a>
                </div>
                <div class="dropdown profile-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="editappointment" class="dropdown-item">
                      <i class="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                    >
                      <i class="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 class="doctor-name text-ellipsis">
                  <a>Michael Sullivan</a>
                </h4>

                <div class="user-country">
                  <i class="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-lg-3">
              <div class="profile-widget">
                <div class="doctor-img">
                  <a class="avatar">
                    <img alt="" src="assets/img/patient8.jpg" />
                  </a>
                </div>
                <div class="dropdown profile-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="editappointment" class="dropdown-item">
                      <i class="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                    >
                      <i class="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 class="doctor-name text-ellipsis">
                  <a>Linda Barrett</a>
                </h4>

                <div class="user-country">
                  <i class="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-lg-3">
              <div class="profile-widget">
                <div class="doctor-img">
                  <a class="avatar">
                    <img alt="" src="assets/img/patient9.jpg" />
                  </a>
                </div>
                <div class="dropdown profile-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="editappointment" class="dropdown-item">
                      <i class="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                    >
                      <i class="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 class="doctor-name text-ellipsis">
                  <a>Ronald Jacobs</a>
                </h4>

                <div class="user-country">
                  <i class="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-lg-3">
              <div class="profile-widget">
                <div class="doctor-img">
                  <a class="avatar">
                    <img alt="" src="assets/img/patient10.jpg" />
                  </a>
                </div>
                <div class="dropdown profile-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="editappointment" class="dropdown-item">
                      <i class="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                    >
                      <i class="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 class="doctor-name text-ellipsis">
                  <a>Albert Sandoval</a>
                </h4>

                <div class="user-country">
                  <i class="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-lg-3">
              <div class="profile-widget">
                <div class="doctor-img">
                  <a class="avatar">
                    <img alt="" src="assets/img/patient11.jpg" />
                  </a>
                </div>
                <div class="dropdown profile-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="editappointment" class="dropdown-item">
                      <i class="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                    >
                      <i class="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 class="doctor-name text-ellipsis">
                  <a>Diana Bailey</a>
                </h4>

                <div class="user-country">
                  <i class="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-lg-3">
              <div class="profile-widget">
                <div class="doctor-img">
                  <a class="avatar">
                    <img alt="" src="assets/img/patient12.jpg" />
                  </a>
                </div>
                <div class="dropdown profile-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="editappointment" class="dropdown-item">
                      <i class="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                    >
                      <i class="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 class="doctor-name text-ellipsis">
                  <a>Shirley Willis</a>
                </h4>

                <div class="user-country">
                  <i class="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-lg-3">
              <div class="profile-widget">
                <div class="doctor-img">
                  <a class="avatar">
                    <img alt="" src="assets/img/patient-thumb-02.jpg" />
                  </a>
                </div>
                <div class="dropdown profile-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="editappointment" class="dropdown-item">
                      <i class="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                    >
                      <i class="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 class="doctor-name text-ellipsis">
                  <a>Pamela Curtis</a>
                </h4>

                <div class="user-country">
                  <i class="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-lg-3">
              <div class="profile-widget">
                <div class="doctor-img">
                  <a class="avatar">
                    <img alt="" src="assets/img/patient-thumb-01.jpg" />
                  </a>
                </div>
                <div class="dropdown profile-action">
                  <a
                    href="#"
                    class="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a href="editappointment" class="dropdown-item">
                      <i class="fa fa-pencil m-r-5"></i> Edit
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#delete_doctor"
                    >
                      <i class="fa fa-trash-o m-r-5"></i> Delete
                    </a>
                  </div>
                </div>
                <h4 class="doctor-name text-ellipsis">
                  <a>Justin Parker</a>
                </h4>

                <div class="user-country">
                  <i class="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="see-all">
                <a class="see-all-btn" href="javascript:void(0);">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="delete_doctor" class="modal fade delete-modal" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body text-center">
              <img src="assets/img/sent.png" alt="" width="50" height="46" />
              <h3>Are you sure want to delete this Appointment?</h3>
              <div class="m-t-20">
                <a href="#" class="btn btn-white" data-dismiss="modal">
                  Close
                </a>
                <button type="submit" class="btn btn-danger">
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

export default AllAppointments;
