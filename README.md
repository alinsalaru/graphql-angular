# graphql-angular

Tutorial courtesy of:
https://developer.okta.com/blog/2018/11/30/web-app-with-express-angular-graphql


### Prerequisites 

git clone https://github.com/JeffSackmann/tennis_atp.git

```
sqlite3 tennis.db
```

```
CREATE TABLE players(
  "id" INTEGER,
  "first_name" TEXT,
  "last_name" TEXT,
  "hand" TEXT,
  "birthday" INTEGER,
  "country" TEXT
);

CREATE TABLE rankings(
  "date" INTEGER,
  "rank" INTEGER,
  "player" INTEGER,
  "points" INTEGER
);
```

```
.mode csv
.import {PATH_TO_TENNIS_DATA}/atp_players.csv players
.import {PATH_TO_TENNIS_DATA}/atp_rankings_current.csv rankings
```

```
.quit
```

### For GraphiQL
http://localhost:4201/graphql

### For browsing sql lite 

brew cask install db-browser-for-sqlite