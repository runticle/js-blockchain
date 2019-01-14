## Quickstart 

Set up at least one node, defining PORT number as you do

```
PORT=5000 yarn start
PORT=5001 yarn start
```

Open up Postman or equivalent and use to send requests to a node <br>
```GET /blockchain``` returns blockchain <br>
```POST /mine``` mines block (you can set difficulty in the Blockchain class) <br>
```POST /transactions``` adds a transaction to the next block

