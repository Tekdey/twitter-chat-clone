const app = require("./server.js");

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
