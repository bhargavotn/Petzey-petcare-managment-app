import React from "react";

const AddClinic = () => {
  return (
    <div>
      <div class="main-wrapper">
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <h4 class="page-title">Add Asset</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Asset Name</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Asset Id</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Purchase Date</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Purchase From</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Manufacturer</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Model</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Serial Number</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Supplier</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Condition</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Warranty</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="In Months"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Value</label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="$"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Asset User</label>
                        <select class="select">
                          <option>John Doe</option>
                          <option>Richard Miles</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Status</label>
                        <select class="select">
                          <option>Pending</option>
                          <option>Approved</option>
                          <option>Deployed</option>
                          <option>Damaged</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="m-t-20 text-center">
                    <button class="btn btn-primary submit-btn">
                      Add Asset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="notification-box">
            <div class="msg-sidebar notifications msg-noti">
              <div class="topnav-dropdown-header">
                <span>Messages</span>
              </div>
              <div class="drop-scroll msg-list-scroll" id="msg_list">
                <ul class="list-box">
                  <li>
                    <a href="chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">R</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Richard Miles </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div class="list-item new-message">
                        <div class="list-left">
                          <span class="avatar">J</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">John Doe</span>
                          <span class="message-time">1 Aug</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">T</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Tarah Shropshire </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">M</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Mike Litorus</span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">C</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">
                            {" "}
                            Catherine Manseau{" "}
                          </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">D</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Domenic Houston </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">B</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Buster Wigton </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">R</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Rolland Webber </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">C</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Claire Mapes </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">M</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Melita Faucher</span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">J</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Jeffery Lalor</span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">L</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Loren Gatlin</span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">T</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Tarah Shropshire</span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="topnav-dropdown-footer">
                <a href="chat">See all messages</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClinic;
