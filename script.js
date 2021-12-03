	function customtext1() {
	  let jsmessagecontent = document.getElementById("jscontent1").value;
	  let jsmsgusername = document.getElementById("jsusername1").value;
	  let jsmsgpfp = document.getElementById("jspfp1").value;
	  let jsweburl = document.getElementById("jsurl1").value;
	  const request = new XMLHttpRequest();
      request.open("POST", jsweburl);

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
		username: jsmsgusername,
        avatar_url: jsmsgpfp,
		content: jsmessagecontent
      }

      request.send(JSON.stringify(params));
    }