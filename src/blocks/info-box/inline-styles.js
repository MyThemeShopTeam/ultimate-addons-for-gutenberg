/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function InfoBoxStyle( props ) {
	const {
		headingAlign,
		headingColor,
		subHeadingColor,
		prefixColor,
		prefixFontSize,
		headFontSize,
		subHeadFontSize,
		separatorWidth,
		separatorHeight,
		headSpace,
		separatorSpace,
		subHeadSpace,
		icon,
		iconColor,
		iconSize,
		iconimgPosition,
		block_id,
		iconHover,
		iconimgBorderRadius, 
		seperatorStyle,
		seperatorWidth,
		seperatorColor,
		seperatorThickness,
		seperatorSpace,
		ctaLinkColor,
		ctaFontSize,   
		ctaBtnSize,
		ctaBtnLinkColor,
		ctaBgColor,
		ctaBtnVertPadding,
		ctaBtnHrPadding,
		ctaBorderStyle,
		ctaBorderColor,
		ctaBorderWidth,
		ctaBorderRadius,
		prefixSpace,
		iconLeftMargin,
		iconRightMargin,
		iconTopMargin,
		iconBottomMargin,            
		imageSize,  
		imageWidth,		
	} = props.attributes        

	if( props.clientId ){
		var clientId = "uagb-infobox-"+props.clientId
	}else{
		var clientId = "uagb-infobox-"+block_id
	}

	var selectors = {}

	// Icon css
	selectors[".uagb-ifb-icon"] = {
		"height" : iconSize+"px",
		"width" : iconSize+"px",
		"line-height" : iconSize+"px",                    
	}

	selectors[".uagb-ifb-icon > span"] = {
		"font-size" : iconSize+"px",
		"height": iconSize+"px",
		"color": iconColor,
		"width": iconSize+"px",
		"line-height": iconSize + "px",                    
	}

	selectors[".uagb-ifb-icon:hover > span"] = {
		"color" : iconHover,                                       
	}  

	selectors[".uagb-infobox__content-wrap .uagb-ifb-imgicon-wrap"] = {
		"margin-left" : iconLeftMargin+"px",
		"margin-right" : iconRightMargin+"px",                                
		"margin-top" : iconTopMargin+"px",
		"margin-bottom" : iconBottomMargin+"px",
	} 

	// Image
	selectors[".uagb-ifb-image-content img"] = {
		"width": imageWidth+"px",
		"max-width": imageWidth+"px",
	} 
	
	selectors[".uagb-infobox .uagb-ifb-image-content img"] = {                    
		"border-radius" : iconimgBorderRadius+"px",
	}
	

	if( iconimgPosition == "above-title" ||  iconimgPosition == "below-title" ){
		selectors[".uagb-infobox__content-wrap"] = {                    
			"text-align" : headingAlign,                   
		}
	}

	// CTA style 
	selectors[".uagb-infobox-cta-link a"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaLinkColor,
	}

	selectors[".uagb-infobox-cta-link span"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaLinkColor,
	}

	selectors[".uagb-ifb-button-wrapper .uagb-infobox-cta-link span"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaBtnLinkColor,
	}

	selectors[".uagb-ifb-button-wrapper .uagb-infobox-cta-link"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaBtnLinkColor,
		"background-color": ctaBgColor,
		"border-style": ctaBorderStyle,
		"border-color": ctaBorderColor,
		"border-radius": ctaBorderRadius + "px",
		"border-width": ctaBorderWidth + "px",
		"padding-top": ctaBtnVertPadding + "px",
		"padding-bottom": ctaBtnVertPadding + "px",
		"padding-left": ctaBtnHrPadding + "px",		
		"padding-right": ctaBtnHrPadding + "px",
	}

	// Prefix Style
	selectors[".editor-rich-text .uagb-ifb-title-prefix"] = {
		"font-size" : prefixFontSize+"px",
		"color": prefixColor,
		"margin-bottom": prefixSpace+"px",
	}

	// Title Style
	selectors[".editor-rich-text .uagb-ifb-title"] = {
		"font-size" : headFontSize+"px",
		"color": headingColor,
		"margin-bottom": headSpace+"px",
	}

	// Description Style
	selectors[".editor-rich-text .uagb-ifb-desc"] = {
		"font-size" : subHeadFontSize+"px",
		"color": subHeadingColor,
		"margin-bottom": subHeadSpace+"px",
	}

	// Seperator
	selectors[".uagb-ifb-separator"] = {
		"width" : seperatorWidth+"%",
		"border-top-width" : seperatorThickness+"px",
		"border-top-color": seperatorColor,
		"border-top-style": seperatorStyle,
	}	
	selectors[".uagb-ifb-separator-parent"] = {		
		"margin-bottom":seperatorSpace+"px"
	}	

	selectors[".uagb-ifb-content"] = {
		"padding": ( typeof blockPadding != "undefined" ) ? blockPadding+"px": "inherit"
	}           

	var styling_css = ""

	for( var i in selectors ) {
           
		styling_css += " .gutenberg-editor-page #wpwrap #"+clientId+" "+i + " { "
            
            
		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}
	
	return styling_css

}

export default InfoBoxStyle
