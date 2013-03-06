/*
File: footer.js
Author: Jake Marshall
Site: Jake's Portfolio
Description: output the copyright footer, is shorter then this header
 */
if (document.title != "Site Map") //Adds site map link to footer, unless on the site map page
	document.write("<a href=\"sitemap.html\">Sitemap</a><br>");
document.write("© Jake Marshall, 2013"); //adds copyright to footer