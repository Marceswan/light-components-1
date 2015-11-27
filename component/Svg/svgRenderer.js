({
    // Your renderer method overrides go here
    /*
	 * As part of component creating, the Lightning Components
	 * framework calls the render function to get DOM elements for 
	 * the component being created. You call this function before it 
	 * renders the component. So we can override the render function 
	 * to create an SVG element with all the attributes and then 
	 * simply return it as the DOM element for our component!
	 */
    render: function(component, helper) {
        //grab attributes from the component markup
        var classname = component.get("v.class");
        var xlinkhref = component.get("v.xlinkHref");
        var ariaHidden = component.get("v.ariaHidden");
        
        //return an svg element w/ the attributes
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('class', classname);
        svg.setAttribute('aria-hidden', ariaHidden);
        svg.innerHTML = '<use xlink:href="'+xlinkhref+'"></use>';
        return svg;
    }
    
})