# Design Pattern For FE

These are examples of design patterns for FE projects.

## Design Patters Useds

| Topic   | Reference                                                                           |
| ------- | ----------------------------------------------------------------------------------- |
| Adaper  | [Tutorialspoint](https://www.tutorialspoint.com/design_pattern/adapter_pattern.htm) |
| Factory | [Tutorialspoint](https://www.tutorialspoint.com/design_pattern/factory_pattern.htm) |

---

## Run

Step 1: Install dependencies

```bash
yarn install
```

Step 2: Run

```bash
yarn dev
```

```bash
yarn dev -p YOUR_PORT
```

---

## Test Cases

### Adapter and Factory with Ecommerce APIs

Step 1: Enter `http/api/product?platform=Haravan` and check the response.

Step 2: Enter `http://host:port/api/product?platform=Sapo` and check the response.

Step 3: Enter `http://host:port/api/product?platform=Shopify` and check the response.
