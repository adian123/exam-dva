import app from "./app"
import './common/css/index.css';
//app.model(require('./models/example').default);
// app.model(require('./models/login').default);
app.router(require('./router').default);
app.start('#root');
