import React from "react";
import Container from "../layout/Container";
import Card from "./Card";

const Listing = ({ data }) => {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-14 px-5 md:px-0">
        {data.map((item) => (
          <Card
            key={item._id}
            title={item.title}
            price={item.price}
            image={item.images[0].src}
            slug={item.slug}
          />
        ))}
      </div>
    </Container>
  );
};

export default Listing;
