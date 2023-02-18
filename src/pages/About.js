import { Box, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "1.3rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media(max-width: 600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas impedit
          sunt maxime cum possimus, fugit alias consequuntur distinctio atque
          adipisci fugiat, iste nemo nesciunt pariatur dolores illo soluta
          tenetur ratione error dicta enim omnis! Totam dolores magni, quos
          ullam quod pariatur ab quis sequi nesciunt temporibus accusamus qui
          soluta repudiandae quo. Fugiat, recusandae accusamus ducimus
          voluptatum commodi explicabo voluptate. Architecto nam, ex eaque sint
          unde nulla eius deserunt, autem numquam commodi nesciunt tempora,
          neque amet temporibus labore enim cupiditate. Quas amet eum
          accusantium architecto eaque vel eos aspernatur laudantium perferendis
          voluptatum officiis, distinctio omnis recusandae pariatur dignissimos,
          non itaque dicta.
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
          praesentium aspernatur et, in blanditiis qui quos nam sequi magnam
          vero tempore totam libero temporibus porro fuga error, molestias nihil
          debitis velit recusandae iure. Ab alias vero tempora quidem. Veniam,
          consectetur similique ab voluptates pariatur eveniet architecto fugiat
          saepe nobis dicta a illo optio doloribus ratione iste laborum, beatae
          ut nulla, laudantium perferendis sunt incidunt cum? Eveniet libero
          necessitatibus iusto maxime voluptatibus ea unde, rerum hic
          consectetur eaque, voluptatem quibusdam similique illum perspiciatis
          totam dignissimos. Nam consequatur quibusdam delectus in tenetur illo
          animi, perferendis atque consectetur temporibus quia perspiciatis ad
          debitis?
        </p>
      </Box>
    </Layout>
  );
};

export default About;
