# pipecraft-example-remote

Remote-action-mode PipeCraft example.

Instead of committing copies of the composite actions under `.github/actions/`,
this repo references the **published** PipeCraft marketplace actions:

    uses: the-craftlab/pipecraft/actions/<name>@v0.41.0

- **Flow:** `develop → main` (auto-promote)
- **actionSourceMode:** `remote`
- No local action files — upgrades come by bumping `actionVersion`.

## Pinning `actionVersion`

`actionVersion` should track a published PipeCraft release tag. Bump it to adopt
newer action behavior; pin it to freeze. To resolve the actions, the referenced
tag must contain the `actions/` directory (every release tag does).

> Note: pin to a release that includes the promotion-cascade fixes
> (stale temp branch, release idempotency, `autoPromote: true`). Tags at or
> before `v0.41.0` predate those fixes, so a re-run can leave the release job red
> on `Release.tag_name already exists`.
