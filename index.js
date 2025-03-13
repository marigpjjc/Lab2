import header from "./componentes/header.js"
import naveg from "./componentes/nav.js"
import dial from "./componentes/dial.js"
import articulosGrandes from "./componentes/articulosGrandes.js";
import miniArticulos from "./componentes/miniArticulos.js";
import fetchy from "./componentes/fetchy.js";



console.log('Custom element defined');
customElements.define ("big-header", header)
customElements.define ("big-nav",naveg )
customElements.define("big-dial", dial)
customElements.define('fetchy-pepito', fetchy);
customElements.define('articulos-grandes', articulosGrandes);
customElements.define('mini-articulos', miniArticulos);


