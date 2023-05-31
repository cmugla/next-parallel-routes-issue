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

https://github.com/cmugla/next-parallel-routes-issue/assets/19141291/89d6ded3-bdda-4ec6-8c4a-1be1c1a6e5d3

## Summary

The issue seems to happen when you have conditional route logic that depends on the `useParams` hook to render layouts server side based on whether a specific param exists. No matter where the `useParams` hook is called, the values are stale...

### Notes

- Using browser back/forward buttons works as expected
- The Server side `params` are correct
