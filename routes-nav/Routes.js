import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";


function Routess({ login, signup }) {
	console.debug(
		"Routes",
		`login=${typeof login}`,
		`register=${typeof register}`,
	);

	return (
		<div className="pt-5">
			<Routes>

				<Route exact path="/" element={<Homepage />}>
				</Route>

				<Route exact path="/login" element={<LoginForm login={login} />}>
				</Route>

				<Route exact path="/signup" element={<SignupForm signup={signup} />}>
				</Route>

				<Route exact path='/companies' element={<PrivateRoute><CompanyList /></PrivateRoute>}>
				</Route>
				{/* <PrivateRoute exact path="/companies" element={<CompanyList />}>
				</PrivateRoute> */}

				<Route exact path='/jobs' element={<PrivateRoute><JobList /></PrivateRoute>}>
				</Route>
				{/* <PrivateRoute exact path="/jobs" element={<JobList />}>
				</PrivateRoute> */}

				<Route exact path='/companies/:handle' element={<PrivateRoute><CompanyDetail /></PrivateRoute>}>
				</Route>
				{/* <PrivateRoute exact path="/companies/:handle" element={<CompanyDetail />}>
				</PrivateRoute> */}

				<Route exact path='/profile' element={<PrivateRoute><ProfileForm /></PrivateRoute>}>
				</Route>
				{/* <PrivateRoute path="/profile" element={<ProfileForm />}>
				</PrivateRoute> */}
				<Route element={<Navigate to='/'></Navigate>}></Route>
				{/* <Navigate to="/" /> */}
			</Routes>
		</div>
	);
}

export default Routess;
