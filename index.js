import articulosGrandes from "./componentes/articulosGrandes.js";
import miniArticulos from "./componentes/miniArticulos.js";
import fetchy from "./componentes/fetchy.js";


console.log('Custom element defined');
customElements.define('fetchy-pepito', fetchy);
customElements.define('articulos-grandes', articulosGrandes);
customElements.define('mini-articulos', miniArticulos);


