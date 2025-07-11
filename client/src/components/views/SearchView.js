import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import GridLayout from "../GridLayout";
import Navbar from "../Navbar";
import PostBrowser from "../PostBrowser";
import Sidebar from "../Sidebar";

const SearchView = () => {
  return (
    <Container  maxWidth="large">
      <Navbar />
      <GridLayout
        left={
          <Stack spacing={2}>
            <PostBrowser createPost contentType="posts" />
          </Stack>
        }
        right={<Sidebar />}
      />
    </Container>
  );
};

export default SearchView;
