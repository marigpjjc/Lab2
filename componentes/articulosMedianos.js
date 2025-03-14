class articulosMedianos extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['category', 'title','image', 'description', 'authorImages','authors','date'];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div class="div">
                <img class="image" src="${this.getAttribute('image')}" alt="${this.getAttribute('name')}">
                <div class="div1">
                <h3> ${this.getAttribute('category')}</h3>
                <h2> ${this.getAttribute('title')}</h2>
                <p> ${this.getAttribute('description')}</p>                 
                <div class="div2">
                <div class="div3">
                <img class="avatar" src="${this.getAttribute('authorImages')}" alt="${this.getAttribute('name')}">
                <p class="authors"> ${this.getAttribute('authors')}</p>     
                </div> 
                <p>date: ${this.getAttribute('date')}</p>                  
                </div>  
                </div>
            </div>
                <style>
     :host {
    width: 48%;
    max-width: 600px;
    height: 100%;
}

      .div {
        background-color:rgb(0, 0, 0);
        border: 1px solid #333;
        border-radius: 8px;
        width: 100%;
        max-width: 600px;
        color: #ddd;
        font-family: sans-serif;
        height: 655px
      }
      .div1 {
        padding: 1.5rem;
        justify-content: space-evenly;
        display: flex;
        flex-direction: column;
        }
    .image{
    width: 100%;
    border-radius: 8px 8px 0 0;}
      .categoria {
        color: #aaa;
        font-size: 0.75rem;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
        letter-spacing: 0.5px;
      }
      .titulo {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      .description {
        font-size: 1rem;
        color: #ccc;
        line-height: 1.4rem;
      }
      .div2{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .authors {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
      }
      .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
      }
      .date {
        font-size: 0.8rem;
        color: #999;
      } 
      </style>

        `;
    }
}

export default articulosMedianos;