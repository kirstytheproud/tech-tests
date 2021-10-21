# Marvel Back End

The Marvel Comics API allows developers to access information about Marvel's vast library of
comics.
We want you to use the Marvel API (see http://developer.marvel.com/) to build a Characters API:

<br>

## Part One:

1. Serve an endpoint **/characters** that returns all the Marvel character ids only, in a JSON
   array of numbers.
   - Because Marvel API only returns max 100 records per request, you need to load all of
     them beforehand with your application, and cache it in memory or file, to efficiently
     serve your endpoint;
   - The request should be something like:

```js
// GET /characters
[ 1009718, 1017100, 1009144, 1010699, 1016823, 1009148, 1011334, … ]
```

<br>

2. Serve an endpoint **/characters/{characterId}** that contains the real-time data from the
   Marvel API **/v1/public/characters/{characterId}**, but containing only the following
   information about each character: _id, name, description, thumbnail_.
   - You'll need to sign up for Marvel developer API key at http://developer.marvel.com _free_
   - Once you have a key then the API documentation is at http://developer.marvel.com/docs

```js
// GET /characters/1009718
{
 "id": 1009718,
 "name": "Wolverine",
 "description": "Born with super-human senses and the power to heal from almost any
wound, Wolverine was captured by a secret Canadian organization and given an
unbreakable skeleton and claws. Treated like an animal, it took years for him to
control himself. Now, he's a premiere member of both the X-Men and the Avengers.",
 "thumbnail": {
 "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf",
 "extension": "jpg"
 }
}
```

<br>

## Part Two:

3.  Enable a translated version to another language of the character’s _description_.

    - Accept a query parameter with the language ISO-639-1 code: **/characters/
      {characterId}?language={languageCode}**.
    - Use any translation service of your choice, it can be an API or library, but the goal is to
      execute the translations in real-time.

<br>

4. Create a Swagger specification for your Characters API that can be viewed with Swagger UI
   or imported to Postman

<br>

## Constraints

- We're looking for a running server that can be accessed on http://localhost:8080/
- Use of third party libraries is ok; in the coding interview we'll be asking you about your choices
- The API keys / secrets should not be stored with the code. See here: https://support.google.com/cloud/answer/6310037

<br>

## On Completion

Also write a markdown README.md with instructions on how to:

- Install any dependencies, files or environment variables your code requires
- How to build and run your server

## EXCLUDE FROM TEST

Partially complete tech test available here..
https://github.com/nology-tech/marvel-api/tree/main/src/main/java/com/nology/charactersAPI
