export default (app, publicRoot) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="Dan Needham" />

    <link rel="shortcut icon" href="${publicRoot}favicon.ico">
    <link rel="stylesheet" href="${publicRoot}reset.css" />
    <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
    <title>DECODERANT</title>
  </head>
  <body>
		<div id="root">${app}</div>
		<script src="${publicRoot}client.js"></script>
	</body>
</html>
`;
