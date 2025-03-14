class botton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
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
<style>

    .nav ul {
        display: flex;
        align-items: center;
        gap: 12px;
        list-style: none;
        padding: 0;
        margin-top: 35px;
    }

    .nav button {
        background-color:rgb(21, 21, 21);
        color: gray;
        border: none;
        border-radius: 20px;
        padding: 8px 16px;
        font-size: 14px;
        cursor: pointer;
        transition: 0.3s ease;
    }

    .nav button:hover {
        background-color:rgb(53, 53, 53);
    }

    .nav .active {
        background-color:rgb(0, 0, 0);
        color: gray;
        border: 1.5px solid #303030;
    }

    .search-bar-container {
        margin-left: auto;
    }
</style>
        `;
    }
  
    connectedCallback() {
      console.log("Componente conectado");
    }
  }
  
  export default botton;