import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "./project/home/home.component";
import { DoctorsComponent } from "./project/doctors/doctors.component";
import { AboutusComponent } from "./project/aboutus/aboutus.component";
import { AppointmentsComponent } from "./project/appointments/appointments.component";
import { BlogComponent } from "./project/blog/blog.component";
import { ContactusComponent } from "./project/contactus/contactus.component";
import { LoginComponent } from "./project/login/login.component";
import { AdminpageComponent } from "./project/admin/adminpage/adminpage.component";
import { AdminmenuComponent } from "./project/admin/adminmenu/adminmenu.component";
import { AdminDepartmentComponent } from "./project/admin/admin-department/admin-department.component";
import { AdminDoctorComponent } from "./project/admin/admin-doctor/admin-doctor.component";
import { AdminPatientComponent } from "./project/admin/admin-patient/admin-patient.component";
import { AdminNurseComponent } from "./project/admin/admin-nurse/admin-nurse.component";
import { AdminPharmacistComponent } from "./project/admin/admin-pharmacist/admin-pharmacist.component";
import { AdminLaboratoristComponent } from "./project/admin/admin-laboratorist/admin-laboratorist.component";
import { AdminAccountComponent } from "./project/admin/admin-account/admin-account.component";
import { AdminAccountantComponent } from "./project/admin/admin-accountant/admin-accountant.component";
import { AdminReceptionistComponent } from "./project/admin/admin-receptionist/admin-receptionist.component";
import { AuthRoute } from "./project/services/auth.service";
import { DepartmentPageComponent } from "./project/department-page/departmentpage.component";
import { CardiologyPageComponent } from "./project/cardiology_page/cardiology_page.component";
import { GastroenterologyPageComponent } from "./project/gastroenterology_page/gastroenterology_page.component";
import { AdminNoticeComponent } from "./project/admin/admin-noticeboard/admin-noticeboard.component";
import { AdminContactEmailsComponent } from "./project/admin/admin-contactemails/admin-contactemails.component";



export function AppRouter(){
    return(
        
        <Routes>
            <Route path="/" element={<HomeComponent></HomeComponent>}></Route>
            <Route path="/home" element={<HomeComponent></HomeComponent>}></Route>
            <Route path="/department" element={<DepartmentPageComponent></DepartmentPageComponent>}></Route>
            <Route path="/cardiology" element={<CardiologyPageComponent></CardiologyPageComponent>}></Route>
            <Route path="/gastroenterology" element={<GastroenterologyPageComponent></GastroenterologyPageComponent>}></Route>
            <Route path="/doctors" element={<DoctorsComponent></DoctorsComponent>}></Route>
            <Route path="/aboutus" element={<AboutusComponent></AboutusComponent>}></Route>
            <Route path="/appointments" element={<AppointmentsComponent></AppointmentsComponent>}></Route>
            <Route path="/blog" element={<BlogComponent></BlogComponent>}></Route>
            <Route path="/contactus" element={<ContactusComponent></ContactusComponent>}></Route>
            <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>
            <Route path="/admin/adminpage" element={<NavigateAdminpage></NavigateAdminpage>}></Route>
            <Route path="/admin/admin-department" element={<NavigateAdminDepartment></NavigateAdminDepartment>}></Route>
            <Route path="/admin/admin-doctor" element={<NavigateAdminDoctor></NavigateAdminDoctor>}></Route>
            <Route path="/admin/admin-patient" element={<NavigateAdminPatient></NavigateAdminPatient>}></Route>
            <Route path="/admin/admin-nurse" element={<NavigateAdminNurse></NavigateAdminNurse>}></Route>
            <Route path="/admin/admin-pharmacist" element={<NavigateAdminPharmacist></NavigateAdminPharmacist>}></Route>
            <Route path="/admin/admin-laboratorist" element={<NavigateAdminLaboratorist></NavigateAdminLaboratorist>}></Route>
            <Route path="/admin/admin-account" element={<NavigateAdminAccount></NavigateAdminAccount>}></Route>
            <Route path="/admin/admin-accountant" element={<NavigateAdminAccountant></NavigateAdminAccountant>}></Route>
            <Route path="/admin/admin-receptionist" element={<NavigateAdminReceptionist></NavigateAdminReceptionist>}></Route>
            <Route path="/admin/admin-notice" element={<NavigateAdminNotice></NavigateAdminNotice>}></Route>
       <Route path="/admin/admin-contactemails" element={<NavigateAdminContactEmails></NavigateAdminContactEmails>}></Route>
        </Routes>
    )
}

function NavigateAdminpage(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminmenuComponent></AdminmenuComponent>
                </div>
                <div className="col-9 ">
                <AdminpageComponent></AdminpageComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}

function NavigateAdminDepartment(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminmenuComponent></AdminmenuComponent>
                </div>
                <div className="col-9 ">
                <AdminDepartmentComponent></AdminDepartmentComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}

function NavigateAdminDoctor(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminmenuComponent></AdminmenuComponent>
                </div>
                <div className="col-9 ">
                <AdminDoctorComponent></AdminDoctorComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}


function NavigateAdminPatient(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminmenuComponent></AdminmenuComponent>
                </div>
                <div className="col-9 ">
                <AdminPatientComponent></AdminPatientComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}

function NavigateAdminNurse(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminmenuComponent></AdminmenuComponent>
                </div>
                <div className="col-9 ">
                <AdminNurseComponent></AdminNurseComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}

function NavigateAdminPharmacist(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminmenuComponent></AdminmenuComponent>
                </div>
                <div className="col-9 ">
                <AdminPharmacistComponent></AdminPharmacistComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}

function NavigateAdminLaboratorist(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminmenuComponent></AdminmenuComponent>
                </div>
                <div className="col-9 ">
                <AdminLaboratoristComponent></AdminLaboratoristComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}

function NavigateAdminAccountant(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminmenuComponent></AdminmenuComponent>
                </div>
                <div className="col-9 ">
                <AdminAccountantComponent></AdminAccountantComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}

function NavigateAdminReceptionist(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminmenuComponent></AdminmenuComponent>
                </div>
                <div className="col-9 ">
                <AdminReceptionistComponent></AdminReceptionistComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}

function NavigateAdminAccount(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminmenuComponent></AdminmenuComponent>
                </div>
                <div className="col-9 ">
             <AdminAccountComponent></AdminAccountComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}
function NavigateAdminNotice(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminmenuComponent></AdminmenuComponent>
                </div>
                <div className="col-9 ">
             <AdminNoticeComponent></AdminNoticeComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}

function NavigateAdminContactEmails(){
    return(
        <AuthRoute>
        <div>
            <div className="row">
                <div className="col-3 bg ">
                    <AdminmenuComponent></AdminmenuComponent>
                </div>
                <div className="col-9 ">
             <AdminContactEmailsComponent></AdminContactEmailsComponent>
                </div>
            </div>
        </div>
        </AuthRoute>
    )
}