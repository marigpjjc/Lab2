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

      `;
    }}
    export default dial;