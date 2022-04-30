# BadWordsFilter
An assortment of Functions made to assist a user in Filtering Bad Words from Strings.

## Usage

```js
// import the library
import Filter from "badwordsfilter";

const filter = new Filter("Your Token Here"); // Tokens default to "*".
// When using the filter.censor() method, profanities and swear words will be replaced with your token. 
// (e.g., for default token "*": "String With Curse" will become "String With *****")
```

## Functions

### Censor

##### Attributes

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| String | String | - | - | True |

###### Example
```js
import Filter from "badwordsfilter";

const filter = new Filter("*");

const some_string_with_curse = "Some String With Curse";

filter.censor(some_string_with_curse); // Would return: "Some String With *****"
```

### HasCurse

##### Attributes

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| String | String | - | - | True |

###### Example
```js
import Filter from "badwordsfilter";

const filter = new Filter();

const some_string_with_curse = "Some String With Curse";

filter.hasCurse(some_string_with_curse); // Would return: True
```

### removeWord

##### Attributes

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| String | String | - | - | True |

###### Example
```js
import Filter from "badwordsfilter";
// say the filter censors a word that you do not wish for it to censor:
const filter = new Filter();

filter.hasCurse("Curse"); // Would return: True

filter.removeWord("curse");

filter.hasCurse("Curse"); // Would now return: False

```

### addWord

##### Attributes

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| String | String | - | - | True |

###### Example
```js
import Filter from "badwordsfilter";
// say the filter does not censor a word that you do wish for it to censor:
const filter = new Filter();

filter.hasCurse("Word"); // Would return: False

filter.removeWord("word");

filter.hasCurse("Word"); // Would now return: True

```
### removeWords

##### Attributes

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| Array | Array of Strings  | - | - | True |

###### Example
```js
import Filter from "badwordsfilter";
// say the filter censors words that you do not wish for it to censor:
const filter = new Filter();

filter.hasCurse("Curse"); // Would return: True

filter.hasCurse("AnotherCurse"); // Would return: True

filter.removeWords(["Curse", "AnotherCurse"]);

filter.hasCurse("Curse"); // Would now return: False
filter.hasCurse("AnotherCurse"); // Would now return: False
```
### addWords

##### Attributes

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| Array | Array of Strings  | - | - | True |

###### Example
```js
import Filter from "badwordsfilter";
// say the filter does not censor words that you do wish for it to censor:
const filter = new Filter();

filter.hasCurse("Word"); // Would return: False

filter.hasCurse("AnotherWord"); // Would return: False

filter.addWords(["Word", "AnotherWord"]);

filter.hasCurse("Word"); // Would now return: True
filter.hasCurse("AnotherWord"); // Would now return: True
```

