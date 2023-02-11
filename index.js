function checkBrowser ()  {
     
    let userAgentString = navigator.userAgent;
    
    let chromeAgent = userAgentString.indexOf("Chrome") > -1;

    let IExplorerAgent = userAgentString.indexOf("MSIE") > -1 ||
    userAgentString.indexOf("rv:") > -1;

    let firefoxAgent = userAgentString.indexOf("Firefox") > -1;

    let safariAgent = userAgentString.indexOf("Safari") > -1;

    if((chromeAgent) && (safariAgent))
    safariAgent = false;


    let operaAgent = userAgentString.indexOf("OP") > -1;

    if((chromeAgent)&& (operaAgent))
    chromeAgent = false;

    document.querySelector(".output-safari").textContent = safariAgent;
    document.querySelector(".output-chrome").textContent = chromeAgent;
    document.querySelector("output-ie").textContent = IExplorerAgent;
    document.querySelector(".output-opera").textContent = operaAgent;
    document.querySelector("output-firefox ").textContent = firefoxAgent;

}