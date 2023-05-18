import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// no lazy loading for auth pages to avoid flickering


import PatientTable from "./patient/table/PatientTable";
import MainLayout from "../layout/MainLayout";




// UI Components
// const Buttons = withLoading(ButtonsPage);
//
//
//
//
// const ServerError = withLoading(ServerErrorPage);
// const Error404 = withLoading(Error404Page);
//
// // Profile
// const PersonalInfo = withLoading(PersonalInfoPage);


export const AppRouter: React.FC = () => {


    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="profile" element={}>*/}
                {/*</Route>*/}
                <Route path="patients" element={<MainLayout />}>
                    <Route path="list" element={<PatientTable />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};