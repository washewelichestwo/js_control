window.onload = function () {
    function getID(a) {
        return document.getElementById(a);
    }
    getID("firstBlock").style.color = "white";
    getID("change").onclick = function () {
        var x = getID("firstBlock").innerHTML;
        console.log(x);
        getID("textChange").style.display = "block";
        getID("textChange").value = x;
        getID("save").style.display = "inline-block";
        getID("add").style.display = "inline-block";
        getID("f1").style.display = "none";
    }
    getID("style").onclick = function () {
        getID("f1").style.display = "block";
        getID("textChange").style.display = "none";
        getID("save").style.display = "none";
        getID("add").style.display = "none";
    }
    getID("save").onclick = function () {
        var changed = getID("textChange").value;
        getID("firstBlock").innerHTML = changed;
        getID("textChange").value = " ";
    }
    getID("bold").onclick = function () {
        if (getID("bold").checked == true) {
            getID("firstBlock").style.fontWeight = "bold";
        }
        if (getID("bold").checked == false) {
            getID("firstBlock").style.fontWeight = "normal";
        }
    }
    getID("cursive").onclick = function () {
        if (getID("cursive").checked == true) {
            getID("firstBlock").style.fontStyle = "italic";
        }
        if (getID("cursive").checked == false) {
            getID("firstBlock").style.fontStyle = "normal";
        }
    }
    var df = document.forms.f1;
    var radio = df.rb;
    console.log(radio.length);
    for (var i = 0; i < radio.length; i++) {
        radio[i].addEventListener('click', function () {
            document.getElementById("firstBlock").style.fontSize = radio.value;
        })
    }
    var df = document.forms.f1
    var select = df.list;
    console.log(select);
    select.onchange = function () {
        for (var i = 0; i < select.options.length; i++) {
            var option = select.options[i];
            if (option.selected) {
                getID("firstBlock").style.fontFamily = option.value;
            }
        }
    }
    getID("colorBack").onclick = function () {
        getID("color").style.display = "flex";
        getID("color2").style.display = "none";
        var oneColor = getID("one");
        console.log(oneColor);
        oneColor.onclick = function () {
            getID("firstBlock").style.backgroundColor = "cadetblue";
        }
        var twoColor = getID("two");
        console.log(oneColor);
        twoColor.onclick = function () {
            getID("firstBlock").style.backgroundColor = "brown";
        }
        var threeColor = getID("three");
        console.log(oneColor);
        threeColor.onclick = function () {
            getID("firstBlock").style.backgroundColor = "greenyellow";
        }
        var fourColor = getID("four");
        console.log(fourColor);
        fourColor.onclick = function () {
            getID("firstBlock").style.backgroundColor = "darkgreen";
        }
        var fiveColor = getID("five");
        console.log(fiveColor);
        fiveColor.onclick = function () {
            getID("firstBlock").style.backgroundColor = "gray";
        }
        var sixColor = getID("six");
        console.log(sixColor);
        sixColor.onclick = function () {
            getID("firstBlock").style.backgroundColor = "red";
        }
        var sevenColor = getID("seven");
        console.log(sevenColor);
        sevenColor.onclick = function () {
            getID("firstBlock").style.backgroundColor = "blue";
        }
        var eightColor = getID("eight");
        console.log(eightColor);
        eightColor.onclick = function () {
            getID("firstBlock").style.backgroundColor = "blueviolet";
        }
        var nineColor = getID("nine");
        console.log(nineColor);
        nineColor.onclick = function () {
            getID("firstBlock").style.backgroundColor = "orangered";
        }
    }
    getID("colorText").onclick = function () {
        getID("color").style.display = "none";
        getID("color2").style.display = "flex";
        var oneColor2 = getID("one2");
        console.log(oneColor2);
        oneColor2.onclick = function () {
            getID('firstBlock').style.color = "cadetblue";
        }
        var twoColor2 = getID("two2");
        console.log(oneColor2);
        twoColor2.onclick = function () {
            getID("firstBlock").style.color = "brown";
        }
        var threeColor2 = getID("three2");
        console.log(oneColor2);
        threeColor2.onclick = function () {
            getID("firstBlock").style.color = "greenyellow";
        }
        var fourColor2 = getID("four2");
        console.log(fourColor2);
        fourColor2.onclick = function () {
            getID("firstBlock").style.color = "darkgreen";
        }
        var fiveColor2 = getID("five2");
        console.log(fiveColor2);
        fiveColor2.onclick = function () {
            getID("firstBlock").style.color = "gray";
        }
        var sixColor2 = getID("six2");
        console.log(sixColor2);
        sixColor2.onclick = function () {
            getID("firstBlock").style.color = "red";
        }
        var sevenColor2 = getID("seven2");
        console.log(sevenColor2);
        sevenColor2.onclick = function () {
            getID("firstBlock").style.color = "blue";
        }
        var eightColor2 = getID("eight2");
        console.log(eightColor2);
        eightColor2.onclick = function () {
            getID("firstBlock").style.color = "blueviolet";
        }
        var nineColor2 = getID("nine2");
        console.log(nineColor2);
        nineColor2.onclick = function () {
            getID("firstBlock").style.color = "orangered";
        }
    }
    var df2 = document.forms.f2;
    var radio2 = df2.rb2;
    console.log(radio2.length);
    for (var i = 0; i < radio2.length; i++) {
        radio2[i].addEventListener('click', function () {
            if (radio2.value == "список") {
                getID("culc").style.display = "none";
                getID("h3").style.display = "none";
                getID("size").style.display = "none";
                getID("createTable").style.display = "none";
                getID("createList").style.display = "block";
                getID("position").style.display = "block";
            } else if (radio2.value == "таблиця") {
                getID("culc").style.display = "flex";
                getID("h3").style.display = "block";
                getID("size").style.display = "flex";
                getID("createTable").style.display = "block";
                getID("createList").style.display = "none";
            }
        })
    }
    getID("add").onclick = function () {
        getID("thirBlock").style.display = "block";
        getID("culc").style.display = "flex";
        getID("h3").style.display = "block";
        getID("size").style.display = "flex";
        getID("createTable").style.display = "block";
        getID("createList").style.display = "none";
        getID("firstBlock").style.display = "none";
        getID("secondBlock").style.display = "none";
        getID("style").style.display = "none";
        getID("change").style.display = "none";
    }
    getID("createListBtn").onclick = function () {
        getID("firstBlock").style.display = "block";
        getID("thirBlock").style.display = "none";
        getID("secondBlock").style.display = "block";
        var num = getID("elements").value;
        console.log(num);
        var typM = getID("list4").value;
        var ul = document.createElement("ul");
        for (var i = 1; i <= num; i++) {
            var li = document.createElement("li");
            li.style.listStyle = typM;
            li.innerHTML = "text";
            ul.appendChild(li);
        }
        var text16 = getID("firstBlock").innerHTML;
        var listTosecond = ul.innerHTML
        console.log(listTosecond);
        getID("textChange").value = text16 + listTosecond;
    }
    getID("createTable").onclick = function () {
        getID("firstBlock").style.display = "block";
        getID("thirBlock").style.display = "none";
        getID("secondBlock").style.display = "block";
        var row = getID("row").value;
        var column = getID("column").value;
        console.log(row);
        console.log(column);
        var typline = getID("list2").value;
        console.log(typline);
        var colorLine = getID("list3").value;
        console.log(colorLine);
        var thicknessLine = getID("thickness").value;
        console.log(thicknessLine);
        var width = getID("width").value;
        console.log(width);
        var height = getID("height").value;
        console.log(height);
        var table = document.createElement("table");
        for (var i = 0; i < row; i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < column; j++) {
                var td = document.createElement("td");
                td.innerHTML = "table";
                td.style.width = width + " px";
                td.style.height = height + " px";
                td.style.borderWidth = thicknessLine + " px ";
                td.style.borderStyle = typline;
                td.style.borderColor = colorLine;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        //              document.body.appendChild(table);
        var text16 = getID("firstBlock").innerHTML;
        var tableTosecond = table.innerHTML;
        console.log(tableTosecond);
        getID("textChange").value = text16 + " <table> " + tableTosecond + " </table> ";

    }
}