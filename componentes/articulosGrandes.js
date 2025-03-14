class articulosGrandes extends HTMLElement{
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
        <h3>${this.getAttribute('category')}</h3>
        <h2>${this.getAttribute('title')}</h2>
        <p class="description">${this.getAttribute('description')}</p>                 
        <div class="div2">
            <div class="div3">
                ${this.getAttribute('authorImages')
                    .split(',')
                    .map(img => `<img class="avatar" src="${img.trim()}" alt="Author">`)
                    .join('')
                }
                <p class="authors">${this.getAttribute('authors')}</p>     
            </div> 
            <p class="date">date: ${this.getAttribute('date')}</p>                  
        </div>   
    </div>
</div>

<style>
:host {
    display: flex;
    width: 48%;
    max-width: 600px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: stretch; 
}

.div {
    background-color: rgb(0, 0, 0);
    border: 1px solid #333;
    border-radius: 8px;
    width: 100%;
    max-width: 600px;
    color: #ddd;
    font-family: sans-serif;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    flex: 1 1 auto; 
}

.image {
    width: 100%;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
    height: 200px; 
}

.div1 {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.description {
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
}

.div2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
}

.div3 {
    display: flex;
    align-items: center;
    gap: 8px;
}

.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
}

.authors {
    font-size: 0.85rem;
}

.date {
    font-size: 0.8rem;
    color: #999;
}
</style>


        `;
    }
}

export default articulosGrandes;