class header extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
         <header class="blog-header">
          <div class="container">
              <h1>Blog</h1>
              <p class="subtitle">Stay in the loop with the latest about our products</p>
  
              <nav class="nav">
                  <ul>
                      <li><button class="active">All categories</button></li>
                      <li><button>Company</button></li>
                      <li><button>Product</button></li>
                      <li><button>Design</button></li>
                      <li><button>Engineering</button></li>
                      <search-bar></search-bar>
                  </ul>
  
              </nav>
          </div>
      </header>
        `;
    }
  
    connectedCallback() {
      console.log("Componente conectado");
    }
  }
  
  export default header;