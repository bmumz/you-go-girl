import axios from "axios";

export default async (req, res) => {
  const url = `https://inspirational-quotes-api.herokuapp.com/quotes`;

  await axios
    .get(url)
    .then(({ data }) => {
      res.status(200).json({ data });
    })
    .catch(({ err }) => {
      res.status(400).json({ err });
    });
};
