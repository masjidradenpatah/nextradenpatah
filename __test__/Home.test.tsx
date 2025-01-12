import { render, screen } from "@testing-library/react";
import Home from "@/app/(public)/page";

describe("Testing Home Component ", () => {
  it("Sections in Home should be rendered", () => {
    render(<Home />);
    //
    const hero = screen.getByTestId("hero-section");
    const information = screen.getByTestId("information-section");
    const profile = screen.getByTestId("profile-section");
    const facilities = screen.getByTestId("facilities-section");
    const gallery = screen.getByTestId("gallery-section");
    const donate = screen.getByTestId("donate-section");
    const map = screen.getByTestId("map-section");

    expect(hero).toBeInTheDocument();
    expect(information).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
    expect(facilities).toBeInTheDocument();
    expect(gallery).toBeInTheDocument();
    expect(donate).toBeInTheDocument();
    expect(map).toBeInTheDocument();
  });
});
