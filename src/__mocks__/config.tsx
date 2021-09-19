import React from "react";

jest.mock("react-feather", () => ({
  MapPin: () => <span>MapPin</span>,
  Phone: () => <span>Phone</span>,
  Search: () => <span>Search</span>,
  Heart: (props: { fill: string }) => <p>Heart - {props.fill}</p>,
}));
