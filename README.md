
![localhost_3000_](https://github.com/user-attachments/assets/11d31322-f293-4538-877e-33cae34da86b)

### Project Description

The Little Lemon project is a modern, responsive single-page web application for a fictional Mediterranean restaurant. The application provides a welcoming user experience, allowing potential customers to learn about the restaurant, browse the menu, and most importantly, book a table through a comprehensive, step-by-step reservation system.

### Original Features

The initial version of the project established the restaurant's online presence with a set of visually appealing, static pages. This included a well-structured homepage featuring a hero section, weekly specials, customer testimonials, and a brief history of the restaurant. The core structure was supported by a consistent header and footer for seamless navigation.

### Enhanced Features

Together, we significantly enhanced the application by building out its core interactive feature: a dynamic, multi-step table reservation system. This transformed the website from a simple brochure into a functional tool for the business. Key enhancements include:

* **Dynamic API Integration:** The booking form was upgraded to fetch available reservation times from a simulated API, with the timeslots changing based on the user's selected date.
* **Advanced State Management:** We refactored the application's state management using the `useReducer` hook, creating a robust and scalable system for handling complex data flows.
* **Client-Side Validation:** The user information form was equipped with real-time validation to ensure all required fields are filled correctly before submission, improving data quality and user experience.
* **Web Accessibility (A11y):** We improved the application's accessibility by adding ARIA (Accessible Rich Internet Applications) attributes to the forms and interactive elements, making the booking process usable for people with assistive technologies.
* **Unit Testing:** We established a professional testing suite using Jest and React Testing Library to write unit tests for the application's core business logic, ensuring its reliability and maintainability.

---

### Features

#### Core Functionality

* **Multi-Step Table Reservation System:** A complete, five-step booking flow that guides the user through the reservation process.
    1.  **Date & Guest Selection:** An interactive calendar for date selection.
    2.  **Time Selection:** A grid of available time slots dynamically loaded from an API based on the selected date.
    3.  **Table Selection:** A list of table options (Standard, Counter, Outdoor) with conditional availability based on the selected time.
    4.  **Information Form:** A user details form with real-time validation for required fields like name, email, and phone number.
    5.  **Confirmation Page:** A final summary screen confirming the successful booking details.
* **Navigation:** Back and forward navigation through all steps of the booking process.

#### Pages

The application is structured as a Single-Page Application (SPA) with the following routes:
* Home
* About
* Menus
* **Reservations (Main Feature)**
* Order Online
* Account / Login (UI placeholders)
* Special Offers
* Join Member
* Reviews

#### Technologies Used

* **Frontend Library:** **React.js** for building the component-based user interface.
* **State Management:** A combination of core React Hooks:
    * **`useState`**: For managing simple local and component-level state.
    * **`useReducer`**: For managing complex state logic, specifically the dynamic fetching and updating of available reservation times.
    * **`useEffect`**: For handling side effects, primarily fetching initial data from the API when components load.
* **Routing:** **React Router (`react-router-dom`)** to handle client-side navigation and create the seamless SPA experience.
* **UI Components:** **Mantine UI (`@mantine/dates`)** for the powerful and accessible `<Calendar>` component.
* **Styling:** **CSS Modules** for writing locally scoped, conflict-free styles for each component.
* **Date & Time:** **Day.js** for parsing, validating, and formatting dates.
* **API Simulation:** A local mock API (`api.js`) to simulate fetching and submitting data to a backend server.
* **Testing:** **Jest** and **React Testing Library** for writing and running unit tests on the application's core logic and components.
