import {defineStore} from "pinia";
import {ref} from "vue";

export const useFiltroStore = defineStore('filtro', () => {
    const filtro = ref('')
    
    function setCategoria(categoria) {
        filtro.value = categoria
    }

    function limparFiltro() {
        filtro.value = "";
    }

    return {filtro, limparFiltro, setCategoria}
})
