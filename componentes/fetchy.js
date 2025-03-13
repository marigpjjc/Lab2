class fetchy extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    try {
      const response = await fetch("./Objetos.json");
      const articulos = await response.json();
      const miniArts = articulos.miniArticulos;
      const granArts = articulos.articulosGrandes;

      this.shadowRoot.innerHTML = `
            <ul>
                ${granArts
                  .map(
                    (granArts) => `
                    <articulos-Grandes class="articulosGrandes" category="${granArts.category}" title="${granArts.title}" image="${granArts.image}" description="${granArts.description}" authorImages="${granArts.authorImages}" authors="${granArts.authors}" date="${granArts.date}"  ></articulos-Grandes>
                `
                  )
                  .join("")}
            </ul>
            
        `;
      this.shadowRoot.innerHTML += `
            <ul>
                ${miniArts
                  .map(
                    (miniArts) => `
                    <mini-Articulos class="miniArticulos" category="${miniArts.category}" title="${miniArts.title}" image="${miniArts.image}" description="${miniArts.description}" authorImages="${miniArts.authorImages}" authors="${miniArts.authors}" date="${miniArts.date}"  ></mini-Articulos>                `
                  )
                  .join("")}
            </ul>
            
        `;
    } catch (error) {
      console.error(error);
    }
  }
}

export default fetchy;
