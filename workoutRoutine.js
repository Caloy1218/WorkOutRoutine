let pushDay = document.querySelector("#pushDay");
let pullDay = document.querySelector("#pullDay");
let legDay = document.querySelector("#legDay");
let homeIcon = document.querySelector("#homeIcon");
let pushDayContainer = document.querySelector("#pushDay-container");
let pullDayContainer = document.querySelector("#pullDay-container");

let pushDayDisplayBlock = () => $("#pushDay").css("display", "block");
let pullDayDisplayBlock = () => $("#pullDay").css("display", "block");
let legDayDisplayBlock = () => $("#legDay").css("display", "block");
let pushDayDisplayNone = () => $("#pushDay").css("display", "none");
let pullDayDisplayNone = () => $("#pullDay").css("display", "none");
let legDayDisplayNone = () => $("#legDay").css("display", "none");

let pushDayContainerDisplayBlock = () =>
  $("#pushDay-container").css("display", "block");
let pushDayContainerDisplayNone = () =>
  $("#pushDay-container").css("display", "none");

let pullDayContainerDisplayBlock = () =>
  $("#pushDay-container").css("display", "block");
let pullDayContainerDisplayNone = () =>
  $("#pullDay-container").css("display", "none");

let legDayContainerDisplayBlock = () =>
  $("#pushDay-container").css("display", "block");
let legDayContainerDisplayNone = () =>
  $("#legDay-container").css("display", "none");

homeIcon.addEventListener("click", () => {
  pushDayDisplayBlock();
  pullDayDisplayBlock();
  legDayDisplayBlock();
  pushDayContainerDisplayNone();
  pullDayContainerDisplayNone();
  legDayContainerDisplayNone();
  $(".flatBBP-container").css("display", "none");
  $(".inclinedDBP-container").css("display", "none");
  $(".peckDeck-container").css("display", "none");
  $(".dbAlternate-container").css("display", "none");
  $(".bwDips-container").css("display", "none");
  $(".cableCrossOver-container").css("display", "none");
  $(".alternateTricep-container").css("display", "none");
  $(".cableRopePullDown-container").css("display", "none");
});

pushDay.addEventListener("click", () => {
  pushDayDisplayNone();
  pullDayDisplayNone();
  legDayDisplayNone();
  pushDayContainerDisplayBlock();
});

pullDay.addEventListener("click", () => {
  pushDayDisplayNone();
  pullDayDisplayNone();
  legDayDisplayNone();
  pullDayContainerDisplayBlock();
});
legDay.addEventListener("click", () => {
  pushDayDisplayNone();
  pullDayDisplayNone();
  legDayDisplayNone();
  legDayContainerDisplayBlock();
});

let flatBBP = document.querySelector("#flatBBP");
let inclindDBP = document.querySelector("#inclindDBP");
let peckDeck = document.querySelector("#peckDeck");
let dbAlternate = document.querySelector("#dbAlternate");
let bWeightDips = document.querySelector("#bWeightDips");
let cableCrossOver = document.querySelector("#cableCrossOver");
let overheadDBX = document.querySelector("#overheadDBX");
let cableRopeTricepEx = document.querySelector("#cableRopeTricepEx");
let backIconPushDay = document.querySelector(".backIcon-Pushday");
let backIconPushDayBlock = () =>
  $(".backIcon-Pushday").css("visibility", "visible");
let backIconPushDayNone = () =>
  $(".backIcon-Pushday").css("visibility", "hidden");

flatBBP.addEventListener("click", () => {
  pushDayContainerDisplayNone();
  $(".pushday-exercise").css("display", "block");
  $(".flatBBP-container").css("display", "block");
  backIconPushDayBlock();
});

inclindDBP.addEventListener("click", () => {
  pushDayContainerDisplayNone();
  $(".pushday-exercise").css("display", "block");
  $(".inclinedDBP-container").css("display", "block");
  backIconPushDayBlock();
});
peckDeck.addEventListener("click", () => {
  pushDayContainerDisplayNone();
  $(".pushday-exercise").css("display", "block");
  $(".peckDeck-container").css("display", "block");
  backIconPushDayBlock();
});

dbAlternate.addEventListener("click", () => {
  pushDayContainerDisplayNone();
  $(".pushday-exercise").css("display", "block");
  $(".dbAlternate-container").css("display", "block");
  backIconPushDayBlock();
});
bWeightDips.addEventListener("click", () => {
  pushDayContainerDisplayNone();
  $(".pushday-exercise").css("display", "block");
  $(".bwDips-container").css("display", "block");
  backIconPushDayBlock();
});
cableCrossOver.addEventListener("click", () => {
  pushDayContainerDisplayNone();
  $(".pushday-exercise").css("display", "block");
  $(".cableCrossOver-container").css("display", "block");
  backIconPushDayBlock();
});
overheadDBX.addEventListener("click", () => {
  pushDayContainerDisplayNone();
  $(".pushday-exercise").css("display", "block");
  $(".alternateTricep-container").css("display", "block");
  backIconPushDayBlock();
});
cableRopeTricepEx.addEventListener("click", () => {
  pushDayContainerDisplayNone();
  $(".pushday-exercise").css("display", "block");
  $(".cableRopePullDown-container").css("display", "block");
  backIconPushDayBlock();
});
backIconPushDay.addEventListener("click", () => {
  pushDayContainerDisplayBlock();
  $(".flatBBP-container").css("display", "none");
  $(".inclinedDBP-container").css("display", "none");
  $(".peckDeck-container").css("display", "none");
  $(".dbAlternate-container").css("display", "none");
  $(".bwDips-container").css("display", "none");
  $(".cableCrossOver-container").css("display", "none");
  $(".alternateTricep-container").css("display", "none");
  $(".cableRopePullDown-container").css("display", "none");
  $(".pushday-exercise").css("display", "none");

  backIconPushDayNone();
});
// $("#pushDay").css("display", "block");
// $("#pullDay").css("display", "block");
// $("#legDay").css("display", "block");
// $("#pushDay-container").css("display", "none");
// $("#pullDay-container").css("display", "none");
// $("#legDay-container").css("display", "none");
