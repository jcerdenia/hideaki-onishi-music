import { useContext } from "react";
import { AppContext } from "../../components/AppProvider";

const useAppContext = () => useContext(AppContext);

export default useAppContext;
