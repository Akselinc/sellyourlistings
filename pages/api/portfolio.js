export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: 1,
      name: "Address",
      showcase: ["img1", "img2", "img3", "img4"],
      matterport: "url",
      youtube: "url",
    },
    {
      id: 2,
      name: "Address 2",
      showcase: ["img1", "img2", "img3", "img4"],
      matterport: "url",
      youtube: "url",
    },
    {
      id: 3,
      name: "Address 3",
      showcase: ["img1", "img2", "img3", "img4"],
      matterport: "url",
      youtube: "url",
    },
  ]);
};