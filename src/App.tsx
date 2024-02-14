import MainLayout from "./components/layouts/MainLayout";
import { useAppSelector } from "./redux/hook";

function App() {
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div
      className={` min-h-screen w-full ${darkMode ? "bg-black text-white" : ""}`}
    >
      <MainLayout />
    </div>
  );
}

export default App;
