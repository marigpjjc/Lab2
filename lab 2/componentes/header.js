class header extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
         <header class="blog-header">
          <div class="container">
              <h1>Blog</h1>
              <p class="subtitle">Stay in the loop with the latest about our products</p>
          </div>
      </header>
<style>
    body {
        background-color: #0F0F0F;
        color: white;
        font-family: Arial, sans-serif;
    }

    .container {
        margin: 0px;
    }

    h1 {
        font-size: 45px;
        margin-bottom: 10px;
        font-family: Arial, sans-serif;
        color:rgb(255, 255, 255);
    }

    .subtitle {
        font-size: 15px;
        color:rgb(255, 255, 255);
        font-family: Arial, sans-serif;
        margin-top: 23px;
    }

</style>
        `;
    }
  
    connectedCallback() {
      console.log("Componente conectado");
    }
  }
  
  export default header;