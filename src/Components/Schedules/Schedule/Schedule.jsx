import React from "react";

const Schedule = () => {
  return (
    <div class="main-wrapper">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-sm-4 col-3">
              <h4 class="page-title">Schedule</h4>
            </div>
            <div class="col-sm-8 col-9 text-right m-b-20">
              <a
                href="addSchedule"
                class="btn btn btn-primary btn-rounded float-right"
              >
                <i class="fa fa-plus"></i> Add Schedule
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-border table-striped custom-table mb-0">
                  <thead>
                    <tr>
                      <th>Doctor Name</th>
                      <th>Department</th>
                      <th>Available Days</th>
                      <th>Available Time</th>
                      <th>Status</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          width="28"
                          height="28"
                          src="assets/img/user.jpg"
                          class="rounded-circle m-r-5"
                          alt=""
                        />{" "}
                        Henry Daniels
                      </td>
                      <td>Cardiology</td>
                      <td>Sunday, Monday, Tuesday</td>
                      <td>10:00 AM - 7:00 PM</td>
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
                            <a class="dropdown-item" href="editSchedule">
                              <i class="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              class="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_schedule"
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
        </div>
      </div>
      <div id="delete_schedule" class="modal fade delete-modal" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body text-center">
              <img src="assets/img/sent.png" alt="" width="50" height="46" />
              <h3>Are you sure want to delete this Schedule?</h3>
              <div class="m-t-20">
                {" "}
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

export default Schedule;
