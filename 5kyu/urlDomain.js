"use strict";
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain

function domainName(url) {
	const replaceRegExp = /http.\/\/|https.\/\/|www\.|/g;
	return url.replaceAll(replaceRegExp, "").split(".")[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"));
