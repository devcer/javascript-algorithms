// console.log([[[[[[[22]]]]]]] == 22);
// console.log(["1", "2", "3"].map(parseInt));

// fetch("http://starlord.hackerearth.com/kickstarter")
//   .then((response) => {
//       console.log(response);
//   })
//   .then((data) => console.log(data));

//Insert code below

// console.log("Hello World!");
fetch("http://starlord.hackerearth.com/kickstarter")
  .then((response) => response.json())
  .then((data) => {
    let body = `<tr>
		    <th>S. No.</th>
		    <th>Percentage Funded</th>
		    <th>Amount Pledged</th>
		  </tr>`;
    for (let i = 0; i < data.length; i++) {
      let row = `<tr><td>${data[i]["s.no"]}</td><td>${data[i]["percentage.funded"]}</td><td>${data[i]["amt.pledged"]}</td></tr>`;
      body = body + row;
    }
    console.log(body);
    document.getElementById("table").innerHTML = body;
  });
