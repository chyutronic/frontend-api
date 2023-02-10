import estilos from "./FormularioMetas.module.css";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { createMeta, updateMeta, getMetas } from "../api/metasAPI";

function FormularioMetas() {
  const queryClient = useQueryClient();

  const addMetaMutation = useMutation({
    mutationFn: createMeta,
    onSuccess: () => {
      console.log("Meta agregada..!");
      queryClient.invalidateQueries("metas");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const meta = Object.fromEntries(formData);
    addMetaMutation.mutate(meta);
  };

  return (
    <div className={estilos.contenedor}>
      <div className={estilos.contenedorFormulario}>
        <form onSubmit={handleSubmit}>
          <div className={estilos.inputs}>
            <label htmlFor="id">Id</label>
            <input type="number" id="id" name="id" />
          </div>
          <div className={estilos.inputs}>
            <label htmlFor="detalles">Detalles</label>
            <input type="text" id="detalles" name="detalles" />
          </div>
          <div className={estilos.inputs}>
            <label htmlFor="periodo">Periodo</label>
            <input type="text" id="periodo" name="periodo" />
          </div>
          <div className={estilos.inputs}>
            <label htmlFor="eventos">Eventos</label>
            <input type="number" id="eventos" name="eventos" />
          </div>
          <div className={estilos.inputs}>
            <label htmlFor="icono">Icono</label>
            <input type="text" id="icono" name="icono" />
          </div>
          <div className={estilos.inputs}>
            <label htmlFor="meta">Meta</label>
            <input type="number" id="meta" name="meta" />
          </div>
          <div className={estilos.inputs}>
            <label htmlFor="plazo">Plazo</label>
            <input type="date" id="plazo" name="plazo" />
          </div>
          <div className={estilos.inputs}>
            <label htmlFor="completado">Completado</label>
            <input type="number" id="completado" name="completado" />
          </div>
          <div className={estilos.inputs}>
            <button>Agregar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioMetas;
