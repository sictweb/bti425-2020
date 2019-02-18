---
title: Moment.js
layout: default
---

## Moment.js

[Moment.js](https://momentjs.com/) is a JavaScript utility library designed to make the handling of date / datetime objects much simpler.  It encapsulates a native Date object in order to provide extra manipulation, querying, display, validation and localization options.

<br>

### Downloading Moment.js

Moment.js exists as a single, minified .js file that can either be [downloaded](https://momentjs.com/downloads/moment-with-locales.min.js) (with or without all locales) and included in your local solution, or referenced using [the CDN](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js) (with or without all locales) in your pages/views. It is also available [via NPM](https://www.npmjs.com/package/moment) and can be used in your Node.js server applications as well.

<br>

### The Full Documentation

We will not be covering every facet of the Moment.js library during this lecture, however it is an extremely valuable resource and we recommend [**Bookmarking the Documentation**](https://momentjs.com/docs/) for future reference.

<br>

### Working with Moment.js

The following core pieces of functionality will provide a solid foundation for working with Moment.js in the future.  For the below examples, we will be using the string representation of Zsa Zsa Mannering's start date, ie:

```
let hireDate = "2010-11-07T04:00:00.000Z"; // Zsa zsa Mannering's hire date in our "Employees" Collection
```

If you're following along with the "Code Samples" the following functionality is located in the "week2/Moment" folder

<br>

### Setting the "Locale"

```js
// moment.locale("fr-CA"); // Try out Quebec French
```

<br>

### Creating a "Moment"

```js
let mDate = moment(hireDate); // create a new "moment" object
```

<br>

### Setting UTC Mode & Displaying Data

```js
mDate.utc(); // switch to "UTC" mode

// display the UTC date
let mDate1 = mDate.format('LLLL'); // Sunday, November 7, 2010 4:00 AM
```

<br>

### Setting "Local" Mode & Displaying Data

```js
mDate.local(); // switch to "local" mode

// display a localized date (now offset to Local Time)
let mDate2 = mDate.format('LLLL'); // Sunday, November 7, 2010 12:00 AM
```

<br>

## Display Format Options

```js
let mDate3 = mDate.format('MMMM Do YYYY, h:mm:ss a');   // November 7th 2010, 12:00:00 am
let mDate4 = mDate.format('dddd');                      // Sunday
let mDate5 = mDate.format("MMM Do YYYY");               // Nov 7th 2010
let mDate6 = mDate.format('[date:] MM/DD/YYYY');        // date: 11/07/2010
let mDate7 = mDate.format();                            // 2010-11-07T00:00:00-04:00
```

For a full list of formatting options, see: [https://momentjs.com/docs/#/displaying/format](https://momentjs.com/docs/#/displaying/format)

<br>

### Display Format Using Locale Options

```js
let mDate8 = moment.locale();       // en (or fr if testing Quebec french)
let mDate9 = mDate.format('LT');    // 12:00 AM        
let mDate10 = mDate.format('LTS');  // 12:00:00 AM
let mDate11 = mDate.format('L');    // 11/07/2010
let mDate12 = mDate.format('l');    // 11/7/2010
let mDate13 = mDate.format('LL');   // November 7, 2010
let mDate14 = mDate.format('ll');   // Nov 7, 2010
let mDate15 = mDate.format('LLL');  // November 7, 2010 12:00 AM
let mDate16 = mDate.format('lll');  // Nov 7, 2010 12:00 AM
let mDate17 = mDate.format('LLLL'); // Sunday, November 7, 2010 12:00 AM
let mDate18 = mDate.format('llll'); // Sun, Nov 7, 2010 12:00 AM
```

<br>

## Additional Display Options:

Note: the display options for the below methods are:

* 'seconds'
* 'minutes'
* 'hours'
* 'days'
* 'weeks'
* 'months'
* 'years'

<br>

### .fromNow()

A common way of displaying time is handled by moment#fromNow. This is sometimes called timeago or relative time.

See: [https://momentjs.com/docs/#/displaying/fromnow/](https://momentjs.com/docs/#/displaying/fromnow/)

```js
let mDate19 = mDate.fromNow(); // 7 years ago
```

<br>

### .diff()

To get the difference in milliseconds, use moment#diff like you would use moment#from. To get the difference in another unit of measurement, pass that measurement as the second argument.

See: [https://momentjs.com/docs/#/displaying/difference/](https://momentjs.com/docs/#/displaying/difference/)

```js
let mDate21 = mDate.diff(moment([2010,0,1]), 'days'); // 310
let mDate22 = mDate.diff(moment([2010,0,1]), 'months'); // 10
let mDate23 = mDate.diff(moment([2010,0,1]), 'years'); // 0
```

<br>

### .toISOString()

Formats a string to the ISO8601 standard.

See: [https://momentjs.com/docs/#/displaying/as-iso-string/](https://momentjs.com/docs/#/displaying/as-iso-string/)

```js
let mDate24 = mDate.toISOString(); // 2010-11-07T04:00:00.000Z (the same as what we started with)
```

<br>

### .daysInMonth()

Get the number of days in the current month.

See: [https://momentjs.com/docs/#/displaying/days-in-month/](https://momentjs.com/docs/#/displaying/days-in-month/)

```js
let mDate25 = mDate.daysInMonth(); // 30
```

<br>

## Manipulate Options:

The following methods are used to manipulate the working date.

<br>

### .add()

Mutates the original moment by adding time.

See: [https://momentjs.com/docs/#/manipulating/add/](https://momentjs.com/docs/#/manipulating/add/)

```js
mDate.add(5, 'days'); // Using: .format("LLLL") => Friday, November 12, 2010 12:00 AM
```

<br>

### .subtract()

Mutates the original duration by subtracting time.

See: [https://momentjs.com/docs/#/durations/subtract/](https://momentjs.com/docs/#/durations/subtract/)

```js
mDate.subtract(5, 'days'); // Using: .format("LLLL") => Sunday, November 7, 2010 12:00 AM
```

<br>

### .utcOffset()

Get the UTC offset in minutes.

See: [https://momentjs.com/docs/#/manipulating/utc-offset/](https://momentjs.com/docs/#/manipulating/utc-offset/)

```js
let mDate26 = mDate.utcOffset(); // 240 (minutes)
```

<br>

## Query Options

The following methods are used to compare and examime dates.

<br>

### .isBefore()

Check if a moment is before another moment.

See: [https://momentjs.com/docs/#/query/is-before/](https://momentjs.com/docs/#/query/is-before/) and also: [https://momentjs.com/docs/#/query/is-after/](https://momentjs.com/docs/#/query/is-after/)

```js
let mDate27 = mDate.isBefore(moment([2009,11,7])); // false
```

<br>

### .isSame()

Check if a moment is the same as another moment.

See: [https://momentjs.com/docs/#/query/is-same/](https://momentjs.com/docs/#/query/is-same/)

```js
let mDate28 = mDate.isSame(moment([2010,10,8])); // false
let mDate29 = mDate.isSame(moment([2010,10,8]), "month"); // true
```

<br>

### .isBetween()

Check if a moment is between two other moments, optionally looking at unit scale (minutes, hours, days, etc). The match is exclusive.

See: [https://momentjs.com/docs/#/query/is-between/](https://momentjs.com/docs/#/query/is-between/)

```js
let mDate30 = mDate.isBetween(moment([2010,0,1]), moment()); // true
```

<br>

### .isDST()

Checks if the current moment is in daylight saving time.

See: [https://momentjs.com/docs/#/query/is-daylight-saving-time/](https://momentjs.com/docs/#/query/is-daylight-saving-time/)

```js
let mDate31 = mDate.isDST(); // true
```

<br>

### .isLeapYear()

Returns **true** if that year is a leap year, and **false** if it is not.

See: [https://momentjs.com/docs/#/query/is-leap-year/](https://momentjs.com/docs/#/query/is-leap-year/)

```js
let mDate32 = mDate.isLeapYear(); // false
```

<br>

## Updating jquery-AJAX to show Dates

To see how we can use Moment to show dates for employees within our Teams API, open the **Moment-AJAX** Example located in the **week2** folder. We will walk through the solution together in class.

<br>
