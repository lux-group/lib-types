# lib-types

API interfaces and factories for Luxury Escapes

```js
import { API } from "@luxuryescapes/lib-types";

const { result } = (await response.json()) as API.PublicOffer.OffersResult;
```

## Contributing

Turn the API response into interfaces using https://app.quicktype.io/ and open a
PR.

## Publishing

Update the version in package.json as part of your PR and CircleCI will do the rest.
