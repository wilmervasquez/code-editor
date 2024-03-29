export function htmlASbase64(html:string,css:string,js:string) {
  return (`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>${css}</style>
</head>
<body>
  ${html}
  <script>${js}</script>
</body>
</html>`)
}

export function getStructHTML(html:string,css:string,js:string) {
  return (`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>${css}</style>
</head>
<body>
  ${html}
  <script>${js}</script>
</body>
</html>`)
}