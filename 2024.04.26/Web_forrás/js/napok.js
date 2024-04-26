function nap()
{
    let elsoNap= new Date("1961-04-12");
    let ma = new Date();
    let osszNap= Math.floor((ma - elsoNap) / (1000 * 60 * 60 * 24));
    document.getElementById("napok").innerHTML="Az első ember űrrepülése óta <b>" + osszNap + "</b> nap telt el.";
}