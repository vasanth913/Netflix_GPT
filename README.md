# Netflix Gpt

 --> Create React App (npx create-react-app netflix-gpt)
 --> Configured Tailwind css (https://tailwindcss.com/docs/guides/create-react-app)
 --> Install react router dom (npm i -D react-router-dom)
 --> Header
 --> Routing
 --> Login Form
 --> Sign up Form
 --> Form Validation 
 --> useRef Hook
 --> Firebase setup - Firebase (https://firebase.google.com/)
 --> Firebase deploy -- deplot our app to production
 --> Create Sign Up User account
 --> Implement Sign In user API
 --> Created Redux Store with userSlice
 --> Implemented Sign out 
 --> Update Profile API
 --> Fetch movies from TMDB movies
 --> TMDB Api (https://developer.themoviedb.org/reference/intro/getting-started)
 --> BugFix: Sign up user displayName and profile picture update
 --> BugFix: If the user is not logged in redirect /browse to login page and vice versa
 --> UnUnsubscribed to the onAuthStateChanged callback
 --> Add Hardcoded values to the constant file
 --> Deployed the application in vercel (https://netflix-gpt-black.vercel.app/)
 --> Register TMDB API & create an app & get access token
 --> Get data from TMDB, now playing movies list API
 --> Custom Hook (nowPlayingMovies and movieTrailer)
 --> Create movieSlice
 --> Updated store with movies data
 --> Planning for mainContainer and secondaryContainer
 --> Fetch Data for trailer Video
 --> Update store with trailer video data
 --> Embedded the youtube video and make it autoplay and mute
 --> Tailwind  classes to make main container awesome
 --> Build Secondary Container
 --> Build Movies List
 --> Build Movies Card
 --> TMDB Imgae CDN
 --> Made browse Page amazing with tailwind CSS
 --> usePopular && use TopRated && useUpcoming movies Hook
 --> GPT Search page
 --> GPT Search Bar
 --> Multi-Language Feature in our App
 --> GptSearch API (Gemini API & openAI)
 --> Storing Secrets in .env
 --> Memoization

# TMDB
   --> Username: vasanth_ravi
   --> Password: BePositive913*
   --> API Key (008ffa64c2acd81d26a4cdf67887c274)
   --> Access Token (eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDhmZmE2NGMyYWNkODFkMjZhNGNkZjY3ODg3YzI3NCIsInN1YiI6IjY1YWU0Mzg5YWQ1OWI1MDBhYzgyZjQwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gHf_FCbrvVZp-H4rtyAPjygDifJs21sAiD_LKv6LYEE)
   --> Poster Images: https://developer.themoviedb.org/docs/image-basics

# ChatGpt
   --> Open AI Url : https://platform.openai.com/docs/overview
   --> https://www.npmjs.com/package/openai
   --> Google AI Url : https://ai.google.dev/tutorials/web_quickstart
   
# Miscelleous
  --> rafce(react arrow function component export)
  --> Go to view --> Command Palette --> Format Document with --> select Prettier - Code Formatter
  --> Alt +Shift + F to format the document
  --> Use Formik for the form validation
  --> useRef is a React Hook that lets you reference a value that's not needed for rendering
  --> If you want to host the website on the firebase then select the checkbox "Also setup firebase hosting for this app"

# Features
  -- Login/Sign Up
        - Sign In  / Sign Up Form
        - redirect to Browse Page
  -- Browse (After Authentication)
        - Header
        - Main Movie
            -- Tailer and Background
            -- Title & Description
            -- Movie Suggestions
                - MoviesLists * n
  -- NetflixGpt
        - Search Bar
        - Movie Suggestions
        
