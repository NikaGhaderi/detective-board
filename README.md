# Lab Report: Static Frontend with Automated Deployment
**Team Members:** Ali M. Shabestari and Nika Ghaderi

## Live Application URL
🔗 [Active Case Files Dashboard](https://nikaghaderi.github.io/detective-board/)

---
## Technical Implementation & Git Workflow Log

This section details the technical structural implementation, branching topologies, and commit histories utilized to fulfill the laboratory version-control requirements entirely via the CLI terminal.

### 1. Repository Architecture & Initialization
* **Local Initialization:** The project repository structure was established locally using `git init`. A modern single-page application (SPA) architecture was generated utilizing Vite's React-JavaScript template.
* **Remote Synchronization:** A clean remote repository was established on Github without auto-generated default assets to eliminate upstream divergence risks. The local `master` pointer was renamed globally using `git branch -M main` and coupled to the remote architecture via:
    `git remote add origin https://github.com/NikaGhaderi/detective-board.git`
* **Branch Protection Rule:** Strict enforcement settings were compiled on the `main` branch. Direct pushes were blocked globally, mandating audited Pull Requests and explicit branch integration workflows for all code modifications.

---

### 2. Branching Topology
The system was engineered across 5 decoupled tracking timelines to isolate functional modifications and simulate enterprise-grade deployment pipelines:
1.  `main`: The production-ready trunk. Holds the current stable, live deployment.
2.  `dev`: The core integration environment where all feature tracking branches converge.
3.  `feature-board` (Collaborator B): Isolated branch for building presentation layout modules (`DetectiveBoard.jsx`, `CategoryColumn.jsx`, `ClueCard.jsx`) and data filtering pipelines.
4.  `feature-ui` (Collaborator A - Nika): Isolated branch for implementing interactive control layers (`Header.jsx`, `AddClueForm.jsx`), global application layout grids, and core state handling.
5.  `hotfix-styling`: An emergency patch pipeline derived directly from production (`main`) to execute real-time structural asset modifications without blocking development timelines in `dev`.

---

### 3. Chronological Commit History & Lifecycle Log

The repository captures a highly granular tracking timeline. Below is the technical log mapping our development lifecycle:

| Sequence | Branch | Commit Message (Standard Conventional Commits) | Target Scope / File Impact |
| :--- | :--- | :--- | :--- |
| **C1** | `main` | `Initial commit: Setup React Vite project` | Project scaffolding configuration |
| **C2** | `main` | `docs: Add OS-specific and report exclusions to .gitignore` | `.gitignore` tracking filters |
| **C3** | `dev` | `chore: Define project structure and global state contract` | `src/App.jsx` skeleton setup |
| **C4** | `dev` | `refactor: Move project files to root for easier deployment` | Repository structural alignment |
| **C5** | `feature-board` | `feat: Implement ClueCard component for individual items` | `src/components/ClueCard.jsx` |
| **C6** | `feature-board` | `feat: Create CategoryColumn to map and render ClueCards` | `src/components/CategoryColumn.jsx` |
| **C7** | `feature-board` | `feat: Implement DetectiveBoard logic to filter clues by category` | `src/components/DetectiveBoard.jsx` |
| **C8** | `feature-board` | `integrate: Connect DetectiveBoard to main App state` | `src/App.jsx` layout updates |
| **C9** | `feature-board` | `chore: verify board layout and component integration` | Structural validation pass |
| **C10** | `feature-board` | `style: set board background color to lightblue` | `src/App.css` color mapping |
| **C11** | `feature-ui` | `feat: Implement Header component for app title` | `src/components/Header.jsx` |
| **C12** | `feature-ui` | `feat: Implement AddClueForm logic and UI` | `src/components/AddClueForm.jsx` |
| **C13** | `feature-ui` | `integrate: Connect Header and AddClueForm to App state` | `src/App.jsx` entry wiring |
| **C14** | `feature-ui` | `style: Set background color to darkblue` | `src/App.css` (Targeted conflict vector) |
| **C15** | `dev` (PR #2) | `Merge pull request #2 from feature-board into dev` | Initial baseline remote integration |
| **C16** | `dev` (PR) | `Merge pull request #3 from feature-ui into dev` | **[Conflict 1 Resolved]** Integrated grid system |
| **C17** | `dev` | `docs: Update README title for branding` | `README.md` title divergence step |
| **C18** | `dev` | `docs: Set versioning title in README` | `README.md` (Targeted conflict vector) |
| **C19** | `dev` | `Merge: Resolve local README title conflict` | **[Conflict 2 Resolved]** Unified documentation |
| **C20** | `hotfix-...` | `hotfix: correct critical styling issue` | Emergency adjustments on production trunk |
| **C21** | `main` (PR) | `Merge pull request #4 from hotfix-styling into main` | Production live patch validation |
| **C22** | `dev` | `ci: Add GitHub Actions workflow for static deployment` | `.github/workflows/deploy.yml` compilation |
| **C23** | `dev` | `style: finalize cyberpunk noir theme and interactive state physics` | Enhanced component palette (`index.css`/`App css`) |
| **C24** | `dev` | `Merge: Resolve local Header conflict on dev branch` | **[Conflict 3 Resolved]** Merged simultaneous header changes |
| **C25** | `dev` | `docs: Document third resolved conflict in Header component` | Added technical logs to `README.md` |
---

### 4. Technical Breakdown of Resolved Conflicts

#### 🛑 Conflict 1: Remote Pull Request Architectural Collisions (Three-Way Merge)
* **Source Vector:** In tracking parallel pipelines, `feature-board` and `feature-ui` concurrently modified structural nodes in `src/App.jsx` and injected conflicting assignments on identical css elements inside `src/App.css`.
* **Resolution Engine:** When the second PR attempted to merge into `dev`, GitHub's structural parser flagged merge restrictions. The codebases were manually aligned using three-way consolidation rules. Redundant root-level headers (`<h1>`) were safely dropped, separate functional dependencies (`Header`, `AddClueForm`, `DetectiveBoard`) were cleanly mounted, and conflict hooks (`<<<<<<<`, `=======`) were expunged to avoid application crashes.

#### 🛑 Conflict 2: Shared Local Tracking Intersection
* **Source Vector:** Both engineers executed modifications to line 1 of the root tracking report `README.md` inside their independent workstation checkouts before drawing changes down from the upstream server.
* **Resolution Engine:** Terminal push protocols were blocked by the index tree. Execution of a forced pulling string (`git pull origin dev`) exposed raw physical merge syntax markers locally. The diverging string statements were unified within the CLI text editor environment to preserve unified documentation formatting before staging and running a secure baseline override commit.

#### 🛑 Conflict 3: Shared Local Tracking Intersection (Header)
* **Source Vector:** Concurrent modifications were made to src/components/Header.jsx on the shared dev tracking branch before local workspaces were synchronized with the remote repository upstream.

* **Resolution Engine:** The terminal push string was rejected due to a non-fast-forward state. Running git pull origin dev generated local content conflict markers inside the header file. The layout styling and the newly implemented theme toggle mechanics were manually unified, staged via git add, and finalized with a local tracking merge commit.