class Fetchy extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const response = await fetch("./Objetos.json");
      const articulos = await response.json();
      const { articulosMedianos, articulosMedi, miniArticulos, articulosGrandes } = articulos;

      this.addArticles(".grandes-container", articulosGrandes, "articulos-grandes");
      this.addArticles(".medianos-container", articulosMedianos, "articulos-medianos");
      this.addArticles(".medi-container", articulosMedi, "articulos-medi");
      this.addArticles(".mini-container", miniArticulos, "mini-articulos");
    } catch (error) {
      console.error("Error cargando los artículos:", error);
    }
  }

  addArticles(containerSelector, articles, customElement) {
    const container = document.querySelector(containerSelector);
    if (!container) {
      console.warn(`No se encontró el contenedor: ${containerSelector}`);
      return;
    }

    articles.forEach((article) => {
      const element = document.createElement(customElement);
      element.setAttribute("category", article.category);
      element.setAttribute("title", article.title);
      element.setAttribute("image", article.image);
      element.setAttribute("description", article.description);
      element.setAttribute("authorImages", article.authorImages);
      element.setAttribute("authors", article.authors);
      element.setAttribute("date", article.date);
      container.appendChild(element);
    });
  }
}

export default Fetchy;
