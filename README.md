## Chrome Extension to redirect English version of Microsoft Docs site
If your browser automatically opens non-English version of MS Docs (docs.microsoft.com), it redirects to English version automatically.
You do not need no change your browser or system locale settings.

### Build
This extension is written in Typescript. Extension unpacked output is build into *dist* folder.
ESLint and Jest (with Typescript) is used for linting and testing.
```
yarn watch
```

Linting
```
yarn lint
```

### Package
```
yarn build
```
Creates the output as unpacked extension in *dist* folder.
