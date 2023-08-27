import React from "react";

const AdminDashBoard = () => {
  return (
    <div class="main-wrapper">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="dash-widget">
                <span class="dash-widget-bg3">
                  <i class="fa fa-user-md" aria-hidden="true"></i>
                </span>
                <div class="dash-widget-info text-right">
                  <h3>72</h3>
                  <span class="widget-title3">
                    Total <i class="fa fa-check" aria-hidden="true"></i>
                  </span>
                  <span>Appointments</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="dash-widget">
                <span class="dash-widget-Cancelled">
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                </span>
                <div class="dash-widget-info text-right">
                  <h3>20</h3>
                  <span class="Cancelled">
                    Cancelled <i class="fa fa-check" aria-hidden="true"></i>
                  </span>
                  <span>Appointments</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="dash-widget">
                <span class="dash-widget-Approved">
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                </span>
                <div class="dash-widget-info text-right">
                  <h3>50</h3>
                  <span class="Approved">
                    Approved <i class="fa fa-check" aria-hidden="true"></i>
                  </span>
                  <span>Appointments</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="dash-widget">
                <span class="dash-widget-Pending">
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                </span>
                <div class="dash-widget-info text-right">
                  <h3>2</h3>
                  <span class="Pending">
                    Pending <i class="fa fa-check" aria-hidden="true"></i>
                  </span>
                  <span>Appointments</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="dash-widget">
                <span class="dash-widget-bg1">
                  <i class="fa fa-stethoscope" aria-hidden="true"></i>
                </span>
                <div class="dash-widget-info text-right">
                  <h3>98</h3>
                  <span class="widget-title1">
                    Vets <i class="fa fa-check" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div class="dash-widget">
                <span class="dash-widget-bg2">
                  <i class="fa fa-user-o"></i>
                </span>
                <div class="dash-widget-info text-right">
                  <h3>1072</h3>
                  <span class="widget-title2">
                    Pets <i class="fa fa-check" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-6 col-lg-8 col-xl-8">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title d-inline-block">
                    Upcoming Appointments
                  </h4>
                  <a href="allAppointments" class="btn btn-primary float-right">
                    View all
                  </a>
                </div>
                <div class="card-body p-0">
                  <div class="table-responsive">
                    <table class="table mb-0">
                      <tr>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Timing</th>
                        <th class="text-right">Status</th>
                      </tr>

                      <tbody>
                        <tr>
                          <td>
                            <a class="avatar">B</a>
                            <h2>
                              <a>
                                Bernardo Galaviz <span>New York, USA</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 class="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 class="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td class="text-right">
                            <a
                              href="allAppointments"
                              class="btn btn-outline-primary take-btn"
                            >
                              Take up
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a class="avatar">B</a>
                            <h2>
                              <a>
                                Bernardo Galaviz <span>New York, USA</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 class="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 class="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td class="text-right">
                            <a
                              href="allAppointments"
                              class="btn btn-outline-primary take-btn"
                            >
                              Take up
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a class="avatar">B</a>
                            <h2>
                              <a>
                                Bernardo Galaviz <span>New York, USA</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 class="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 class="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td class="text-right">
                            <a
                              href="allAppointments"
                              class="btn btn-outline-primary take-btn"
                            >
                              Take up
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a class="avatar">B</a>
                            <h2>
                              <a>
                                Bernardo Galaviz <span>New York, USA</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 class="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 class="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td class="text-right">
                            <a
                              href="allAppointments"
                              class="btn btn-outline-primary take-btn"
                            >
                              Take up
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a class="avatar">B</a>
                            <h2>
                              <a>
                                Bernardo Galaviz <span>New York, USA</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 class="time-title p-0">Appointment With</h5>
                            <p>Dr. Cristina Groves</p>
                          </td>
                          <td>
                            <h5 class="time-title p-0">Timing</h5>
                            <p>7.00 PM</p>
                          </td>
                          <td class="text-right">
                            <a
                              href="allAppointments"
                              class="btn btn-outline-primary take-btn"
                            >
                              Take up
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 col-xl-4">
              <div class="card member-panel">
                <div class="card-header bg-white">
                  <h4 class="card-title mb-0">Doctors</h4>
                </div>
                <div class="card-body">
                  <ul class="contact-list">
                    <li>
                      <div class="contact-cont">
                        <div class="float-left user-img m-r-10">
                          <a title="John Doe">
                            <img
                              src="assets/img/user.jpg"
                              alt=""
                              class="w-40 rounded-circle"
                            />
                            <span class="status online"></span>
                          </a>
                        </div>
                        <div class="contact-info">
                          <span class="contact-name text-ellipsis">
                            John Doe
                          </span>
                          <span class="contact-date">MBBS, MD</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="contact-cont">
                        <div class="float-left user-img m-r-10">
                          <a title="Richard Miles">
                            <img
                              src="assets/img/user.jpg"
                              alt=""
                              class="w-40 rounded-circle"
                            />
                            <span class="status offline"></span>
                          </a>
                        </div>
                        <div class="contact-info">
                          <span class="contact-name text-ellipsis">
                            Richard Miles
                          </span>
                          <span class="contact-date">MD</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="contact-cont">
                        <div class="float-left user-img m-r-10">
                          <a title="John Doe">
                            <img
                              src="assets/img/user.jpg"
                              alt=""
                              class="w-40 rounded-circle"
                            />
                            <span class="status away"></span>
                          </a>
                        </div>
                        <div class="contact-info">
                          <span class="contact-name text-ellipsis">
                            John Doe
                          </span>
                          <span class="contact-date">BMBS</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="contact-cont">
                        <div class="float-left user-img m-r-10">
                          <a title="Richard Miles">
                            <img
                              src="assets/img/user.jpg"
                              alt=""
                              class="w-40 rounded-circle"
                            />
                            <span class="status online"></span>
                          </a>
                        </div>
                        <div class="contact-info">
                          <span class="contact-name text-ellipsis">
                            Richard Miles
                          </span>
                          <span class="contact-date">MS, MD</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="contact-cont">
                        <div class="float-left user-img m-r-10">
                          <a title="John Doe">
                            <img
                              src="assets/img/user.jpg"
                              alt=""
                              class="w-40 rounded-circle"
                            />
                            <span class="status offline"></span>
                          </a>
                        </div>
                        <div class="contact-info">
                          <span class="contact-name text-ellipsis">
                            John Doe
                          </span>
                          <span class="contact-date">MBBS</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="contact-cont">
                        <div class="float-left user-img m-r-10">
                          <a title="Richard Miles">
                            <img
                              src="assets/img/user.jpg"
                              alt=""
                              class="w-40 rounded-circle"
                            />
                            <span class="status away"></span>
                          </a>
                        </div>
                        <div class="contact-info">
                          <span class="contact-name text-ellipsis">
                            Richard Miles
                          </span>
                          <span class="contact-date">MBBS, MD</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="card-footer text-center bg-white">
                  <a class="text-muted">View all Doctors</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;