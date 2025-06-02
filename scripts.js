<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>My Spotify Playlist</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #1db954, #191414);
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }

    header {
      text-align: center;
      padding: 40px 20px 20px;
    }

    header h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
    }

    header p {
      font-size: 1.1em;
      color: #ccc;
    }

    .playlist-container {
      margin: 20px;
      width: 90%;
      max-width: 600px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    }

    iframe {
      width: 100%;
      height: 380px;
      border: none;
    }

    footer {
      margin-top: auto;
      padding: 20px;
      font-size: 0.9em;
      color: #aaa;
    }
  </style>
</head>
<body>
  <header>
    <h1>🎶 My Spotify Playlist</h1>
    <p>Handpicked tracks to elevate your vibe</p>
  </header>

  <div class="playlist-container">
    <iframe
      src="https://open.spotify.com/embed/playlist/4S4T9K3diuVhHHrxxFfU9N?utm_source=generator"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy">
    </iframe>
  </div>

  <footer>
    &copy; 2025 | Powered by Spotify
  </footer>
</body>
</html>
