import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from '../Layout/AppLayout';
import DefaultPage from '../Layout/DefaultPage';
// import HomePage from '../HomePage';
import HomePage from '../page/HomePage';
import CalendarPage from '../CalendarPage';
import AttendancePage from '../AttendancePage';
import PageLayout from '../components/common/PageLayout';
// import AppLayout from '../components/AppLayout';
// import DefaultPage from '../components/DefaultPage';
// import HomePage from '../pages/HomePage';
// import CalendarPage from '../pages/CalendarPage';
// import AttendancePage from '../pages/AttendancePage';
// import ManageTimesheetPage from '../pages/ManageTimesheetPage';
// import ApplyLeavePage from '../pages/ApplyLeavePage';
// import HolidaysPage from '../pages/HolidaysPage';

function AppRoutes() {
    return (
        <Routes>
            <Route element={<AppLayout />}>

                    <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
                    <Route path="/calendar" element={<PageLayout><CalendarPage /></PageLayout>} >
                    <Route path="attendance" element={<PageLayout><AttendancePage /></PageLayout>} />
                    </Route>

            </Route>
        </Routes>
        // <Routes>
        //     {/* AppLayout provides the layout for all routes */}
        //     <Route path="" element={<AppLayout />}>
        //         {/* DefaultPage adds consistent padding and spacing */}
        //         <Route element={<DefaultPage />}>
        //             {/* Home route */}
        //             <Route index element={<HomePage />} />

        //             {/* Calendar route with nested child routes */}
        //             <Route path="calendar" element={<CalendarPage />}>
        //             <Route path="attendance" element={<AttendancePage />} />
        //                 {/* <Route path="attendance" element={<AttendancePage />} />
        //                 <Route path="manage-timesheet" element={<ManageTimesheetPage />} />
        //                 <Route path="apply-leave" element={<ApplyLeavePage />} />
        //                 <Route path="holidays" element={<HolidaysPage />} /> */}
        //             </Route>
        //         </Route>
        //     </Route>
        // </Routes>
    );
}

export default AppRoutes;
