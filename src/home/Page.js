import React from "react";
import styled from "styled-components";

import Footer from "./Footer";

const ResponsiveContainer = styled.div`
  width: 100vw;
  overflow: hidden;
`;

const Page = ({ children }) => (
  <ResponsiveContainer>
    <div children={children}></div>
    <Footer />
  </ResponsiveContainer>
);

export default Page;
