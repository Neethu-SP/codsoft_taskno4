# Interactive Movie Recommendation System Dashboard

A premium, high-fidelity single-page web dashboard demonstrating the two core recommendation system paradigms: **Content-Based Filtering** and **User-Based Collaborative Filtering**, built with HTML, Vanilla CSS, and JavaScript.

## 🚀 Key Features

- **Interactive Playground**: Real-time slider interfaces for genre preferences and 1-5 star ratings.
- **Mathematical Visualizations**: Step-by-step math breakdowns showing the calculations (e.g., vector representations, dot products, vector magnitudes, cosine similarities, and weighted predicted ratings).
- **Flexible Database Manager**: An interface to add new movies (custom titles, descriptions, genres, release years, and custom icons) or delete items, updating models dynamically.
- **Modern Premium Design**: Dark mode aesthetic with translucent glassmorphic components, fluid animations, and custom glowing neon accents.

---

## 📐 Recommendation Algorithms Explained

### 1. Content-Based Filtering

Content-based recommendations suggest movies similar to items a user has liked in the past or matches their explicitly declared genre preferences.

* **Vectors representation**:
  - **User Vector ($U$)**: A weighted vector based on the slider preferences across 7 distinct genres (Action, Comedy, Drama, Sci-Fi, Romance, Thriller, Fantasy), scaled from `0.0` to `1.0`.
  - **Movie Vector ($M$)**: A binary vector where a genre coordinate is `1.0` if the movie features that genre, and `0.0` otherwise.

* **Cosine Similarity**:
  $$\text{Cosine Similarity}(U, M) = \frac{U \cdot M}{\|U\| \cdot \|M\|} = \frac{\sum_{i=1}^{n} U_i M_i}{\sqrt{\sum_{i=1}^{n} U_i^2} \cdot \sqrt{\sum_{i=1}^{n} M_i^2}}$$

* **Recommendation Criteria**: Movies with the highest similarity coefficients represent the best overlap and are recommended.

### 2. User-Based Collaborative Filtering

Collaborative filtering recommends items based on the behavior and ratings of other users with similar tastes.

* **Similarity Matrix**:
  - The system computes the Cosine Similarity between the current user's rating vector and the ratings of five distinct mock users (Sarah, Michael, Emily, Alex, Jessica) across the shared set of rated movies.
  - This identifies the current user's **Nearest Neighbors**.

* **Predicted Rating Calculation**:
  - For each movie $i$ that the current user has **not** rated, the engine predicts a score using a similarity-weighted average of ratings from neighbors:
  $$\text{Predicted Rating}(User, i) = \frac{\sum_{n \in Neighbors} \text{Sim}(User, n) \cdot R_{n,i}}{\sum_{n \in Neighbors} \text{Sim}(User, n)}$$
  - Only neighbors with a positive similarity score ($\text{Sim} > 0$) who have actually rated movie $i$ are aggregated.
  - The top movies by predicted rating are sorted and recommended.

---

## 🛠️ Setup and Execution

Since the project uses vanilla HTML, CSS, and JS, there are no compilers, dependencies, or server-side installs required! 

1. Double-click the `index.html` file to open it directly in any modern web browser, or serve it locally using a server extension like Live Server, or run:
   ```powershell
   # Start a simple HTTP server using Python (if installed)
   python -m http.server 8080
   ```
2. Open `http://localhost:8080` in your web browser.

---

## 📂 Codebase Structure

- `index.html` — Layout framework, side-rail navigational components, control sections, recommendation list templates, math display windows, and dialog forms.
- `styles.css` — Global CSS variables, custom typography headers, backdrop-blur filter panels, glowing ranges/stars, and card transitions.
- `script.js` — Core model definitions, cosine similarity calculations, predictive weights aggregation, UI rendering updates, and database mutation commands.
