# JS Report Initial Documentation

## Intro

jsreport is the library being used in this project to generate PDF reports. It takes JSON input and is styled using CSS. The actual content file is similar to HTML & JS, reading properties of objects and using conditions.

## Setup

1. From the root of the project: cd amplify/backend/function/jsreport/src
2. Edit the package.json name to "jsreport-dev" to avoid namespace collision while developing, change back after
3. npm install
4. npm install jsreport
5. npm start
6. Navigate to: <https://urldefense.proofpoint.com/v2/url?u=http-3A__localhost-3A5488&d=DwICaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=-ytVTU3LBdu1OOcqh8rIDsHchH2k1cDq8SuViSAcok1Sbofm5wSPIb6MakVuXpap&m=obb2el6-FNj5iwTdsn7aGIqKkt0o3iAqXPShEy0UHlFNmuvfye_HGNz78F1afaPT&s=jEyc78gR43QO6GG6vcjYjfaLyrULtlSrPgYOBss5Bs4&e=>
7. Use the following URL for documentation: <https://urldefense.proofpoint.com/v2/url?u=https-3A__jsreport.net_learn&d=DwICaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=-ytVTU3LBdu1OOcqh8rIDsHchH2k1cDq8SuViSAcok1Sbofm5wSPIb6MakVuXpap&m=obb2el6-FNj5iwTdsn7aGIqKkt0o3iAqXPShEy0UHlFNmuvfye_HGNz78F1afaPT&s=0Rax0-Lk-il44v9rgn7s2Vab8uoCfomvVXW1ep76bdc&e=>
8. Merging changes into the develop or main branch will trigger a Lambda function in whichever environment to update the templates
