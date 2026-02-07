# Coffee Lab Website Implementation Plan (GitHub-Centric Update)

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a "Kaffe Tech" minimalist Bento Grid website for Coffee Lab, showcasing live brew status and KaffePro's identity, driven by GitHub JSON data.

**Architecture:** Next.js 15 (App Router). Instead of a live API, data is fetched directly from `data/brew.json` in the repository, allowing for simple GitHub-driven updates.

---

### Task 1: Project Initialization & Scaffold (COMPLETED)
### Task 2: Design System & Tailwind Setup (COMPLETED)
### Task 3: The Bento Grid Core Layout (COMPLETED)
### Task 4: Live Brew Status Component (COMPLETED)

### Task 5: GitHub JSON Data Integration
**Goal:** Transition simulation to real data from the Repo.
**Steps:**
1. Update `hooks/useBrewData.ts` to fetch from `/data/brew.json`.
2. Implement dynamic SSR/SSG rendering for the metrics.
3. Commit & Push.

### Task 6: Final Deployment & README Polish
**Goal:** Launch the portal on Vercel.
**Steps:**
1. Connect Repo to Vercel.
2. Final review of the "Kaffe Tech" aesthetic.
3. Commit with final README images.
