import dva from 'dva';
import createHistory from "history/createBrowserHistory"
const app = dva({
  history:createHistory
});
export default app;