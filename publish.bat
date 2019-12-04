call ng build --prod --output-path docs --base-href
call copy docs\index.html docs\404.html
call copy CNAME.txt docs\CNAME.
call node publish.js