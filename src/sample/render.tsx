import { createRoot } from "react-dom/client";
import Sample from ".";

const container = document.getElementById("app");

const root = createRoot(container!);
root.render(<Sample />);
