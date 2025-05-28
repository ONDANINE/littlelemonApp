
import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>About</li>
            <li>Menus</li>
            <li>Reservations</li>
          </ul>
        </nav>
        <img src="https://via.placeholder.com/150" alt="Restaurant Logo" />
        <button>Order Online</button>
        <button>Login</button>
      </header>

      <main>
        <section className="hero">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Looking for a table?</button>
        </section>

        <section className="Menu">
          <button>Our Menu</button>
          <div className="Popular-Menus">
            <h2>Popular menu</h2>
            <p>Description</p>
            <article>List of popular dishes</article>
            <button> Order Dish</button>
          </div>
        </section>

        <section className="Offer">
          <button>Special Offers</button>
          <div className="Exclusive-members">
            <h2>Exclusive to members</h2>
            <p>Description</p>
            <article>List of offerings</article>
            <button>Join Members</button>
          </div>
        </section>

        <section className="Feedback">
          <h2>Feed back</h2>
          <h3>Opinions</h3>
          <p>We value your feedback!</p>
          <button>Reviews</button>
          <article>
            <blockquote>"Best restaurant experience ever!" - Jane Doe</blockquote>
            <blockquote>"The food was amazing and the service was top-notch!" - John Smith</blockquote>
          </article>
        </section>

        <footer>
          <p>&copy; 2023 Our Restaurant. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}

export default App;
