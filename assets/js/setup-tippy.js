window.setupTippy = function () {

    var defaultTippyConfig =  {
        delay: 0,
        arrow: true,
        arrowType: 'round',
        size: 'medium',
        duration: 500,
        animation: 'scale',
        offset: '0, 15'
    };

    var closerTippyConfig = jQuery.extend(true, {}, defaultTippyConfig);
    closerTippyConfig.offset = '0, 3';

    // Enable stylish tooltipping on .stylish-tooltip class elements
    tippy('.stylish-tooltip', defaultTippyConfig);
    tippy('.stylish-tooltip-closer', closerTippyConfig);
    
};
