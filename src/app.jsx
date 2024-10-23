import { h } from 'preact'; // Ensure you're importing `h` from Preact
import { useState } from 'preact/hooks'; // Import useState for state management
import './App.css';

// Sample movie data with 15 cards and updated images and links
const cardData = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    rating: '9.3/10',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9kf0bxZwiPzJuNLtP8WM-TzTN74h4qYlAW_TIsV8oPSA8kcyJrsaRehYha8TiT2Yiv4XiEdniWuyZcyQwaK5ZkPSRAbM2Ta5ZPpT63RI',
    link: 'https://www.netflix.com/title/70005379',
  },
  {
    id: 2,
    title: 'The Godfather',
    rating: '9.2/10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6jergPPlYwSiODyQFgfsl9XsJU3GwpbIWg&s',
    link: 'https://www.netflix.com/title/60011152',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    rating: '9.0/10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwIekkAyrsHIqYSTYaOtp89yn9Q_4c4GmAQ&s',
    link: 'https://www.netflix.com/title/70001245',
  },
  {
    id: 4,
    title: 'Pulp Fiction',
    rating: '8.9/10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHnz6-BId8VrWI_f9f17e2WkDYiZC30T1eRw&s',
    link: 'https://www.netflix.com/title/60020867',
  },
  {
    id: 5,
    title: 'Forrest Gump',
    rating: '8.8/10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWfxILvJos7Qh6SdnukYraAxXnVmwBcLGX7Q&s',
    link: 'https://www.netflix.com/title/60003499',
  },
  {
    id: 6,
    title: 'Inception',
    rating: '8.8/10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWoQ0Vj0Rj_G8Vm1NujWqLYypy6FL-IaD5VQ&s',
    link: 'https://www.netflix.com/title/70131314',
  },
  {
    id: 7,
    title: 'Fight Club',
    rating: '8.8/10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBKsadtqFyN-b5xu0WZTY0hKPqfT1Uqd1Yw&s',
    link: 'https://www.netflix.com/title/60002616',
  },
  {
    id: 8,
    title: 'The Matrix',
    rating: '8.7/10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcbxIIfKw33R8LQC2i7fa3i4w88sXvUqUZA&s',
    link: 'https://www.netflix.com/title/60022433',
  },
  {
    id: 9,
    title: 'The Lord of the Rings: The Return of the King',
    rating: '8.9/10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK92PJQ6BCxTPvwEsNoEuFdYCVKkOLCmLP1w&s',
    link: 'https://www.netflix.com/title/60025120',
  },
  {
    id: 10,
    title: 'Star Wars: Episode IV - A New Hope',
    rating: '8.6/10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rAaf08K9VN7_Wl94LOEaeKhyYA7Y7RRNIA&s',
    link: 'https://www.netflix.com/title/60019736',
  },
  {
    id: 11,
    title: 'The Silence of the Lambs',
    rating: '8.6/10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqSkwk4CBujH5sdsnIy0RJSkvdd52do3n1w&s',
    link: 'https://www.netflix.com/title/60001219',
  },
  {
    id: 12,
    title: 'Goodfellas',
    rating: '8.7/10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotWhOP_ooegxC7GEhaJ8S1tb-yJYKm5j5NQ&s',
    link: 'https://www.netflix.com/title/60002763',
  },
  {
    id: 13,
    title: 'The Usual Suspects',
    rating: '8.5/10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQveQngx6GpmnhTLufrsixu3DxvQj2GDlMRBQ&s',
    link: 'https://www.netflix.com/title/60002764',
  },
  {
    id: 14,
    title: 'Se7en',
    rating: '8.6/10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCa8ZyxaFy8sTKqJdVMwzMi5TuIRytcUkevA&s',
    link: 'https://www.netflix.com/title/60002231',
  },
  {
    id: 15,
    title: 'The Lion King',
    rating: '8.5/10',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_A-10Z56UGyOxCSVWgga35QWe8tZC2UjYyw&s',
    link: 'https://www.netflix.com/title/60022379',
  },
];

// Card component
const Card = ({ id, title, rating, image, link }) => {
  const [clicked, setClicked] = useState(false); // State to track button click

  const handleClick = () => {
    setClicked(true); // Change state to clicked
    setTimeout(() => {
      window.open(link, '_blank'); // Open link in new tab
    }, 200); // Delay before redirecting
  };

  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-info">
        <h3>{title}</h3>
        <p>Rating: {rating}</p>
        <button
          className={`watch-btn ${clicked ? 'clicked' : ''}`} // Add clicked class
          onClick={handleClick} // Handle button click
        >
          Watch Now
        </button>
      </div>
    </div>
  );
};

// App component
const App = () => {
  return (
    <div className="app">
      <h1>Netflix Series</h1>
      <div className="card-container">
        {cardData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            rating={card.rating}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
