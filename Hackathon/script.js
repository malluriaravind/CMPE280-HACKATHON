// drag and drop
var cloneId;
var cnt = 0;

function getDataCountry(country_code, ev){

  start = document.getElementById("slider-1").value;
  end = document.getElementById("slider-2").value;
  console.log(country_code, ev)
  if(country_code == 1){
    if (ev == "gdp"){
      return "https://data.worldbank.org/share/widget?contextual=default&end="+ end +"&indicators=NY.GDP.MKTP.KD.ZG&locations=US&start="+ start +"&view=chart"
    }
    else if (ev === "fdi_in") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=BX.KLT.DINV.WD.GD.ZS&locations=US"
    }

    else if (ev === "fdi_out") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=BM.KLT.DINV.WD.GD.ZS&locations=US"
    }

    else if (ev === "agri_gdp"){
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=NV.AGR.TOTL.ZS&locations=US"
    }

    else if (ev === "credit") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=NV.IND.MANF.ZS&locations=US"
    }

    else if (ev === "fert") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=AG.CON.FERT.ZS&locations=US"

    }

    else if (ev === "fert_prod") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=AG.CON.FERT.PT.ZS&locations=US"
    }

    else if (ev === "reserves"){
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=FI.RES.TOTL.CD&locations=US"
    }

    else if (ev === "gni") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=NY.GNP.MKTP.CD&locations=US"
    }

    else if (ev === "total_debt"){
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=DT.TDS.DECT.GN.ZS&locations=US"
    }
  }
  else if(country_code == 2){
    if (ev == "gdp"){
      return "https://data.worldbank.org/share/widget?end=" + end + "&indicators=NY.GDP.MKTP.KD.ZG&locations=IN&start=" + start + "&view=chart"
    }
    else if (ev === "fdi_in") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=BX.KLT.DINV.WD.GD.ZS&locations=IN"
    }

    else if (ev === "fdi_out") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=BM.KLT.DINV.WD.GD.ZS&locations=IN"
    }

    else if (ev === "agri_gdp"){
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=NV.AGR.TOTL.ZS&locations=IN"

    }

    else if (ev === "credit") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=NV.IND.MANF.ZS&locations=IN"

    }

    else if (ev === "fert") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=AG.CON.FERT.ZS&locations=IN"

    }

    else if (ev === "fert_prod") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=AG.CON.FERT.PT.ZS&locations=IN"
    }

    else if (ev === "reserves"){
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=FI.RES.TOTL.CD&locations=IN"

    }

    else if (ev === "gni") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=NY.GNP.MKTP.CD&locations=IN"

    }

    else if (ev === "total_debt"){
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=DT.TDS.DECT.GN.ZS&locations=IN"
    }
  }
  else if(country_code == 3){
    if (ev == "gdp"){
      return "https://data.worldbank.org/share/widget?end=" + end + "&indicators=NY.GDP.MKTP.KD.ZG&locations=CN&start=" + start + "&view=chart"
    }
    else if (ev === "fdi_in") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=BX.KLT.DINV.WD.GD.ZS&locations=CN"

    }
    else if (ev === "fdi_out") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=BM.KLT.DINV.WD.GD.ZS&locations=CN"
    }

    else if (ev === "agri_gdp"){
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=NV.AGR.TOTL.ZS&locations=CN"

    }

    else if (ev === "credit") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=NV.IND.MANF.ZS&locations=CN"

    }

    else if (ev === "fert") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=AG.CON.FERT.ZS&locations=CN"
    }

    else if (ev === "fert_prod") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=AG.CON.FERT.PT.ZS&locations=CN"

    }

    else if (ev === "reserves"){
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=FI.RES.TOTL.CD&locations=CN"

    }

    else if (ev === "gni") {
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=NY.GNP.MKTP.CD&locations=CN"

    }

    else if (ev === "total_debt"){
      console.log("entered")
      return "https://data.worldbank.org/share/widget?start="+ start +"&end="+ end +"&indicators=DT.TDS.DECT.GN.ZS&locations=CN"
    }
  }


}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  cloneId = ev.target.id;
}

function drop(ev) {
  ev.preventDefault();
  let newElem;
  country = document.querySelector(".form-select").value || '1';
  if (cloneId === "gdp") {
    console.log('yes',country)
    console.log(getDataCountry(country,ev))
    document.getElementById(`iframe_div1_${country}`).src = getDataCountry(country, cloneId)
    newElem = document.getElementById(`iframe_div1_${country}`).cloneNode(false);
  } 
  else if (cloneId === "fdi_in") {
    document.getElementById(`iframe_div2_${country}`).src = getDataCountry(country, cloneId)
    newElem = document.getElementById(`iframe_div2_${country}`).cloneNode(false);
  } 
  else if (cloneId === "fdi_out") {
    document.getElementById(`iframe_div3_${country}`).src = getDataCountry(country, cloneId)
    newElem = document.getElementById(`iframe_div3_${country}`).cloneNode(false);
  } 
  else if (cloneId === "agri_gdp") {
    document.getElementById(`iframe_div4_${country}`).src = getDataCountry(country, cloneId)
    newElem = document.getElementById(`iframe_div4_${country}`).cloneNode(false);
  } 
  else if (cloneId === "credit") {
    document.getElementById(`iframe_div5_${country}`).src = getDataCountry(country, cloneId)
    newElem = document.getElementById(`iframe_div5_${country}`).cloneNode(false);
  } 
  else if (cloneId === "fert") {
    document.getElementById(`iframe_div6_${country}`).src = getDataCountry(country, cloneId)
    newElem = document.getElementById(`iframe_div6_${country}`).cloneNode(false);
  } 
  else if (cloneId === "fert_prod") {
    document.getElementById(`iframe_div7_${country}`).src = getDataCountry(country, cloneId)
    newElem = document.getElementById(`iframe_div7_${country}`).cloneNode(false);
  } 
  else if (cloneId === "reserves") {
    document.getElementById(`iframe_div8_${country}`).src = getDataCountry(country, cloneId)
    newElem = document.getElementById(`iframe_div8_${country}`).cloneNode(false);
  } 
  else if (cloneId === "gni") {
    document.getElementById(`iframe_div9_${country}`).src = getDataCountry(country, cloneId)
    newElem = document.getElementById(`iframe_div9_${country}`).cloneNode(false);
  } 
  else if (cloneId === "total_debt") {
    document.getElementById(`iframe_div10_${country}`).src = getDataCountry(country, cloneId)
    newElem = document.getElementById(`iframe_div10_${country}`).cloneNode(false);
  } 
  else if (cloneId === "EG_Imports_Sankey") {
    newElem = document.getElementById("EG_Wheat_Chart").cloneNode(false);
  } 
  else if (cloneId === "EG_Imports_Pie") {
    newElem = document.getElementById("EG_Wheat_Pie_Chart").cloneNode(false);
  } 
  else if (cloneId === "SA_Imports_Sankey") {
    newElem = document.getElementById("SA_Wheat_Chart").cloneNode(false);
  } 
  else if (cloneId === "SA_Imports_Pie") {
    newElem = document.getElementById("SA_Wheat_Pie_Chart").cloneNode(false);
  } else if(cloneId==="macro-eco"){
    ele1 = document.getElementById(`iframe_div1_${country}`).cloneNode(false);
    ele2 = document.getElementById(`iframe_div2_${country}`).cloneNode(false);
    ele3 = document.getElementById(`iframe_div3_${country}`).cloneNode(false);
    ev.target.appendChild(ele1);
    ev.target.appendChild(ele2);
    ev.target.appendChild(ele3);
  }
  else if(cloneId==="agriculture"){
    ele1 = document.getElementById(`iframe_div4_${country}`).cloneNode(false);
    ele2 = document.getElementById(`iframe_div5_${country}`).cloneNode(false);
    ele3 = document.getElementById(`iframe_div6_${country}`).cloneNode(false);
    ev.target.appendChild(ele1);
    ev.target.appendChild(ele2);
    ev.target.appendChild(ele3);
  }
  else if(cloneId==="debt_services"){
    ele1 = document.getElementById(`iframe_div7_${country}`).cloneNode(false);
    ele2 = document.getElementById(`iframe_div8_${country}`).cloneNode(false);
    ele3 = document.getElementById(`iframe_div9_${country}`).cloneNode(false);
    ele4 = document.getElementById(`iframe_div10_${country}`).cloneNode(false);
    ev.target.appendChild(ele1);
    ev.target.appendChild(ele2);
    ev.target.appendChild(ele3);
    ev.target.appendChild(ele4);
  }
  else{}
  if(newElem){
    ev.target.appendChild(newElem);
  }
}

function changeDashboard(e, page) {
  e.preventDefault();
  console.log("clicked", page);
  if (page === "predict") {
    document.getElementById("predict").style.display = "block";
    document.getElementById("draggable_playground").style.display = "none";
  } else {
    document.getElementById("predict").style.display = "none";
    document.getElementById("draggable_playground").style.display = "block";
  }
}

window.onload = function () {
  slideOne();
  slideTwo();
};



function slideOne() {
  let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 10;
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor(sliderOne,sliderTwo);
}
function slideTwo() {
  let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 10;
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor(sliderOne,sliderTwo);
}

function fillColor(sliderOne,sliderTwo) {
  let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
  percent1 = sliderOne.value * 10;
  percent2 = (sliderMaxValue - sliderTwo.value) * 10;
  // percent3 = (sliderMaxValue - sliderTwo.value) * 10;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent2}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

function onClickMenuItem(ev) {
  let newElem;
  country = document.querySelector(".form-select").value || '1';

  if (ev === "gdp") {
    document.getElementById(`iframe_div1_${country}`).src = getDataCountry(country, ev)
    newElem = document.getElementById(`iframe_div1_${country}`).cloneNode(false);
  } 
  else if (ev === "fdi_in") {
    document.getElementById(`iframe_div2_${country}`).src = getDataCountry(country, ev)
    newElem = document.getElementById(`iframe_div2_${country}`).cloneNode(false);
  } 
  else if (ev === "fdi_out") {
    document.getElementById(`iframe_div3_${country}`).src = getDataCountry(country, ev)
    newElem = document.getElementById(`iframe_div3_${country}`).cloneNode(false);
  } 
  else if (ev === "agri_gdp") {
    document.getElementById(`iframe_div4_${country}`).src = getDataCountry(country, ev)
    newElem = document.getElementById(`iframe_div4_${country}`).cloneNode(false);
  } 
  else if (ev === "credit") {
    document.getElementById(`iframe_div5_${country}`).src = getDataCountry(country, ev)
    newElem = document.getElementById(`iframe_div5_${country}`).cloneNode(false);
  } 
  else if (ev === "fert") {
    document.getElementById(`iframe_div6_${country}`).src = getDataCountry(country, ev)
    newElem = document.getElementById(`iframe_div6_${country}`).cloneNode(false);
  } 
  else if (ev === "fert_prod") {
    document.getElementById(`iframe_div7_${country}`).src = getDataCountry(country, ev)
    newElem = document.getElementById(`iframe_div7_${country}`).cloneNode(false);
  } 
  else if (ev === "reserves") {
    document.getElementById(`iframe_div8_${country}`).src = getDataCountry(country, ev)
    newElem = document.getElementById(`iframe_div8_${country}`).cloneNode(false);
  } 
  else if (ev === "gni") {
    document.getElementById(`iframe_div9_${country}`).src = getDataCountry(country, ev)
    newElem = document.getElementById(`iframe_div9_${country}`).cloneNode(false);
  } 
  else if (ev === "total_debt") {
    console.log(getDataCountry(country, ev))
    document.getElementById(`iframe_div10_${country}`).src = getDataCountry(country, ev)
    newElem = document.getElementById(`iframe_div10_${country}`).cloneNode(false);
  } 
  else if (ev === "EG_Imports_Sankey") {
    newElem = document.getElementById("EG_Wheat_Chart").cloneNode(false);
  } 
  else if (ev === "EG_Imports_Pie") {
    newElem = document.getElementById("EG_Wheat_Pie_Chart").cloneNode(false);
  } 
  else if (ev === "SA_Imports_Sankey") {
    newElem = document.getElementById("SA_Wheat_Chart").cloneNode(false);
  } 
  else if (ev === "SA_Imports_Pie") {
    newElem = document.getElementById("SA_Wheat_Pie_Chart").cloneNode(false);
  } else {
  }
  area = document.getElementsByClassName("div1")[0];
  area.innerHTML = "";
  area.appendChild(newElem);
}
