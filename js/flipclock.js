

$("#number-input-score").bind("DOMSubtreeModified", function() {
  var score = $(this).text().padStart(4, "0");
  updateNumbers(score[0], score[1], score[2], score[3]);
});

function updateNumbers(thousands, hundreds, tens, ones) {
  var currentThousands = Number($(".number:eq(0)").attr("data-number"));
  var currentHundreds = Number($(".number:eq(1)").attr("data-number"));
  var currentTens = Number($(".number:eq(2)").attr("data-number"));
  var currentOnes = Number($(".number:eq(3)").attr("data-number"));
  
  if (currentThousands !== thousands) {
    doFlip(0, thousands);
  }
  if (currentHundreds !== hundreds) {
    doFlip(1, hundreds);
  }
  if (currentTens !== tens) {
    doFlip(2, tens);
  }
  if (currentOnes !== ones) {
    doFlip(3, ones);
  }
}

function doFlip(numberIndex, targetNumber) {
  var currentNumberElement = $(".number:eq(" + numberIndex + ")");
  var currentNumber = Number(currentNumberElement.attr("data-number"));
  
  var count = targetNumber - currentNumber;
  if (count < 0) {
    count += 10;
  }
  
  currentNumberElement.find(".primary").attr("title", targetNumber);
  currentNumberElement.find(".secondary").attr("title", targetNumber);
  
  currentNumberElement.addClass("flip");
  setTimeout(function() {
    currentNumberElement.attr("data-number", targetNumber);
    currentNumberElement.removeClass("flip");
  }, 500 + count * 100);
}






$("#number-input-goal").bind("DOMSubtreeModified", function() {
  var score = $(this).text().padStart(3, "0");
  updateNumbers1(score[0], score[1], score[2]);
});

function updateNumbers1(hundreds, tens, ones) {
  var currentHundreds = Number($(".number1:eq(0)").attr("data-number"));
  var currentTens = Number($(".number1:eq(1)").attr("data-number"));
  var currentOnes = Number($(".number1:eq(2)").attr("data-number"));
  
  if (currentHundreds !== hundreds) {
    doFlip1(0, hundreds);
  }
  if (currentTens !== tens) {
    doFlip1(1, tens);
  }
  if (currentOnes !== ones) {
    doFlip1(2, ones);
  }
}

function doFlip1(numberIndex, targetNumber) {
  var currentNumberElement = $(".number1:eq(" + numberIndex + ")");
  var currentNumber = Number(currentNumberElement.attr("data-number"));
  
  var count = targetNumber - currentNumber;
  if (count < 0) {
    count += 10;
  }
  
  currentNumberElement.find(".primary1").attr("title", targetNumber);
  currentNumberElement.find(".secondary1").attr("title", targetNumber);
  
  currentNumberElement.addClass("flip");
  setTimeout(function() {
    currentNumberElement.attr("data-number", targetNumber);
    currentNumberElement.removeClass("flip");
  }, 500 + count * 100);
}








$("#number-input-shots").bind("DOMSubtreeModified", function() {
  var score = $(this).text().padStart(3, "0");
  updateNumbers2(score[0], score[1], score[2]);
});

function updateNumbers2(hundreds, tens, ones) {
  var currentHundreds = Number($(".number2:eq(0)").attr("data-number"));
  var currentTens = Number($(".number2:eq(1)").attr("data-number"));
  var currentOnes = Number($(".number2:eq(2)").attr("data-number"));
  
  if (currentHundreds !== hundreds) {
    doFlip2(0, hundreds);
  }
  if (currentTens !== tens) {
    doFlip2(1, tens);
  }
  if (currentOnes !== ones) {
    doFlip2(2, ones);
  }
}

function doFlip2(numberIndex, targetNumber) {
  var currentNumberElement = $(".number2:eq(" + numberIndex + ")");
  var currentNumber = Number(currentNumberElement.attr("data-number"));
  
  var count = targetNumber - currentNumber;
  if (count < 0) {
    count += 10;
  }
  
  currentNumberElement.find(".primary2").attr("title", targetNumber);
  currentNumberElement.find(".secondary2").attr("title", targetNumber);
  
  currentNumberElement.addClass("flip");
  setTimeout(function() {
    currentNumberElement.attr("data-number", targetNumber);
    currentNumberElement.removeClass("flip");
  }, 500 + count * 100);
}








$("#number-input-assist").bind("DOMSubtreeModified", function() {
  var score = $(this).text().padStart(3, "0");
  updateNumbers3(score[0], score[1], score[2]);
});

function updateNumbers3(hundreds, tens, ones) {
  var currentHundreds = Number($(".number3:eq(0)").attr("data-number"));
  var currentTens = Number($(".number3:eq(1)").attr("data-number"));
  var currentOnes = Number($(".number3:eq(2)").attr("data-number"));
  
  if (currentHundreds !== hundreds) {
    doFlip3(0, hundreds);
  }
  if (currentTens !== tens) {
    doFlip3(1, tens);
  }
  if (currentOnes !== ones) {
    doFlip3(2, ones);
  }
}

function doFlip3(numberIndex, targetNumber) {
  var currentNumberElement = $(".number3:eq(" + numberIndex + ")");
  var currentNumber = Number(currentNumberElement.attr("data-number"));
  
  var count = targetNumber - currentNumber;
  if (count < 0) {
    count += 10;
  }
  
  currentNumberElement.find(".primary3").attr("title", targetNumber);
  currentNumberElement.find(".secondary3").attr("title", targetNumber);
  
  currentNumberElement.addClass("flip");
  setTimeout(function() {
    currentNumberElement.attr("data-number", targetNumber);
    currentNumberElement.removeClass("flip");
  }, 500 + count * 100);
}










$("#number-input-saves").bind("DOMSubtreeModified", function() {
  var score = $(this).text().padStart(3, "0");
  updateNumbers4(score[0], score[1], score[2]);
});

function updateNumbers4(hundreds, tens, ones) {
  var currentHundreds = Number($(".number4:eq(0)").attr("data-number"));
  var currentTens = Number($(".number4:eq(1)").attr("data-number"));
  var currentOnes = Number($(".number4:eq(2)").attr("data-number"));
  
  if (currentHundreds !== hundreds) {
    doFlip3(0, hundreds);
  }
  if (currentTens !== tens) {
    doFlip3(1, tens);
  }
  if (currentOnes !== ones) {
    doFlip3(2, ones);
  }
}

function doFlip4(numberIndex, targetNumber) {
  var currentNumberElement = $(".number4:eq(" + numberIndex + ")");
  var currentNumber = Number(currentNumberElement.attr("data-number"));
  
  var count = targetNumber - currentNumber;
  if (count < 0) {
    count += 10;
  }
  
  currentNumberElement.find(".primary4").attr("title", targetNumber);
  currentNumberElement.find(".secondary4").attr("title", targetNumber);
  
  currentNumberElement.addClass("flip");
  setTimeout(function() {
    currentNumberElement.attr("data-number", targetNumber);
    currentNumberElement.removeClass("flip");
  }, 500 + count * 100);
}

