# CFHome Learning Pathways Nav Site

## Overview

Selectable animated nav controls to describing learning paths/choices. Based on approach from https://saddleback.com/learn

## Repo / publish

https://github.com/scheffler/cfhome-nav

Published out to netlify - https://cfhome-nav-sample.netlify.app/


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

### Add dependencies to a workspace

```terminal
yarn workspace web add <libraryname>
```






