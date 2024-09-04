```js
import { createClient } from "contentful";

const client = createClient({
  space: "qz00uzgg3leh",
  environment: "master", // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});

client
  .getEntries({ content_type: "projects" })
  .then((response) => console.log(response.items))
  .catch(console.error);
```

SPACE ID - q3vj9a0lq7g7
ACCESS TOKEN - S5lUN5m6CysIHmmMmkY7MSz5P4QEDv4kucAbwEiZExM
