# Repro of useParams issue from Next.js version 13.4.3

Repro steps:

- go to url `localhost:3000/one`
- click on the link to go to `/one/two`
- witness the url rendered saying `/one/two` correctly
- click on the link again to go to `/one/two/three`
- witness the url rendered saying `/one/two/three` correctly
- click on the link again to go back to `/one/two`

Expected result:

- the url rendered should say `/one/two` (like the url)

Actual result:

- the url rendered still says `/one/two/three`

## Summary

The issue seems to happen when you have conditional route logic that depends on the `useParams` hook to render layouts server side based on whether a specific param exists. No matter where the `useParams` hook is called, the values are stale...
