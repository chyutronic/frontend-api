import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMetas, deleteMeta, updateMeta } from "../api/metasAPI";
import estilos from "./Metas.module.css";

function Metas() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: metas,
    isError,
    error,
  } = useQuery({
    queryKey: ["metas"],
    queryFn: getMetas,
  });

  const deleteMetaMutation = useMutation({
    mutationFn: deleteMeta,
    onSuccess: () => {
      console.log("Meta borrada..!");
      queryClient.invalidateQueries("metas");
    },
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Hay un error de conexión...{error}</div>;

  return metas.map((meta: any) => (
    <div className={estilos.contenedor}>
      <div key={meta.id} className={estilos.tarjetaMeta}>
        <form>
          <div>
            <input
              id="id"
              name="id"
              type="number"
              placeholder={meta.id}
            ></input>
          </div>
          <div>
            <input
              id="detalles"
              name="detalles"
              type="text"
              placeholder={meta.detalles}
            ></input>
          </div>
          <div>
            <input
              id="periodo"
              name="periodo"
              type="text"
              placeholder={meta.periodo}
            ></input>
          </div>
          <div>
            <input
              id="eventos"
              name="eventos"
              type="number"
              placeholder={meta.eventos}
            ></input>
          </div>
          <div>
            <input
              id="icono"
              name="icono"
              type="text"
              placeholder={meta.icono}
            ></input>
          </div>
          <div>
            <input
              id="meta"
              name="meta"
              type="number"
              placeholder={meta.meta}
            ></input>
          </div>
          <div>
            <input
              id="plazo"
              name="plazo"
              type="datetime"
              placeholder={meta.plazo}
            ></input>
          </div>
          <div>
            <input
              id="completado"
              name="completado"
              type="number"
              placeholder={meta.completado}
            ></input>
          </div>
        </form>
        <div className={estilos.botones}>
          <button
            onClick={() => {
              deleteMetaMutation.mutate(meta.id);
            }}
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  ));
}

export default Metas;
