import Router from "./routes/router";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";

function App() {
  const initialLoading = useSelector((state) => state.auth.initialLoading);
  if (initialLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Router />
      <ToastContainer
        position="bottom-center"
        theme="dark"
        autoClose={3000}
      />{" "}
    </div>
  );
}

export default App;
