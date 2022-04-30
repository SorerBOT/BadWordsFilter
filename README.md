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
import BadWordsFilter from "badwordsfilter";

const Filter = new BadWordsFilter("*");

const some_string_with_curse = "Some String With Curse";

Filter.censor(some_string_with_curse); // Would return: "Some String With *****"
```

### HasCurse

##### Attributes

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| String | String | - | - | True |

###### Example
```js
import BadWordsFilter from "badwordsfilter";

const Filter = new BadWordsFilter();

const some_string_with_curse = "Some String With Curse";

Filter.hasCurse(some_string_with_curse); // Would return: True
```

### removeWord

##### Attributes

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| String | String | - | - | True |

###### Example
```js
import BadWordsFilter from "badwordsfilter";
// say the filter censors a word that you do not wish for it to censor:
const Filter = new Filter();

Filter.hasCurse("Curse"); // Would return: True

Filter.removeWord("curse");

Filter.hasCurse("Curse"); // Would now return: False

```

### addWord

##### Attributes

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| String | String | - | - | True |

###### Example
```js
import BadWordsFilter from "badwordsfilter";
// say the filter does not censor a word that you do wish for it to censor:
const Filter = new BadWordsFilter();

Filter.hasCurse("Word"); // Would return: False

Filter.removeWord("word");

Filter.hasCurse("Word"); // Would now return: True

```
### removeWords

##### Attributes

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| Array | Array of Strings  | - | - | True |

###### Example
```js
import BadWordsFilter from "badwordsfilter";
// say the filter censors words that you do not wish for it to censor:
const Filter = new BadWordsFilter();

Filter.hasCurse("Curse"); // Would return: True

Filter.hasCurse("AnotherCurse"); // Would return: True

Filter.removeWords(["Curse", "AnotherCurse"]);

Filter.hasCurse("Curse"); // Would now return: False
Filter.hasCurse("AnotherCurse"); // Would now return: False
```
### addWords

##### Attributes

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| Array | Array of Strings  | - | - | True |

###### Example
```js
import BadWordsFilter from "badwordsfilter";
// say the filter does not censor words that you do wish for it to censor:
const Filter = new BadWordsFilter();

Filter.hasCurse("Word"); // Would return: False

Filter.hasCurse("AnotherWord"); // Would return: False

Filter.addWords(["Word", "AnotherWord"]);

Filter.hasCurse("Word"); // Would now return: True
Filter.hasCurse("AnotherWord"); // Would now return: True
```

### setToken

##### Attributes

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| Token | char | - | - | True |

###### Example
```js
import BadWordsFiler from "badwordsfilter";

const Filter = new BadWordsFilter();

const some_string_with_curse = "Some String With Curse";

Filter.censor(some_string_with_curse) // "Some String With *****"

Filter.setToken('@');

Filter.censor(some_string_with_curse) // "Some String With @@@@@"

```
### setData

##### Attributes

| Attribute | Type | Options | Default | Required |
| --------- | ---- | ------- | ---- | -------- |
| Object | Object of profanities | - | - | True |

###### Example
```js
import BadWordsFiler from "badwordsfilter";

const Filter = new BadWordsFilter();

const some_string_with_curse = "Hello World";

Filter.censor(some_string_with_curse) // "Some String With *****"

const some_string = "Hello World!";

Filter.censor(some_string); // "Hello World!"

Filter.setData({"hello": true, "world": true});

Filter.censor(some_string); // "***** *****!"
// Note that the old filter will no longer function.
// If you wish to retain the previous object, and only just moddify it slighty:
// (Add / Remove a few words);
// It is recommended to use the Filter.addWords() / Filter.removeWords() functions instead.
Filter.censor(some_string_with_curse) // "Some String With Curse"
```


