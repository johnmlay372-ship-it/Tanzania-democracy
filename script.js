/* script.js - Interactive dropdown and president cards */
// President data for cards on homepage
const presidentsData = [
    {
        id: "nyerere",
        name: "Mwalimu Julius K. Nyerere",
        years: "1964 - 1985",
        shortBio: "Baba wa Taifa, aliongoza Tanganyika na baadaye Tanzania, alianzisha ujamaa na kujitolea kwa umoja wa Afrika.",
        imageUrl: "images/nyerere.jpg",
        page: "nyerere.html"
    },
    {
        id: "mwinyi",
        name: "Ali Hassan Mwinyi",
        years: "1985 - 1995",
        shortBio: "Mzee wa Ruaha, alileta mageuzi ya kiuchumi na kufungua huru ya vyama vingi.",
        imageUrl: "images/mwinyi.jpg",
        page: "mwinyi.html"
    },
    {
        id: "mkapa",
        name: "Benjamin W. Mkapa",
        years: "1995 - 2005",
        shortBio: "Aliongoza vita dhidi ya rushwa na kuimarisha uchumi wa Tanzania.",
        imageUrl: "images/mkapa.jpg",
        page: "mkapa.html"
    },
    {
        id: "kikwete",
        name: "Jakaya M. Kikwete",
        years: "2005 - 2015",
        shortBio: "Aliendeleza demokrasia, miundombinu na uhusiano wa kikanda.",
        imageUrl: "images/kikwete.jpg",
        page: "kikwete.html"
    },
    {
        id: "magufuli",
        name: "John P. Magufuli",
        years: "2015 - 2021",
        shortBio: "Alijulikana kwa vita dhidi ya rushwa na ujenzi wa miradi mikubwa.",
        imageUrl: "images/magufuli.jpg",
        page: "magufuli.html"
    },
    {
        id: "samia",
        name: "Samia S. Hassan",
        years: "2021 - Hadi sasa",
        shortBio: "Rais wa kwanza mwanamke wa Tanzania, anaendeleza uwazi, umoja na diplomasia.",
        imageUrl: "images/samia.jpg",
        page: "samia.html"
    }
];

// Render president cards on homepage
function renderPresidentsGrid() {
    const grid = document.getElementById('presidentsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    presidentsData.forEach(president => {
        const card = document.createElement('div');
        card.className = 'president-card';
        
        const imgContainer = document.createElement('div');
        imgContainer.className = 'img-container';
        const img = document.createElement('img');
        img.className = 'president-img';
        img.src = president.imageUrl;
        img.alt = `Rais ${president.name}`;
        img.onerror = function() {
            this.src = 'https://via.placeholder.com/300x280?text=Rais+'+encodeURIComponent(president.name);
        };
        
        // Click on image navigates to president's detail page
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = president.page;
        });
        
        imgContainer.appendChild(img);
        
        const cardInfo = document.createElement('div');
        cardInfo.className = 'card-info';
        cardInfo.innerHTML = `
            <div class="president-name">${president.name}</div>
            <div class="president-years">📅 ${president.years}</div>
            <div class="short-bio">📖 ${president.shortBio}</div>
            <div class="click-hint">🖼️ Bonyeza picha kwa maelezo kamili</div>
        `;
        
        card.appendChild(imgContainer);
        card.appendChild(cardInfo);
        grid.appendChild(card);
    });
}

// Dropdown menu functionality
function initDropdown() {
    const dropdownBtn = document.getElementById('presidentsDropdownBtn');
    const dropdownMenu = document.getElementById('presidentsDropdown');
    
    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownMenu.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderPresidentsGrid();
    initDropdown();
});