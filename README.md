# Word Weave

## Description

Word Weave is an engaging word puzzle game that challenges players to connect letters and form words on an interactive game board. Players weave words together by strategically placing letters to create valid words, earning points and progressing through increasingly challenging levels. Whether you're a word game enthusiast or just looking for a fun mental exercise, Word Weave offers an accessible yet challenging experience for players of all skill levels.

Built with modern web technologies, Word Weave features a responsive React frontend and a robust Python backend.

## Installation

### Prerequisites

Before you begin, make sure you have the following installed on your system:
- **Node.js** (version 18 or higher) and **npm**
- **Python** (version 3.8 or higher)
- **Git** (for cloning the repository)

### Step 1: Clone the Repository

```bash
git clone https://github.com/zakhajjaji/word-weave.git
cd word-weave
```

### Step 2: Backend Setup

Navigate to the backend directory and set up the Python environment:

```bash
cd backend

# Create a virtual environment (recommended)
python -m venv venv

# Activate the virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the backend server
python -m app.main
```

The backend API will be available at `http://localhost:8000` (or the port specified in your configuration).

### Step 3: Frontend Setup

Open a new terminal window and navigate to the frontend directory:

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Step 4: Start Playing!

Open your web browser and navigate to the frontend URL. You're ready to start playing Word Weave!

## Gameplay

### How to Play

1. **Start a New Game**: When you launch Word Weave, you'll see a game board with letter tiles.

2. **Form Words**: Click on letter tiles to select them and form words. Words can be formed horizontally, vertically, or diagonally.

3. **Submit Words**: Once you've selected a valid word, click the "Submit" button to validate and score your word.

4. **Earn Points**: Points are awarded based on:
   - Word length (longer words = more points)
   - Letter difficulty
   - Bonus multipliers for special tiles

5. **Progress**: Complete words to unlock new levels and challenges. Each level introduces new obstacles and opportunities for higher scores.

6. **Win Conditions**: Achieve the target score or complete all required words to advance to the next level.

### Tips for Success

- Look for common prefixes and suffixes to build longer words
- Plan your moves strategically to maximize point opportunities
- Use bonus tiles wisely to multiply your score
- Take your time - there's no time limit, so think through your options

## Features

### Current Features

- 🎮 **Interactive Game Board**: Intuitive drag-and-drop or click-to-select interface
- ✅ **Word Validation**: Real-time validation against a comprehensive dictionary
- 📊 **Scoring System**: Dynamic scoring based on word length and difficulty
- 🎯 **Multiple Levels**: Progressive difficulty with new challenges at each level
- 📱 **Responsive Design**: Play seamlessly on desktop, tablet, or mobile devices
- 🎨 **Modern UI**: Clean and engaging user interface built with React

### Planned Features

- 🏆 **Leaderboards**: Compete with players worldwide
- 💾 **Save Progress**: Save your game and continue later
- 🎁 **Daily Challenges**: Special puzzles available each day
- 🌐 **Multiplayer Mode**: Challenge friends in real-time
- 🎵 **Sound Effects**: Immersive audio feedback
- 🌈 **Themes**: Customize the game appearance

## Contribution

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help makes Word Weave better for everyone.

### How to Contribute

1. **Fork the Repository**: Click the "Fork" button on GitHub to create your own copy.

2. **Create a Branch**: Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make Your Changes**: Write clean, well-documented code following the project's coding standards.

4. **Test Your Changes**: Make sure your changes work correctly and don't break existing functionality.

5. **Commit Your Changes**: Write clear commit messages:
   ```bash
   git commit -m "Add: description of your changes"
   ```

6. **Push to Your Fork**: Push your changes to your forked repository:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**: Navigate to the original repository on GitHub and click "New Pull Request". Provide a clear description of your changes.

### Contribution Guidelines

- **Code Style**: Follow the existing code style and formatting conventions
- **Documentation**: Update documentation for any new features or changes
- **Testing**: Add tests for new features when possible
- **Communication**: Be respectful and constructive in discussions
- **Issues**: Check existing issues before creating new ones to avoid duplicates

### Areas Where We Need Help

- 🐛 Bug fixes and improvements
- 🎨 UI/UX enhancements
- 📝 Documentation improvements
- 🧪 Writing tests
- 🌍 Translations for different languages
- 🎮 New game modes and features

## Contact

We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello, feel free to reach out:

- **GitHub Issues**: [Open an issue](https://github.com/zakhajjaji/word-weave/issues) for bug reports or feature requests
- **Discussions**: Join our [GitHub Discussions](https://github.com/zakhajjaji/word-weave/discussions) for general questions and community chat

---

**Happy Word Weaving!** 🎉✨
