// Mobile menu toggle
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Search functionality
const searchForm = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-box input');
const recipeCards = document.querySelectorAll('.recipe-card');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    
    recipeCards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Recipe card hover effects and interactions
recipeCards.forEach(card => {
    const viewButton = card.querySelector('a');
    
    viewButton.addEventListener('click', (e) => {
        e.preventDefault();
        const recipeName = card.querySelector('h2').textContent;
        alert(`Opening recipe for: ${recipeName}`);
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('.nav-list li').forEach(item => {
    item.addEventListener('click', () => {
        const text = item.textContent.toLowerCase();
        if (text === 'recipe') {
            document.querySelector('.recipes').scrollIntoView({ behavior: 'smooth' });
        } else if (text === 'home') {
            document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
        }
    });
});