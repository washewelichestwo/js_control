function sel(a) {
	return document.querySelector(a);
};

function id(a) {
	return document.getElementById(a);
};
var form2 = document.forms.form2;
var form1 = document.forms.form1;
var textarea = form2.elements.textarea;
var r = form1.elements.radio;
//action button Edit
sel('.edit').addEventListener('click', function () {
	sel('.edittxt').style.display = 'flex';
	sel('.Lorem').style.display = 'none';
	sel('.Create_Table').style.display = 'block';
	sel('.Create_List').style.display = 'block';
	sel('.save').style.display = 'block';
	sel('.bold').style.display = 'none';
	sel('.underline').style.display = 'none';
	sel('.italic').style.display = 'none';
	sel('.indent').style.display = 'none';
	sel('.edit').style.display = 'none';
	sel('.select_form2').style.display = 'none';
	sel('.select_form3').style.display = 'none';
	sel('.Color').style.display = 'none';
	sel('.BgColor').style.display = 'none';
	sel('.align').style.display = 'none';
	sel('.form1 label').style.opacity = '0';
	textarea.value = sel('.Lorem').innerHTML;
});
//action button Save:
sel('.save').addEventListener('click', function () {
	sel('.save').style.display = 'none';
	sel('.Lorem').style.display = 'block';
	sel('.edittxt').style.display = 'none';
	sel('.Lorem').innerHTML = textarea.value;
	textarea.value = '';
	sel('.bold').style.display = 'block';
	sel('.underline').style.display = 'block';
	sel('.italic').style.display = 'block';
	sel('.indent').style.display = 'block';
	sel('.edit').style.display = 'block';
	sel('.Create_Table').style.display = 'none';
	sel('.Create_List').style.display = 'none';
	sel('.select_form2').style.display = 'block';
	sel('.select_form3').style.display = 'block';
	sel('.Color').style.display = 'inline-block';
	sel('.BgColor').style.display = 'inline-block';
	sel('.align').style.display = 'block';
	sel('.form1 label').style.opacity = '1';
	sel('.something_add').style.display = 'none';
});
//paragraph button:
sel('.indent').addEventListener('click', function () {
	sel('.Lorem').style.textIndent = '20px';
});

//action button Bold:
sel('.bold').addEventListener('mousedown', function () {
	sel('.Lorem').style.fontWeight = 'bold';
});
sel('.bold').addEventListener('click', function () {
	if (sel('.Lorem').style.fontWeight = 'normal') {
		sel('.bold').addEventListener('click', function () {
			sel('.Lorem').style.fontWeight = 'bold';
		});
	}
});
//action button Italic:
sel('.italic').addEventListener('mousedown', function () {
	sel('.Lorem').style.fontStyle = 'italic';
});
sel('.italic').addEventListener('click', function () {
	if (sel('.Lorem').style.fontStyle = 'normal') {
		sel('.italic').addEventListener('click', function () {
			sel('.Lorem').style.fontStyle = 'italic';
		});
	}
});
//action button Underline:
sel('.underline').addEventListener('mousedown', function () {
	sel('.Lorem').style.textDecoration = 'underline';
});
sel('.underline').addEventListener('click', function () {
			if (sel('.Lorem').style.textDecoration = 'none') {
				sel('.underline').addEventListener('click', function () {
						sel('.Lorem').style.textDecoration = 'underline';
					});
					}
				});
			//fontSize fontFamily:
			sel('.select_form2').addEventListener('change', function () {
				sel('.Lorem').style.fontSize = this.value;
			});
			sel('.select_form3').addEventListener('change', function () {
				sel('.Lorem').style.fontFamily = this.value;
				sel('.select_form3 option').style.fontFamily = this.value;
			});
			//text pozition left, center, right:
			for (var i = 0; i < r.length; i++) {
				r[i].addEventListener('click', function () {
					sel('p').style.textAlign = this.value;
				});
			}
			//button Create_Table:
			sel('.Create_Table').addEventListener('click', function () {
				sel('.something_add').style.display = 'flex';
				sel('.Create_Table').style.display = 'block';
				sel('.Create_List').style.display = 'block';
				sel('.save').style.display = 'block';
				sel('.buttons').style.display = 'flex';
				sel('.bold').style.display = 'none';
				sel('.underline').style.display = 'none';
				sel('.italic').style.display = 'none';
				sel('.indent').style.display = 'none';
				sel('.edit').style.display = 'none';
				sel('.select_form2').style.display = 'none';
				sel('.select_form3').style.display = 'none';
				sel('.Color').style.display = 'none';
				sel('.BgColor').style.display = 'none';
				sel('.align').style.display = 'none';
				sel('.form1 label').style.opacity = '0';
				sel('.add_table').style.display = 'flex';
				sel('.edittxt').style.display = 'flex';
				sel('.Lorem').style.display = 'none';
				sel('.add_list').style.display = 'none';
			});
			//button Create_List:
			sel('.Create_List').addEventListener('click', function () {
				sel('.something_add').style.display = 'flex';
				sel('.Create_Table').style.display = 'flex';
				sel('.Create_List').style.display = 'flex';
				sel('.add_list').style.display = 'flex';
				sel('.add_table').style.display = 'none';
			});
			//Create and add to general content table: 
			sel('.create1').addEventListener('click', function () {
				var row_count = id('row_count').value;
				var cell_count = id('cell_count').value;
				var cell_width = id('cell_width').value;
				var cell_height = id('cell_height').value;
				var border_width = id('border_width').value;
				var border_spacing = id('border_spacing').value;
				var border_color = id('border_color').value;
				form2[0].value += '<table class="CreateTable" style="border:' + border_width + 'px solid ' + border_color + ';  border-spacing:' + border_spacing + 'px;">';
				form2[0].value += '<tbody>';
				for (var i = 1; i <= row_count; i++) {
					form2[0].value += '<tr>';
					for (var j = 1; j <= cell_count; j++) {
						form2[0].value += '<td style="border: 1px solid ' + border_color + '; border-spacing:' + border_spacing + 'px; width:' + cell_width + 'px; height:' + cell_height + 'px;"></td>';
					}
					form2[0].value += '</tr>';
				}
				form2[0].value += '</tbody>';
				form2[0].value += '</table>';
				sel('.something_add').style.display = 'none';
				sel('.Lorem').style.display = 'none';
				sel('.buttons').style.display = 'flex';
				sel('.edittxt').style.display = 'flex';
			});
			//Button reset
			sel('.reset').addEventListener('click', function () {
				sel('.form4').reset();
				sel('.form5').reset();
			});
			sel('.reset2').addEventListener('click', function () {
				sel('.form5').reset();
			});
			//Create and add to general content list:
			//OL list:
			sel('.create2').addEventListener('click', function () {
				var olmark_type = id('olmark_type').value;
				form2[0].value += '<ol style="list-style:inside; list-style-type:' + olmark_type + '">';
				for (var i = 1; i <= id('list_count').value; i++) {
					form2[0].value += '<li>Some text</li>';
				}
				form2[0].value += '</ol>';
				sel('.something_add').style.display = 'none';
				sel('.Lorem').style.display = 'none';
				sel('.buttons').style.display = 'flex';
				sel('.edittxt').style.display = 'flex';
			});
			//Create functional color table:
			document.body.addEventListener('click', function (e) {
				if (e.target.id == 'Color') {
					id('block').className = "colors";
					id('overlay_2').style.display = "flex";
					sel('.colors').style.display = "flex";
					sel('.colors label').style.display = "none";
					sel('.background_image').style.display = "none";
					sel('.Background_color').style.display = "none";
					id('block').style.height = "166px";
					var color_cell = document.querySelectorAll('.color_cell');
					for (var i = 0; i < color_cell.length; i++) {
						color_cell[i].addEventListener('click', function () {
							if (id('block').className == "newbgcolor") {
								sel('.Lorem').style.background = this.style.background;
							}
							else {
								sel('.Lorem').style.color = this.style.background;
							}
						});
					}
					id('overlay_2').addEventListener('click', function () {
						id('overlay_2').style.display = "none";
						id('block').style.display = "none";
					});
				}
				else if (e.target.id == 'BgColor') {
					id('block').className = "newbgcolor";
					id('block').style.height = "195px";
					id('overlay_2').style.display = "flex";
					sel('.newbgcolor').style.display = "flex";
					sel('.background_image').style.display = "block";
					sel('.Background_color').style.display = "none";
					sel('.newbgcolor label').style.display = "none";
					id('overlay_2').addEventListener('click', function () {
						id('overlay_2').style.display = "none";
						id('block').style.display = "none";
					});
					sel('.background_image').addEventListener('click', function () {
						sel('.newbgcolor').style.display = "flex";
						sel('.background_image').style.display = "none";
						sel('.Background_color').style.display = "block";
						sel('.newbgcolor label').style.display = "flex";
						id('block').style.height = "240px";
						sel('.Background_color').addEventListener('click', function () {
							sel('.Background_color').style.display = "none";
							sel('.background_image').style.display = "block";
							id('block').style.width = "164px";
							id('block').style.height = "195px";
							id('block').className = "newbgcolor";
							sel('.newbgcolor').style.display = "flex";
							var colorful = ['Orchid', 'RosyBrown', 'Gold', 'Pink', 'PaleGreen', 'Peru', 'Aquamarine', 'Coral', 'CornflowerBlue'];
							var color_cell = document.querySelectorAll('.color_cell');
							for (var i = 0; i < color_cell.length; i++) {
								color_cell[i].style.background = colorful[i];
								color_cell[i].style.width = "50px";
								sel('.newbgcolor label').style.display = "none";
							}
						});
						id('block').style.width = "315px";
						id('block').style.height = "230px";
						var images = ['img/24629383.jpg', 'img/79846684.png', 'img/29068543.jpg', 'img/30894736.jpg', 'img/32349234.jpg', 'img/fon_derevo20.jpg', 'img/32353678.jpeg', 'img/86296692.jpg', 'img/84606265.png'];
						var img = document.querySelectorAll('.img');
						for (var i = 0; i < img.length; i++) {
							img[i].style.width = "100px";
							img[i].style.backgroundImage = "url(" + images[i] + ")";
						}
						id('load_file').addEventListener('change', function () {
							var file = id('load_file').files[0];
							var reader = new FileReader();
							reader.onloadend = function () {
								sel('.Lorem').style.backgroundImage = "url(" + reader.result + ")";
								sel('.Lorem').style.backgroundSize = 'cover';
							}
							if (file) {
								reader.readAsDataURL(file);
							}
						});
					});
				}
			});