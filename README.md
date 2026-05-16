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

---

## 5. Theoretical Git Concepts & Fundamentals

This section addresses the core version control concepts and theoretical questions required for the laboratory assessment.

### Q1: What is the `.git` directory, what information does it store, and how is it created?
The `.git` folder is a hidden directory located at the root of the repository. It serves as the core database and engine for Git's version control system. 
* **Stored Information:** It contains all project history, the object database (compressed files, commits, and tree structures), configuration settings (`config`), branch and tag pointers (`refs`), and the `HEAD` file indicating the active branch. 
* **Creation:** This directory is automatically generated when a repository is initialized using the `git init` command, or when an existing repository is cloned via `git clone`.

### Q2: What does "atomic" mean in the context of an atomic commit or pull-request?
The concept of "atomic" means that a commit or a Pull Request (PR) encompasses exactly **one complete, indivisible unit of work** (e.g., fixing one specific bug or implementing one isolated feature).
* **Atomic Commit:** Ensures that if a piece of code introduces a bug, that specific commit can be cleanly reverted without undoing unrelated changes. It leaves the codebase in a fully functional state.
* **Atomic Pull-Request:** A PR that is small, focused, and independently reviewable. It prevents "spaghetti code" integration and makes code reviews highly efficient for the team.

### Q3: What are the differences between `fetch`, `pull`, `merge`, `rebase`, and `cherry-pick`?
* **`fetch`:** Downloads the latest history and changes from the remote repository to your local machine, but **does not** alter your active working directory or integrate the code.
* **`pull`:** A combined execution. It first runs a `fetch` to download remote data, and then immediately runs a `merge` to integrate those changes into your current active branch.
* **`merge`:** Combines the histories of two separate branches. It creates a new "merge commit" that ties the two timelines together, preserving the exact historical context of both branches.
* **`rebase`:** Alters the commit history by moving the base of your current branch to the tip of a target branch. It rewrites history to create a clean, linear, and flat project timeline without extra merge commits.
* **`cherry-pick`:** Selects one specific, targeted commit from an entirely different branch and copies it over to your active branch without merging the rest of the branch's history.

### Q4: What are the differences between `reset`, `revert`, `restore`, `switch`, and `checkout`?
* **`reset`:** Moves the `HEAD` pointer backward in time to a previous commit. Depending on the flag used (`--soft`, `--mixed`, or `--hard`), it can permanently erase uncommitted workspace changes and alter project history.
* **`revert`:** The safest way to undo a mistake in a shared repository. It creates a *new* commit that applies the exact opposite changes of a targeted past commit, preserving the project's history without rewriting it.
* **`restore`:** Specifically designed to discard uncommitted local changes in your working directory, restoring a file to its last committed state (or the state currently in the staging index).
* **`switch`:** A modern, focused command introduced to specifically change the active working branch without the confusing overlapping functions of older commands.
* **`checkout`:** An older, multi-purpose command that can be used to switch branches, but also to restore file states or traverse into detached HEAD states.

### Q5: What is the `stage` (or index), and what does the `stash` command do?
* **Stage (Index):** A temporary holding area where files are grouped and organized *before* they are permanently recorded into the database. Running `git add` moves a file to the stage, dictating exactly what will be included in the next commit.
* **`stash`:** Acts as a temporary clipboard. If you have uncommitted, messy changes but need to urgently switch branches, `git stash` hides and saves your modifications, leaving you with a clean working directory. You can later retrieve this work using `git stash pop`.

### Q6: What is a "snapshot" and how does it relate to a "commit"?
Unlike older legacy systems (like SVN) that only save the "diffs" or physical changes made to a file, Git takes a **snapshot**—a complete, exact picture of the entire project's file structure at a specific millisecond in time.
* **Relation to Commit:** A commit *is* a permanently saved snapshot. When you execute a commit, Git securely packages this snapshot alongside metadata (author, timestamp, commit message) into the repository's permanent timeline.

### Q7: What are the differences between a Local Repository and a Remote Repository?
* **Local Repository:** The version control database housed entirely on your physical machine's hard drive (inside the `.git` folder). It allows you to commit, branch, and navigate history offline with instantaneous speed.
* **Remote Repository:** A version of your project hosted on the internet or a network server (e.g., GitHub, GitLab). It acts as the central synchronization hub, allowing multiple engineers to collaborate, push updates, pull changes, and maintain an off-site backup of the source code.