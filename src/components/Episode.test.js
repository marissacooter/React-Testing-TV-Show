import React from "react";
import Episodes from "./Episodes";
import { render, waitFor } from "@testing-library/react";

test("Testing to see if seasons are visible", () => {
  const { queryAllByTestId } = render(<Episodes episodes={[]} />);
  expect(queryAllByTestId(/episode/i)).toHaveLength(0);
});

test("Testing to see if seasons are visible", () => {
  const { queryAllByTestId } = render(
    <Episodes
      episodes={[
        {
          airdate: "2016-07-15",
          airstamp: "2016-07-15T12:00:00+00:00",
          airtime: "",
          id: 553946,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
          },
          name: "Chapter One: The Vanishing of Will Byers",
          number: 1,
          runtime: 60,
          season: 1,
          summary:
            "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
          url:
            "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
          _links: {
            self: {
              href: "http://api.tvmaze.com/episodes/553946",
            },
          },
        },
      ]}
    />
  );
  expect(queryAllByTestId(/episode/i)).toHaveLength(1);
});
