// --- GLOBAL DATA & STATE ---

// initial movie dataset
let movies = [
    {
        id: 1,
        title: "Interstellar",
        year: 2014,
        genres: ["Sci-Fi", "Drama", "Thriller"],
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival in a dying Earth.",
        icon: "🚀",
        gradient: "linear-gradient(135deg, #7c3aed, #06b6d4)"
    },
    {
        id: 2,
        title: "The Dark Knight",
        year: 2008,
        genres: ["Action", "Thriller", "Drama"],
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        icon: "🦇",
        gradient: "linear-gradient(135deg, #1e293b, #475569)"
    },
    {
        id: 3,
        title: "Inception",
        year: 2010,
        genres: ["Sci-Fi", "Action", "Thriller"],
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        icon: "🌀",
        gradient: "linear-gradient(135deg, #0284c7, #6366f1)"
    },
    {
        id: 4,
        title: "Pulp Fiction",
        year: 1994,
        genres: ["Drama", "Thriller"],
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        icon: "🔫",
        gradient: "linear-gradient(135deg, #b91c1c, #d97706)"
    },
    {
        id: 5,
        title: "The Matrix",
        year: 1999,
        genres: ["Sci-Fi", "Action"],
        description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        icon: "🕶️",
        gradient: "linear-gradient(135deg, #052e16, #16a34a)"
    },
    {
        id: 6,
        title: "Superbad",
        year: 2007,
        genres: ["Comedy"],
        description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        icon: "🍺",
        gradient: "linear-gradient(135deg, #ea580c, #facc15)"
    },
    {
        id: 7,
        title: "La La Land",
        year: 2016,
        genres: ["Romance", "Drama", "Comedy"],
        description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        icon: "💃",
        gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)"
    },
    {
        id: 8,
        title: "The Notebook",
        year: 2004,
        genres: ["Romance", "Drama"],
        description: "A poor jacket-mill worker and a rich girl fall in love, but her parents and the social divide threaten to keep them apart in this sweeping story of devotion.",
        icon: "📖",
        gradient: "linear-gradient(135deg, #f43f5e, #fda4af)"
    },
    {
        id: 9,
        title: "Spirited Away",
        year: 2001,
        genres: ["Fantasy", "Drama", "Sci-Fi"],
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        icon: "🐉",
        gradient: "linear-gradient(135deg, #0d9488, #10b981)"
    },
    {
        id: 10,
        title: "Get Out",
        year: 2017,
        genres: ["Thriller", "Drama"],
        description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception eventually reaches a boiling point.",
        icon: "👁️",
        gradient: "linear-gradient(135deg, #111827, #991b1b)"
    },
    {
        id: 11,
        title: "The Grand Budapest Hotel",
        year: 2014,
        genres: ["Comedy", "Drama"],
        description: "A writer relates his adventures at a renowned European resort hotel between the first and second World Wars with a concierge who is wrongly framed for murder.",
        icon: "🏨",
        gradient: "linear-gradient(135deg, #db2777, #fcd34d)"
    },
    {
        id: 12,
        title: "Avengers: Endgame",
        year: 2019,
        genres: ["Action", "Sci-Fi", "Fantasy"],
        description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions.",
        icon: "🛡️",
        gradient: "linear-gradient(135deg, #1d4ed8, #06b6d4)"
    },
    {
        id: 13,
        title: "Eternal Sunshine of the Spotless Mind",
        year: 2004,
        genres: ["Romance", "Sci-Fi", "Drama"],
        description: "When their relationship turns sour, a young couple undergoes a medical procedure to have each other erased from their memories forever.",
        icon: "🧠",
        gradient: "linear-gradient(135deg, #0891b2, #ec4899)"
    },
    {
        id: 14,
        title: "Gladiator",
        year: 2000,
        genres: ["Action", "Drama"],
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        icon: "⚔️",
        gradient: "linear-gradient(135deg, #854d0e, #78350f)"
    },
    {
        id: 15,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        genres: ["Fantasy", "Action", "Drama"],
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        icon: "💍",
        gradient: "linear-gradient(135deg, #b45309, #1e293b)"
    }
];

// Available genres for mapping vectors
const genresList = ["Action", "Comedy", "Drama", "Sci-Fi", "Romance", "Thriller", "Fantasy"];

// Mock Users & Ratings Database
// Rating range: 1 to 5. 0 indicates unrated.
let mockUsers = [
    {
        name: "Sarah (Action/Sci-Fi Fan)",
        ratings: { 1: 5, 2: 4, 3: 5, 5: 5, 12: 4, 7: 1, 8: 1 }
    },
    {
        name: "Michael (Rom-Com & Drama Lover)",
        ratings: { 7: 5, 8: 5, 11: 4, 13: 4, 1: 2, 2: 2, 5: 1 }
    },
    {
        name: "Emily (Action & Comedy Buff)",
        ratings: { 6: 5, 11: 4, 5: 4, 3: 4, 7: 3, 4: 4, 8: 1 }
    },
    {
        name: "Alex (Thriller & Drama Fan)",
        ratings: { 10: 5, 2: 5, 3: 4, 4: 5, 1: 3, 6: 2, 8: 1 }
    },
    {
        name: "Jessica (Sci-Fi & Fantasy Nerd)",
        ratings: { 9: 5, 12: 5, 5: 4, 1: 4, 15: 5, 8: 2, 7: 2 }
    }
];

// Current User's dynamic inputs
let userGenrePreferences = {
    "Action": 50,
    "Comedy": 50,
    "Drama": 50,
    "Sci-Fi": 50,
    "Romance": 50,
    "Thriller": 50,
    "Fantasy": 50
};

// Movie ratings selected by the user for Collaborative Filtering
let userRatings = {}; // Key: movieId, Value: rating (1-5)

// Dynamic gradient generator helper for custom movies added
const colorGradients = [
    "linear-gradient(135deg, #7c3aed, #06b6d4)",
    "linear-gradient(135deg, #ec4899, #f43f5e)",
    "linear-gradient(135deg, #10b981, #06b6d4)",
    "linear-gradient(135deg, #f59e0b, #e11d48)",
    "linear-gradient(135deg, #6366f1, #a855f7)",
    "linear-gradient(135deg, #3b82f6, #1d4ed8)"
];

// --- APP INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    initSliders();
    initRatingsList();
    renderContentRecommendations();
    renderCollaborativeRecommendations();
    renderDatasetTable();
});

// --- NAVIGATION LOGIC ---
function switchTab(tabId) {
    // Update navigation styles
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.getElementById(`nav-${tabId}`).classList.add('active');

    // Update section visibility
    document.querySelectorAll('.dashboard-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(`section-${tabId}`).classList.add('active');

    // Update headers
    const mainTitle = document.getElementById("main-title");
    const mainSubtitle = document.getElementById("main-subtitle");
    const methodTag = document.getElementById("method-tag");

    if (tabId === 'content') {
        mainTitle.textContent = "Content-Based Filtering";
        mainSubtitle.textContent = "Suggests movies by calculating similarity between genre preferences and movie features.";
        methodTag.textContent = "Content-Based";
        methodTag.style.background = "rgba(6, 182, 212, 0.1)";
        methodTag.style.color = "var(--secondary)";
        methodTag.style.borderColor = "rgba(6, 182, 212, 0.2)";
        renderContentRecommendations();
    } else if (tabId === 'collaborative') {
        mainTitle.textContent = "Collaborative Filtering (User-Based)";
        mainSubtitle.textContent = "Predicts your preference for unrated movies based on ratings of similar users.";
        methodTag.textContent = "Collaborative";
        methodTag.style.background = "rgba(139, 92, 246, 0.1)";
        methodTag.style.color = "var(--primary)";
        methodTag.style.borderColor = "rgba(139, 92, 246, 0.2)";
        renderCollaborativeRecommendations();
    } else if (tabId === 'dataset') {
        mainTitle.textContent = "Active Movie Database";
        mainSubtitle.textContent = "Explore, manage, and extend the current collection of movies utilized by the recommendation models.";
        methodTag.textContent = "Database";
        methodTag.style.background = "rgba(244, 63, 94, 0.1)";
        methodTag.style.color = "var(--accent)";
        methodTag.style.borderColor = "rgba(244, 63, 94, 0.2)";
        renderDatasetTable();
    }
}

// --- CONTENT-BASED FILTERING ENGINE ---

function initSliders() {
    const container = document.getElementById("genre-sliders");
    container.innerHTML = "";

    genresList.forEach(genre => {
        const item = document.createElement("div");
        item.className = "slider-item";
        item.innerHTML = `
            <div class="slider-label">
                <span>${genre}</span>
                <span class="slider-value" id="val-${genre}">${userGenrePreferences[genre]}%</span>
            </div>
            <div class="slider-control">
                <input type="range" min="0" max="100" value="${userGenrePreferences[genre]}" 
                       oninput="updateGenrePreference('${genre}', this.value)">
            </div>
        `;
        container.appendChild(item);
    });
}

function updateGenrePreference(genre, value) {
    userGenrePreferences[genre] = parseInt(value);
    document.getElementById(`val-${genre}`).textContent = `${value}%`;
    renderContentRecommendations();
}

function resetSliders() {
    genresList.forEach(genre => {
        userGenrePreferences[genre] = 50;
    });
    initSliders();
    renderContentRecommendations();
}

// Math Utility: Cosine Similarity between User Preference Vector and Movie Genre Vector
function calculateContentSimilarity(userVec, movieGenres) {
    // movieGenres is an array, convert to binary vector based on genresList
    let movieVec = genresList.map(g => movieGenres.includes(g) ? 1.0 : 0.0);
    let userArr = genresList.map(g => userVec[g] / 100.0); // Scale to 0-1

    let dotProduct = 0;
    let userMagnitudeSq = 0;
    let movieMagnitudeSq = 0;

    for (let i = 0; i < genresList.length; i++) {
        dotProduct += userArr[i] * movieVec[i];
        userMagnitudeSq += userArr[i] * userArr[i];
        movieMagnitudeSq += movieVec[i] * movieVec[i];
    }

    let userMagnitude = Math.sqrt(userMagnitudeSq);
    let movieMagnitude = Math.sqrt(movieMagnitudeSq);

    if (userMagnitude === 0 || movieMagnitude === 0) return { score: 0, dot: 0, userMag: 0, movieMag: 0, movieVec, userArr };
    
    let score = dotProduct / (userMagnitude * movieMagnitude);
    return { score, dot: dotProduct, userMag: userMagnitude, movieMag: movieMagnitude, movieVec, userArr };
}

function renderContentRecommendations() {
    const grid = document.getElementById("content-recommendations");
    grid.innerHTML = "";

    // Compute similarity for all movies
    let results = movies.map(movie => {
        let simDetails = calculateContentSimilarity(userGenrePreferences, movie.genres);
        return { movie, ...simDetails };
    });

    // Sort by similarity descending
    results.sort((a, b) => b.score - a.score);

    // Take top 4 recommendations
    const topRecommendations = results.slice(0, 4);

    if (topRecommendations.length === 0 || topRecommendations[0].score === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                <p>Move sliders above 0% to generate recommendations.</p>
            </div>
        `;
        document.getElementById("content-math-details").innerHTML = "No genre sliders are set above 0%. Calculations are suspended.";
        return;
    }

    topRecommendations.forEach(rec => {
        const card = createMovieCard(rec.movie, rec.score);
        grid.appendChild(card);
    });

    // Render calculations step-by-step visualizer
    renderContentMathVisualizer(topRecommendations[0], userGenrePreferences);
}

function createMovieCard(movie, similarityScore) {
    const card = document.createElement("div");
    card.className = "movie-card";

    const matchPct = Math.round(similarityScore * 100);

    card.innerHTML = `
        <div class="movie-poster" style="background: ${movie.gradient || 'linear-gradient(135deg, #1e1e30, #0f0f1b)'}">
            <span class="movie-poster-icon">${movie.icon || '🎬'}</span>
            <span class="movie-match">${matchPct}% Match</span>
        </div>
        <div class="movie-details">
            <h3 class="movie-title" title="${movie.title}">${movie.title}</h3>
            <div class="movie-meta">
                <span>${movie.year}</span>
                <span>•</span>
                <span>Rating System Core</span>
            </div>
            <p class="movie-description">${movie.description}</p>
            <div class="movie-tags">
                ${movie.genres.map(g => `<span class="movie-tag">${g}</span>`).join('')}
            </div>
        </div>
    `;
    return card;
}

function renderContentMathVisualizer(topItem, userVec) {
    const visualizer = document.getElementById("content-math-details");
    
    let userArr = genresList.map(g => (userVec[g] / 100.0).toFixed(2));
    let movieVec = genresList.map(g => topItem.movie.genres.includes(g) ? "1.00" : "0.00");
    
    let calculationSteps = genresList.map((g, i) => {
        return `   (${userArr[i]} * ${movieVec[i]}) [${g}]`;
    }).join(" +\n");

    visualizer.innerHTML = `
<div class="visualizer-formula">
  Formula: Cosine Similarity(U, M) = (U · M) / (||U|| * ||M||)
</div>
<div class="visualizer-step">
  <div class="visualizer-step-title">Step 1: Build Vectors (Genres: [${genresList.join(", ")}])</div>
  User Preference Vector (U) = [${userArr.join(", ")}]
  Movie "${topItem.movie.title}" Vector (M) = [${movieVec.join(", ")}]
</div>
<div class="visualizer-step">
  <div class="visualizer-step-title">Step 2: Compute Dot Product (U · M)</div>
  Dot Product = 
${calculationSteps}
              = ${topItem.dot.toFixed(4)}
</div>
<div class="visualizer-step">
  <div class="visualizer-step-title">Step 3: Calculate Vector Magnitudes</div>
  ||U|| (User Magnitude)   = sqrt(${genresList.map(g => `(${userVec[g]/100})^2`).join(" + ")})
                           = sqrt(${(topItem.userMag * topItem.userMag).toFixed(4)}) = ${topItem.userMag.toFixed(4)}
  ||M|| (Movie Magnitude)  = sqrt(${topItem.movie.genres.map(() => `1^2`).join(" + ")})
                           = sqrt(${(topItem.movieMag * topItem.movieMag).toFixed(4)}) = ${topItem.movieMag.toFixed(4)}
</div>
<div class="visualizer-step">
  <div class="visualizer-step-title">Step 4: Calculate Final Cosine Similarity</div>
  Similarity Score = ${topItem.dot.toFixed(4)} / (${topItem.userMag.toFixed(4)} * ${topItem.movieMag.toFixed(4)})
                   = ${topItem.dot.toFixed(4)} / ${(topItem.userMag * topItem.movieMag).toFixed(4)}
                   = ${topItem.score.toFixed(4)} (${Math.round(topItem.score * 100)}% match)
</div>
    `;
}

// --- USER-BASED COLLABORATIVE FILTERING ENGINE ---

function initRatingsList() {
    const container = document.getElementById("collaborative-ratings-list");
    container.innerHTML = "";

    // Select 6 popular movies to present for rating inputs
    const ratingSeedMovies = movies.slice(0, 7);

    ratingSeedMovies.forEach(movie => {
        const item = document.createElement("div");
        item.className = "rating-item";
        
        // Build 5 stars rating controls
        let starsHtml = "";
        for (let star = 5; star >= 1; star--) {
            starsHtml += `
                <input type="radio" id="star-${movie.id}-${star}" name="rating-${movie.id}" value="${star}" onclick="updateUserRating(${movie.id}, ${star})">
                <label for="star-${movie.id}-${star}">★</label>
            `;
        }

        item.innerHTML = `
            <div class="rating-movie-info">
                <div class="rating-movie-title" title="${movie.title}">${movie.title}</div>
                <div class="rating-movie-genre">${movie.genres.join(", ")}</div>
            </div>
            <div class="star-rating">
                ${starsHtml}
            </div>
        `;
        container.appendChild(item);
    });
}

function updateUserRating(movieId, rating) {
    userRatings[movieId] = rating;
    renderCollaborativeRecommendations();
}

function resetRatings() {
    userRatings = {};
    document.querySelectorAll('.star-rating input').forEach(input => input.checked = false);
    renderCollaborativeRecommendations();
}

// Collaborative Filtering Math logic
function calculateCollaborativeRecommendations() {
    // 1. Calculate similarity with each mock user
    let userIds = Object.keys(userRatings).map(Number);
    
    if (userIds.length === 0) {
        return { recommendations: [], similarityScores: [], calculations: "No ratings entered." };
    }

    let userSimilarities = []; // elements: { mockUser, similarityScore }

    mockUsers.forEach(mockUser => {
        let dotProduct = 0;
        let currentUserMagSq = 0;
        let mockUserMagSq = 0;
        
        // Standard user-based similarity computed on rated items or overall.
        // To make it accurate, let's look at all movies the current user has rated.
        userIds.forEach(mId => {
            let userRating = userRatings[mId] || 0;
            let mockRating = mockUser.ratings[mId] || 0;

            dotProduct += userRating * mockRating;
            currentUserMagSq += userRating * userRating;
            mockUserMagSq += mockRating * mockRating;
        });

        // Add additional rated items of mockUser to complete its magnitude context if needed
        // but we only calculate vector similarity based on the current user's rating vector size.
        // Actually, to correctly represent the users' vector similarity, we take the ratings overlap:
        // Or simple cosine on the ratings matrix:
        let allRatedMovieIds = new Set([...userIds, ...Object.keys(mockUser.ratings).map(Number)]);
        
        let fullDotProduct = 0;
        let fullUserMagSq = 0;
        let fullMockMagSq = 0;

        allRatedMovieIds.forEach(mId => {
            let uR = userRatings[mId] || 0;
            let mR = mockUser.ratings[mId] || 0;

            fullDotProduct += uR * mR;
            fullUserMagSq += uR * uR;
            fullMockMagSq += mR * mR;
        });

        let sim = 0;
        let uMag = Math.sqrt(fullUserMagSq);
        let mMag = Math.sqrt(fullMockMagSq);

        if (uMag > 0 && mMag > 0) {
            sim = fullDotProduct / (uMag * mMag);
        }

        userSimilarities.push({
            mockUser: mockUser,
            similarityScore: sim,
            dot: fullDotProduct,
            userMag: uMag,
            mockMag: mMag
        });
    });

    // 2. Select Nearest Neighbors (Similarity > 0)
    // Sort similarities descending
    userSimilarities.sort((a, b) => b.similarityScore - a.similarityScore);

    // Predict ratings for unrated movies
    let predictedRatings = []; // elements: { movie, predictedRating, breakdown }

    movies.forEach(movie => {
        // Skip if user already rated this movie
        if (userRatings[movie.id] !== undefined) return;

        let weightedRatingSum = 0;
        let similaritySum = 0;
        let neighborContributions = [];

        userSimilarities.forEach(neighbor => {
            let neighborRating = neighbor.mockUser.ratings[movie.id] || 0;
            
            // Only aggregate ratings from neighbors who actually rated this movie
            if (neighborRating > 0 && neighbor.similarityScore > 0) {
                weightedRatingSum += neighbor.similarityScore * neighborRating;
                similaritySum += neighbor.similarityScore;
                neighborContributions.push({
                    name: neighbor.mockUser.name.split(" ")[0],
                    similarity: neighbor.similarityScore,
                    rating: neighborRating
                });
            }
        });

        if (similaritySum > 0) {
            let prediction = weightedRatingSum / similaritySum;
            predictedRatings.push({
                movie: movie,
                predictedRating: prediction,
                score: prediction / 5.0, // normalized score (1-5 star scales to percentage)
                breakdown: {
                    weightedRatingSum,
                    similaritySum,
                    contributions: neighborContributions
                }
            });
        }
    });

    // Sort predictions by score descending
    predictedRatings.sort((a, b) => b.predictedRating - a.predictedRating);

    return {
        recommendations: predictedRatings,
        similarityScores: userSimilarities
    };
}

function renderCollaborativeRecommendations() {
    const grid = document.getElementById("collaborative-recommendations");
    grid.innerHTML = "";

    const results = calculateCollaborativeRecommendations();

    if (results.recommendations.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                <p>Provide at least one 1-5 star rating on the left to see collaborative recommendations.</p>
            </div>
        `;
        document.getElementById("collaborative-math-details").innerHTML = "No movie ratings submitted. Calculations are suspended.";
        return;
    }

    // Take top 4 recommendations
    const topRecs = results.recommendations.slice(0, 4);

    topRecs.forEach(rec => {
        // Re-use card generator. The similarityScore is mapped from predictedRating (1-5 stars) to normalized score (0-1)
        const card = createMovieCard(rec.movie, rec.score);
        grid.appendChild(card);
    });

    // Render math visualization for Collaborative Filtering
    renderCollaborativeMathVisualizer(results, topRecs[0]);
}

function renderCollaborativeMathVisualizer(results, topItem) {
    const visualizer = document.getElementById("collaborative-math-details");

    let similaritiesList = results.similarityScores.map(s => {
        return `   - ${s.mockUser.name}: CosineSim = ${s.similarityScore.toFixed(4)} 
     Calculation details: DotProduct(${s.dot}) / (UserMag(${s.userMag.toFixed(2)}) * NeighborMag(${s.mockMag.toFixed(2)}))`;
    }).join("\n");

    let predictionFormula = "N/A";
    if (topItem && topItem.breakdown) {
        let contribs = topItem.breakdown.contributions.map(c => `(${c.similarity.toFixed(2)} * ${c.rating} stars)`).join(" + ");
        let simSumStr = topItem.breakdown.contributions.map(c => c.similarity.toFixed(2)).join(" + ");
        predictionFormula = `
  Predicted Rating for "${topItem.movie.title}" = [ ${contribs} ] / [ ${simSumStr} ]
                                         = ${topItem.breakdown.weightedRatingSum.toFixed(4)} / ${topItem.breakdown.similaritySum.toFixed(4)}
                                         = ${topItem.predictedRating.toFixed(2)} Stars (${Math.round(topItem.score * 100)}% rating confidence)`;
    }

    visualizer.innerHTML = `
<div class="visualizer-formula">
  Formula: Predicted Rating(User, Movie i) = sum( Sim(User, Neighbor n) * Rating(Neighbor n, Movie i) ) / sum( Sim(User, Neighbor n) )
</div>
<div class="visualizer-step">
  <div class="visualizer-step-title">Step 1: Calculate Cosine Similarity with all Mock Users</div>
${similaritiesList}
</div>
<div class="visualizer-step">
  <div class="visualizer-step-title">Step 2: Aggregate Ratings from Similar Neighbors (Nearest Neighbors)</div>
  Top recommendation candidates are movies rated by our neighbors that you have not rated yet.
  For each candidate, we calculate a predicted score weighted by neighbor similarity.
</div>
<div class="visualizer-step">
  <div class="visualizer-step-title">Step 3: Prediction calculation (Top Recommended Movie: "${topItem ? topItem.movie.title : 'None'}")</div>
  ${predictionFormula}
</div>
    `;
}

// --- DATASET MANAGEMENT LOGIC ---

function renderDatasetTable() {
    const tbody = document.getElementById("dataset-table-body");
    tbody.innerHTML = "";
    
    document.getElementById("movie-count").textContent = movies.length;

    movies.forEach(movie => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <span style="font-size: 1.1rem; margin-right: 0.5rem;">${movie.icon || '🎬'}</span>
                <span class="movie-row-title">${movie.title}</span>
            </td>
            <td>${movie.year}</td>
            <td>
                <div class="movie-tags">
                    ${movie.genres.map(g => `<span class="movie-tag">${g}</span>`).join('')}
                </div>
            </td>
            <td style="color: var(--text-secondary); max-width: 300px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${movie.description}">
                ${movie.description}
            </td>
            <td>
                <button class="btn btn-secondary" style="padding: 0.35rem 0.6rem; font-size: 0.75rem; border-radius: 6px; width: auto;" onclick="deleteMovie(${movie.id})">
                    Delete
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function deleteMovie(id) {
    // Delete movie from database
    movies = movies.filter(m => m.id !== id);
    
    // Clear user ratings for this movie if rated
    delete userRatings[id];
    
    // Update displays
    renderDatasetTable();
    initRatingsList();
    renderContentRecommendations();
    renderCollaborativeRecommendations();
}

function openAddMovieModal() {
    document.getElementById("add-movie-modal").classList.add("active");
}

function closeAddMovieModal() {
    document.getElementById("add-movie-modal").classList.remove("active");
    document.getElementById("add-movie-form").reset();
}

function handleAddMovie(event) {
    event.preventDefault();

    const title = document.getElementById("movie-title").value;
    const year = parseInt(document.getElementById("movie-year").value);
    const select = document.getElementById("movie-genres");
    const selectedGenres = Array.from(select.selectedOptions).map(opt => opt.value);
    const description = document.getElementById("movie-description").value;
    const icon = document.getElementById("movie-icon").value || '🎬';

    if (selectedGenres.length === 0) {
        alert("Please select at least one genre.");
        return;
    }

    const newMovieId = movies.length > 0 ? Math.max(...movies.map(m => m.id)) + 1 : 1;
    
    // Random gradient index
    const gradient = colorGradients[Math.floor(Math.random() * colorGradients.length)];

    const newMovie = {
        id: newMovieId,
        title,
        year,
        genres: selectedGenres,
        description,
        icon,
        gradient
    };

    // Add to movies database
    movies.push(newMovie);

    // Refresh everything
    renderDatasetTable();
    initRatingsList();
    renderContentRecommendations();
    renderCollaborativeRecommendations();

    closeAddMovieModal();
}
