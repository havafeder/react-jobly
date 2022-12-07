import React from "react";
import { render } from "@testing-library/react";
import Routess from "./Routes";
import { MemoryRouter } from "react-router";
import { UserProvider } from "../testUtils";

it("renders without crashing", function () {
	render(
		<MemoryRouter>
			<UserProvider>
				<Routess />
			</UserProvider>
		</MemoryRouter>,
	);
});

it("matches snapshot", function () {
	const { asFragment } = render(
		<MemoryRouter>
			<UserProvider>
				<Routess />
			</UserProvider>
		</MemoryRouter>,
	);
	expect(asFragment()).toMatchSnapshot();
});