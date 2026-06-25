# pipecraft-example-remote

Remote-action-mode PipeCraft example.

Instead of committing copies of the composite actions under `.github/actions/`,
this repo references the **published** PipeCraft marketplace actions:

    uses: the-craftlab/pipecraft/actions/<name>@v0.41.0

- **Flow:** `develop → main` (auto-promote)
- **actionSourceMode:** `remote`
- No local action files — upgrades come by bumping `actionVersion`.
