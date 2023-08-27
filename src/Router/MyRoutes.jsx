import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Shared/Header/Header.js";
import SideBar from "../Shared/SideBar/SideBar.js";
import AddAppointment from "../Components/Appointments/AddAppointment/AddAppointment.jsx";
import AddSchedule from "../Components/Schedules/AddSchedule/AddSchedule.jsx";
import AddClinic from "../Components/Clinics/AddClinic/AddClinic.jsx";
import ClinicInformation from "./../Components/Clinics/ClinicInformation/ClinicInformation";
import AddPets from "./../Components/Pets/AddPets/AddPets";
import AllPets from "./../Components/Pets/AllPets/AllPets";
import SignUp from "./../Shared/Signup/SignUp";
import AdminDashBoard from "../Components/Dashboard/AdminDashBoard/AdminDashBoard.jsx";
import Schedule from "../Components/Schedules/Schedule/Schedule";
import AllAppointments from "../Components/Appointments/AllAppontements/AllAppointments.jsx";
import AddDoctor from "../Components/Vets/AddDoctors/AddDoctor.jsx";
import Doctor from "../Components/Vets/Doctors/Doctor.jsx";
import AddDepartment from "../Components/Departments/AddDepartment/AddDepartment.jsx";
import Department from "../Components/Departments/Department/Department.jsx";
import EditAppointment from "../Components/Appointments/EditAppointment/EditAppointment.jsx";
import EditClinic from "../Components/Clinics/EditClinic/EditClinic.jsx";
import EditDepartment from "../Components/Departments/EditDepartment/EditDepartment.jsx";
import EditPets from "../Components/Pets/EditPets/EditPets.jsx";
import EditSchedule from "../Components/Schedules/EditSchedule/EditSchedule.jsx";
import EditDoctor from "../Components/Vets/EditDoctors/EditDoctors.jsx";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <SideBar></SideBar>

      {/* SIGNUP ROUTING */}
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>

      {/* ADMIN DASHBOARD ROUTING */}
      <Routes>
        <Route path="dashboard" element={<AdminDashBoard />} />
      </Routes>

      {/* APPOINTMENTS ROUTING */}
      <Routes>
        <Route path="addappointment" element={<AddAppointment />} />
        <Route path="allAppointments" element={<AllAppointments />} />
        <Route path="editappointment" element={<EditAppointment />} />
      </Routes>

      {/* SCHEDULE ROUTING */}
      <Routes>
        <Route path="addschedule" element={<AddSchedule />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="editschedule" element={<EditSchedule />} />
      </Routes>

      {/* CLINICS ROUTING */}
      <Routes>
        <Route path="addclinic" element={<AddClinic />} />
        <Route path="clinic" element={<ClinicInformation />} />
        <Route path="editclinic" element={<EditClinic />} />
      </Routes>

      {/* PETS ROUTING */}
      <Routes>
        <Route path="addpets" element={<AddPets />} />
        <Route path="pets" element={<AllPets />} />
        <Route path="editpets" element={<EditPets />} />
      </Routes>

      {/* VETS ROUTING */}
      <Routes>
        <Route path="adddoctor" element={<AddDoctor />} />
        <Route path="vet" element={<Doctor />} />
        <Route path="editdoctor" element={<EditDoctor />} />
      </Routes>

      {/* DEPARTMENT ROUTING */}
      <Routes>
        <Route path="adddepartment" element={<AddDepartment />} />
        <Route path="departments" element={<Department />} />
        <Route path="Editdepartment/:departmentId" element={<EditDepartment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
