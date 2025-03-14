class dial extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
  <div class="pagination">
      <div class="page active">1</div>
      <div class="page">2</div>
      <div class="page">3</div>
      <div class="page">4</div>
      <div class="page">5</div>
      <div class="page">6</div>
      <div class="page">7</div>
      <div class="page">8</div>
      <div class="page">9</div>
      <div class="page">10</div>
  </div>
     <style>
      .pagination {
          font-family: helvetica, arial, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%; 
          margin-top: 30px;
          margin-bottom: 8rem;
          max-width: 60%;
      }
       .page {
          background-color: rgb(100, 100, 100);
          width: 32px;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
      }
      .page.active {
          background-color: white;
          color: black;
      }
      .page:hover {
          background-color: rgb(255, 255, 255);
          color: black;
      }
  </style>
    `;
  }}
  export default dial;