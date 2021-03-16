import app from './app';
import './db';

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Listening on : http://localhost:${PORT}`);
});
