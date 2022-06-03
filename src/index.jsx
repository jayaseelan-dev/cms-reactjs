import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Login from './routes/Login/Login';
import CompanyList from './routes/Company/CompanyList';
import EmployeeList from './routes/Employee/EmployeeList';

import './index.scss';
import { AuthProvider } from './utils/AuthProvider';
import { RequireAuth } from './utils/RequireAuth';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<App />}>
                    {/* Public route */}
                    <Route index element={<Login />} />

                    {/* Protected routes */}
                    <Route path="/company"
                        element={
                            <RequireAuth>
                                <CompanyList />
                            </RequireAuth>
                        } />
                    <Route path="/employee"
                        element={
                            <RequireAuth>
                                <EmployeeList />
                            </RequireAuth>
                        } />
                    
                    {/* Wild card route */}
                    <Route path="*"
                        element={
                            <section style={{ padding: '1rem' }}>
                                <h1>Page not found!!!</h1>
                            </section>
                        } />
                </Route>
            </Routes>
        </AuthProvider>
    </BrowserRouter>
);
