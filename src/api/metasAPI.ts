import axios from "axios";

const metasApi = axios.create({
    baseURL: 'https://metasappbackend-production.up.railway.app/'
})

export const getMetas = async () => {
    const res = await metasApi.get('/api/metas')
    return res.data;
}

export const createMeta = (meta: any) => { metasApi.post('/api/metas', meta) }

export const deleteMeta = (id: any) => metasApi.delete(`/api/metas/${id}`)

export const updateMeta = (id:any, meta: any) => metasApi.put(`/api/metas/${id}`, meta)


