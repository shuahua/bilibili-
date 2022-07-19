// ==UserScript==
// @name         哔哩哔哩播放列表加长
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       sangsang
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        GM_addStyle


// ==/UserScript==

(function() {
    'use strict';
    var style=`

   .multi-page-v1 .cur-list {
      padding: 4px 0;
      transition: all 0.3s;
      max-height: 900px;
      overflow: hidden;
    }

    .base-video-sections-v1 .video-sections-content-list[style="height:152px;"]  {
      max-height: 900px;
      border-radius: 6px;
      overflow-x: hidden;
      overflow-y: scroll;

    }

    `

     GM_addStyle(style)
     GM_addStyle('.vcd{display:none !important}')
     GM_addStyle('.video-sections-content-list{height:800px !important}')
     GM_addStyle('.video-section-list section-0{height:800px !important}')
    // Your code here...
})();