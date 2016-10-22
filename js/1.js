window.onload = function() {
    var oLoad = document.getElementById('loading');
    oLoad.style.display = 'none';
    var oTmenu = document.getElementById('tmenu');
    var oHead = document.getElementById('head');
    var oFmenu = document.getElementById('fmenu');
    var oAbout = document.getElementById('about');
    var oMe = document.getElementById('me');
    var aCase = document.querySelectorAll('#case li');
    var oCase = document.querySelector('#case');
    // var aSkill = document.querySelectorAll('.skill li');
    var oSkill = document.querySelector('.skill');
    var oMecon = document.querySelector('.mecon');
    var oWork = document.querySelector('.works');
    var oWidth = oAbout.offsetWidth;
    var aLieb = document.querySelectorAll('.lieb');
    var oHold = document.querySelector('#hold');
    var aNav = document.querySelectorAll('.nav');
    var aCaidan = document.querySelectorAll('.caidan');
    var oCall = document.querySelector('.call');
    var bodyH = document.body.scrollHeight;
    var oTop = document.querySelector('.top1');
    var oContact = document.querySelector('#contact');
    // console.log(bodyH);
    // var aCall = oCall.children;
    // console.log(aLieb);
    // console.log(oSkill);
    // var body = document.getElementById('body')
    oAbout.style.marginTop = oHead.offsetHeight + 'px';
    oAbout.style.height = (document.body.offsetHeight + oSkill.offsetHeight - 164) + 'px';
    // oWork.style.height = (document.body.offsetHeight + oCase.offsetHeight) + 'px';
    var top = oAbout.offsetTop;
    oSkill.style.width = (Math.floor(oWidth / 190) * 190) + 'px';
    // console.log(oWidth);
    // alert(1);
    if (oWidth < 400) {
        oCall.style.width = '170px';
    } else {
        oCall.style.width = '400px';
    }
    if (oWidth < 600) {
        for (var i = 0; i < aLieb.length; i++) {
            aCaidan[i].style.display = 'block';
            aLieb[i].style.height = (aLieb[i].children.length * 31) + 'px';
            aLieb[i].style.display = 'block';
            aNav[i].style.display = 'none';
            // aLieb[i].style.bottom = '-' + (aLieb[i].children.length * 31) + 'px';
            // oAbout.style.paddingTop = aLieb[0].children.length * 31 + 'px';
        }
        oFmenu.style.height = (aLieb[0].children.length * 31 + 50) + 'px';
        oTmenu.style.height = (aLieb[0].children.length * 31 + 50) + 'px';
        oAbout.style.height = (document.body.offsetHeight + oSkill.offsetHeight - 164 + aLieb[0].children.length * 31) + 'px';
        oWork.style.paddingBottom = '50px';
    } else {
        for (var i = 0; i < aLieb.length; i++) {
            aLieb[i].style.display = 'none';
            aNav[i].style.display = 'block';
            aCaidan[i].style.display = 'none';
        }
        oFmenu.style.height = 50 + 'px';
        oTmenu.style.height = 50 + 'px';
        oAbout.style.height = (document.body.offsetHeight + oSkill.offsetHeight - 164) + 'px';
    }
    if (oWidth > 900) {
        for (var i = 0; i < aCase.length; i++) {
            // aCase[i].className = '';
            aCase[i].style.width = (oWidth / 6) - 0.1 + 'px';
        }
    } else if (oWidth > 700) {
        for (var i = 0; i < aCase.length; i++) {
            // aCase[i].className = '';
            aCase[i].style.width = (oWidth / 4) - 0.1 + 'px';
            // 'calc(100 % / 4)';
        }
    } else if (oWidth > 450) {
        for (var i = 0; i < aCase.length; i++) {
            // aCase[i].className = '';
            // console.log(aCase);
            aCase[i].style.width = (oWidth / 3) - 0.1 + 'px';
            // 'calc(100 % / 3)';
        }
    } else {
        for (var i = 0; i < aCase.length; i++) {
            // aCase[i].className = '';
            aCase[i].style.width = (oWidth / 2) - 0.1 + 'px';
            //  'calc(100 % / 2)';
        }
    }
    var caseH = aCase[0].offsetWidth;
    for (var i = 0; i < aCase.length; i++) {
        // aCase[i].className = '';
        aCase[i].style.height = caseH + 'px';
    }
    // oMe.style.height = (top - 50) + 'px';
    // gunlun
    // addWheel(obj, fn);
    window.onresize = function() {
        oWidth = oAbout.offsetWidth;
        // var oSwidth = oSkill.offsetWidth;
        // oWork.style.height = (document.body.offsetHeight + oCase.offsetHeight) + 'px';
        oSkill.style.width = (Math.floor(oWidth / 190) * 190) + 'px';
        oAbout.style.height = (document.body.offsetHeight + oSkill.offsetHeight - 164) + 'px';
        oMecon.style.marginTop = (0 - oMecon.offsetHeight / 2) + 'px';
        oMe.style.marginTop = (oMecon.offsetHeight / 2) + 'px';
        if (oWidth < 400) {
            oCall.style.width = '170px';
        } else {
            oCall.style.width = '400px';
        }
        if (oWidth > 900) {
            for (var i = 0; i < aCase.length; i++) {
                aCase[i].style.width = (oWidth / 6) - 0.1 + 'px';
            }
        } else if (oWidth > 700) {
            for (var i = 0; i < aCase.length; i++) {
                aCase[i].style.width = (oWidth / 4) - 0.1 + 'px';
            }
        } else if (oWidth > 450) {
            for (var i = 0; i < aCase.length; i++) {
                aCase[i].style.width = (oWidth / 3) - 0.1 + 'px';
            }
        } else {
            for (var i = 0; i < aCase.length; i++) {
                aCase[i].style.width = (oWidth / 2) - 0.1 + 'px';
            }
        }
        caseH = aCase[0].offsetWidth;
        for (var i = 0; i < aCase.length; i++) {
            aCase[i].style.height = caseH + 'px';
        }
        // oWork.style.height = (document.body.offsetHeight + oCase.offsetHeight) + 'px';
        // console.log(oCase)
        // console.log(oCase.offsetHeight);
        // if (oWidth < 600) {
        //     for (var i = 0; i < aLieb.length; i++) {
        //         aLieb[i].style.height = (aLieb[i].children.length * 31) + 'px';
        //         aLieb[i].style.bottom = '-' + (aLieb[i].children.length * 31) + 'px';
        //         oAbout.style.paddingTop = aLieb[0].children.length * 31 + 'px';
        //     }
        // }
        if (oWidth < 600) {
            for (var i = 0; i < aLieb.length; i++) {
                aLieb[i].style.height = (aLieb[i].children.length * 31) + 'px';
                aLieb[i].style.display = 'block';
                aNav[i].style.display = 'none';
                aCaidan[i].style.display = 'block';
                // aLieb[i].style.bottom = '-' + (aLieb[i].children.length * 31) + 'px';
                // oAbout.style.paddingTop = aLieb[0].children.length * 31 + 'px';

            }
            oFmenu.style.height = (aLieb[0].children.length * 31 + 50) + 'px';
            oTmenu.style.height = (aLieb[0].children.length * 31 + 50) + 'px';
            oAbout.style.height = (document.body.offsetHeight + oSkill.offsetHeight - 164 + aLieb[0].children.length * 31) + 'px';
            oWork.style.paddingBottom = '50px';
        } else {
            for (var i = 0; i < aLieb.length; i++) {
                aLieb[i].style.display = 'none';
                aNav[i].style.display = 'block';
                aCaidan[i].style.display = 'none';
            }
            oFmenu.style.height = 50 + 'px';
            oTmenu.style.height = 50 + 'px';
            oAbout.style.height = (document.body.offsetHeight + oSkill.offsetHeight - 164) + 'px';
        }

    };

    window.onscroll = function() {

        // top = oAbout.offsetTop;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(scrollTop);
        // console.log(top);
        // oHead.style.height = document.documentElement.clientHeight - scrollTop + 'px'
        // oHead.style.marginTop = scrollTop + 'px'
        // oAbout.style.marginTop = (top - scrollTop) + 'px'
        if (scrollTop >= top) {
            oHead.style.display = 'none';
            oTmenu.style.position = 'fixed';
            oTmenu.style.top = '0';
            oTmenu.style.left = '0';
            oTmenu.style.display = 'block';
            oTmenu.style.zIndex = '999';
            // oFmenu.style.display = 'none';
        } else {
            if (scrollTop < top) {
                oHead.style.display = 'block';
                oTmenu.style.display = 'none';
                // oFmenu.style.display = 'block';
            }
        }
        // document.body.scrollTop + document.body.clientHeight + 75
        // document.body.scrollHeight
        if ((document.body.scrollTop + document.body.clientHeight) < (oContact.offsetTop + oContact.offsetHeight)) {
            oTop.style.bottom = '5px';
        } else {
            oTop.style.bottom = '70px';
        }

    };
};