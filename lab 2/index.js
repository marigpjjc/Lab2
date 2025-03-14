import header from "./componentes/header.js"
import naveg from "./componentes/nav.js"
import dial from "./componentes/dial.js"
import articulosGrandes from "./componentes/articulosGrandes.js";
import miniArticulos from "./componentes/miniArticulos.js";
import fetchy from "./componentes/fetchy.js";
import articulosMedianos from "./componentes/articulosMedianos.js";
import articulosMedi from "./componentes/articulosMedi.js";
import botton from "./componentes/botton.js";


console.log('Custom element defined');
customElements.define ("big-header", header)
customElements.define ("big-nav",naveg )
customElements.define("big-dial", dial)
customElements.define('fetchy-pepito', fetchy);
customElements.define('articulos-grandes', articulosGrandes);
customElements.define('mini-articulos', miniArticulos);
customElements.define('articulos-medianos', articulosMedianos);
customElements.define('articulos-medi', articulosMedi);
customElements.define("big-botton", botton)


