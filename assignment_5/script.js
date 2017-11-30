function change(){
			var sel = document.getElementById("chart"); 
			var showto = sel.options[sel.selectedIndex].value;
			document.getElementById("test").innerText = showto;
			if(showto == "pie"){
			
			piechart();
			}
			if(showto == "bar"){
			barchart();
			}
			
		}
		var data = [15,14, 15,20];
		var dataArray =  [15,14, 15,20];
		document.getElementById("mydiv").innerText = data;

		function addtodata() {
			val = document.getElementById("myinput").value;
			data.push(val);
			dataArray.push(val);
			document.getElementById("mydiv").innerText = dataArray;
			
		}
		
		function piechart(){
			var svg = d3.select("#svg1"),
				width = svg.attr("width"),
				height = svg.attr("height"),
				radius = Math.min(width, height) / 2,
				g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

			var color = d3.scaleOrdinal();

			// Generate the pie
			var pie = d3.pie();

			// Generate the arcs
			var arc = d3.arc()
						.innerRadius(0)
						.outerRadius(radius);

			//Generate groups
			var arcs = g.selectAll("arc")
						.data(pie(data))
						.enter()
						.append("g")
						.attr("class", "arc")

			//Draw arc paths
			arcs.append("path")
				.attr("fill", function(d, i) {
					var r = function () { return Math.floor(Math.random()*256) };
					var color = "rgb(" + r() + "," + r() + "," + r() + ")";
					return color;
				})
				.attr("d", arc);
		}

		function barchart(){

		// Create variable for the SVG
		var svg = d3.select("#svg2")
				  .attr("height","100%")
				  .attr("width","100%");

		// Select, append to SVG, and add attributes to rectangles for bar chart
		svg.selectAll("rect")
			.data(dataArray)
			.enter().append("rect")
				  .attr("class", "bar")
				  .attr("height", function(d, i) {return (d * 10)})
				  .attr("width","40")
				  .attr("x", function(d, i) {return (i * 50) + 25})
				  .attr("y", function(d, i) {return 400 - (d * 10)});

		// Select, append to SVG, and add attributes to text
		svg.selectAll("text")
			.data(dataArray)
			.enter().append("text")
			.text(function(d) {return d})
				   .attr("class", "text")
				   .attr("x", function(d, i) {return (i * 50) + 40})
				   .attr("y", function(d, i) {return 416 - (d * 10)});
			


		}