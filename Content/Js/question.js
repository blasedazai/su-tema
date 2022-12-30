var Filter = {
  Elements: {
    forTrue: document.getElementById("answer-yes"),
    forFalse: document.getElementById("answer-no"),
    nextButton: document.getElementById("next-button"),
    lastButton: document.getElementById("last-button"),
    printResult: document.getElementById("print-result"),
    onclickDelete: document.getElementById("onclick-delete"),
    imgArea: document.getElementById("img-area"),
    puan: document.getElementById("puan"),
    
  },
  Status: {
    trueValue:[],
    falseValue:[],
    Puan:0,
  },
  Actions: {
    //Sayfa ilk açıldığında istenilen fonksiyonları çalıştrıacak
    init: () => {
    },
    nextPage: () => {
      var forTrue = Filter.Elements.forTrue;
      if (forTrue.checked) {
        localStorage.setItem("question" + question, "true");
      } else {
        localStorage.setItem("question" + question, "false");
      }
      window.location.href = "/question" + (question + 1) + ".html";
    },
    lastPage: () => {
      window.location.href = "/question" + (question - 1) + ".html";
    },
    switchResultsPage: () => {
        var forTrue = Filter.Elements.forTrue;
        if (forTrue.checked) {
          localStorage.setItem("question" + question, "true");
        } else {
          localStorage.setItem("question" + question, "false");
        }
        window.location.href = "/result.html";
    },
    finishTest: () => {
      for(let i=1; i<=5; i++){
        var answer = localStorage.getItem("question"+i);
          if (answer === "true") {
            Filter.Status.trueValue.push(answer)
            Filter.Status.Puan+=10
          } else if (answer === "false") {
            Filter.Status.falseValue.push(answer)
          }
      }
      Filter.Actions.appendToHtml();
    },
    appendToHtml:()=>{
      var lenghtTrue=Filter.Status.trueValue.length;
      var lenghtFalse=Filter.Status.falseValue.length;
      var printResult=Filter.Elements.printResult;
      var Puan=Filter.Status.Puan;
      var puan=Filter.Elements.puan;
      var img=document.createElement("img");
      img.setAttribute("src","Content/images/resultPage2.png")
      Filter.Elements.imgArea.appendChild(img)
      printResult.innerText= 5+" "+"sorudan"+" "+ lenghtTrue+" "+"tanesine evet,"+" "+lenghtFalse+" "+"tanesine hayır cevabını verdiniz.";
      puan.innerText= "Puanınız:"+" "+Puan;
      Filter.Actions.deleteLastValue();
    },
    deleteLastValue:()=>{
      Filter.Elements.onclickDelete.style.display="none";
    },
  },
};

Filter.Actions.init();
