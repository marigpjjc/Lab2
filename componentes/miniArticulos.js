class miniArticulos extends HTMLElement{
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
            <div class="article">
                <p class="category">${this.getAttribute('category')}</p>
                <h6 class="title">${this.getAttribute('title')}</h6>
                <p class="description">${this.getAttribute('description')}</p>                 
                <div class="article-footer">
                    <div class="authors">
                        ${this.getAttribute('authorImages')
                            .split(',')
                            .map(img => `<img class="avatar" src="${img.trim()}" alt="Author">`)
                            .join('')
                        }
                        <p>${this.getAttribute('authors')}</p>     
                    </div> 
                    <p class="date">${this.getAttribute('date')}</p>                  
                </div>   
            </div>
            <style>
                :host {
                display: flex;
                width: 48%;
                max-width: 600px;
            }

            .article {
                background-color: black;
                border-radius: 8px;
                padding: 1.5rem;
                max-width: 600px;
                font-family: sans-serif;
                display: flex;
                flex-direction: column;
                gap: 4px; 
                color: black;
                min-height: 250px; 
                align-items: stretch;
                color: black;
            }

            .category {
                color: #6b7280;
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin: 0;
            }

            .title {
                font-size: 1.5rem;
                font-weight: bold;
                margin-top: 20px;
                margin-bottom: 10px;
                color:rgb(128, 135, 148);;
            }

            .description {
                font-size: 1rem;
                color: #6b7280;
                line-height: 1.5rem;
                display: -webkit-box;
                -webkit-line-clamp: 2; 
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                flex-grow: 1;
                margin: 0;
            }

            .article-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: auto;
            }

            .authors {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 0.9rem;
            }

            .avatar {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                object-fit: cover;
            }

            .date {
                font-size: 0.85rem;
                color: #6b7280;
            }

            </style>
        `;
    }
}

export default miniArticulos;
