# React Game Website

A responsive React-based website featuring three classic games: Blanko (word puzzle), Slido (sliding puzzle), and Tetro (Tetris-like game). The website includes a persistent score tracking system and responsive navigation.

## Features

### Global Features
- Responsive header with navigation that adapts to viewport width
- Persistent game win counter using browser storage
- Score synchronization with remote server
- Consistent layout with fixed header and footer across all pages

### Games

#### 1. Blanko
- Word guessing game with 7 different possible phrases
- 12 character display with 3 randomly hidden characters
- Input validation for correct character placement
- Reset functionality to start new games
- Win detection and score tracking

#### 2. Slido
- 3x3 sliding puzzle featuring Shrek images
- Multiple control methods:
  - Click adjacent tiles to move
  - Arrow key controls when grid is active
- Auto-solve functionality
- Win state detection
- Reset capability

#### 3. Tetro
- Simplified Tetris-like game
- 10x12 game board
- Three block types:
  - 2x2 block
  - 2x1 block
  - 1x1 block
- Arrow key controls for block movement
- Row completion detection with green highlighting
- Win condition: Complete 5 rows
- Lose condition: Block placement above row 8

## Technical Specifications

### Layout
- Header:
  - Height: 80px
  - Position: Fixed
  - Background: #eeeeee
  - Logo: 50x50px with 15px margin
- Footer:
  - Height: 50px
  - Width: 100% viewport
  - Background: #999999
- Responsive Navigation:
  - Full text (>800px): "Home | Blanko | Slido | Tetro"
  - Condensed text (≤800px): "H | B | S | T"

### Game Dashboard
- Displays current win count
- Persistent score tracking using localStorage
- Score reset functionality
- Initial score fetched from external API

## Installation

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

## Routes

- `/` - Dashboard with game statistics
- `/blanko` - Word puzzle game
- `/slido` - Sliding puzzle game
- `/tetro` - Block stacking game

## Requirements

- Node.js
- npm or yarn
- Modern web browser with localStorage support

## Development

The project uses React and relies on browser storage for maintaining game state. To modify or extend the games:

- Game logic is separated by routes
- Shared components (Header, Footer) are reusable
- Score management is handled through localStorage
- Initial score is fetched from: `https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
