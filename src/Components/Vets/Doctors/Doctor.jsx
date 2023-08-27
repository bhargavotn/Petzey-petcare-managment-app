import React from "react";

const Doctor = () => {
  return (
    <div>
      <div class="main-wrapper">
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-sm-4 col-3">
                <h4 class="page-title">Vets</h4>
              </div>
              <div class="col-sm-8 col-9 text-right m-b-20">
                <a
                  href="adddoctor"
                  class="btn btn-primary btn-rounded float-right"
                >
                  <i class="fa fa-plus"></i> Add Vets
                </a>
              </div>
            </div>
            <div class="row doctor-grid">
              <div class="col-md-4 col-sm-4 col-lg-3">
                <div class="profile-widget">
                  <div class="doctor-img">
                    <a class="avatar">
                      <img alt="" src="assets/img/doctor-thumb-03.jpg" />
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
                      <a href="editdoctor" class="dropdown-item">
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
                  <div class="doc-prof">Gynecologist</div>
                  <div class="user-country">
                    <i class="fa fa-map-marker"></i> United States, San
                    Francisco
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-lg-3">
                <div class="profile-widget">
                  <div class="doctor-img">
                    <a class="avatar">
                      <img alt="" src="assets/img/doctor-thumb-07.jpg" />
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
                      <a href="editdoctor" class="dropdown-item">
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
                  <div class="doc-prof">Psychiatrist</div>
                  <div class="user-country">
                    <i class="fa fa-map-marker"></i> United States, San
                    Francisco
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-lg-3">
                <div class="profile-widget">
                  <div class="doctor-img">
                    <a class="avatar">
                      <img alt="" src="assets/img/doctor-thumb-04.jpg" />
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
                      <a href="editdoctor" class="dropdown-item">
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
                  <div class="doc-prof">Cardiologist</div>
                  <div class="user-country">
                    <i class="fa fa-map-marker"></i> United States, San
                    Francisco
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-lg-3">
                <div class="profile-widget">
                  <div class="doctor-img">
                    <a class="avatar">
                      <img alt="" src="assets/img/doctor-thumb-11.jpg" />
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
                      <a href="editdoctor" class="dropdown-item">
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
                  <div class="doc-prof">Urologist</div>
                  <div class="user-country">
                    <i class="fa fa-map-marker"></i> United States, San
                    Francisco
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-lg-3">
                <div class="profile-widget">
                  <div class="doctor-img">
                    <a class="avatar" href="#">
                      <img alt="" src="assets/img/doctor-thumb-12.jpg" />
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
                      <a href="editdoctor" class="dropdown-item">
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
                  <div class="doc-prof">Ophthalmologist</div>
                  <div class="user-country">
                    <i class="fa fa-map-marker"></i> United States, San
                    Francisco
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-lg-3">
                <div class="profile-widget">
                  <div class="doctor-img">
                    <a class="avatar">
                      <img alt="" src="assets/img/doctor-thumb-02.jpg" />
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
                      <a href="editdoctor" class="dropdown-item">
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
                  <div class="doc-prof">Dentist</div>
                  <div class="user-country">
                    <i class="fa fa-map-marker"></i> United States, San
                    Francisco
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-lg-3">
                <div class="profile-widget">
                  <div class="doctor-img">
                    <a class="avatar">
                      <img alt="" src="assets/img/doctor-thumb-09.jpg" />
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
                      <a href="editdoctor" class="dropdown-item">
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
                  <div class="doc-prof">Oncologist</div>
                  <div class="user-country">
                    <i class="fa fa-map-marker"></i> United States, San
                    Francisco
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-lg-3">
                <div class="profile-widget">
                  <div class="doctor-img">
                    <a class="avatar">
                      <img alt="" src="assets/img/doctor-thumb-01.jpg" />
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
                      <a href="editdoctor" class="dropdown-item">
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
                  <div class="doc-prof">Neurologist</div>
                  <div class="user-country">
                    <i class="fa fa-map-marker"></i> United States, San
                    Francisco
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-lg-3">
                <div class="profile-widget">
                  <div class="doctor-img">
                    <a class="avatar">
                      <img alt="" src="assets/img/doctor-thumb-05.jpg" />
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
                      <a href="editdoctor" class="dropdown-item">
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
                  <div class="doc-prof">General Surgery</div>
                  <div class="user-country">
                    <i class="fa fa-map-marker"></i> United States, San
                    Francisco
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-lg-3">
                <div class="profile-widget">
                  <div class="doctor-img">
                    <a class="avatar">
                      <img alt="" src="assets/img/doctor-thumb-10.jpg" />
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
                      <a href="editdoctor" class="dropdown-item">
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
                  <div class="doc-prof">Radiologist</div>
                  <div class="user-country">
                    <i class="fa fa-map-marker"></i> United States, San
                    Francisco
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-lg-3">
                <div class="profile-widget">
                  <div class="doctor-img">
                    <a class="avatar">
                      <img alt="" src="assets/img/doctor-thumb-08.jpg" />
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
                      <a href="editdoctor" class="dropdown-item">
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
                  <div class="doc-prof">Pediatrics</div>
                  <div class="user-country">
                    <i class="fa fa-map-marker"></i> United States, San
                    Francisco
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 col-lg-3">
                <div class="profile-widget">
                  <div class="doctor-img">
                    <a class="avatar">
                      <img alt="" src="assets/img/doctor-thumb-06.jpg" />
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
                      <a href="editdoctor" class="dropdown-item">
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
                  <div class="doc-prof">Physical Therapist</div>
                  <div class="user-country">
                    <i class="fa fa-map-marker"></i> United States, San
                    Francisco
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
                <h3>Are you sure want to delete this Vet?</h3>
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
    </div>
  );
};

export default Doctor;
