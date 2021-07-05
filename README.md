# CFHome Learning Pathways Nav Site

## Overview

Selectable animated nav controls to describing learning paths/choices. Based on approach from https://saddleback.com/learn


## Punch list

* deselecting a circle has a funny transition
* top gray section expands slightly when first item is selected - should be constant size
* selected circle outline should be orange
* set width for the main panel, don't want to grow to the entire screen size
* Update path for controlling navData.js via a JSON file
* Mobile layout?
  * how does saddleback present this?


## Repo / publish

https://github.com/scheffler/cfhome-nav

Published out to netlify - https://cfhome-nav-sample.netlify.app/


## Notes

* Nav options are controlled by `src\navData.js`


### Dev setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

### Commands

Add new npm style dependency to the workspace side

```terminal
yarn workspace web add <libraryname>
```

deploy

yarn rw generate component <name>





