import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import villanetLogo from "./assets/logo.webp";
import { liberarContratoCliente } from "./functions";

function App() {
  const [cpf, setCpf] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("villanet");

  const handleCpfChange = (event) => {
    const { value } = event.target;
    const onlyNumbers = value.replace(/\D/g, "");
    setCpf(onlyNumbers);
  };

  const handleNetworkChange = (event) => {
    setSelectedNetwork(event.target.value);
  };

  const liberarContrato = async (event) => {
    event.preventDefault();
    const result = await liberarContratoCliente(cpf, selectedNetwork);
    if (result.error || result.success == false) {
      return toast.error(result.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    return toast.success(result.msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="main">
        <h1>Liberação de contrato</h1>
        <p>Para realizar a liberação do contrato, insira o cpf do cliente que deseja liberar</p>

        <form className="rede" onSubmit={liberarContrato}>
          <p>Selecione a rede:</p>
          <select name="rede" value={selectedNetwork} onChange={handleNetworkChange}>
            <option value="villanet">VillaNet</option>
            <option value="ntw">Franquia Atibaia</option>
            <option value="brshield">BrShield</option>
            <option value="linknet">LinkNet</option>
          </select>

          <label htmlFor="cpf-cliente">CPF do cliente</label>
          <input id="cpf-cliente" type="text" placeholder="Somente números" value={cpf} onChange={handleCpfChange} />
          <button type="submit">Liberar</button>
        </form>
        <img src={villanetLogo} alt="VillaNet" className="logo" />
      </div>
    </>
  );
}

export default App;
