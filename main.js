
const userInput = document.getElementById('user-input');
const getAllThumbnailBtn = document.getElementById('submit-btn');

let getAllThumbnailsLinks = {};

const videoTypes = {
    "1280x720": "/maxresdefault.jpg",
    "640x480": "/sddefault.jpg",
    "480x360": "/hqdefault.jpg",
    "320x180": "/mqdefault.jpg",
    "120x90": "/default.jpg",
}

const userInputWrapper = document.getElementById('user-input-wrapper');
const mainShowCase = document.getElementById('thumbnail-showcase-container');

const mainThumbnail = document.getElementById('main-thumbnail');
const highResBtn = document.getElementById('highResBtn');
const standardResBtn = document.getElementById('standardResBtn');
const hdResBtn = document.getElementById('hdResBtn');
const mediumResBtn = document.getElementById('mediumResBtn');
const defaultResBtn = document.getElementById('defaultResBtn');

const highResBtn2 = document.getElementById('highResBtn2');
const standardResBtn2 = document.getElementById('standardResBtn2');
const hdResBtn2 = document.getElementById('hdResBtn2');
const mediumResBtn2 = document.getElementById('mediumResBtn2');
const defaultResBtn2 = document.getElementById('defaultResBtn2');

const highResPreviewWrapper = document.getElementById('highResPreviewWrapper');
const standardResPreviewWrapper = document.getElementById('standardResPreviewWrapper');
const hdResPreviewWrapper = document.getElementById('hdResPreviewWrapper');
const mediumResPreviewWrapper = document.getElementById('mediumResPreviewWrapper');
const defaultResPreviewWrapper = document.getElementById('defaultResPreviewWrapper');

const highResImg = document.getElementById('highResImg');
const standardResImg = document.getElementById('standardResImg');
const hdResImg = document.getElementById('hdResImg');
const mediumResImg = document.getElementById('mediumResImg');
const defaultResImg = document.getElementById('defaultResImg');

getAllThumbnailBtn.addEventListener('click', () => {

    resetEveryThing();
    const mainURL = userInput.value;

    if (mainURL == null) {
        //show error
    }
    VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    let urlResult = mainURL.match(VID_REGEX);
    video = (urlResult === null) ? mainURL : urlResult[1];

    for (const key in videoTypes) {
        if (videoTypes.hasOwnProperty(key)) {
            const link = 'https://i.ytimg.com/vi/' + video + videoTypes[key];
            getAllThumbnailsLinks[key] = { link: link, id: video };
        }
    }

    userInputWrapper.classList.add('move-up');
    setTimeout(() => {
        setThumbnail();
        setHighResBtn(getAllThumbnailsLinks['1280x720'].link);
        setStandardResBtn(getAllThumbnailsLinks['640x480'].link);
        setHdResBtn(getAllThumbnailsLinks['480x360'].link);
        setMediumResBtn(getAllThumbnailsLinks['320x180'].link);
        setDefaultResBtn(getAllThumbnailsLinks['120x90'].link);

        mainShowCase.classList.remove('hidden');
    }, 1000);





})


function setThumbnail() {
    mainThumbnail.setAttribute('src', getAllThumbnailsLinks['480x360'].link);
}

function setHighResBtn(url) {
    var img = new Image();
    img.onload = function () {
        if (this.width == 1280 && this.height == 720) {
            highResBtn.setAttribute('data-href', url);
            highResBtn.setAttribute('download', getAllThumbnailsLinks['1280x720'].id + "-1280x720");

            highResImg.setAttribute('src', url);



            highResBtn2.setAttribute('data-href', url);
            highResBtn2.setAttribute('download', getAllThumbnailsLinks['1280x720'].id + "-1280x720");
        } else {
            highResBtn.classList.add('not-available');
            highResBtn.innerText = highResBtn.getAttribute('default-attr') + " not available";

            highResPreviewWrapper.classList.add('hidden');

            highResBtn2.classList.add('not-available');
            highResBtn2.innerText = highResBtn2.getAttribute('default-attr') + " not available";
        }
    };
    img.src = url;
}

function setStandardResBtn(url) {
    var img = new Image();
    img.onload = function () {
        if (this.width == 640 && this.height == 480) {
            standardResBtn.setAttribute('data-href', getAllThumbnailsLinks['640x480'].link);
            standardResBtn.setAttribute('download', getAllThumbnailsLinks['640x480'].id + "-640x480");

            standardResImg.setAttribute('src', url);

            standardResBtn2.setAttribute('data-href', getAllThumbnailsLinks['640x480'].link);
            standardResBtn2.setAttribute('download', getAllThumbnailsLinks['640x480'].id + "-640x480");
        } else {
            standardResBtn.classList.add('not-available');
            standardResBtn.innerText = standardResBtn.getAttribute('default-attr') + " not available";

            standardResPreviewWrapper.classList.add('hidden');

            standardResBtn2.classList.add('not-available');
            standardResBtn2.innerText = standardResBtn2.getAttribute('default-attr') + " not available";
        }
    };
    img.src = url;
}

function setHdResBtn(url) {
    var img = new Image();
    img.onload = function () {
        if (this.width == 480 && this.height == 360) {
            hdResBtn.setAttribute('data-href', getAllThumbnailsLinks['480x360'].link);
            hdResBtn.setAttribute('download', getAllThumbnailsLinks['480x360'].id + "-480x360");

            hdResImg.setAttribute('src', url);

            hdResBtn2.setAttribute('data-href', getAllThumbnailsLinks['480x360'].link);
            hdResBtn2.setAttribute('download', getAllThumbnailsLinks['480x360'].id + "-480x360");
        } else {
            hdResBtn.classList.add('not-available');
            hdResBtn.innerText = hdResBtn.getAttribute('default-attr') + " not available";

            hdResPreviewWrapper.classList.add('hidden');

            hdResBtn2.classList.add('not-available');
            hdResBtn2.innerText = hdResBtn2.getAttribute('default-attr') + " not available";
        }
    };
    img.src = url;
}

function setMediumResBtn(url) {
    var img = new Image();
    img.onload = function () {
        if (this.width == 320 && this.height == 180) {
            mediumResBtn.setAttribute('data-href', getAllThumbnailsLinks['320x180'].link);
            mediumResBtn.setAttribute('download', getAllThumbnailsLinks['320x180'].id + "-320x180");

            mediumResImg.setAttribute('src', url);

            mediumResBtn2.setAttribute('data-href', getAllThumbnailsLinks['320x180'].link);
            mediumResBtn2.setAttribute('download', getAllThumbnailsLinks['320x180'].id + "-320x180");
        } else {
            mediumResBtn.classList.add('not-available');
            mediumResBtn.innerText = mediumResBtn.getAttribute('default-attr') + " not available";

            mediumResPreviewWrapper.classList.add('hidden');

            mediumResBtn2.classList.add('not-available');
            mediumResBtn2.innerText = mediumResBtn2.getAttribute('default-attr') + " not available";
        }
    };
    img.src = url;
}

function setDefaultResBtn(url) {
    var img = new Image();
    img.onload = function () {
        if (this.width == 120 && this.height == 90) {
            defaultResBtn.setAttribute('data-href', getAllThumbnailsLinks['120x90'].link);
            defaultResBtn.setAttribute('download', getAllThumbnailsLinks['120x90'].id + "-120x90");

            defaultResImg.setAttribute('src', url);

            defaultResBtn2.setAttribute('data-href', getAllThumbnailsLinks['120x90'].link);
            defaultResBtn2.setAttribute('download', getAllThumbnailsLinks['120x90'].id + "-120x90");
        } else {
            defaultResBtn.classList.add('not-available');
            defaultResBtn.innerText = defaultResBtn.getAttribute('default-attr') + " not available";

            defaultResPreviewWrapper.classList.add('hidden');

            defaultResBtn2.classList.add('not-available');
            defaultResBtn2.innerText = defaultResBtn2.getAttribute('default-attr') + " not available";
        }
    };
    img.src = url;
}

function resetEveryThing() {
    getAllThumbnailsLinks = {};
    highResBtn.innerText = highResBtn.getAttribute('default-attr');
    standardResBtn.innerText = standardResBtn.getAttribute('default-attr');
    hdResBtn.innerText = hdResBtn.getAttribute('default-attr');
    mediumResBtn.innerText = mediumResBtn.getAttribute('default-attr');
    defaultResBtn.innerText = defaultResBtn.getAttribute('default-attr');

    highResBtn.classList.remove('not-available');
    standardResBtn.classList.remove('not-available');
    hdResBtn.classList.remove('not-available');
    mediumResBtn.classList.remove('not-available');
    defaultResBtn.classList.remove('not-available');

    highResBtn2.innerText = highResBtn2.getAttribute('default-attr');
    standardResBtn2.innerText = standardResBtn2.getAttribute('default-attr');
    hdResBtn2.innerText = hdResBtn2.getAttribute('default-attr');
    mediumResBtn2.innerText = mediumResBtn2.getAttribute('default-attr');
    defaultResBtn2.innerText = defaultResBtn2.getAttribute('default-attr');

    highResBtn2.classList.remove('not-available');
    standardResBtn2.classList.remove('not-available');
    hdResBtn2.classList.remove('not-available');
    mediumResBtn2.classList.remove('not-available');
    defaultResBtn2.classList.remove('not-available');

    highResPreviewWrapper.classList.remove('hidden');
    standardResPreviewWrapper.classList.remove('hidden');
    hdResPreviewWrapper.classList.remove('hidden');
    mediumResPreviewWrapper.classList.remove('hidden');
    defaultResPreviewWrapper.classList.remove('hidden');
}

function forceDownload(link) {
    if (!link.classList.contains('not-available')) {
        var url = link.getAttribute("data-href");
        var fileName = link.getAttribute("download");
        link.innerText = "Working...";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://corsfixed.herokuapp.com/" + url, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(this.response);
            var tag = document.createElement('a');
            tag.href = imageUrl;
            tag.download = fileName;
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
            link.innerText = "Download Complete";
            setTimeout(() => {
                link.innerText = link.getAttribute('default-attr');
            }, 1000);
        }
        xhr.send();
    }
}
