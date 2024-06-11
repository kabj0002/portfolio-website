// Moving text 1, Codepen

(function() {
    var portfolioAnimationId, parentAnimationElementWidth, startPosAnimationElement, posAnimationElement, animationElement;
    
    
    function setPortfolioElement(){
    animationElement = document.querySelector(".portfolio-text");
    parentAnimationElementWidth = animationElement.parentElement.parentElement.offsetWidth;
    startPosAnimationElement = -(animationElement.offsetWidth);
    posAnimationElement = startPosAnimationElement;
    animationElement.style.right=posAnimationElement+'px';
    }
    
    function movePortfolioElement(){
        posAnimationElement +=2;
        animationElement.style.right = posAnimationElement+'px';
        if( posAnimationElement > parentAnimationElementWidth)
        posAnimationElement=startPosAnimationElement;
        portfolioAnimationId = requestAnimationFrame(movePortfolioElement);
    }
    
    setPortfolioElement();
    movePortfolioElement();
    window.addEventListener("resize", refreshAnimation, false);
    
      var resizeTimeout;
      function refreshAnimation() {
        if ( !resizeTimeout ) {
          resizeTimeout = setTimeout(function() {
            resizeTimeout = null;
            window.cancelAnimationFrame(portfolioAnimationId);
            setPortfolioElement();
            movePortfolioElement();
           }, 100);
        }
    }
    }());

//Moving text 2, Codepen
    (function() {
      var portfolioAnimationId, parentAnimationElementWidth, startPosAnimationElement, posAnimationElement, animationElement;
      
      
      function setPortfolioElement(){
      animationElement = document.querySelector(".portfolio-text2");
      parentAnimationElementWidth = animationElement.parentElement.parentElement.offsetWidth;
      startPosAnimationElement = -(animationElement.offsetWidth);
      posAnimationElement = startPosAnimationElement;
      animationElement.style.left=posAnimationElement+'px';
      }
      
      function movePortfolioElement(){
          posAnimationElement +=2;
          animationElement.style.left = posAnimationElement+'px';
          if( posAnimationElement > parentAnimationElementWidth)
          posAnimationElement=startPosAnimationElement;
          portfolioAnimationId = requestAnimationFrame(movePortfolioElement);
      }
      
      setPortfolioElement();
      movePortfolioElement();
      window.addEventListener("resize", refreshAnimation, false);
      
        var resizeTimeout;
        function refreshAnimation() {
          if ( !resizeTimeout ) {
            resizeTimeout = setTimeout(function() {
              resizeTimeout = null;
              window.cancelAnimationFrame(portfolioAnimationId);
              setPortfolioElement();
              movePortfolioElement();
             }, 100);
          }
      }
      }());