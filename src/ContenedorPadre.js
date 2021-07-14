import CargarContactos from "./ListaContactos.js";
import FormularioDeEnvio from './Sender'
function Agenda(){
    return (
        <div>
        <FormularioDeEnvio/>
        <CargarContactos/>
        </div>

    );
}

export default Agenda