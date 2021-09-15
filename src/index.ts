import app from "./server";

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`Server up \n  Access avaible on http://localhost:${PORT}`);
});
