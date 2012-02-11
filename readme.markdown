# jQuery Link-Up #
I needed to link many strings to various URLs but I didn't want to have to continuously update the page or keep track of the URLs in the database, and in some cases I didn't want the text linked in the visible source.

## Examples ##
Find and link BSNES and byuu to the appropriate page.

```
$('p').linkup([
	{ find: "BSNES",		replace: 'http://byuu.org/bsnes/' },
	{ find: /byuu(-san)?/,	replace: 'http://byuu.org/' }
]);
```

Find and link SNES to the proper page, but don't link things in the black list.

```
$('div').linkup([
	{ find: "SNES",	replace: 'http://superfamicom.org/' }
], { blacklist: 'html,head,style,title,link,meta,script,object,embed,iframe,pre,a,h1,h2,h3' });
```
