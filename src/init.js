import 'regenerator-runtime/runtime';
import app from './app';
import './db';

const PORT = process.env.PORT || 4010;

app.listen(PORT, () => {
  console.log(`Listening on : http://localhost:${PORT}`);
});
