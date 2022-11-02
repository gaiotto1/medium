import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Router } from "../routes";
import { AuthProvider } from '../contexts/AuthContext';


describe("Router", () => {
  it("should render the default layout", () => {
    const authProviderMock = {
      user: {
        uid: "123",
        displayName: "John Doe",
        email: "",
      },
      signIn: 
      jest.fn(),
      signOut: jest.fn(),
    };
    
    render(
      <AuthProvider values={authProviderMock}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    );

    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });  
});