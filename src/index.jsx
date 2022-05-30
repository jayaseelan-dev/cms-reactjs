import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import CompanyList from './routes/Company/CompanyList';
import EmployeeList from './routes/Employee/EmployeeList';

import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                {/* Nested routes */}
                <Route path="/company-details" element={<CompanyList />} />
                <Route path="/employee-details" element={<EmployeeList />} />
                <Route path="*"
                    element={
                        <section style={{ padding: '1rem' }}>
                            <h1>Page not found!!!</h1>
                        </section>
                    } />
            </Route>
        </Routes>
    </BrowserRouter>
);
