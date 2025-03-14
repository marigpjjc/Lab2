class articulosMedi extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }


    static get observedAttributes() {
        return ['category', 'title', 'description', 'authorImages','authors','date'];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div class="div">
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
                <style>
:host {
    display: flex;
    width: 95%;
    max-width: 3000px;
}


      .div {
        background-color:rgb(0, 0, 0);
        border: 1px solid #333;
        border-radius: 8px;
        padding: 1.5rem;
        width: 100%;
        max-width: 3000px;
        color: #ddd;
        font-family: sans-serif;
        margin-bottom: 25px;
      }
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
        margin-bottom: 1rem;
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

export default articulosMedi;