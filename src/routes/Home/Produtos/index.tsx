import { Outlet } from "react-router-dom";
import CardNav from "../../../components/CardNav";
import "./styles.css"

export default function Produtos() {
  return (
    <>
      <CardNav/>
      <Outlet/>
    </>
  );
}