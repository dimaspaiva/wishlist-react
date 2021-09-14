import app from "./server";

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`server up access via http://localhost:${PORT}`);
});
